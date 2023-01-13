import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cloud from './Cloud';
import { Float } from '@react-three/drei';

export function ShowCloud() {
    return (
       <Canvas
          camera={{ position: [30, 24, 12.25], fov: 15 }}
          style={{
             
             width: '80vw',
             height: '50vh',
          }}
       >
          <ambientLight intensity={0.1} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <Float speed={0.7} rotationInteisty={0.5} floatIntesity={1}>
             <Cloud position={[0.15, 0, 0]} rotation={[0, 1, 0]} />
            </Float>
            

          </Suspense>
          
       </Canvas>
    );
 }