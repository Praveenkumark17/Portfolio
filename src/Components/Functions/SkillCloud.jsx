import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  Text, 
  Points, 
  PointMaterial, 
  MeshDistortMaterial, 
  Sphere,
  PerspectiveCamera,
  ContactShadows
} from '@react-three/drei';
import * as THREE from 'three';

const TechNode = ({ position, name, color }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.25}
          color="white"
          font="https://fonts.gstatic.com/s/robotomono/v22/L0tkDFo45GPOfruXAd6V.woff"
        >
          {name}
        </Text>
      </mesh>
    </Float>
  );
};

const ConnectionLines = ({ nodes }) => {
  const lineRef = useRef();
  
  const points = useMemo(() => {
    const pts = [];
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach(target => {
        if (new THREE.Vector3(...node.pos).distanceTo(new THREE.Vector3(...target.pos)) < 3) {
          pts.push(new THREE.Vector3(...node.pos), new THREE.Vector3(...target.pos));
        }
      });
    });
    return pts;
  }, [nodes]);

  return (
    <lineSegments>
      <bufferGeometry attach="geometry" onUpdate={self => self.setFromPoints(points)} />
      <lineBasicMaterial attach="material" color="#6366f1" transparent opacity={0.2} />
    </lineSegments>
  );
};

const NebulaCore = () => {
  const groupRef = useRef();
  
  const nodes = useMemo(() => [
    { name: 'React', pos: [1.5, 1, 0], color: '#61dafb' },
    { name: 'Java', pos: [-1.5, 1.2, 0.5], color: '#007396' },
    { name: 'Node', pos: [0, -1.5, 1], color: '#339933' },
    { name: 'JS', pos: [-1, -1, -1.2], color: '#f7df1e' },
    { name: 'MySQL', pos: [1.2, -0.8, -1], color: '#4479a1' },
    { name: 'Spring', pos: [0.5, 1.5, -0.5], color: '#6db33f' },
  ], []);

  useFrame((state) => {
    groupRef.current.rotation.y += 0.003;
    groupRef.current.rotation.x += 0.002;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <TechNode key={i} position={node.pos} name={node.name} color={node.color} />
      ))}
      <ConnectionLines nodes={nodes} />
      
      {/* Central Energy Core */}
      <mesh>
        <Sphere args={[0.8, 64, 64]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
            metalness={1}
            opacity={0.15}
            transparent
          />
        </Sphere>
      </mesh>

      {/* Background Particles */}
      <Points limit={500}>
        <PointMaterial 
          transparent 
          color="#6366f1" 
          size={0.05} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.4}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={500}
            array={new Float32Array(500 * 3).map(() => (Math.random() - 0.5) * 10)}
            itemSize={3}
          />
        </bufferGeometry>
      </Points>
    </group>
  );
};

const SkillCloud = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '350px' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <NebulaCore />
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
};

export default SkillCloud;
