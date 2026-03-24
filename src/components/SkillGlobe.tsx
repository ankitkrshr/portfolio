"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { 
  SiCplusplus, SiReact, SiNextdotjs, SiNodedotjs, SiPython, 
  SiTailwindcss, SiDocker, SiGit, SiPostgresql, SiMongodb,
  SiJavascript, SiExpress, SiVercel, SiFigma, SiFlask, SiFastapi, SiScikitlearn, SiTensorflow,
  SiKubernetes, SiFirebase, SiKotlin, SiAndroid, SiJupyter, SiGooglecolab
} from "react-icons/si";
import { FaAws, FaCloud } from "react-icons/fa";

const SkillIcon = ({ position, name, Icon }: { position: [number, number, number], name: string, Icon: React.ComponentType<{ className?: string }> }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Html
        position={position}
        center
        sprite
        distanceFactor={10}
      >
        <div className="flex flex-col items-center gap-1 pointer-events-none drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]">
          <Icon className="text-4xl text-white opacity-100" />
        </div>
      </Html>
    </Float>
  );
};

const IconsGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const skillsList = [
    { name: "C++", Icon: SiCplusplus }, 
    { name: "Python", Icon: SiPython },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "TensorFlow", Icon: SiTensorflow },
    { name: "FastAPI", Icon: SiFastapi },
    { name: "Flask", Icon: SiFlask },
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Scikit-Learn", Icon: SiScikitlearn },
    { name: "Docker", Icon: SiDocker },
    { name: "Git", Icon: SiGit },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Vercel", Icon: SiVercel },
    { name: "AWS", Icon: FaAws },
    { name: "GCP", Icon: FaCloud },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "Firebase", Icon: SiFirebase },
    { name: "Kotlin", Icon: SiKotlin },
    { name: "Android", Icon: SiAndroid },
    { name: "Jupyter", Icon: SiJupyter },
    { name: "Colab", Icon: SiGooglecolab },
  ];

  const positions = useMemo(() => {
    const pts = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    for (let i = 0; i < skillsList.length; i++) {
      const y = 1 - (i / (skillsList.length - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      pts.push([x * 2.4, y * 2.4, z * 2.4] as [number, number, number]);
    }
    return pts;
  }, [skillsList.length]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Sphere / Wireframe */}
      <Sphere args={[2.8, 32, 32]}>
        <meshStandardMaterial 
          color="#8B5CF6" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </Sphere>
      
      {skillsList.map((skill, i) => (
        <SkillIcon key={skill.name} position={positions[i]} name={skill.name} Icon={skill.Icon} />
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
