"use client";

import { motion } from "framer-motion";
import { SkillGlobe } from "./SkillGlobe";

export const Skills = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background (Layer 2) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-screen opacity-40"
        src="/media/skills-bg.webm"
      />
      
      {/* Dark Overlay gradient */}
      <div className="absolute inset-0 bg-background/60 -z-10" />

      <div className="z-10 w-full mx-auto px-6 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center"
        >
          My Tech Stack
        </motion.h2>
        
        {/* 3D Skills Globe */}
        <div className="w-full flex justify-center">
          <SkillGlobe />
        </div>
      </div>
    </section>
  );
};
