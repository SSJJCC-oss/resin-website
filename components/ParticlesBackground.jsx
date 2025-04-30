'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

export default function ParticlesBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} className="z-0">
      <ambientLight intensity={0.5} />
      <Stars />
    </Canvas>
  );
}

function Stars() {
  const ref = useRef();

  // Generate random star positions
  const positions = useMemo(() => {
    const p = new Float32Array(5000);
    for (let i = 0; i < 5000; i++) {
      p[i] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005; // Slow gentle rotation
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
