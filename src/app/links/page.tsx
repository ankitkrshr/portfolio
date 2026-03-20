"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Links() {
  const links = [
    { name: "GitHub", icon: <Github />, url: "https://github.com", color: "hover:text-white" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com", color: "hover:text-[#0077B5]" },
    { name: "Twitter", icon: <Twitter />, url: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
    { name: "Email", icon: <Mail />, url: "mailto:ankit@example.com", color: "hover:text-primary" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <Navbar />
      <div className="z-10 text-center w-full max-w-xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-12"
        >
          My Links
        </motion.h1>
        <div className="grid grid-cols-1 gap-4">
          {links.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-6 rounded-2xl flex items-center justify-between group transition-all duration-300 hover:glass-strong ${link.color}`}
            >
              <div className="flex items-center gap-4 text-xl font-medium">
                {link.icon}
                {link.name}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
