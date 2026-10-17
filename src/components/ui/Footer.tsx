"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/content";
import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const { personal, navigation } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md z-10 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center font-heading font-bold text-[10px] text-white">
              SS
            </div>
            <span className="font-heading font-bold text-sm text-white">
              {personal.name}
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()} Sibam Sasmal. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-violet-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Tech Stack Badge & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-500">
            <Code2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Next.js 14 • Three.js • Tailwind</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 text-zinc-400 hover:text-white transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

