"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ["about", "skills", "projects", "experience", "education", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center py-4 px-4 sm:px-6 pointer-events-none`}
      >
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass shadow-2xl shadow-violet-950/20 border border-violet-500/20 bg-zinc-950/80 backdrop-blur-xl"
              : "bg-zinc-900/40 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Sibam Sasmal Portfolio"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center font-heading font-bold text-xs text-white">
                SS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-zinc-100 group-hover:text-violet-400 transition-colors">
                Sibam Sasmal
              </span>
              <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline-block">
                Full Stack & AI/ML
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-white/5 text-xs font-medium">
            {PORTFOLIO_DATA.navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-violet-600/30 text-violet-300 border border-violet-500/30 shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Action & Status */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-xs font-medium text-white shadow-lg shadow-violet-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-2xl glass border border-violet-500/20 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-zinc-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-zinc-400">Available for hire & collaboration</span>
              </div>
              {PORTFOLIO_DATA.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-zinc-300 hover:text-violet-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-zinc-800 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600 text-sm font-medium text-white shadow-md shadow-violet-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  Contact Sibam
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

