'use client';

import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  ContactShadows,
  Float,
  ScrollControls
} from '@react-three/drei';
import { Suspense } from 'react';
import ResinModel from '@/components/ResinModel';

export default function Home() {
  return (
    <section
      id="home"
      className="w-screen h-screen bg-gradient-to-b from-turquoise-700 to-turquoise-900 relative overflow-hidden"
    >
      {/* Overlayed Text */}
      <div className="absolute z-10 top-1/4 w-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          Premium Resin Tables
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-turquoise-100">
          Crafted with elegance. Designed for modern living.
        </p>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 4, 12], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Suspense
          fallback={
            <Html>
              <p className="text-white">Loading model...</p>
            </Html>
          }
        >
          {/* ScrollControls wraps around the 3D content to make useScroll work */}
          <ScrollControls pages={1}>
            <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
              <ResinModel />
            </Float>

            <ContactShadows
              position={[0, -1.8, 0]}
              opacity={0.4}
              scale={12}
              blur={2}
              far={4.5}
            />
          </ScrollControls>
        </Suspense>

        {/* Optional: Add OrbitControls outside ScrollControls */}
        <OrbitControls autoRotate autoRotateSpeed={1.8} maxDistance={20} minDistance={5} />
      </Canvas>
    </section>
  );
}
