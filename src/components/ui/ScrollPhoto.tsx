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

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const tiltX = useSpring(mouseY, springConfig);
  const tiltY = useSpring(mouseX, springConfig);

  // Global scroll tracking
  const { scrollYProgress } = useScroll();

  // Scroll mapping for Desktop:
  // 0.0 -> Hero (large centered-right, floating, green glow)
  // 0.15 - 0.40 -> About (scales down, moves side, rotates in 3D -15deg)
  // 0.50 - 1.0 -> Projects & Beyond (pins as small circular cyber avatar in corner)
  const photoScale = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.75], [1, 0.85, 0.45, 0.35]);
  const photoRotateY = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, -14, 0]);
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

  // Aura glow shift: Neon Green -> Neon Blue / Cyan
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7],
    [
      "radial-gradient(circle, rgba(57, 255, 20, 0.4) 0%, rgba(0, 240, 255, 0.15) 50%, transparent 70%)",
      "radial-gradient(circle, rgba(0, 240, 255, 0.45) 0%, rgba(0, 102, 255, 0.2) 50%, transparent 70%)",
      "radial-gradient(circle, rgba(0, 240, 255, 0.35) 0%, rgba(57, 255, 20, 0.15) 50%, transparent 70%)",
    ]
  );

  const borderColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7],
    ["rgba(57, 255, 20, 0.6)", "rgba(0, 240, 255, 0.8)", "rgba(57, 255, 20, 0.5)"]
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
    mouseX.set((x / (rect.width / 2)) * 12);
    mouseY.set(-(y / (rect.height / 2)) * 12);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // If user prefers reduced motion or is on small mobile screen, provide clean static presentation
  if (reducedMotion) {
    return (
      <div className="hidden lg:block absolute top-28 right-12 z-20 w-72 h-96 rounded-3xl overflow-hidden border border-neon-green/40 shadow-neon-green">
        <Image
          src="/images/me.jpg"
          alt="Sibam Sasmal Profile"
          fill
          priority
          sizes="288px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  // Mobile layout: render inline in the hero section cleanly
  if (isMobile) {
    return (
      <div className="w-full flex justify-center py-6 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-3xl overflow-hidden border-2 border-neon-green/60 shadow-neon-green bg-surfaceCard"
        >
          {/* Subtle Glow backdrop */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-neon-green/30 to-neon-blue/30 blur-xl opacity-75 pointer-events-none" />
          
          <Image
            src="/images/me.jpg"
            alt="Sibam Sasmal Profile"
            fill
            priority
            sizes="(max-width: 768px) 224px, 256px"
            className="object-cover object-top transition-transform duration-500"
          />

          {/* Cyber scanline */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/20 to-transparent h-16 w-full animate-scan pointer-events-none" />
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
      className="cursor-pointer group origin-top-right transition-shadow duration-300"
    >
      {/* 1. Neon Aura Glow Behind Photo (shifts green -> cyan -> blue) */}
      <motion.div
        style={{
          background: glowColor,
          transform: "translateZ(-30px)",
        }}
        animate={{
          scale: isHovered ? 1.25 : [1, 1.08, 1],
          opacity: isHovered ? 0.95 : [0.7, 0.85, 0.7],
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
          y: isHovered ? -5 : [0, -8, 0],
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-[300px] h-[390px] xl:w-[340px] xl:h-[440px] overflow-hidden border-2 bg-black shadow-2xl backdrop-blur-md"
      >
        {/* Profile Image with Next/Image */}
        <Image
          src="/images/me.jpg"
          alt="Sibam Sasmal - Full Stack & AI/ML Developer"
          fill
          priority
          sizes="(max-width: 1280px) 300px, 340px"
          className="object-cover object-top transition-all duration-500 group-hover:scale-105"
        />

        {/* 3. Cyber Duotone Gradient Overlay (fades out on hover for full vibrancy) */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-neon-green/20 via-transparent to-neon-blue/25 mix-blend-color-dodge transition-opacity duration-500 pointer-events-none ${
            isHovered ? "opacity-0" : "opacity-75"
          }`}
        />

        {/* 4. Cyber Scanline Sweep Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/25 to-transparent h-20 w-full animate-scan pointer-events-none" />

        {/* 5. Neon Rim Light Accents */}
        <div className="absolute inset-0 rounded-[inherit] border border-neon-blue/30 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-green opacity-80" />

        {/* 6. Corner Cyber Tech Marks */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-neon-green pointer-events-none" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-neon-blue pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-neon-blue pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-neon-green pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

