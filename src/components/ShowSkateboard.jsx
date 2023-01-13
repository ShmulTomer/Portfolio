import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Skateboard from './Skateboard';
import { Float } from '@react-three/drei';

export function ShowSkateboard() {
    return (
       <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
             
             width: '50vw',
             height: '50vh',
          }}
       >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Float speed={1.4} rotationInteisty={1.5} floatIntesity={2.3}>
             <Skateboard position={[0.025, -0.9, 0]} />
            </Float>

          </Suspense>
          <OrbitControls />
       </Canvas>
    );
 }