import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { scroll } from "../lib/scroll";
import { loftGeometry, loopGeometry } from "../lib/loft";
import { COCKPIT_LOCAL, EXIT_P, aircraftPosition, rideRoll, seg } from "../lib/timeline";

// Robinson R22. Nose points down -x, tailboom runs to +x. Cylinders are rotated
// so their axis follows x, which puts radiusTop forward.
const SKIN = "#dfe4ec";
const DETAIL = "#98a2b6";
const DIM = "#5f6878";

const SEAT_Z = COCKPIT_LOCAL[2];
const ROTOR_Y = 1.68;
const ROTOR_RADIUS = 3.85;
const MAST_X = -2.2;

// [x, centreY, halfWidth, halfHeight]. The bulb of the cabin peaks around
// x = -2.2 and then necks down through the engine bay into the tailboom, so the
// whole airframe is one continuous surface rather than a stack of primitives.
const STATIONS = [
  [-3.86, -0.3, 0.07, 0.07],
  [-3.76, -0.26, 0.2, 0.22],
  [-3.58, -0.18, 0.38, 0.42],
  [-3.34, -0.1, 0.55, 0.62],
  [-3.06, -0.04, 0.67, 0.78],
  [-2.78, -0.01, 0.73, 0.87],
  [-2.5, 0.0, 0.75, 0.91],
  [-2.2, 0.01, 0.75, 0.92],
  [-1.92, 0.03, 0.71, 0.86],
  [-1.62, 0.05, 0.63, 0.7],
  [-1.32, 0.07, 0.53, 0.55],
  [-1.0, 0.09, 0.43, 0.43],
  [-0.66, 0.11, 0.34, 0.35],
  [-0.3, 0.13, 0.27, 0.28],
  [0.1, 0.15, 0.21, 0.22],
  [0.9, 0.17, 0.185, 0.19],
  [1.9, 0.19, 0.165, 0.17],
  [3.05, 0.21, 0.145, 0.15],
];

const FUSELAGE = loftGeometry(STATIONS, 12, 2.3);

// Flat panels read better as closed outlines than as wireframe boxes, which
// would show a triangulation diagonal across every face.
const DOOR = [
  [-3.0, -0.1],
  [-2.98, 0.3],
  [-2.8, 0.56],
  [-2.45, 0.62],
  [-2.14, 0.5],
  [-2.06, 0.1],
  [-2.06, -0.42],
  [-2.2, -0.7],
  [-2.82, -0.7],
  [-3.0, -0.46],
].map(([x, y]) => [x, y, 0.7]);

const UPPER_FIN = [
  [2.38, 0.32],
  [3.0, 0.98],
  [3.36, 0.98],
  [3.34, 0.34],
].map(([x, y]) => [x, y, 0]);

const LOWER_FIN = [
  [2.94, 0.08],
  [3.32, 0.08],
  [3.38, -0.54],
  [3.14, -0.54],
].map(([x, y]) => [x, y, 0]);

const STABILISER = [
  [1.3, -0.78],
  [1.78, -0.72],
  [1.78, 0.72],
  [1.3, 0.78],
].map(([x, z]) => [x, 0.06, z]);

function circle(radius, y, segments = 14) {
  const points = [];
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    points.push([Math.cos(a) * radius, y, Math.sin(a) * radius]);
  }
  return points;
}

const SWASH_UPPER = circle(0.26, 1.44);
const SWASH_LOWER = circle(0.22, 1.36);

function Outline({ points, color = DETAIL }) {
  const geometry = useMemo(() => loopGeometry(points), [points]);
  return (
    <lineLoop geometry={geometry}>
      <lineBasicMaterial color={color} />
    </lineLoop>
  );
}

