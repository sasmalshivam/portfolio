"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

interface MouseState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

// 1. Central Cyber Distorted Sphere with Neon Green / Blue Glow
function CyberHeroSphere({ mouse }: { mouse: React.MutableRefObject<MouseState> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Smooth mouse lerp
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    // Organic rotation
    meshRef.current.rotation.x += delta * 0.18 + mouse.current.y * 0.02;
    meshRef.current.rotation.y += delta * 0.28 + mouse.current.x * 0.02;

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.35;
      ringRef.current.rotation.y += delta * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.15;
      outerRingRef.current.rotation.x -= delta * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Mesh with Neon Green / Blue Distort */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.75}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#051a08"
            emissive="#124a10"
            emissiveIntensity={0.6}
            attach="material"
            distort={0.38}
            speed={2.0}
            roughness={0.15}
            metalness={0.9}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Orbiting Neon Green Ring */}
      <mesh ref={ringRef} scale={2.5}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#39FF14"
          emissive="#39FF14"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>

      {/* Orbiting Neon Cyan/Blue Outer Ring */}
      <mesh ref={outerRingRef} scale={3.3} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.012, 16, 120]} />
        <meshStandardMaterial
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={1.0}
          wireframe
        />
      </mesh>
    </group>
  );
}

// 2. Floating Cyber Geometric Satellites
function CyberFloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node 1: Neon Green Octahedron */}
      <Float speed={3} rotationIntensity={1.4} floatIntensity={2}>
        <mesh position={[4.2, 2.5, -2]} scale={0.45}>
          <octahedronGeometry />
          <meshStandardMaterial
            color="#39FF14"
            emissive="#39FF14"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>
      </Float>

      {/* Node 2: Neon Cyan Icosahedron */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh position={[-4.5, -2, -1]} scale={0.5}>
          <icosahedronGeometry />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={0.9}
            wireframe
          />
        </mesh>
      </Float>

      {/* Node 3: Deep Blue Torus */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[3.8, -3, -1.5]} scale={0.35}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial
            color="#0066FF"
            emissive="#0066FF"
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Node 4: Cyber Green Tetrahedron */}
      <Float speed={2.2} rotationIntensity={1.3} floatIntensity={1.4}>
        <mesh position={[-3.5, 3, -3]} scale={0.4}>
          <tetrahedronGeometry />
          <meshStandardMaterial
            color="#39FF14"
            emissive="#39FF14"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

// 3. Cyber Matrix Particles System (Green & Cyan)
function CyberParticles({ count = 280 }: { count?: number }) {
  const [points, colors] = useMemo(() => {
    const coords = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const green = new THREE.Color("#39FF14");
    const cyan = new THREE.Color("#00F0FF");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      coords[i3] = (Math.random() - 0.5) * 26;
      coords[i3 + 1] = (Math.random() - 0.5) * 26;
      coords[i3 + 2] = (Math.random() - 0.5) * 18;

      const mixedColor = Math.random() > 0.5 ? green : cyan;
      cols[i3] = mixedColor.r;
      cols[i3 + 1] = mixedColor.g;
      cols[i3 + 2] = mixedColor.b;
    }
    return [coords, cols];
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
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.75}
      />
    </points>
  );
}

// 4. Scroll Camera Controller
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

    const targetCamX = (mouse.current.x * 0.7) + Math.sin(progress * Math.PI * 2) * 1.5;
    const targetCamY = -(mouse.current.y * 0.5) - progress * 4;
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
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

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
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-black cyber-grid-bg opacity-75" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <fog attach="fog" args={["#000000", 6, 22]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={3} color="#39FF14" />
        <pointLight position={[5, -10, 5]} intensity={2.5} color="#00F0FF" />

        <CyberHeroSphere mouse={mouse} />
        {!isMobile && <CyberFloatingNodes />}
        <CyberParticles count={isMobile ? 120 : 280} />
        <ScrollCameraController mouse={mouse} />
      </Canvas>

      {/* Atmospheric depth & Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_80%)] pointer-events-none opacity-85" />
    </div>
  );
}
