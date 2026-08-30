import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { scroll } from "../lib/scroll";
import { loftGeometry, loopGeometry } from "../lib/loft";
import { COCKPIT_LOCAL, EXIT_P, aircraftPosition, rideRoll, seg } from "../lib/timeline";

// Cessna 172. Nose points down -x, tail runs to +x, so the left seat the pilot
// flies from is the +z side and his door opens straight at the camera.
const SKIN = "#dfe4ec";
const DETAIL = "#98a2b6";
const DIM = "#5f6878";

const X_AXIS = [0, 0, Math.PI / 2];
const SEAT_Z = COCKPIT_LOCAL[2];

// [x, centreY, halfWidth, halfHeight]. Slab sides with a rounded deck, held at
// full section through the whole cabin and only necking down aft of the rear
// seats, which is what makes a 172 read as a 172 rather than a tube.
const STATIONS = [
  [-4.6, 0.02, 0.05, 0.05],
  [-4.46, 0.02, 0.18, 0.17],
  [-4.24, 0.03, 0.32, 0.28],
  [-4.0, 0.05, 0.44, 0.38],
  [-3.72, 0.08, 0.55, 0.48],
  [-3.56, 0.12, 0.61, 0.62],
  [-3.34, 0.16, 0.65, 0.76],
  [-3.05, 0.18, 0.66, 0.82],
  [-2.6, 0.18, 0.66, 0.84],
  [-2.1, 0.18, 0.66, 0.84],
  [-1.62, 0.18, 0.65, 0.8],
  [-1.22, 0.19, 0.61, 0.72],
  [-0.7, 0.21, 0.54, 0.6],
  [-0.05, 0.24, 0.45, 0.49],
  [0.65, 0.27, 0.36, 0.4],
  [1.4, 0.31, 0.28, 0.32],
  [2.15, 0.35, 0.21, 0.26],
  [2.85, 0.39, 0.15, 0.21],
  [3.25, 0.42, 0.11, 0.17],
];

const FUSELAGE = loftGeometry(STATIONS, 12, 2.4);

// Flat surfaces are drawn as closed outlines rather than boxes, which would
// show a triangulation diagonal across every face.
const WING_TOP_Y = 1.1;
const WING_BOTTOM_Y = 0.94;
const WING_PLAN = [
  [-3.18, 5.2],
  [-3.3, 3.05],
  [-3.3, -3.05],
  [-3.18, -5.2],
  [-2.12, -5.2],
  [-1.76, -3.05],
  [-1.76, 3.05],
  [-2.12, 5.2],
];
const WING_UPPER = WING_PLAN.map(([x, z]) => [x, WING_TOP_Y, z]);
const WING_LOWER = WING_PLAN.map(([x, z]) => [x, WING_BOTTOM_Y, z]);
const WING_TIPS = [1, -1].map((side) =>
  [
    [-3.18, WING_TOP_Y],
    [-2.12, WING_TOP_Y],
    [-2.12, WING_BOTTOM_Y],
    [-3.18, WING_BOTTOM_Y],
  ].map(([x, y]) => [x, y, side * 5.2])
);

const WINDSHIELD = [
  [-3.7, 0.5, -0.46],
  [-3.7, 0.5, 0.46],
  [-3.3, 0.93, 0.54],
  [-3.3, 0.93, -0.54],
];

const DOORS = [1, -1].map((side) =>
  [
    [-3.28, 0.1],
    [-3.22, 0.52],
    [-3.02, 0.68],
    [-2.55, 0.7],
    [-2.25, 0.6],
    [-2.18, 0.15],
    [-2.18, -0.4],
    [-2.32, -0.58],
    [-3.1, -0.58],
    [-3.26, -0.4],
  ].map(([x, y]) => [x, y, side * 0.64])
);

const REAR_WINDOWS = [1, -1].map((side) =>
  [
    [-2.02, 0.62],
    [-1.55, 0.55],
    [-1.42, 0.2],
    [-2.02, 0.18],
  ].map(([x, y]) => [x, y, side * 0.62])
);

const FIN = [
  [2.2, 0.62],
  [3.05, 1.5],
  [3.42, 1.5],
  [3.46, 0.62],
].map(([x, y]) => [x, y, 0]);

// The 172's dorsal fillet, blending the spine into the fin leading edge.
const DORSAL = [
  [1.05, 0.66],
  [2.45, 0.92],
  [2.45, 0.66],
].map(([x, y]) => [x, y, 0]);

const STABILISER = [
  [2.35, 1.6],
  [2.18, 0],
  [2.35, -1.6],
  [3.15, -1.6],
  [3.12, 0],
  [3.15, 1.6],
].map(([x, z]) => [x, 0.48, z]);

function Outline({ points, color = DETAIL }) {
  const geometry = useMemo(() => loopGeometry(points), [points]);
  return (
    <lineLoop geometry={geometry}>
      <lineBasicMaterial color={color} />
    </lineLoop>
  );
}

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

// A torus is built in the XY plane, so its axle already runs along z, which is
// exactly what a wheel rolling down the x axis needs. No rotation.
function Wheel({ position, radius = 0.2, tube = 0.07 }) {
  return (
    <mesh position={position}>
      <torusGeometry args={[radius, tube, 5, 12]} />
      <meshBasicMaterial wireframe color={DETAIL} />
    </mesh>
  );
}

