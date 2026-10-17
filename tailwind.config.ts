import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        surface: "#050505",
        surfaceCard: "#0a0a0a",
        surfaceBorder: "#18181b",
        neon: {
          green: "#39FF14",
          greenGlow: "rgba(57, 255, 20, 0.4)",
          blue: "#00F0FF",
          blueGlow: "rgba(0, 240, 255, 0.4)",
          deepBlue: "#0066FF",
          dark: "#051805",
        },
        primary: {
          DEFAULT: "#39FF14", // Neon Green
          light: "#70ff54",
          dark: "#2bd40d",
          glow: "rgba(57, 255, 20, 0.35)",
        },
        cyan: {
          accent: "#00F0FF", // Neon Cyan/Blue
          glow: "rgba(0, 240, 255, 0.35)",
          deep: "#0066FF",
        },
        muted: "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "cyber-grid": "cyberGrid 20s linear infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        cyberGrid: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "50px 50px" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(135deg, #39FF14 0%, #00F0FF 100%)",
        "neon-green-glow": "radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.15) 0%, transparent 70%)",
        "neon-blue-glow": "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "neon-green": "0 0 20px rgba(57, 255, 20, 0.45)",
        "neon-blue": "0 0 20px rgba(0, 240, 255, 0.45)",
        "neon-dual": "0 0 25px rgba(57, 255, 20, 0.3), 0 0 35px rgba(0, 240, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
