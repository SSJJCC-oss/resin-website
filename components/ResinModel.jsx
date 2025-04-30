'use client';

import { useGLTF, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ResinModel() {
  const { scene } = useGLTF('/models/resin_wooden_table.glb');
  const modelRef = useRef();
  const scroll = useScroll(); // this works now because it's inside <ScrollControls>

  useFrame(() => {
    if (modelRef.current) {
        const bounce = scroll ? Math.sin(scroll.offset * Math.PI * 4) * 0.2 : 0;
      modelRef.current.position.y = -1.5 + bounce;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={7} position={[0, -1.5, 0]} />;
}
