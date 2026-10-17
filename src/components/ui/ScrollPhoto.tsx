"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function ScrollPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const tiltX = useSpring(mouseY, springConfig);
  const tiltY = useSpring(mouseX, springConfig);

  // Global scroll tracking
  const { scrollYProgress } = useScroll();

  // Scroll mapping for Desktop:
  // 0.0 -> Hero (large centered-right, floating, green glow)
  // 0.18 - 0.45 -> About (scales down, moves side, rotates in 3D)
  // 0.55 - 1.0 -> Projects & Beyond (pins as small circular cyber avatar in corner)
  const photoScale = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.75], [1, 0.85, 0.45, 0.35]);
  const photoRotateY = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, -12, 0]);
  const photoRotateZ = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 2, 0]);

  // Dynamic positioning across scroll
  const topPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.8],
    ["20%", "26%", "16px", "16px"]
  );

  const rightPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.8],
    ["8%", "5%", "24px", "24px"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    ["28px", "32px", "9999px"]
  );

  // Soft Neon Aura Glow Behind Photo (shifts green -> cyan -> blue)
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75],
    [
      "radial-gradient(circle, rgba(57, 255, 20, 0.35) 0%, rgba(0, 240, 255, 0.15) 50%, transparent 70%)",
      "radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(0, 102, 255, 0.15) 50%, transparent 70%)",
      "radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, rgba(57, 255, 20, 0.12) 50%, transparent 70%)",
    ]
  );

  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7],
    ["rgba(57, 255, 20, 0.5)", "rgba(0, 240, 255, 0.7)", "rgba(57, 255, 20, 0.5)"]
  );

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    return () => {
      window.removeEventListener("resize", checkViewport);
      mediaQuery.removeEventListener("change", motionListener);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set((x / (rect.width / 2)) * 8);
    mouseY.set(-(y / (rect.height / 2)) * 8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Static Fallback for Reduced Motion
  if (reducedMotion) {
    return (
      <div className="hidden lg:block absolute top-28 right-12 z-20 w-72 h-96 rounded-3xl overflow-hidden border-2 border-neon-green/40 shadow-neon-green bg-black">
        <Image
          src="/images/me.jpg"
          alt="Sibam Sasmal Profile"
          fill
          priority
          quality={95}
          sizes="288px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  // Mobile layout: render inline in the hero section cleanly and sharp
  if (isMobile) {
    return (
      <div className="w-full flex justify-center py-6 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-52 h-64 sm:w-60 sm:h-76 rounded-3xl overflow-hidden border-2 border-neon-green/50 shadow-neon-green bg-black"
        >
          {/* Subtle Glow backdrop */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-neon-green/25 to-neon-blue/25 blur-xl opacity-75 pointer-events-none" />

          {/* Crystal Clear Photo */}
          <Image
            src="/images/me.jpg"
            alt="Sibam Sasmal Profile"
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 240px, 280px"
            className="object-cover object-top"
          />

          <div className="absolute inset-0 border border-neon-blue/30 rounded-3xl pointer-events-none" />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: "fixed",
        top: topPos,
        right: rightPos,
        scale: photoScale,
        rotateY: photoRotateY,
        rotateZ: photoRotateZ,
        zIndex: 35,
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="cursor-default group origin-top-right transition-shadow duration-300"
    >
      {/* 1. Neon Aura Glow Behind Photo (shifts green -> cyan -> blue) */}
      <motion.div
        style={{
          background: glowColor,
          transform: "translateZ(-30px)",
        }}
        animate={{
          scale: isHovered ? 1.2 : [1, 1.06, 1],
          opacity: isHovered ? 0.9 : [0.65, 0.8, 0.65],
        }}
        transition={{
          duration: isHovered ? 0.3 : 4,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-10 rounded-full blur-2xl pointer-events-none"
      />

      {/* 2. Main Photo Container with 3D Mouse Tilt */}
      <motion.div
        style={{
          borderRadius,
          borderColor,
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered ? -4 : [0, -6, 0],
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-[300px] h-[390px] xl:w-[340px] xl:h-[440px] overflow-hidden border-2 bg-black shadow-2xl backdrop-blur-md"
      >
        {/* Crystal Clear, Sharp High-Res Portrait (Zero Grain/Halftone) */}
        <Image
          src="/images/me.jpg"
          alt="Sibam Sasmal - Full Stack & AI/ML Developer"
          fill
          priority
          quality={95}
          sizes="(max-width: 1280px) 300px, 340px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* 3. Subtle Cyber Rim Lights on the border */}
        <div className="absolute inset-0 rounded-[inherit] border border-neon-blue/30 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-green opacity-70" />

        {/* 4. Corner Cyber Tech Accents */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-neon-green pointer-events-none" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-neon-blue pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-neon-blue pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-neon-green pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
