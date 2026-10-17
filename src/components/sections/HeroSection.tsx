"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Terminal } from "lucide-react";

export default function HeroSection() {
  const { personal, socials } = PORTFOLIO_DATA;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Hero Text & Actions */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-8 flex flex-col items-start text-left space-y-6"
        >
          {/* Availability Badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-green/30 bg-black/60 backdrop-blur-md text-xs font-mono text-neon-green shadow-[0_0_15px_rgba(57,255,20,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
              </span>
              <span>{personal.role}</span>
              <span className="text-zinc-700">|</span>
              <span className="text-neon-blue flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                NIST University &apos;27
              </span>
            </div>
          </motion.div>

          {/* Main Name Heading with Neon Gradient Typography */}
          <motion.div variants={item} className="space-y-3">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white leading-none">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-cyan-300 to-neon-blue drop-shadow-[0_0_35px_rgba(57,255,20,0.35)]">
                {personal.name}
              </span>
            </h1>
            <p className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300">
              Engineering Resilient Web Architectures & Computer Vision Systems
            </p>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            variants={item}
            className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-sans"
          >
            {personal.shortBio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green hover:to-cyan-300 text-black font-bold text-sm shadow-neon-green hover:shadow-neon-dual transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-neon-blue/40 bg-black/60 hover:bg-neon-blue/10 text-neon-blue font-medium text-sm backdrop-blur-md transition-all hover:border-neon-blue hover:shadow-neon-blue active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-neon-green" />
              <span>Contact Me</span>
            </a>

            <a
              href="https://github.com/sasmalshivam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-800 bg-zinc-950/80 hover:border-neon-green/60 text-zinc-400 hover:text-neon-green transition-all hover:scale-105 hover:shadow-neon-green"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-800 bg-zinc-950/80 hover:border-neon-blue/60 text-zinc-400 hover:text-neon-blue transition-all hover:scale-105 hover:shadow-neon-blue"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl pt-6"
          >
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-neon-green/50 flex flex-col items-center justify-center group transition-all hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]"
              >
                <span className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-neon-green transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-500 font-mono mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Interactive Terminal Pill */}
          <motion.div variants={item} className="pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-neon-green" />
              <span>npx view sibam-sasmal --stack</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: spacer for desktop so ScrollPhoto has clear space */}
        <div className="hidden lg:block lg:col-span-4" />
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 pointer-events-none"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-neon-green" />
        </motion.div>
      </motion.div>
    </section>
  );
}
