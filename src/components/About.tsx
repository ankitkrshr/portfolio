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
            className="glass p-6 rounded-3xl flex flex-col gap-2 hover:glass-strong transition-all"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase">Tech Lead</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">Leading innovation in AI-driven solutions. Currently focused on building scalable cloud architectures and high-performance web applications.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-6 rounded-3xl flex flex-col gap-2 hover:glass-strong transition-all"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase">Education</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">Graduate in Computer Science & Engineering. Passionate about Artificial Intelligence, Machine Learning, and Modern Web Technologies.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-6 rounded-3xl flex flex-col gap-2 hover:glass-strong transition-all"
          >
            <h4 className="text-xs font-bold tracking-widest uppercase">Innovations</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">Winner of multiple national-level hackathons. Specialized in rapid prototyping and translating complex technical concepts into business reality.</p>
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
            className="glass rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-4">Mindset</h3>
              <p className="text-foreground/80 leading-relaxed"><strong className="text-foreground">Building more than software.</strong> I believe in the power of <strong>discipline and focus</strong> to create impactful technology.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-8 z-10">
              <div className="relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src="/about/run.jpg" alt="Running" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src="/about/calisthenics.jpg" alt="Calisthenics" fill className="object-cover" />
              </div>
              <div className="relative aspect-[2/1] col-span-2 rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <Image src="/about/kickboxing.jpg" alt="Kickboxing" fill className="object-cover" />
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
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image src="/about/portrait.jpg" alt="Portrait" fill className="object-cover" priority />
              </div>
            </div>
            <div className="glass p-6 rounded-3xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity" style={{ backgroundImage: "url('/about/calisthenics.jpg')" }} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1 tracking-wider uppercase">New Delhi, India</h3>
                <p className="font-mono text-sm text-foreground/60">28.6139° N, 77.2090° E<br/>GMT+5:30</p>
              </div>
            </div>
          </motion.div>

          {/* Craft */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Craft</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">Building scalable <strong>apps, websites, and automations</strong>.</p>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">Modern tech provides a competitive edge, and I excel in tailoring tools to fit unique business requirements.</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "React", "TS", "AWS", "Python", "Node", "Tailwind", "Docker", "Git"].map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono glass rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 font-medium">I deliver high-quality, future-proof tech solutions.</p>
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
