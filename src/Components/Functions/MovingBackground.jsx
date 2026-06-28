import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useSelector } from 'react-redux';


function ParticleField() {
  const ref = useRef();
  const isDark = useSelector((state) => state.theme.isTheme);
  
  // Generate random points in a sphere
  const [positions] = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 10 * Math.pow(Math.random(), 1/3);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          // Use dynamic color: Indigo for both, slightly darker in light mode for contrast
          color={isDark ? "#818cf8" : "#4f46e5"}
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          // Opacity adjustments for visibility
          opacity={isDark ? 0.4 : 0.6}
        />
      </Points>
    </group>
  );
}

const MovingBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default MovingBackground;
