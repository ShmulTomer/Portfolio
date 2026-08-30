import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { scroll } from "../lib/scroll";
import { COCKPIT_LOCAL, DOOR_LOCAL, aircraftPosition, seg } from "../lib/timeline";

// Nose points down -x, tail runs to +x. Cylinders are rotated so their axis
// follows x, which puts radiusTop forward.
const SKIN = "#dfe4ec";
const DETAIL = "#98a2b6";
const DIM = "#5f6878";

const X_AXIS = [0, 0, Math.PI / 2];

function Strut({ from, to, radius = 0.035, color = DETAIL }) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const dz = to[2] - from[2];
  const length = Math.hypot(dx, dy, dz);
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2];
  // Align the cylinder's +y axis with the strut direction. YXZ order is required
  // so the yaw is applied after the pitch rather than being cancelled by it.
  const yaw = Math.atan2(dx, dz);
  const pitch = Math.acos(dy / length);
  return (
    <mesh position={mid} rotation={[pitch, yaw, 0, "YXZ"]}>
      <cylinderGeometry args={[radius, radius, length, 4, 1, true]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
}

function Wheel({ position }) {
  return (
    <mesh position={position} rotation={[0, Math.PI / 2, 0]}>
      <torusGeometry args={[0.26, 0.09, 5, 10]} />
      <meshBasicMaterial wireframe color={DETAIL} />
    </mesh>
  );
}

export default function Aircraft() {
  const group = useRef();

  useFrame(({ clock }) => {
    const p = scroll.p;
    const away = seg(p, 0.13, 0.55);
    group.current.visible = away < 0.999;
    if (!group.current.visible) return;

    const pos = aircraftPosition(p);
    group.current.position.set(pos.x, pos.y, pos.z);
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.6) * 0.025;
    group.current.rotation.y = -away * 0.12;
  });

  return (
    <group ref={group}>
      {/* cabin */}
      <mesh position={[-1.4, 0, 0]} rotation={X_AXIS}>
        <cylinderGeometry args={[0.82, 0.82, 4.4, 12, 1, true]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>
      {/* tail cone */}
      <mesh position={[2.6, 0.08, 0]} rotation={X_AXIS}>
        <cylinderGeometry args={[0.82, 0.26, 3.6, 12, 1, true]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>
      {/* engine cowling */}
      <mesh position={[-4.2, -0.02, 0]} rotation={X_AXIS}>
        <cylinderGeometry args={[0.6, 0.82, 1.2, 12, 1, true]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>
      {/* nose cone */}
      <mesh position={[-5.25, -0.02, 0]} rotation={X_AXIS}>
        <coneGeometry args={[0.6, 1.3, 12]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>

      {/* windshield */}
      <mesh position={[-3.34, 0.42, 0]} rotation={[0, 0, -0.62]}>
        <boxGeometry args={[0.04, 1.3, 1.34]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      {/* cabin windows, minus the station taken by the open pilot door */}
      {[-2.5, -1.5].map((x) =>
        [-0.8, 0.8].map((z) =>
          x === DOOR_LOCAL[0] && z > 0 ? null : (
            <mesh key={`${x}:${z}`} position={[x, 0.2, z]}>
              <boxGeometry args={[0.8, 0.62, 0.04]} />
              <meshBasicMaterial wireframe color={DETAIL} />
            </mesh>
          )
        )
      )}

      {/* high wing */}
      <mesh position={[-1.1, 0.88, 0]}>
        <boxGeometry args={[1.95, 0.11, 12.4]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>
      {[-6.2, 6.2].map((z) => (
        <mesh key={z} position={[-1.1, 0.9, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 1.9, 4, 1, true]} />
          <meshBasicMaterial wireframe color={DETAIL} />
        </mesh>
      ))}
      {/* lift struts */}
      {[-1, 1].map((s) => (
        <Strut key={s} from={[-1.0, -0.55, s * 0.6]} to={[-1.1, 0.82, s * 3.4]} />
      ))}

      {/* empennage */}
      <mesh position={[4.0, 0.24, 0]}>
        <boxGeometry args={[1.0, 0.08, 4.4]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>
      <mesh position={[4.15, 1.05, 0]}>
        <boxGeometry args={[1.25, 1.6, 0.08]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>
      <mesh position={[3.5, 0.7, 0]} rotation={[0, 0, 0.72]}>
        <boxGeometry args={[0.08, 1.5, 0.07]} />
        <meshBasicMaterial wireframe color={SKIN} />
      </mesh>

      {/* open pilot door */}
      <mesh position={[DOOR_LOCAL[0], -0.02, 0.84]}>
        <boxGeometry args={[1.15, 1.35, 0.03]} />
        <meshBasicMaterial wireframe color={DIM} />
      </mesh>

      {/* landing gear */}
      <Strut from={[-1.5, -0.72, 0.25]} to={[-1.5, -1.28, 1.5]} radius={0.05} />
      <Strut from={[-1.5, -0.72, -0.25]} to={[-1.5, -1.28, -1.5]} radius={0.05} />
      <Wheel position={[-1.5, -1.35, 1.55]} />
      <Wheel position={[-1.5, -1.35, -1.55]} />
      <Strut from={[-3.9, -0.7, 0]} to={[-4.1, -1.3, 0]} radius={0.05} />
      <Wheel position={[-4.1, -1.4, 0]} />

      {/* cabin floor */}
      <mesh position={[-1.2, -0.72, 0]}>
        <boxGeometry args={[4.6, 0.03, 1.4]} />
        <meshBasicMaterial wireframe color={DIM} />
      </mesh>

      {/* instrument panel + yoke in front of the left seat */}
      <mesh position={[-3.15, 0.0, 0]}>
        <boxGeometry args={[0.16, 0.7, 1.5]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      <mesh position={[-2.98, 0.32, COCKPIT_LOCAL[2]]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 4, 1, true]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      <mesh position={[-2.74, 0.32, COCKPIT_LOCAL[2]]}>
        <boxGeometry args={[0.05, 0.16, 0.42]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>

      {/* seats */}
      {[COCKPIT_LOCAL[2], -COCKPIT_LOCAL[2]].map((z) => (
        <group key={z}>
          <mesh position={[-2.55, -0.44, z]}>
            <boxGeometry args={[0.52, 0.06, 0.46]} />
            <meshBasicMaterial wireframe color={DIM} />
          </mesh>
          <mesh position={[-2.83, -0.1, z]} rotation={[0, 0, 0.14]}>
            <boxGeometry args={[0.06, 0.66, 0.46]} />
            <meshBasicMaterial wireframe color={DIM} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
