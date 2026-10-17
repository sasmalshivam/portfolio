"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { GraduationCap, Code2, Award, Cpu, CheckCircle2, BookOpen } from "lucide-react";

export default function AboutSection() {
  const { personal, education, skills, marqueeSkills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === "All"
      ? skills.flatMap((c) => c.skills.map((s) => ({ ...s, category: c.category })))
      : skills
          .find((c) => c.category === selectedCategory)
          ?.skills.map((s) => ({ ...s, category: selectedCategory })) || [];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-neon-green/30 text-xs font-mono text-neon-green">
          <Code2 className="w-3.5 h-3.5 text-neon-blue" />
          <span>About & Background</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Who I Am & What Drives Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue rounded-full shadow-neon-green" />
      </div>

      {/* Grid: Bio & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Column: Detailed Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-surfaceCard/90 backdrop-blur-xl space-y-6 shadow-2xl"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-800/80">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-neon-green" />
            <span className="font-mono text-xs text-zinc-500 ml-2">sibam_profile.md</span>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {personal.aboutBio.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Core Strengths Chips */}
          <div className="pt-4 border-t border-zinc-800/80">
            <span className="text-xs font-mono text-neon-green uppercase tracking-wider block mb-3">
              Core Competencies
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "High-Throughput APIs",
                "Deep Learning & CNNs",
                "Computer Vision / OpenCV",
                "Full Stack Architecture",
                "Memory Optimization in C",
                "Real-time Safety Systems",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-black border border-zinc-800 hover:border-neon-green/40 text-zinc-300 flex items-center gap-1.5 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-neon-green" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Education & Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Degree Card */}
          <div className="rounded-3xl p-6 border border-zinc-800 bg-surfaceCard/90 backdrop-blur-xl hover:border-neon-green/50 transition-all relative overflow-hidden group hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-full blur-2xl group-hover:bg-neon-green/20 transition-all pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-neon-green/10 border border-neon-green/30 text-neon-green">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neon-blue">2023 – 2027</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green font-mono">
                    CGPA 8.5
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-neon-green transition-colors">
                  {education[0].institution}
                </h3>
                <p className="text-xs text-zinc-300">{education[0].degree}</p>
                <p className="text-[11px] text-zinc-500 font-mono">{education[0].location}</p>
              </div>
            </div>
          </div>

          {/* School Card */}
          <div className="rounded-3xl p-6 border border-zinc-800 bg-surfaceCard/90 backdrop-blur-xl hover:border-neon-blue/50 transition-all group hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-neon-blue/10 border border-neon-blue/30 text-neon-blue">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neon-blue">2019 – 2022</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue font-mono">
                    Science
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-neon-blue transition-colors">
                  {education[1].institution}
                </h3>
                <p className="text-xs text-zinc-300">{education[1].degree}</p>
                <p className="text-[11px] text-zinc-500 font-mono">{education[1].score}</p>
              </div>
            </div>
          </div>

          {/* Featured Achievement Callout */}
          <div className="p-5 rounded-3xl bg-zinc-950 border border-neon-green/30 flex items-center gap-4 shadow-neon-green">
            <div className="p-3 rounded-xl bg-neon-green/15 text-neon-green shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-mono text-neon-green uppercase tracking-wider font-bold">
                Hacktriad 2.0 Winner
              </p>
              <p className="text-sm font-medium text-white">
                Ranked #1 in Manufacturing Domain out of 832 nationwide teams
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Showcase Section */}
      <div id="skills" className="pt-8">
        <div className="flex flex-col items-center text-center mb-8 space-y-2">
          <span className="font-mono text-xs text-neon-green uppercase tracking-widest">
            Expertise & Stack
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Technical Toolbelt
          </h3>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-neon-green to-neon-blue text-black font-bold shadow-neon-green"
                  : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              key={`${skill.name}-${idx}`}
              className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-neon-green/50 transition-all flex flex-col items-center text-center group hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]"
            >
              <div className="w-2 h-2 rounded-full bg-neon-green/50 group-hover:bg-neon-blue mb-2 transition-colors" />
              <span className="font-medium text-xs sm:text-sm text-zinc-200 group-hover:text-white transition-colors">
                {skill.name}
              </span>
              {skill.level && (
                <span className="text-[10px] font-mono text-zinc-500 mt-1">
                  {skill.level}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Skills Marquee */}
        <div className="relative w-full overflow-hidden py-4 pause-marquee border-y border-zinc-800/80 bg-black/60">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex w-max animate-marquee space-x-6 py-2">
            {[...marqueeSkills, ...marqueeSkills].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-neon-green hover:text-neon-green transition-all"
              >
                <Cpu className="w-3.5 h-3.5 text-neon-green" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
