import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sibam Sasmal | 3D Cyber Portfolio - Full Stack & AI/ML Developer",
  description:
    "Cyber 3D Portfolio of Sibam Sasmal – Full Stack & AI/ML Developer specializing in scalable web systems and real-time computer vision pipelines. Winner of Hacktriad 2.0.",
  keywords: [
    "Sibam Sasmal",
    "Full Stack Developer",
    "AI/ML Developer",
    "Computer Vision",
    "Next.js 14",
    "React.js",
    "Python",
    "Three.js",
    "Cyberpunk",
    "Portfolio",
  ],
  authors: [{ name: "Sibam Sasmal", url: "https://github.com/sasmalshivam" }],
  creator: "Sibam Sasmal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-zeta-black-kx0awot2y3.vercel.app",
    title: "Sibam Sasmal | 3D Cyber Portfolio - Full Stack & AI/ML Developer",
    description:
      "Explore the 3D cyber portfolio of Sibam Sasmal with interactive 3D WebGL scenes, scroll-driven profile animations, and deep learning detectors.",
    siteName: "Sibam Sasmal Cyber Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibam Sasmal | Full Stack & AI/ML Developer",
    description:
      "3D Cyber portfolio featuring real-time WebGL, scroll-driven profile dynamics, and production web systems.",
    creator: "@sasmalshivam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white antialiased selection:bg-neon-green/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
