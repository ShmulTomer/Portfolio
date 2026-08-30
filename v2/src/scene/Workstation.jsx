const WIRE = "#c9d1e0";

export default function Workstation() {
  return (
    <group>
      {/* desk top */}
      <mesh position={[0, 0.76, 1.0]}>
        <boxGeometry args={[2.6, 0.06, 1.1]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* legs */}
      {[-1.2, 1.2].map((x) => (
        <mesh key={x} position={[x, 0.38, 1.0]}>
          <boxGeometry args={[0.06, 0.76, 1.0]} />
          <meshBasicMaterial wireframe color={WIRE} />
        </mesh>
      ))}
      {/* monitor */}
      <mesh position={[0, 1.28, 1.36]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[1.5, 0.9, 0.05]} />
        <meshBasicMaterial wireframe color="#ffffff" />
      </mesh>
      <mesh position={[0, 1.28, 1.33]} rotation={[-0.12, 0, 0]}>
        <planeGeometry args={[1.4, 0.8]} />
        <meshBasicMaterial color="#7fb2ff" transparent opacity={0.12} />
      </mesh>
      <mesh position={[0, 0.92, 1.36]}>
        <cylinderGeometry args={[0.05, 0.14, 0.28, 8, 1, true]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* keyboard */}
      <mesh position={[0, 0.8, 0.78]}>
        <boxGeometry args={[0.8, 0.03, 0.28]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      {/* chair */}
      <mesh position={[0, 0.56, 0.02]}>
        <boxGeometry args={[0.62, 0.06, 0.58]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      <mesh position={[0, 0.92, -0.26]} rotation={[0.16, 0, 0]}>
        <boxGeometry args={[0.6, 0.7, 0.06]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      <mesh position={[0, 0.28, 0.02]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 8, 1, true]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
      <mesh position={[0, 0.04, 0.02]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.34, 5, 1]} />
        <meshBasicMaterial wireframe color={WIRE} />
      </mesh>
    </group>
  );
}
