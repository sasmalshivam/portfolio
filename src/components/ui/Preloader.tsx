"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + diff, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white cyber-grid-bg"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute w-96 h-96 rounded-full bg-neon-green/15 blur-[120px] pointer-events-none" />
          <div className="absolute w-80 h-80 rounded-full bg-neon-blue/15 blur-[100px] pointer-events-none" />

          {/* Monogram Mark with Cyber Border */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-2xl border border-neon-green/40 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-center shadow-neon-green">
              <span className="font-heading text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                SS
              </span>
            </div>
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 -m-2 rounded-3xl border border-neon-blue/30 border-t-neon-green animate-spin" />
          </motion.div>

          {/* Name & Title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="font-heading font-semibold text-lg text-white tracking-wide mb-1"
          >
            Sibam Sasmal
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-6"
          >
            System Online • Initializing 3D Portfolio
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-48 h-1 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-green via-cyan-400 to-neon-blue shadow-neon-green"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Progress Percentage */}
          <div className="mt-3 font-mono text-xs text-neon-green">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
