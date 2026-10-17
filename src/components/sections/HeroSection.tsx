"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Terminal } from "lucide-react";

export default function HeroSection() {
  const { personal, socials } = PORTFOLIO_DATA;

  // Stagger animation container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto z-10"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col items-center text-center space-y-6"
      >
        {/* Availability Badge */}
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/40 backdrop-blur-md text-xs font-medium text-violet-300 shadow-lg shadow-violet-950/50">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            <span className="font-mono">{personal.role}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              NIST University &apos;27
            </span>
          </div>
        </motion.div>

        {/* Main Name Heading with Staggered Typography */}
        <motion.div variants={item} className="space-y-2">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 drop-shadow-sm">
              {personal.name}
            </span>
          </h1>
          <p className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300">
            Engineering Intelligent Web Systems & AI Vision Models
          </p>
        </motion.div>

        {/* Short Bio summary */}
        <motion.p
          variants={item}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-sans"
        >
          {personal.shortBio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-violet-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 font-medium text-sm backdrop-blur-md transition-all hover:border-violet-500/50 hover:text-white active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-violet-400" />
            <span>Contact Me</span>
          </a>

          <a
            href="https://github.com/sasmalshivame"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-zinc-800 bg-zinc-900/60 hover:border-violet-500/40 text-zinc-400 hover:text-white transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-zinc-800 bg-zinc-900/60 hover:border-cyan-500/40 text-zinc-400 hover:text-white transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Quick Highlights / Stats Grid */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-8"
        >
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass border border-white/5 bg-zinc-900/40 flex flex-col items-center justify-center group hover:border-violet-500/30 transition-all"
            >
              <span className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-violet-400 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-400 font-mono mt-0.5">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Interactive Terminal Pill */}
        <motion.div variants={item} className="pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>npx view sibam-sasmal --experience</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 pointer-events-none"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

