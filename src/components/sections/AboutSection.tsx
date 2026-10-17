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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/20 text-xs font-mono text-violet-300">
          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>About & Background</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Who I Am & What Drives Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
      </div>

      {/* Grid: Bio & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Column: Detailed Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
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
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
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
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-violet-400" />
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
          <div className="glass rounded-3xl p-6 border border-white/10 hover:border-violet-500/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl group-hover:bg-violet-600/20 transition-all" />
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-violet-600/20 border border-violet-500/30 text-violet-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400">2023 – 2027</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-mono">
                    CGPA 8.5
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {education[0].institution}
                </h3>
                <p className="text-xs text-zinc-300">{education[0].degree}</p>
                <p className="text-[11px] text-zinc-500 font-mono">{education[0].location}</p>
              </div>
            </div>
          </div>

          {/* School Card */}
          <div className="glass rounded-3xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400">2019 – 2022</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">
                    Science
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {education[1].institution}
                </h3>
                <p className="text-xs text-zinc-300">{education[1].degree}</p>
                <p className="text-[11px] text-zinc-500 font-mono">{education[1].score}</p>
              </div>
            </div>
          </div>

          {/* Featured Achievement Callout */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-violet-950/60 to-zinc-900/80 border border-violet-500/30 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-violet-500/20 text-violet-300 shrink-0">
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-xs font-mono text-violet-300 uppercase tracking-wider">
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
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
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
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                  : "bg-zinc-900/70 text-zinc-400 hover:text-white border border-zinc-800"
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
              className="p-3.5 rounded-2xl glass border border-white/5 hover:border-violet-500/40 hover:bg-violet-950/20 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-2 h-2 rounded-full bg-violet-400/50 group-hover:bg-cyan-400 mb-2 transition-colors" />
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
        <div className="relative w-full overflow-hidden py-4 pause-marquee border-y border-zinc-800/80 bg-zinc-950/40">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex w-max animate-marquee space-x-6 py-2">
            {[...marqueeSkills, ...marqueeSkills].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-violet-500/50 hover:text-violet-300 transition-all"
              >
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

