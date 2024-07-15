import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';

export const Rotationbox = () => {
  const meshRef = useRef();

  const props = useSpring({
    rotation: [0, 2 * Math.PI, 0],
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  return (
    <a.mesh ref={meshRef} rotation={props.rotation}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </a.mesh>
  );
};
