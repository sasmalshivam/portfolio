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
    <footer className="relative border-t border-zinc-900 bg-black/90 backdrop-blur-md z-10 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-neon-green to-neon-blue flex items-center justify-center font-heading font-black text-[10px] text-black">
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
              className="hover:text-neon-green transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Tech Stack Badge & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-500">
            <Code2 className="w-3.5 h-3.5 text-neon-green" />
            <span>Next.js 14 • Three.js • Cyber Neon</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-950 border border-zinc-800 hover:border-neon-green/60 text-zinc-400 hover:text-neon-green transition-all hover:scale-105 active:scale-95 hover:shadow-neon-green"
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
