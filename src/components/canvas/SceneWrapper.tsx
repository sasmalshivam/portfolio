"use client";

import dynamic from "next/dynamic";
import React from "react";

// Fallback loader while 3D WebGL context initializes
function SceneFallback() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-glow blur-[120px] opacity-25 animate-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-glow blur-[100px] opacity-20" />
    </div>
  );
}

const BackgroundCanvas = dynamic(
  () => import("./BackgroundCanvas"),
  {
    ssr: false,
    loading: () => <SceneFallback />,
  }
);

export default function SceneWrapper() {
  return <BackgroundCanvas />;
}

