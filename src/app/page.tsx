import React from "react";
import SceneWrapper from "@/components/canvas/SceneWrapper";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import ScrollPhoto from "@/components/ui/ScrollPhoto";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Interactive 3D Cyber Matrix Background */}
      <SceneWrapper />

      {/* Visual Enhancers */}
      <CustomCursor />
      <Preloader />

      {/* Dynamic Scroll-Driven Profile Photo */}
      <ScrollPhoto />

      {/* Main Page Layout */}
      <div className="relative min-h-screen bg-transparent selection:bg-neon-green/30 selection:text-white">
        <Navbar />

        <main className="flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