function Strut({ from, to, radius = 0.04, color = DETAIL }) {
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

export default function Helicopter() {
  const group = useRef();
  const mainRotor = useRef();
  const tailRotor = useRef();

  useFrame(({ clock }) => {
    const p = scroll.p;
    const away = seg(p, EXIT_P, 0.55);
    group.current.visible = away < 0.999;
    if (!group.current.visible) return;

    const pos = aircraftPosition(p);
    group.current.position.set(pos.x, pos.y, pos.z);
    group.current.rotation.z = rideRoll(p, clock.elapsedTime);
    group.current.rotation.y = -away * 0.12;

    // Scroll drives the rotors; the small time term keeps them from looking
    // stalled when the page is sitting still.
    const spin = p * 420 + clock.elapsedTime * 1.2;
    mainRotor.current.rotation.y = spin;
    tailRotor.current.rotation.z = spin * 2.6;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={FUSELAGE}>
        <lineBasicMaterial color={SKIN} />
      </lineSegments>

      {/* open door he steps out of, plus the frame of the one opposite */}
      <Outline points={DOOR} color={DIM} />

      {/* mast, gearbox and teetering head */}
      <mesh position={[MAST_X, 0.72, 0]}>
        <boxGeometry args={[0.54, 0.34, 0.46]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      <mesh position={[MAST_X, 1.24, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.78, 6, 1, true]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>

      {/* swashplate: stays put while the head turns above it */}
      <group position={[MAST_X, 0, 0]}>
        <Outline points={SWASH_UPPER} />
        <Outline points={SWASH_LOWER} />
      </group>

      <group ref={mainRotor} position={[MAST_X, ROTOR_Y, 0]}>
        <mesh>
          <boxGeometry args={[0.24, 0.12, 0.3]} />
          <meshBasicMaterial wireframe color={DETAIL} />
        </mesh>
        {[-1, 1].map((s) => (
          <group key={s}>
            {/* blade grip, then the blade itself outboard of it */}
            <mesh position={[0, 0, s * 0.34]}>
              <boxGeometry args={[0.14, 0.07, 0.4]} />
              <meshBasicMaterial wireframe color={DETAIL} />
            </mesh>
            <mesh position={[0, 0.01, s * (ROTOR_RADIUS / 2 + 0.3)]}>
              <boxGeometry args={[0.19, 0.025, ROTOR_RADIUS - 0.6]} />
              <meshBasicMaterial wireframe color={SKIN} />
            </mesh>
            {/* pitch link down to the swashplate rim */}
            <Strut
              from={[0.2, -0.24, s * 0.16]}
              to={[0.1, -0.02, s * 0.3]}
              radius={0.022}
            />
          </group>
        ))}
      </group>

      {/* tail rotor hangs on the left of the boom, which is +z here */}
      <mesh position={[2.98, 0.42, 0.14]}>
        <boxGeometry args={[0.26, 0.3, 0.2]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      <group ref={tailRotor} position={[2.98, 0.42, 0.32]}>
        <mesh>
          <boxGeometry args={[0.09, 1.07, 0.02]} />
          <meshBasicMaterial wireframe color={SKIN} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.16, 0.16, 0.06]} />
          <meshBasicMaterial wireframe color={DETAIL} />
        </mesh>
      </group>

      {/* empennage */}
      <Outline points={UPPER_FIN} color={SKIN} />
      <Outline points={LOWER_FIN} color={SKIN} />
      <Outline points={STABILISER} color={SKIN} />
      <Strut from={[1.3, 0.06, 0]} to={[1.3, 0.06, 0.76]} radius={0.02} color={SKIN} />
      <Strut from={[1.3, 0.06, 0]} to={[1.3, 0.06, -0.76]} radius={0.02} color={SKIN} />

      {/* skids */}
      {[-1, 1].map((s) => (
        <Strut
          key={s}
          from={[-3.35, -1.12, s * 0.62]}
          to={[-1.45, -1.12, s * 0.62]}
          radius={0.055}
        />
      ))}
      {[-1, 1].map((s) => (
        <Strut
          key={`toe${s}`}
          from={[-3.35, -1.12, s * 0.62]}
          to={[-3.72, -0.92, s * 0.62]}
          radius={0.05}
        />
      ))}
      {/* arched cross tubes */}
      {[-2.95, -1.75].map((x) => (
        <group key={x}>
          <Strut from={[x, -1.12, -0.62]} to={[x, -0.82, 0]} radius={0.045} />
          <Strut from={[x, -0.82, 0]} to={[x, -1.12, 0.62]} radius={0.045} />
        </group>
      ))}

      {/* instrument console, which on an R22 sits centred between the seats */}
      <mesh position={[-3.16, -0.16, 0]} rotation={[0, 0, 0.22]}>
        <boxGeometry args={[0.16, 0.5, 0.62]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>

      {/* the R22's T-bar cyclic, rising from between the seats to the inboard hand */}
      <Strut from={[-2.35, -0.72, 0]} to={[-2.72, 0.16, 0]} radius={0.032} />
      <Strut from={[-2.72, 0.16, 0]} to={[-2.95, 0.32, SEAT_Z - 0.21]} radius={0.028} />
      <Strut from={[-2.72, 0.16, 0]} to={[-2.95, 0.32, -SEAT_Z + 0.21]} radius={0.028} />
      {/* collective, outboard of the left seat */}
      <Strut from={[-2.1, -0.66, SEAT_Z + 0.3]} to={[-2.88, 0.28, SEAT_Z + 0.21]} radius={0.03} />

      {/* seats */}
      {[SEAT_Z, -SEAT_Z].map((z) => (
        <group key={z}>
          <mesh position={[-2.55, -0.48, z]}>
            <boxGeometry args={[0.56, 0.06, 0.5]} />
            <meshBasicMaterial wireframe color={DIM} />
          </mesh>
          <mesh position={[-2.2, -0.1, z]} rotation={[0, 0, -0.12]}>
            <boxGeometry args={[0.06, 0.72, 0.5]} />
            <meshBasicMaterial wireframe color={DIM} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
