"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing spring for the outer ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports fine hover pointer (disable on touch screens)
    const isTouchDevice = !window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-violet-400/80 pointer-events-none mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 56 : isClicking ? 28 : 36,
          height: isHovered ? 56 : isClicking ? 28 : 36,
          backgroundColor: isHovered
            ? "rgba(139, 92, 246, 0.15)"
            : "rgba(139, 92, 246, 0.04)",
          borderColor: isHovered ? "rgba(34, 211, 238, 0.9)" : "rgba(167, 139, 250, 0.6)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.2 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-cyan-400 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 8 : isClicking ? 4 : 6,
          height: isHovered ? 8 : isClicking ? 4 : 6,
          backgroundColor: isHovered ? "#22d3ee" : "#a78bfa",
          boxShadow: isHovered
            ? "0 0 12px rgba(34, 211, 238, 0.9)"
            : "0 0 8px rgba(167, 139, 250, 0.8)",
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

