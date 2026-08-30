import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BONES, JOINT_INDEX, JOINT_NAMES, JOINT_RADIUS, POSES } from "../lib/skeleton";
import { scroll } from "../lib/scroll";
import {
  PITCH_TRACK,
  POSE_TRACK,
  YAW_TRACK,
  canopyState,
  figurePosition,
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

// Canopy rim, in the canopy's own unscaled space.
const RIM_Y = 3.3;
const RIM_X = 2.4;
const RIM_Z = 1.15;
// Where each suspension line meets the fabric, as angles around the rim.
const LINE_ANGLES = [100, 128, 156, 204, 232, 260].map((d) => (d * Math.PI) / 180);
const LINES_PER_SIDE = LINE_ANGLES.length + 1; // canopy lines plus one riser
const LINE_COUNT = LINES_PER_SIDE * 2;

// Risers rise from the shoulders to a confluence just above them, which is also
// where the hands grip in the hang pose.
const RISER_LIFT = 0.52;

export default function Skydiver() {
  const root = useRef();
  const body = useRef();
  const canopy = useRef();
  const lines = useRef();
  const canopyMaterial = useRef();
  const lineMaterial = useRef();
  const jointRefs = useRef([]);
  const boneRefs = useRef([]);
  const pose = useMemo(() => new Float32Array(JOINT_NAMES.length * 3), []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(LINE_COUNT * 2 * 3);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

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
      va.fromArray(pose, BONES[i][0] * 3);
      vb.fromArray(pose, BONES[i][1] * 3);
      dir.subVectors(vb, va);
      const length = dir.length() || 0.0001;
      mid.addVectors(va, vb).multiplyScalar(0.5);
      bone.position.copy(mid);
      bone.quaternion.setFromUnitVectors(UP, dir.divideScalar(length));
      bone.scale.set(1, length, 1);
    }

    const position = figurePosition(p);
    root.current.position.set(position.x, position.y, position.z);
    const spin = Math.sin(p * 7.5) * 0.4 * seg(p, 0.15, 0.26) * (1 - seg(p, 0.55, 0.85));
    root.current.rotation.y = sampleNumber(YAW_TRACK, p) + spin;
    const pitch = sampleNumber(PITCH_TRACK, p);
    body.current.rotation.x = pitch;

    const chute = canopyState(p);
    canopy.current.visible = chute.out;
    lines.current.visible = chute.out;

    if (chute.out) {
      const sway = Math.sin(time * 0.9) * 0.05 * chute.span * (1 - seg(p, 0.86, 0.92));
      canopy.current.position.z = chute.back;
      canopy.current.scale.set(chute.span, chute.lift, chute.span);
      canopy.current.rotation.z = sway;
      canopyMaterial.current.opacity = 0.9 * chute.opacity;
      lineMaterial.current.opacity = 0.7 * chute.opacity;

      const array = lineGeometry.attributes.position.array;
      const cos = Math.cos(pitch);
      const sin = Math.sin(pitch);
      const cosZ = Math.cos(sway);
      const sinZ = Math.sin(sway);
      let n = 0;

      for (const side of [-1, 1]) {
        const shoulder = JOINT_INDEX[side < 0 ? "shoulderL" : "shoulderR"] * 3;
        const sx = pose[shoulder];
        const sy = pose[shoulder + 1];
        const sz = pose[shoulder + 2];
        // The shoulder and the riser top both live in body space, so undo the
        // body pitch to bring them into the upright frame the canopy hangs in.
        const shoulderY = sy * cos - sz * sin;
        const shoulderZ = sy * sin + sz * cos;
        const riserY = (sy + RISER_LIFT) * cos - sz * sin;
        const riserZ = (sy + RISER_LIFT) * sin + sz * cos;

        array[n++] = sx;
        array[n++] = shoulderY;
        array[n++] = shoulderZ;
        array[n++] = sx;
        array[n++] = riserY;
        array[n++] = riserZ;

        for (const angle of LINE_ANGLES) {
          const rx = Math.cos(angle) * RIM_X * chute.span * -side;
          const ry = RIM_Y * chute.lift;
          const rz = Math.sin(angle) * RIM_Z * chute.span;
          array[n++] = sx;
          array[n++] = riserY;
          array[n++] = riserZ;
          array[n++] = rx * cosZ - ry * sinZ;
          array[n++] = rx * sinZ + ry * cosZ;
          array[n++] = rz + chute.back;
        }
      }
      lineGeometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={root}>
      <group ref={body}>
        {JOINT_NAMES.map((name, i) =>
          JOINT_RADIUS[name] ? (
            <mesh key={name} ref={(el) => (jointRefs.current[i] = el)}>
              <sphereGeometry args={[JOINT_RADIUS[name], 11, 7]} />
              <meshBasicMaterial wireframe color="#ffffff" />
            </mesh>
          ) : null
        )}
        {BONES.map((_, i) => (
          <mesh key={`bone${i}`} ref={(el) => (boneRefs.current[i] = el)}>
            <cylinderGeometry args={[0.022, 0.022, 1, 5, 1, true]} />
            <meshBasicMaterial wireframe color="#e6e9ef" />
          </mesh>
        ))}
      </group>

      <lineSegments ref={lines} geometry={lineGeometry} visible={false} frustumCulled={false}>
        <lineBasicMaterial ref={lineMaterial} color="#9aa3b4" transparent opacity={0.7} />
      </lineSegments>

      <group ref={canopy} visible={false}>
        <mesh position={[0, RIM_Y, 0]} scale={[RIM_X, 0.82, RIM_Z]}>
          <sphereGeometry args={[1, 22, 8, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshBasicMaterial ref={canopyMaterial} wireframe color="#ffffff" transparent opacity={0.9} />
        </mesh>
      </group>
    </group>
  );
}
