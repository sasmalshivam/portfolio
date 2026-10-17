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
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sibam Sasmal | Full Stack & AI/ML Developer Portfolio",
  description:
    "Personal portfolio of Sibam Sasmal – Full Stack & AI/ML Developer specializing in scalable web systems and real-time computer vision pipelines. Winner of Hacktriad 2.0.",
  keywords: [
    "Sibam Sasmal",
    "Full Stack Developer",
    "AI/ML Developer",
    "Computer Vision",
    "Next.js",
    "React.js",
    "Python",
    "Django",
    "OpenCV",
    "Portfolio",
    "3D Web",
  ],
  authors: [{ name: "Sibam Sasmal", url: "https://github.com/sasmalshivame" }],
  creator: "Sibam Sasmal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sasmalshivame.vercel.app",
    title: "Sibam Sasmal | Full Stack & AI/ML Developer Portfolio",
    description:
      "Explore the 3D portfolio of Sibam Sasmal, featuring industrial safety computer vision systems, full-stack applications, and hackathon-winning solutions.",
    siteName: "Sibam Sasmal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibam Sasmal | Full Stack & AI/ML Developer",
    description:
      "Full Stack & AI/ML Developer portfolio featuring 3D interactive graphics, deep learning models, and production web systems.",
    creator: "@sasmalshivame",
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground antialiased selection:bg-violet-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
