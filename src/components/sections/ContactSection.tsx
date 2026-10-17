"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/content";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Phone,
  MapPin,
  Check,
  Copy,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const { personal, socials } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8b5cf6", "#06b6d4", "#a855f7", "#ffffff"],
    });

    // Create mailto fallback
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/20 text-xs font-mono text-violet-300">
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>Get In Touch</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Let&apos;s Build Something Extraordinary
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Whether you have an internship opportunity, a project proposal, or just want to discuss AI and full-stack development.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6"
        >
          <div className="space-y-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Feel free to reach out via email, phone, or connect through social channels.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Email item with copy button */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-violet-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone item */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                  Phone
                </span>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-cyan-400 transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  {personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-4 border-t border-zinc-800/80">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
              Social Links
            </span>
            <div className="flex items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/20 transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/20 transition-all hover:scale-105"
                aria-label="Twitter / X Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300">Subject</label>
              <input
                type="text"
                placeholder="Project inquiry / Opportunity / Collaboration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Share your requirements or thoughts here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-medium text-sm shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
              <Sparkles className="w-3.5 h-3.5 ml-1 text-cyan-200" />
            </button>

            {submitted && (
              <p className="text-center text-xs text-emerald-400 font-mono pt-2">
                Opening your email client to send the message... Thank you!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

