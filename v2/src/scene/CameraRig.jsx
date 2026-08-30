import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scroll } from "../lib/scroll";
import { altitude, drift, mix, sample } from "../lib/timeline";

// [scrollPosition, [offsetX, offsetY, offsetZ, lookAtHeight, lookAtDepth]]
const CAMERA_TRACK = [
  [0.0, [5.4, 1.6, 6.8, 1.0, 0]],
  [0.13, [3.8, 1.1, 5.4, 1.0, 0]],
  [0.28, [2.5, 0.9, 4.4, 0.9, 0]],
  [0.42, [2.1, 0.5, 3.8, 0.9, 0]],
  [0.53, [5.2, 2.4, 8.2, 2.3, 0]],
  [0.72, [5.8, 1.7, 8.8, 2.0, 0]],
  [0.88, [3.4, 1.1, 5.4, 1.0, 0]],
  [1.0, [2.4, 1.45, 3.0, 1.05, 0.7]],
];

const desired = new THREE.Vector3();
const target = new THREE.Vector3();

export default function CameraRig() {
  const current = useRef(new THREE.Vector3(5.4, 151.6, 6.8));
  const lookAt = useRef(new THREE.Vector3(0, 151, 0));

  useFrame(({ camera }, delta) => {
    const p = scroll.p;
    const { a, b, t } = sample(CAMERA_TRACK, p);
    const offset = a.map((v, i) => mix(v, b[i], t));

    const figureX = drift(p);
    const figureY = altitude(p);

    desired.set(figureX + offset[0], figureY + offset[1], offset[2]);
    desired.y = Math.max(desired.y, 0.55);
    target.set(figureX * 0.5, figureY + offset[3], offset[4]);

    const k = 1 - Math.pow(0.001, delta);
    current.current.lerp(desired, k);
    lookAt.current.lerp(target, k);

    camera.position.copy(current.current);
    camera.lookAt(lookAt.current);
  });

  return null;
}
