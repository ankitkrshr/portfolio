"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* Theme Toggle (Top Left) */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-6 left-6 md:left-10 z-50 p-3 rounded-full glass hover:glass-strong transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-foreground/80" />
        ) : (
          <Moon className="w-5 h-5 text-foreground/80" />
        )}
      </motion.button>

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
