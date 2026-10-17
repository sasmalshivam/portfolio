"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Trophy, Star } from "lucide-react";

export default function ExperienceSection() {
  const { experience, achievements } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/20 text-xs font-mono text-violet-300">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>Career & Milestones</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Experience & Achievements
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Internships where I shipped production backend APIs and trained ML models, alongside competitive hackathon victories.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Vertical Timeline for Work Experience */}
        <div className="lg:col-span-7">
          <h3 className="font-heading text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-violet-400" />
            <span>Professional Internships</span>
          </h3>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-violet-500/20 space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-950 border-2 border-violet-500 flex items-center justify-center text-violet-400 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Timeline content card */}
                <div className="glass rounded-3xl p-6 sm:p-7 border border-white/10 group-hover:border-violet-500/40 transition-all space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800">
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-cyan-400">{exp.company}</p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1 text-violet-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements & Honors */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-heading text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Honors & Certifications</span>
          </h3>

          <div className="space-y-4">
            {achievements.map((ach, aIdx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: aIdx * 0.1 }}
                className="glass rounded-2xl p-5 border border-white/10 hover:border-yellow-500/40 transition-all relative overflow-hidden group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 shrink-0 group-hover:scale-105 transition-transform">
                    {aIdx === 0 ? (
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    ) : aIdx === 1 ? (
                      <Star className="w-5 h-5 text-violet-400" />
                    ) : (
                      <Award className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-yellow-300 transition-colors">
                        {ach.title}
                      </h4>
                      {ach.badge && (
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 shrink-0">
                          {ach.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-cyan-400 font-mono">{ach.organization} • {ach.year}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

