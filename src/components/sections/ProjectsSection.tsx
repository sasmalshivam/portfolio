"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import TiltCard from "@/components/ui/TiltCard";
import { FolderGit2, Github, ExternalLink, Sparkles, CheckCircle, Layers } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full Stack", "AI/ML & Vision"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-neon-green/30 text-xs font-mono text-neon-green">
          <FolderGit2 className="w-3.5 h-3.5 text-neon-blue" />
          <span>Featured Work</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Engineered Projects & AI Solutions
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          A showcase of industrial safety computer vision pipelines, full-stack web platforms, and deep learning detectors.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue rounded-full shadow-neon-green" />
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === cat
                ? "bg-gradient-to-r from-neon-green to-neon-blue text-black font-bold shadow-neon-green"
                : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={project.featured && idx === 0 ? "md:col-span-2 lg:col-span-2" : ""}
          >
            <TiltCard className="h-full flex flex-col justify-between p-6 sm:p-8 group">
              <div className="space-y-4">
                {/* Card Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-neon-green/10 border border-neon-green/30 text-neon-green">
                      <Layers className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-neon-blue px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-neon-blue/30">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-neon-green bg-neon-green/10 border border-neon-green/30 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-neon-green" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-neon-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                {project.highlights && (
                  <ul className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-neon-green shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Tech Stack & Action Links */}
              <div className="pt-6 mt-4 border-t border-zinc-800/60 space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black border border-zinc-800 text-zinc-400 group-hover:border-neon-green/30 group-hover:text-zinc-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-green hover:text-neon-blue transition-colors group/link"
                    >
                      <span>Explore</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 stroke-[2.5]" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
