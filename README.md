# 🌌 Sibam Sasmal — 3D Animated Developer Portfolio

A cutting-edge, high-performance 3D personal portfolio website engineered with **Next.js 14 (App Router)**, **TypeScript**, **Three.js / React Three Fiber**, **Framer Motion**, **Tailwind CSS**, and **Lenis**.

Built specifically for **Sibam Sasmal** (Full Stack & AI/ML Developer, NIST University '27, Hacktriad 2.0 Winner).

---

## 🌐 Live Links

* **Live Production URL:** [https://portfolio-zeta-black-kx0awot2y3.vercel.app](https://portfolio-zeta-black-kx0awot2y3.vercel.app)
* **GitHub Repository:** [https://github.com/sasmalshivam/portfolio](https://github.com/sasmalshivam/portfolio)

---

* **🎨 3D WebGL Canvas (`@react-three/fiber` & `@react-three/drei`):**
  * Persistent fixed background canvas with dynamic scroll-linked camera movement.
  * Central organic distorted mesh with dynamic `MeshDistortMaterial`.
  * Orbital wireframe rings and floating geometric nodes.
  * Interactive 250+ stardust particle system.
  * Mouse parallax reaction with smooth spring dampening.
  * Lazy-loaded via `next/dynamic` (`ssr: false`) with smooth ambient fallback.
* **⚡ Modern UI & Smooth Interactions:**
  * **Lenis Smooth Scroll:** Momentum-based buttery-smooth scrolling.
  * **3D Tilt Cards:** Interactive project showcase cards with mouse-following spotlight glow and perspective physics.
  * **Custom Cursor:** Trailing spring follower with auto-expansion over clickable elements and auto-disable on touch devices.
  * **Futuristic Preloader:** Dynamic initial progress counter and brand monogram sequence.
  * **Infinite Marquee:** Seamless animated marquee for technical skills.
  * **Interactive Contact Section:** One-click email copy with visual feedback, celebration confetti explosion, and mailto/form integration.
* **📱 Performance & Accessibility:**
  * DPR strictly clamped to `[1, 1.5]` to avoid GPU overheating.
  * Full support for `prefers-reduced-motion` (replaces 3D physics with lightweight gradient backdrop).
  * 100% mobile, tablet, and ultra-wide responsive layout.
  * Complete OpenGraph & Twitter Card SEO metadata.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
* **Node.js** v18+ (tested on Node v20+)
* **npm** or **pnpm** / **yarn**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/sasmalshivame/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

### 4. Production Build & Test
```bash
npm run build
npm run start
```

---

## 🛠️ How to Customize Your Content (Single File!)

**All your personal data, resume points, projects, and contact info live in one file:**
📁 **`src/data/content.ts`**

### Modifying Personal Info & Bios
Open `src/data/content.ts` and edit the `personal` object:
```ts
export const PORTFOLIO_DATA = {
  personal: {
    name: "Sibam Sasmal",
    role: "Full Stack & AI/ML Developer",
    shortBio: "Your short bio here...",
    aboutBio: [
      "First paragraph of about section...",
      "Second paragraph...",
    ],
    email: "shivamsasmal7@gmail.com",
    phone: "+91-8298006402",
    location: "Jamshedpur & Bhubaneswar, India",
    // ...
  }
}
```

### Adding or Updating Projects
In `src/data/content.ts`, navigate to the `projects` array:
```ts
projects: [
  {
    id: "your-project-id",
    title: "Project Title",
    description: "Brief summary of the project",
    category: "Full Stack" | "AI/ML & Vision",
    techStack: ["React", "Node.js", "Python"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    featured: true,
    highlights: [
      "Key achievement or metric 1",
      "Key achievement or metric 2",
    ],
  },
  // Add more projects here
]
```

### Updating Work Experience & Internships
Edit the `experience` array in `src/data/content.ts`:
```ts
experience: [
  {
    id: "company-id",
    role: "Your Role",
    company: "Company Name",
    location: "Location",
    period: "2026",
    points: [
      "Impact bullet point 1",
      "Impact bullet point 2",
    ],
    skills: ["Skill 1", "Skill 2"],
  }
]
```

### Customizing Skills & Marquee
Edit `skills` (categorized) and `marqueeSkills` (the infinite scroll banner) in `src/data/content.ts`.

---

## 🎨 Customizing Design & Theme

* **Accent Colors:** Defined in `tailwind.config.ts` under `theme.extend.colors`:
  * `primary`: `#8b5cf6` (Electric Violet)
  * `cyan.accent`: `#06b6d4`
* **Fonts:** Configured in `src/app/layout.tsx` using `next/font/google` (`Space_Grotesk` and `Inter`).

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your changes to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository `portfolio`.
4. Leave build settings as default (Next.js preset) and click **Deploy**.
5. Your portfolio is live with free automatic SSL and global CDN!

Alternatively via CLI:
```bash
npx vercel --prod
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
