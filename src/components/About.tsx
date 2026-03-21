"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="w-full py-32 px-6 flex justify-center z-10 relative">
      <div className="max-w-6xl w-full flex flex-col gap-8">
        {/* Top three small cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-6 rounded-3xl flex flex-col gap-2 hover:glass-strong hover:-translate-y-4 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] hover:border-primary/50 transition-all duration-700 ease-out cursor-default"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase">Machine Learning Engineer</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">Aspiring Machine Learning Engineer focused on developing AI tools, computer vision, and NLP pipelines to solve real-world problems.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-6 rounded-3xl flex flex-col gap-2 hover:glass-strong hover:-translate-y-4 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] hover:border-primary/50 transition-all duration-700 ease-out cursor-default"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase">Education</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">B.Tech in Comp. Sci. & Engineering at Lovely Professional University (CGPA 8.11). DeepLearning.AI Certified.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-6 rounded-3xl flex flex-col gap-2 hover:glass-strong hover:-translate-y-4 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] hover:border-primary/50 transition-all duration-700 ease-out cursor-default"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase">Innovations</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">Represented LPU at Annual Project Expo (Innotek 2025). Built scalable projects like PersonaPath and Veterinary Diagnosis API.</p>
          </motion.div>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mindset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:glass-strong hover:scale-[1.03] hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(139,92,246,0.4)] hover:border-primary/40 transition-all duration-700 ease-out"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-4">Focus</h3>
              <p className="text-foreground/80 leading-relaxed"><strong className="text-foreground">Building intelligent AI solutions.</strong> I believe in the power of <strong>data and modeling</strong> to create impactful technology.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-8 z-10">
              <div className="relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src="/about/steps.jpeg" alt="Running" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src="/about/aimind.png" alt="Calisthenics" fill className="object-cover" />
              </div>
              <div className="relative aspect-[2/1] col-span-2 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src="/about/brain.png" alt="Kickboxing" fill className="object-cover" />
              </div>
            </div>
            
            <p className="mt-8 text-foreground/80 z-10"><strong className="text-foreground">Mastering body and mind</strong> is essential for achieving <strong>excellence</strong>.</p>
          </motion.div>

          {/* Center Image Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass p-2 hover:glass-strong hover:scale-[1.03] hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(139,92,246,0.4)] hover:border-primary/40 transition-all duration-700 ease-out">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image src="/about/fornow.jpeg" alt="Portrait" fill className="object-cover" priority />
              </div>
            </div>
            <div className="glass p-6 rounded-3xl text-center relative overflow-hidden group hover:glass-strong hover:scale-[1.03] hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(139,92,246,0.4)] hover:border-primary/40 transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity" style={{ backgroundImage: "url('/about/calisthenics.jpg')" }} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1 tracking-wider uppercase">New Delhi, India</h3>
                <p className="font-mono text-sm text-foreground/60">28.6139° N, 77.2090° E<br/>GMT+5:30</p>
              </div>
            </div>
          </motion.div>

          {/* Android Training */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-8 flex flex-col justify-between hover:glass-strong hover:scale-[1.03] hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(139,92,246,0.4)] hover:border-primary/40 transition-all duration-700 ease-out"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Android</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">Mastering <strong>Native Android Development</strong> and modern mobile architectures.</p>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">Completed extensive training in building responsive, user-centric mobile applications using industry-standard tools and patterns.</p>
              
              {/* Creative Element: System Diagnostic */}
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">System Optimization</span>
                  <span className="text-xs font-mono text-primary animate-pulse">99.2%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.2%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary/40 to-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2 border-t border-white/5 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-tighter">Architecture</span>
                    <span className="text-sm font-mono text-foreground/70">Clean/MVVM</span>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-tighter">Performance</span>
                    <span className="text-sm font-mono text-foreground/70">Optimized</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 font-medium">I deliver high-quality, future-proof mobile solutions.</p>
              <div className="glass-strong p-4 rounded-2xl">
                <p className="text-xs text-foreground/60 mb-2">Actively exploring the intersection of AI and Human Experience. Available for consulting.</p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Open to collaboration & freelance
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
