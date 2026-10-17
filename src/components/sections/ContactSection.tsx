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

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#39FF14", "#00F0FF", "#0066FF", "#FFFFFF"],
    });

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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-neon-green/30 text-xs font-mono text-neon-green">
          <Mail className="w-3.5 h-3.5 text-neon-blue" />
          <span>Get In Touch</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Let&apos;s Build Something Extraordinary
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Whether you have an internship opportunity, a project proposal, or just want to discuss AI and full-stack development.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue rounded-full shadow-neon-green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-surfaceCard/90 backdrop-blur-xl space-y-6 shadow-2xl"
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
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black border border-zinc-800 hover:border-neon-green/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neon-green/10 text-neon-green">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-neon-green transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-neon-green" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone item */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black border border-zinc-800 hover:border-neon-blue/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-neon-blue/10 text-neon-blue">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                  Phone
                </span>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-neon-blue transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black border border-zinc-800">
              <div className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400">
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
            <span className="text-xs font-mono text-neon-green uppercase tracking-wider block mb-3">
              Social Links
            </span>
            <div className="flex items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-black border border-zinc-800 text-zinc-400 hover:text-neon-green hover:border-neon-green/60 transition-all hover:scale-105 hover:shadow-neon-green"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-black border border-zinc-800 text-zinc-400 hover:text-neon-blue hover:border-neon-blue/60 transition-all hover:scale-105 hover:shadow-neon-blue"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-black border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/60 transition-all hover:scale-105"
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
          className="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-surfaceCard/90 backdrop-blur-xl shadow-2xl"
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
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors"
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
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors"
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
                className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green text-sm text-zinc-100 placeholder:text-zinc-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green hover:to-cyan-300 text-black font-bold text-sm shadow-neon-green flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4 stroke-[2.5]" />
              <span>Send Message</span>
              <Sparkles className="w-3.5 h-3.5 ml-1 text-black stroke-[2.5]" />
            </button>

            {submitted && (
              <p className="text-center text-xs text-neon-green font-mono pt-2">
                Opening your email client to send the message... Thank you!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
