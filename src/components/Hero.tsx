"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  const name1 = "ANKIT".split("");
  const name2 = "SHARMA".split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/media/blackhole.webm"
      />
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background -z-10" />

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center mt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-2 md:gap-4 overflow-hidden"
        >
          <div className="flex overflow-hidden">
            {name1.map((char, index) => (
              <motion.span
                key={`n1-${index}`}
                variants={item}
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex overflow-hidden">
            {name2.map((char, index) => (
              <motion.span
                key={`n2-${index}`}
                variants={item}
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-sm md:text-lg text-foreground/60 font-medium tracking-[0.3em] uppercase"
        >
          Developer
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs text-foreground/40 uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
