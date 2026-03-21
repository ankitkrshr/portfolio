"use client";

import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";

export const Achievements = () => {
  const certs = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford & Deeplearning.ai",
      date: "Oct 2025",
      icon: <Award className="w-8 h-8 text-primary/80" />
    },
    {
      title: "Generative AI Professional",
      issuer: "Oracle Cloud Infrastructure 2025",
      date: "Sep 2025",
      icon: <Award className="w-8 h-8 text-primary/80" />
    }
  ];

  const trophies = [
    {
      title: "Innotek 2025",
      description: "Selected to represent the School of CSE at the Annual Project Expo.",
      date: "Apr 2025",
      icon: <Medal className="w-8 h-8 text-secondary/80" />
    },
    {
      title: "Model Masters Expo",
      description: "Achieved Top 3 ranking in Model Maestro Expo.",
      date: "Mar 2025",
      icon: <Medal className="w-8 h-8 text-secondary/80" />
    }
  ];

  return (
    <section id="achievements" className="w-full py-32 px-6 flex justify-center z-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50 -z-10" />
      
      <div className="max-w-6xl w-full flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Certifications & Achievements</h2>
          <p className="text-foreground/60 text-lg max-w-2xl text-center">A showcase of continuous learning and milestone recognitions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4">
          
          {/* Certificates Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" /> Certificates
            </h3>
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-[2rem] flex items-start gap-6 group hover:glass-strong transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] hover:border-primary/60 cursor-default min-h-[160px]"
              >
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors duration-500">
                  {cert.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">{cert.title}</h4>
                  <p className="text-foreground/70 font-medium">{cert.issuer}</p>
                  <p className="text-xs font-mono text-foreground/40 mt-3 uppercase tracking-wider">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3">
              <Medal className="w-6 h-6 text-secondary" /> Achievements
            </h3>
            {trophies.map((trophy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-[2rem] flex items-start gap-6 group hover:glass-strong transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(234,179,8,0.4)] hover:border-secondary/60 cursor-default min-h-[160px]"
              >
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-secondary/10 transition-colors duration-500">
                  {trophy.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold leading-tight mb-2 group-hover:text-secondary transition-colors">{trophy.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{trophy.description}</p>
                  <p className="text-xs font-mono text-foreground/40 mt-3 uppercase tracking-wider">{trophy.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
