import { useMemo } from "react";
import * as THREE from "three";
import { EXIT_ALTITUDE } from "../lib/timeline";

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function Clouds() {
  const items = useMemo(() => {
    const rand = seeded(20260829);
    return Array.from({ length: 46 }, () => {
      const angle = rand() * Math.PI * 2;
      const radius = 9 + rand() * 34;
      return {
        position: [
          Math.cos(angle) * radius,
          14 + rand() * (EXIT_ALTITUDE - 24),
          Math.sin(angle) * radius,
        ],
        scale: 1.6 + rand() * 4.4,
        rotation: [rand() * 3, rand() * 3, rand() * 3],
      };
    });
  }, []);

  return (
    <group>
      {items.map((c, i) => (
        <mesh key={i} position={c.position} rotation={c.rotation} scale={c.scale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial wireframe color="#8f99ad" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function Stars() {
  const geometry = useMemo(() => {
    const rand = seeded(77);
    const positions = new Float32Array(700 * 3);
    for (let i = 0; i < 700; i++) {
      const angle = rand() * Math.PI * 2;
      const radius = 40 + rand() * 180;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = 40 + rand() * 420;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial size={0.55} color="#ffffff" transparent opacity={0.5} sizeAttenuation fog={false} />
    </points>
  );
}

export default function Environment() {
  return (
    <group>
      <Clouds />
      <Stars />
      <gridHelper args={[400, 100, "#4a5164", "#20242e"]} position={[0, 0, 0]} />
    </group>
  );
}
