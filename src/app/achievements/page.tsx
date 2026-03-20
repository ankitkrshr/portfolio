"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <Navbar />
      <div className="z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-8"
        >
          Achievements
        </motion.h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Coming soon. A collection of my professional milestones and awards.
        </p>
      </div>
      <Footer />
    </main>
  );
}
