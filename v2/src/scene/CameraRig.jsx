import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scroll } from "../lib/scroll";
import { figurePosition, mix, sample } from "../lib/timeline";

// [scrollPosition, [offsetX, offsetY, offsetZ, lookX, lookY, lookZ]]
// Offsets are relative to the figure, so the camera never lags behind the fall.
// Face-down poses sit low and stretch along +z, so their look target drops and
// pushes forward to keep the body centred.
//
// The opening sits ahead of the nose on the door side, and the look target is
// pushed toward the tail so the airframe hangs left of centre rather than
// straddling it. Scrolling then swings the camera aft to settle on the door.
const CAMERA_TRACK = [
  [0.0, [-4.9, 2.2, 6.2, 1.7, 1.05, 0.4]],
  [0.045, [-2.2, 2.0, 7.1, 1.15, 1.05, 0.35]],
  [0.085, [0.9, 1.6, 7.2, 0.5, 1.0, 0.2]],
  [0.115, [3.1, 1.05, 5.5, 0, 0.9, 0.15]],
  [0.13, [3.8, 1.1, 5.4, 0, 0.95, 0.1]],
  [0.22, [3.2, 0.85, 4.8, 0, 0.5, 0.45]],
  [0.3, [2.9, 0.7, 4.5, 0, 0.28, 0.75]],
  [0.4, [2.7, 0.6, 4.3, 0, 0.28, 0.8]],
  [0.45, [3.6, 1.0, 5.6, 0, 0.7, 0.45]],
  [0.56, [5.2, 2.2, 8.0, 0, 2.1, 0]],
  [0.72, [5.8, 1.6, 8.6, 0, 1.9, 0]],
  [0.88, [3.4, 1.1, 5.4, 0, 1.0, 0.1]],
  [1.0, [2.4, 1.45, 3.0, 0, 1.05, 0.7]],
];

const desiredOffset = new THREE.Vector3();
const desiredLook = new THREE.Vector3();
const lookAt = new THREE.Vector3();

export default function CameraRig() {
  const offset = useRef(new THREE.Vector3(-4.9, 2.2, 6.2));
  const look = useRef(new THREE.Vector3(1.7, 1.05, 0.4));

  useFrame(({ camera }, delta) => {
    const p = scroll.p;
    const { a, b, t } = sample(CAMERA_TRACK, p);
    const figure = figurePosition(p);

    desiredOffset.set(mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t));
    desiredLook.set(mix(a[3], b[3], t), mix(a[4], b[4], t), mix(a[5], b[5], t));

    const k = 1 - Math.pow(0.0008, delta);
    offset.current.lerp(desiredOffset, k);
    look.current.lerp(desiredLook, k);

    camera.position.set(
      figure.x + offset.current.x,
      Math.max(figure.y + offset.current.y, 0.55),
      figure.z + offset.current.z
    );
    lookAt.set(figure.x + look.current.x, figure.y + look.current.y, figure.z + look.current.z);
    camera.lookAt(lookAt);
  });

  return null;
}
