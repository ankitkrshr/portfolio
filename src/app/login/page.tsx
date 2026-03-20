"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <Navbar />
      <div className="z-10 w-full max-w-md glass p-10 rounded-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-8">Login</h1>
          <div className="flex flex-col gap-4 text-left">
            <div>
              <label className="text-sm font-medium text-foreground/60 mb-2 block">Email</label>
              <input type="email" className="w-full glass p-4 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/60 mb-2 block">Password</label>
              <input type="password" className="w-full glass p-4 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="••••••••" />
            </div>
            <button className="w-full py-4 mt-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg active:scale-95">
              Sign In
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
