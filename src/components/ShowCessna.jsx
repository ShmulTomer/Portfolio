import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cessna from './Cessna';
import { Float } from '@react-three/drei';

export function ShowCessna() {
    return (
       <Canvas
          camera={{ position: [30, 24, 12.25], fov: 15 }}
          style={{
             
             width: '80vw',
             height: '50vh',
          }}
       >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={1} />
          <directionalLight intensity={1} />
          <Suspense fallback={null}>
            <Float speed={1.4} rotationInteisty={1.5} floatIntesity={2.3}>
             <Cessna position={[0.15, 0, 0]} rotation={[-Math.PI / 2, 0, 1]} />
            </Float>

          </Suspense>
          <OrbitControls enableZoom={false} />
       </Canvas>
    );
 }