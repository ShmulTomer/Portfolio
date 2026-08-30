import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Skydiver from "./scene/Skydiver";
import Helicopter from "./scene/Helicopter";
import Aircraft from "./scene/Aircraft";
import Environment from "./scene/Environment";
import Workstation from "./scene/Workstation";
import CameraRig from "./scene/CameraRig";
import Overlay from "./ui/Overlay";
import { initScroll, scroll } from "./lib/scroll";

// Rolled per page load. Both rides share the same timeline landmarks, so the
// jump plays out identically either way.
const Ride = Math.random() < 0.5 ? Helicopter : Aircraft;

export default function App() {
  useEffect(() => {
    const teardown = initScroll();
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      scroll.p += (scroll.target - scroll.p) * (1 - Math.pow(0.0005, delta));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      teardown();
    };
  }, []);

  return (
    <>
      <div className="stage">
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 42, near: 0.1, far: 800, position: [-5.0, 152.2, 5.92] }}
          onCreated={({ scene }) => {
            scene.background = new THREE.Color("#08090c");
            scene.fog = new THREE.Fog("#08090c", 16, 120);
          }}
        >
          <CameraRig />
          <Environment />
          <Ride />
          <Workstation />
          <Skydiver />
        </Canvas>
      </div>
      <Overlay />
      <div className="scroll-track" />
    </>
  );
}
