"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast simulated progressive load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 60);

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
            y: -40,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-white"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute w-96 h-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

          {/* Monogram / Logo Mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-2xl border border-violet-500/30 bg-violet-950/30 backdrop-blur-xl flex items-center justify-center shadow-lg shadow-violet-500/10">
              <span className="font-heading text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-violet-400 via-white to-cyan-300">
                SS
              </span>
            </div>
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 -m-2 rounded-3xl border border-cyan-500/20 border-t-cyan-400 animate-spin" />
          </motion.div>

          {/* Name & Title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="font-heading font-semibold text-lg text-zinc-200 tracking-wide mb-1"
          >
            Sibam Sasmal
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-xs uppercase tracking-widest text-zinc-500 mb-6"
          >
            Portfolio Experience • 2026
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Progress Percentage */}
          <div className="mt-3 font-mono text-xs text-zinc-400">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