export default function Aircraft() {
  const group = useRef();
  const propeller = useRef();

  useFrame(({ clock }) => {
    const p = scroll.p;
    const away = seg(p, EXIT_P, 0.55);
    group.current.visible = away < 0.999;
    if (!group.current.visible) return;

    const pos = aircraftPosition(p);
    group.current.position.set(pos.x, pos.y, pos.z);
    group.current.rotation.z = rideRoll(p, clock.elapsedTime);
    group.current.rotation.y = -away * 0.12;

    // Same drive as the helicopter's rotor: scroll turns it, and the small time
    // term keeps it from looking stalled when the page is sitting still.
    propeller.current.rotation.x = p * 420 + clock.elapsedTime * 1.2;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={FUSELAGE}>
        <lineBasicMaterial color={SKIN} />
      </lineSegments>

      {/* two-blade propeller, turning on the thrust line at the spinner base */}
      <group ref={propeller} position={[-4.46, 0.02, 0]}>
        <mesh>
          <boxGeometry args={[0.12, 0.15, 0.15]} />
          <meshBasicMaterial wireframe color={DETAIL} />
        </mesh>
        {[1, -1].map((s) => (
          // Pitch is a twist about the blade's own span axis, which is z here,
          // and it mirrors across the hub so both blades bite the same way.
          <mesh key={s} position={[0, 0, s * 0.52]} rotation={[0, 0, s * 0.38]}>
            <boxGeometry args={[0.04, 0.16, 0.86]} />
            <meshBasicMaterial wireframe color={SKIN} />
          </mesh>
        ))}
      </group>

      {/* glazing */}
      <Outline points={WINDSHIELD} />
      {DOORS.map((points, i) => (
        <Outline key={`door${i}`} points={points} color={DIM} />
      ))}
      {REAR_WINDOWS.map((points, i) => (
        <Outline key={`win${i}`} points={points} />
      ))}

      {/* high wing: two planform outlines closed off by ribs at the tips */}
      <Outline points={WING_UPPER} color={SKIN} />
      <Outline points={WING_LOWER} color={SKIN} />
      {WING_TIPS.map((points, i) => (
        <Outline key={`tip${i}`} points={points} color={SKIN} />
      ))}
      {/* lift struts, off the bottom corner of the door frame */}
      {[1, -1].map((s) => (
        <Strut
          key={s}
          from={[-2.25, -0.55, s * 0.5]}
          to={[-2.6, 0.94, s * 2.6]}
          radius={0.04}
        />
      ))}

      {/* empennage */}
      <Outline points={FIN} color={SKIN} />
      <Outline points={DORSAL} color={SKIN} />
      <Outline points={STABILISER} color={SKIN} />

      {/* fixed tricycle gear */}
      {[1, -1].map((s) => (
        <group key={s}>
          <Strut
            from={[-2.35, -0.62, s * 0.3]}
            to={[-2.35, -1.12, s * 1.36]}
            radius={0.05}
          />
          <Wheel position={[-2.35, -1.12, s * 1.42]} />
        </group>
      ))}
      <Strut from={[-3.7, -0.42, 0]} to={[-3.86, -1.15, 0]} radius={0.05} />
      <Wheel position={[-3.86, -1.15, 0]} radius={0.17} tube={0.06} />

      {/* instrument panel, then the yoke on its shaft out in front of him */}
      <mesh position={[-3.4, 0.24, 0]}>
        <boxGeometry args={[0.12, 0.56, 1.16]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      <mesh position={[-3.18, 0.32, SEAT_Z]} rotation={X_AXIS}>
        <cylinderGeometry args={[0.035, 0.035, 0.36, 4, 1, true]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      <mesh position={[-2.99, 0.32, SEAT_Z]}>
        <boxGeometry args={[0.05, 0.15, 0.44]} />
        <meshBasicMaterial wireframe color={DETAIL} />
      </mesh>
      {/* rudder pedals, under his feet */}
      {[SEAT_Z - 0.18, SEAT_Z + 0.18].map((z) => (
        <mesh key={z} position={[-3.14, -0.34, z]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.04, 0.18, 0.12]} />
          <meshBasicMaterial wireframe color={DIM} />
        </mesh>
      ))}

      {/* front seats, sitting under his hips with the backs behind him */}
      {[SEAT_Z, -SEAT_Z].map((z) => (
        <group key={z}>
          <mesh position={[-2.46, -0.13, z]}>
            <boxGeometry args={[0.52, 0.06, 0.46]} />
            <meshBasicMaterial wireframe color={DIM} />
          </mesh>
          <mesh position={[-2.26, 0.18, z]} rotation={[0, 0, -0.12]}>
            <boxGeometry args={[0.06, 0.62, 0.46]} />
            <meshBasicMaterial wireframe color={DIM} />
          </mesh>
        </group>
      ))}
      {/* rear bench */}
      <mesh position={[-1.78, -0.13, 0]}>
        <boxGeometry args={[0.5, 0.06, 1.06]} />
        <meshBasicMaterial wireframe color={DIM} />
      </mesh>
      <mesh position={[-1.58, 0.16, 0]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.06, 0.58, 1.06]} />
        <meshBasicMaterial wireframe color={DIM} />
      </mesh>
    </group>
  );
}
