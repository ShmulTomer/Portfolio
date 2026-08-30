import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BONES, JOINT_NAMES, JOINT_RADIUS, POSES } from "../lib/skeleton";
import { scroll } from "../lib/scroll";
import {
  PITCH_TRACK,
  POSE_TRACK,
  altitude,
  canopyScale,
  drift,
  sample,
  sampleNumber,
  seg,
} from "../lib/timeline";

const UP = new THREE.Vector3(0, 1, 0);
const va = new THREE.Vector3();
const vb = new THREE.Vector3();
const dir = new THREE.Vector3();
const mid = new THREE.Vector3();

// Joints that flutter in the airstream during freefall.
const FLUTTER = { handL: 1, handR: 1, footL: 0.8, footR: 0.8, kneeL: 0.4, kneeR: 0.4 };

function useCanopyLines() {
  return useMemo(() => {
    const points = [];
    const riserL = new THREE.Vector3(-0.32, 1.62, 0);
    const riserR = new THREE.Vector3(0.32, 1.62, 0);
    for (let i = 0; i < 10; i++) {
      const u = i / 9 - 0.5;
      const side = i < 5 ? riserL : riserR;
      points.push(new THREE.Vector3(u * 4.4, 3.28, ((i % 5) - 2) * 0.42));
      points.push(side);
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);
}

export default function Skydiver() {
  const root = useRef();
  const body = useRef();
  const canopy = useRef();
  const jointRefs = useRef([]);
  const boneRefs = useRef([]);
  const pose = useMemo(() => new Float32Array(JOINT_NAMES.length * 3), []);
  const lineGeo = useCanopyLines();

  useFrame((state) => {
    const p = scroll.p;
    const time = state.clock.elapsedTime;

    const { a, b, t } = sample(POSE_TRACK, p);
    const A = POSES[a];
    const B = POSES[b];
    for (let i = 0; i < pose.length; i++) pose[i] = A[i] + (B[i] - A[i]) * t;

    const wind = seg(p, 0.16, 0.24) * (1 - seg(p, 0.42, 0.5));
    JOINT_NAMES.forEach((name, i) => {
      const amp = FLUTTER[name];
      if (amp) {
        const phase = time * 9 + i * 1.7;
        pose[i * 3] += Math.sin(phase) * 0.035 * amp * wind;
        pose[i * 3 + 1] += Math.cos(phase * 1.3) * 0.03 * amp * wind;
      }
      const joint = jointRefs.current[i];
      if (joint) joint.position.set(pose[i * 3], pose[i * 3 + 1], pose[i * 3 + 2]);
    });

    for (let i = 0; i < BONES.length; i++) {
      const bone = boneRefs.current[i];
      if (!bone) continue;
      const [ia, ib] = BONES[i];
      va.fromArray(pose, ia * 3);
      vb.fromArray(pose, ib * 3);
      dir.subVectors(vb, va);
      const length = dir.length() || 0.0001;
      mid.addVectors(va, vb).multiplyScalar(0.5);
      bone.position.copy(mid);
      bone.quaternion.setFromUnitVectors(UP, dir.divideScalar(length));
      bone.scale.set(1, length, 1);
    }

    root.current.position.set(drift(p), altitude(p), 0);
    root.current.rotation.y = Math.sin(p * 7.5) * 0.4 * (1 - seg(p, 0.55, 0.85));
    body.current.rotation.x = sampleNumber(PITCH_TRACK, p);

    const s = canopyScale(p);
    canopy.current.visible = s > 0.001;
    canopy.current.scale.setScalar(s);
    canopy.current.rotation.z = Math.sin(time * 0.9) * 0.05 * s;
  });

  return (
    <group ref={root}>
      <group ref={body}>
        {JOINT_NAMES.map((name, i) => (
          <mesh key={name} ref={(el) => (jointRefs.current[i] = el)}>
            <sphereGeometry args={[JOINT_RADIUS[name], 11, 7]} />
            <meshBasicMaterial wireframe color="#ffffff" />
          </mesh>
        ))}
        {BONES.map((_, i) => (
          <mesh key={i} ref={(el) => (boneRefs.current[i] = el)}>
            <cylinderGeometry args={[0.022, 0.022, 1, 5, 1, true]} />
            <meshBasicMaterial wireframe color="#e6e9ef" />
          </mesh>
        ))}
      </group>

      <group ref={canopy} visible={false}>
        <mesh position={[0, 3.3, 0]} scale={[2.4, 0.82, 1.15]}>
          <sphereGeometry args={[1, 20, 7, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshBasicMaterial wireframe color="#ffffff" transparent opacity={0.9} />
        </mesh>
        <lineSegments geometry={lineGeo}>
          <lineBasicMaterial color="#aab2c0" transparent opacity={0.55} />
        </lineSegments>
      </group>
    </group>
  );
}
