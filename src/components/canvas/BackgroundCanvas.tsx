"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// Mouse coordinates state
interface MouseState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

// 1. Central Distorted Sphere with Glow and Parallax
function HeroSphere({ mouse }: { mouse: React.MutableRefObject<MouseState> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Smooth mouse lerp
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    // Organic rotation
    meshRef.current.rotation.x += delta * 0.2 + mouse.current.y * 0.02;
    meshRef.current.rotation.y += delta * 0.3 + mouse.current.x * 0.02;

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.4;
      ringRef.current.rotation.y += delta * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.15;
      outerRingRef.current.rotation.x -= delta * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer subtle glow sphere */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.42}
            speed={2.2}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Orbiting electric cyan wireframe ring */}
      <mesh ref={ringRef} scale={2.6}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>

      {/* Outer violet orbital ring */}
      <mesh ref={outerRingRef} scale={3.4} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.01, 16, 120]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
    </group>
  );
}

// 2. Floating Satellite Geometric Shapes
function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node 1 */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[4.2, 2.5, -2]} scale={0.45}>
          <octahedronGeometry />
          <meshStandardMaterial color="#a78bfa" roughness={0.3} metalness={0.9} wireframe />
        </mesh>
      </Float>

      {/* Node 2 */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh position={[-4.5, -2, -1]} scale={0.5}>
          <icosahedronGeometry />
          <meshStandardMaterial color="#22d3ee" roughness={0.2} metalness={0.8} wireframe />
        </mesh>
      </Float>

      {/* Node 3 */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[3.8, -3, -1.5]} scale={0.35}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#e879f9" roughness={0.4} metalness={0.7} />
        </mesh>
      </Float>

      {/* Node 4 */}
      <Float speed={2.2} rotationIntensity={1.3} floatIntensity={1.4}>
        <mesh position={[-3.5, 3, -3]} scale={0.4}>
          <tetrahedronGeometry />
          <meshStandardMaterial color="#818cf8" roughness={0.3} metalness={0.9} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

// 3. Stardust Particle System
function StarField({ count = 250 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      coords[i3] = (Math.random() - 0.5) * 24;
      coords[i3 + 1] = (Math.random() - 0.5) * 24;
      coords[i3 + 2] = (Math.random() - 0.5) * 18;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#a78bfa"
        sizeAttenuation
        transparent
        opacity={0.65}
      />
    </points>
  );
}

// 4. Scroll Camera Controller: Shifts and pivots as the user scrolls through page sections
function ScrollCameraController({ mouse }: { mouse: React.MutableRefObject<MouseState> }) {
  const { camera } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      scrollRef.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    const progress = scrollRef.current;
    
    // Parallax mouse offset
    const targetCamX = (mouse.current.x * 0.8) + Math.sin(progress * Math.PI * 2) * 1.5;
    const targetCamY = -(mouse.current.y * 0.6) - progress * 4;
    const targetCamZ = 6 - Math.cos(progress * Math.PI) * 1.2;

    camera.position.x += (targetCamX - camera.position.x) * 0.05;
    camera.position.y += (targetCamY - camera.position.y) * 0.05;
    camera.position.z += (targetCamZ - camera.position.z) * 0.05;

    camera.lookAt(0, -progress * 2, 0);
  });

  return null;
}

export default function BackgroundCanvas() {
  const mouse = useRef<MouseState>({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    // Check mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse movement listener
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", motionListener);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (reducedMotion) {
    // Accessible static gradient backdrop for users who prefer reduced motion
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-zinc-950 to-zinc-950" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={2.5} color="#8b5cf6" />
        <pointLight position={[5, -10, 5]} intensity={2} color="#06b6d4" />

        <HeroSphere mouse={mouse} />
        {!isMobile && <FloatingNodes />}
        <StarField count={isMobile ? 100 : 250} />
        <ScrollCameraController mouse={mouse} />
      </Canvas>

      {/* Atmospheric depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#09090b_85%)] pointer-events-none opacity-80" />
    </div>
  );
}

