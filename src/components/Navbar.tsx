"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* Main Nav (Top Center) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass pl-2 pr-2 py-2 rounded-full hidden md:flex items-center gap-1 shadow-xl border border-white/5"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-5 py-2 text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-white/10 rounded-full transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </motion.nav>

      <motion.a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Ankit_Kumar_CV.pdf"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-6 right-6 md:right-10 z-50 px-5 py-2.5 rounded-full glass hover:glass-strong flex items-center gap-2 transition-all duration-300 shadow-xl border border-white/5 hover:scale-105"
      >
        <Download className="w-4 h-4 text-foreground/80" />
        <span className="text-sm font-medium text-foreground/80 hidden sm:inline-block">Download CV</span>
      </motion.a>
    </>
  );
};
