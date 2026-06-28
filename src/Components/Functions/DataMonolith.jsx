import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  Text, 
  Points, 
  PointMaterial, 
  PresentationControls,
  PerspectiveCamera,
  ContactShadows,
  Environment
} from '@react-three/drei';
import { useSelector } from 'react-redux';


const TechLabel = ({ position, text, color, isDark }) => (
  <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
    <Text
      position={position}
      fontSize={0.3}
      color={isDark ? color : '#333'} // Solid dark text in light mode for readability
      outlineWidth={!isDark ? 0.01 : 0}
      outlineColor="white"
      font="https://fonts.gstatic.com/s/robotomono/v22/L0tkDFo45GPOfruXAd6V.woff"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  </Float>
);

const Monolith = ({ isDark }) => {
  const meshRef = useRef();
  const tech = [
    { name: 'REACT', pos: [1.2, 0.8, 0.5], color: '#61dafb' },
    { name: 'JAVA', pos: [-1.2, 1.2, -0.2], color: '#f8981d' },
    { name: 'NODE', pos: [1.3, -1, -0.3], color: '#339933' },
    { name: 'SQL', pos: [-1.3, -0.6, 0.8], color: '#4479a1' },
    { name: 'JS', pos: [0, 1.6, 0.2], color: '#f7df1e' },
    { name: 'CSS', pos: [0.8, -1.5, 0.6], color: '#1572b6' },
  ];

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <group>
      {/* Central Tech Core (Atom) */}
      <group ref={meshRef} position={[0, 0, 0]}>
        {/* Nucleus */}
        <mesh castShadow>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhysicalMaterial 
            color={isDark ? "#0f172a" : "#e0e7ff"} 
            roughness={0.1} 
            metalness={0.9} 
            clearcoat={1}
            emissive={isDark ? "#4338ca" : "#6366f1"}
            emissiveIntensity={0.8}
          />
        </mesh>
        
        {/* Electron Ring 1 */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.04, 16, 100]} />
          <meshStandardMaterial color={isDark ? "#6366f1" : "#4338ca"} emissive={isDark ? "#6366f1" : "#4338ca"} emissiveIntensity={0.5} />
        </mesh>
        
        {/* Electron Ring 2 */}
        <mesh rotation={[Math.PI / 2, Math.PI / 3, 0]}>
          <torusGeometry args={[1.2, 0.04, 16, 100]} />
          <meshStandardMaterial color={isDark ? "#6366f1" : "#4338ca"} emissive={isDark ? "#6366f1" : "#4338ca"} emissiveIntensity={0.5} />
        </mesh>
        
        {/* Electron Ring 3 */}
        <mesh rotation={[Math.PI / 2, (Math.PI * 2) / 3, 0]}>
          <torusGeometry args={[1.2, 0.04, 16, 100]} />
          <meshStandardMaterial color={isDark ? "#6366f1" : "#4338ca"} emissive={isDark ? "#6366f1" : "#4338ca"} emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Floating Tech */}
      {tech.map((t, i) => (
        <TechLabel key={i} position={t.pos} text={t.name} color={t.color} isDark={isDark} />
      ))}

      {/* Upward Data Flow (Particles) */}
      <Points limit={1000}>
        <PointMaterial 
          transparent 
          color={isDark ? "#6366f1" : "#818cf8"} 
          size={0.03} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={isDark ? 0.4 : 0.6}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(1000 * 3).map(() => (Math.random() - 0.5) * 8)}
            itemSize={3}
          />
        </bufferGeometry>
      </Points>
    </group>
  );
};

const DataMonolith = () => {
    const isDark = useSelector((state) => state.theme.isTheme);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      minHeight: '380px',
      backgroundColor: isDark ? '#050510' : '#fff5f7',
      transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <Canvas shadows alpha camera={{ position: [0, 0, 8], fov: 40 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={isDark ? 0.5 : 1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Monolith isDark={isDark} />
        </PresentationControls>

        <ContactShadows position={[0, -2.5, 0]} opacity={isDark ? 0.6 : 0.2} scale={10} blur={2.5} far={4} color={isDark ? "#6366f1" : "#000"} />
        <Environment preset={isDark ? "night" : "apartment"} />
      </Canvas>
    </div>
  );
};

export default DataMonolith;
