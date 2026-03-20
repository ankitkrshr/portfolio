"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Guestbook() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <Navbar />
      <div className="z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-8"
        >
          Guestbook
        </motion.h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Coming soon. This is where visitors will be able to leave messages.
        </p>
      </div>
      <Footer />
    </main>
  );
}
