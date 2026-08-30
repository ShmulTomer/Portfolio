import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { scroll } from "../lib/scroll";
import { EXIT_ALTITUDE, seg } from "../lib/timeline";

const WIRE = "#dfe4ec";

export default function Aircraft() {
  const group = useRef();

  useFrame(({ clock }) => {
    const p = scroll.p;
    const away = seg(p, 0.12, 0.55);
    group.current.visible = away < 0.999;
    group.current.position.set(
      -3.1 + away * away * 160,
      EXIT_ALTITUDE + 1.05 + away * 12,
      -0.35 - away * away * 40
    );
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.6) * 0.03;
  });

  return (
    <group ref={group}>
      {/* fuselage */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.78, 0.62, 8.4, 10, 1, true]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* nose */}
      <mesh position={[-4.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.78, 1.5, 10]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* wing */}
      <mesh position={[-0.4, 0.72, 0]}>
        <boxGeometry args={[1.9, 0.09, 11]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* horizontal stabiliser */}
      <mesh position={[3.9, 0.15, 0]}>
        <boxGeometry args={[0.9, 0.07, 3.6]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* vertical stabiliser */}
      <mesh position={[4.05, 0.85, 0]}>
        <boxGeometry args={[1.1, 1.5, 0.07]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* open jump door */}
      <mesh position={[1.5, 0.05, 0.62]}>
        <boxGeometry args={[1.5, 1.5, 0.06]} />
        <meshBasicMaterial wireframe color="#7d879b" />
      </mesh>
    </group>
  );
}
