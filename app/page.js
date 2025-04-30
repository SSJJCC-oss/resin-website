'use client';

import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  ContactShadows,
  Float,
  ScrollControls,
} from '@react-three/drei';
import { Suspense } from 'react';
import ResinModel from '@/components/ResinModel';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ========== Hero Section with 3D Model ========== */}
      <section
        id="home"
        className="w-screen h-screen relative overflow-hidden"
      >
        {/* Animated Particle Background */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* Text Overlay */}
        <div className="absolute z-10 top-1/4 w-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Premium Resin Tables
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-turquoise-100">
            Crafted with elegance. Designed for modern living.
          </p>
        </div>

        {/* 3D Model Canvas */}
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

          <OrbitControls maxDistance={20} minDistance={5} />
        </Canvas>
      </section>

      {/* ========== Gallery Section ========== */}
      <section
        id="gallery"
        className="min-h-screen bg-turquoise-600 flex flex-col items-center justify-center p-8"
      >
        <h1 className="text-4xl text-white mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">Product 1</div>
          <div className="bg-white p-4 rounded-lg shadow-lg">Product 2</div>
          <div className="bg-white p-4 rounded-lg shadow-lg">Product 3</div>
        </div>
      </section>

      {/* ========== Contact Section ========== */}
      <section
        id="contact"
        className="min-h-screen bg-turquoise-700 flex flex-col items-center justify-center p-8"
      >
        <h1 className="text-4xl text-white mb-8">Contact Us</h1>
        <p className="text-white mb-8">
          For inquiries or VR meeting, please reach out!
        </p>
        <button className="text-white bg-turquoise-800 hover:bg-turquoise-600 p-4 rounded-full">
          Schedule VR Meeting
        </button>
      </section>

      {/* ========== About Section ========== */}
      <section
        id="about"
        className="min-h-screen bg-turquoise-900 flex flex-col items-center justify-center p-8"
      >
        <h1 className="text-4xl text-white mb-8">About Us</h1>
        <p className="text-white text-lg text-center max-w-xl">
          We specialize in high-quality resin products for various applications. Our resin
          tables are a testament to craftsmanship and innovation.
        </p>
      </section>
    </main>
  );
}
