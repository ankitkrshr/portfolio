"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

const SkillIcon = ({ position, name }: { position: [number, number, number], name: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} roughness={0} />
      </mesh>
      <Text
        position={[position[0], position[1] - 0.4, position[2]]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Float>
  );
};

const IconsGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "Tailwind", "Docker", "Git", "PostgreSQL", "MongoDB",
    "JavaScript", "Express", "Vercel", "Figma", "Three.js"
  ];

  const positions = useMemo(() => {
    const pts = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    for (let i = 0; i < skills.length; i++) {
      const y = 1 - (i / (skills.length - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      pts.push([x * 3, y * 3, z * 3] as [number, number, number]);
    }
    return pts;
  }, [skills.length]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Sphere / Wireframe */}
      <Sphere args={[2.5, 32, 32]}>
        <meshStandardMaterial 
          color="#312354" 
          wireframe 
          transparent 
          opacity={0.1} 
        />
      </Sphere>
      
      {skills.map((skill, i) => (
        <SkillIcon key={skill} position={positions[i]} name={skill} />
      ))}
    </group>
  );
};

export const SkillGlobe = () => {
  return (
    <div className="w-full h-[600px] md:h-[800px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#312354" />
        <IconsGlobe />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
