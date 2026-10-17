export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "Full Stack" | "AI/ML & Vision" | "Systems";
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Full-time" | "Part-time";
  points: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
  highlights?: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  year: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string; level?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sibam Sasmal",
    role: "Full Stack & AI/ML Developer",
    secondaryRoles: [
      "AI & Computer Vision Enthusiast",
      "Scalable Systems Builder",
      "Hacktriad 2.0 Winner",
      "Fast Learner & Team Player",
    ],
    shortBio:
      "Final-year B.Tech Computer Science student specializing in resilient web platforms and real-time computer vision systems. Proven track record in developing AI solutions for healthcare and industrial safety automation.",
    aboutBio: [
      "Hi, I'm Sibam Sasmal! I bridge the gap between intelligent algorithms and polished user experiences. My focus spans scalable full-stack applications with Node.js/Next.js/Django and practical AI/ML solutions in computer vision and deep learning.",
      "Having engineered safety systems for high-risk industrial environments and won national-level hackathons like Hacktriad 2.0 (among 832 teams), I thrive on converting tough engineering challenges into elegant, impactful software.",
      "When I am not training models or optimizing database queries, I enjoy collaborating with fellow builders, exploring low-level systems in C/C++, and building open-source projects.",
    ],
    email: "shivamsasmal7@gmail.com",
    phone: "+91-8298006402",
    location: "Jamshedpur & Bhubaneswar, India",
    availability: "Available for Full-time Roles & Internships",
    resumeUrl: "/resume.pdf",
    stats: [
      { label: "CGPA", value: "8.5/10" },
      { label: "Hackathon Win", value: "Rank #1" },
      { label: "Teams Beat", value: "830+" },
      { label: "Featured Projects", value: "5+" },
    ],
  },

  socials: {
    github: "https://github.com/sasmalshivame",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:shivamsasmal7@gmail.com",
  },

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Java", level: "Proficient" },
        { name: "C", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js 14", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "Bootstrap", level: "Proficient" },
        { name: "Three.js / 3D Web", level: "Intermediate" },
      ],
    },
    {
      category: "Backend & Cloud",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Django", level: "Intermediate" },
        { name: "REST APIs", level: "Expert" },
        { name: "JWT Auth & OAuth", level: "Advanced" },
        { name: "Docker (basics)", level: "Foundational" },
        { name: "AWS (basics)", level: "Foundational" },
        { name: "Vercel / Netlify", level: "Advanced" },
      ],
    },
    {
      category: "AI / ML & Computer Vision",
      skills: [
        { name: "Computer Vision", level: "Advanced" },
        { name: "Deep Learning (CNNs)", level: "Intermediate" },
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "NumPy & Pandas", level: "Advanced" },
        { name: "OpenCV", level: "Advanced" },
        { name: "Matplotlib / Data Viz", level: "Proficient" },
      ],
    },
    {
      category: "Fundamentals & Tools",
      skills: [
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "Object-Oriented Programming", level: "Expert" },
        { name: "Memory Management", level: "Proficient" },
        { name: "Git & GitHub", level: "Expert" },
        { name: "Postman & Swagger", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  marqueeSkills: [
    "Python",
    "React.js",
    "Next.js 14",
    "Node.js",
    "Express.js",
    "Django",
    "Computer Vision",
    "Deep Learning",
    "OpenCV",
    "Tailwind CSS",
    "Three.js",
    "RESTful APIs",
    "JWT Authentication",
    "Docker",
    "Git",
    "PostgreSQL",
    "Scikit-Learn",
    "TypeScript",
  ],

  projects: [
    {
      id: "ppe-detection",
      title: "PPE Detection System for High-Risk Industries",
      description:
        "Real-time industrial workplace safety monitor utilizing computer vision to detect protective equipment (helmets, vests, goggles) and automate violation workflows.",
      longDescription:
        "Engineered an automated compliance tracking suite using Python and Django. Integrated high-throughput computer vision inference to detect helmets, harnesses, and safety gear in video feeds, triggering instant penalty and alert notifications.",
      category: "AI/ML & Vision",
      techStack: ["Python", "Django", "Computer Vision", "OpenCV", "Deep Learning"],
      githubUrl: "https://github.com/sasmalshivame/ppe-detection-system",
      liveUrl: "https://github.com/sasmalshivame/ppe-detection-system",
      featured: true,
      highlights: [
        "Real-time multi-class gear detection with bounding-box tracking",
        "Automated compliance tracking & penalty monitoring workflows",
        "Configured for high-throughput RTSP video streams",
      ],
    },
    {
      id: "social-media-super-app",
      title: "Social Media Super App Manager",
      description:
        "Centralized platform designed to orchestrate and manage multiple social media accounts seamlessly on an optimized, highly scalable backend.",
      longDescription:
        "Developed a unified hub with concurrent request management, asynchronous queue workers, and real-time feed updates. Architected with resilient REST endpoints and state validation.",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT Auth", "Postman"],
      githubUrl: "https://github.com/sasmalshivame/social-media-super-app",
      liveUrl: "https://github.com/sasmalshivame/social-media-super-app",
      featured: true,
      highlights: [
        "Handles concurrent user interactions with robust backend queuing",
        "Unified dashboard with granular analytics and token refreshes",
        "End-to-end API validation with automated Postman test suites",
      ],
    },
    {
      id: "healthnautix",
      title: "HealthNautix – AI Skin Disease Detector",
      description:
        "An intelligent diagnostic companion leveraging deep learning and medical heuristics for early-stage screening of dermatological conditions.",
      longDescription:
        "Trained convolutional neural networks on curated medical image datasets to classify dermatological lesions. Augmented with rule-based medical heuristics for risk stratification.",
      category: "AI/ML & Vision",
      techStack: ["Python", "Deep Learning", "CNN", "Scikit-Learn", "Flask", "NumPy"],
      githubUrl: "https://github.com/sasmalshivame/HealthNautix",
      liveUrl: "https://github.com/sasmalshivame/HealthNautix",
      featured: true,
      highlights: [
        "Deep learning image classifier trained with data augmentation",
        "Integrated medical heuristic checks for confidence calibration",
        "Lightweight inference suitable for telemedicine and remote clinics",
      ],
    },
    {
      id: "ghoomakkads",
      title: "Ghoomakkads – Travel Networking Platform",
      description:
        "Dynamic full-stack traveler ecosystem connecting wanderers across India with interactive trip planning, itinerary coordination, and traveler matching.",
      longDescription:
        "Built during Hackerena Hackathon (won Runner-Up among top 0.2%). Features personalized itinerary builders, user discovery based on travel dates and routes, and real-time interaction.",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/sasmalshivame/Ghoomakkads",
      liveUrl: "https://github.com/sasmalshivame/Ghoomakkads",
      featured: true,
      highlights: [
        "Runner-Up at Hackerena Hackathon (top 0.2% nationwide)",
        "Traveler matching algorithm by destinations & dates",
        "Collaborative itinerary planner with cost estimation",
      ],
    },
    {
      id: "face-detection",
      title: "Real-Time Face Detection & Tracking System",
      description:
        "High-performance computer vision application performing ultra-low latency facial detection, landmark tracking, and stream processing.",
      longDescription:
        "Implemented real-time video processing using optimized computer vision pipelines in Python. Integrated facial landmark tracking with low CPU/GPU footprint.",
      category: "AI/ML & Vision",
      techStack: ["Python", "Computer Vision", "OpenCV", "NumPy"],
      githubUrl: "https://github.com/sasmalshivame/real-time-face-detection",
      liveUrl: "https://github.com/sasmalshivame/real-time-face-detection",
      featured: false,
      highlights: [
        "Sub-30ms per frame detection latency on commodity hardware",
        "Robust against lighting fluctuations and occlusion",
        "Clean modular codebase for plug-and-play surveillance integrations",
      ],
    },
  ] as Project[],

  experience: [
    {
      id: "webbocket",
      role: "Backend Developer Intern",
      company: "Webbocket",
      location: "Bhubaneswar, India",
      period: "2026",
      type: "Internship",
      points: [
        "Developed and stress-tested RESTful APIs using Node.js and Express.js for production features.",
        "Implemented secure user authentication with JSON Web Tokens (JWT) and validated API contracts with Postman.",
        "Collaborated with senior engineers using Git/GitHub for branching, code reviews, and continuous delivery.",
      ],
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Postman", "Git"],
    },
    {
      id: "cttc",
      role: "AI/ML Summer Intern",
      company: "Central Tool Room & Training Centre (CTTC)",
      location: "Bhubaneswar, India",
      period: "2025",
      type: "Internship",
      points: [
        "Implemented supervised and unsupervised machine learning models in Python using Scikit-Learn.",
        "Applied end-to-end data preprocessing, feature engineering, and statistical model evaluation techniques.",
        "Analyzed multi-dimensional datasets with Pandas, NumPy, and Matplotlib to surface actionable insights.",
      ],
      skills: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Model Evaluation"],
    },
  ] as Experience[],

  education: [
    {
      institution: "NIST University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – 2027",
      score: "CGPA: 8.5 / 10",
      location: "Berhampur, Odisha",
      highlights: [
        "Core coursework: Data Structures, Operating Systems, Database Systems, Computer Networks, AI",
        "Active member of tech clubs & competitive hackathon teams",
      ],
    },
    {
      institution: "S.D.S.M School for Excellence",
      degree: "Higher Secondary (Science) & Secondary",
      period: "2019 – 2022",
      score: "Intermediate: 75% | Matriculation: 87%",
      location: "Jamshedpur, Jharkhand",
      highlights: ["Major in Physics, Chemistry, and Mathematics with Computer Science"],
    },
  ] as Education[],

  achievements: [
    {
      title: "Winner – Hacktriad 2.0 (Manufacturing Domain)",
      organization: "Hacktriad Nationwide Hackathon",
      description:
        "Clinched 1st Place out of 832 national teams for building an AI-driven industrial safety and compliance detection platform.",
      year: "2026",
      badge: "1st of 832 Teams",
    },
    {
      title: "Runner-Up (Top 0.2%) – Hackerena Hackathon",
      organization: "Hackerena",
      description:
        "Awarded Runner-Up recognition for 'Ghoomakkads', a collaborative travel networking and itinerary coordination platform.",
      year: "2024",
      badge: "Top 0.2%",
    },
    {
      title: "Second Prize – Research Paper Presentation",
      organization: "National Technical Symposium",
      description:
        "Authored and presented research on 'Emotionally Intelligent Machines' exploring affective computing and sentiment models.",
      year: "2024",
      badge: "2nd Prize",
    },
    {
      title: "Advanced C Programming Certification",
      organization: "CodeTantra",
      description:
        "Mastered advanced memory management, pointers, dynamic allocation, complex data structures, and file I/O in C.",
      year: "2024",
      badge: "Certified",
    },
  ] as Achievement[],

  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};

