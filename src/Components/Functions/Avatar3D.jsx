import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  MeshWobbleMaterial, 
  PresentationControls,
  PerspectiveCamera,
  ContactShadows,
  Environment
} from '@react-three/drei';
import * as THREE from 'three';

const RobotAvatar = () => {
  const group = useRef();
  const headRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t) * 0.1;
    headRef.current.rotation.y = Math.sin(t * 1.5) * 0.2;
    headRef.current.rotation.x = Math.cos(t * 1.5) * 0.1;
  });

  return (
    <group ref={group}>
      {/* Body */}
      <mesh position={[0, -0.2, 0]}>
        <capsuleGeometry args={[0.4, 0.6, 16, 32]} />
        <meshStandardMaterial color="#2d2d3a" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 0.7, 0]}>
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#6366f1" roughness={0.1} metalness={0.5} />
        </mesh>
        
        {/* Visor/Eyes */}
        <mesh position={[0, 0, 0.25]}>
          <boxGeometry args={[0.4, 0.15, 0.1]} />
          <meshStandardMaterial color="#000" emissive="#6366f1" emissiveIntensity={2} />
        </mesh>

        {/* Earpieces */}
        <mesh position={[0.35, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#2d2d3a" />
        </mesh>
        <mesh position={[-0.35, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#2d2d3a" />
        </mesh>
      </group>

      {/* Floating Hands */}
      <Float speed={5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0.7, 0, 0.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#6366f1" />
        </mesh>
      </Float>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-0.7, 0, 0.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#6366f1" />
        </mesh>
      </Float>

      {/* Hovering Platform */}
      <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <MeshWobbleMaterial factor={0.1} speed={1} color="#1e1e2e" />
      </mesh>
    </group>
  );
};

const Avatar3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '350px' }}>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 0.5, 4]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <RobotAvatar />
        </PresentationControls>

        <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
