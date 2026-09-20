export const personalInfo = {
  name: "Anubhav Bora",
  title: "Full Stack Developer | Cybersecurity Enthusiast",
  tagline: "Building secure, scalable digital experiences for real-world problems",
  logo: "/logo.svg",
  profilePicture: "/professional-headshot.png",
  about: "I am a full-stack developer focused on building reliable, secure, and user-centric web experiences. My work spans React, Next.js, Node.js, and backend systems, with a growing focus on cybersecurity, system hardening, and modern web architecture. I am currently pursuing B.Tech in Computer Science at Rashtriya Raksha University and enjoy translating product ideas into polished, practical solutions.",
  resume: "/resume.pdf",
  email: "anubhavbora40@gmail.com",
  phone: "+91 8822090112",
  linkedin: "https://www.linkedin.com/in/anubhav-bora-349b1027a",
  github: "https://github.com/Anubhav-Bora",
  leetcode: "https://leetcode.com/u/Anubhav-Bora/",
  codeforces: "https://www.codechef.com/users/anubhavbora40",
  codechef: "https://www.codechef.com/users/anubhavbora40",
  twitter: "https://x.com/anubhavbora",
  medium: "https://medium.com/@anubhavbora40",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "Hono",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Firebase",
    "Git",
    "C++",
    "GENAI",
    "DevOps (Docker, CI/CD, AWS)",
    "State Management (Redux, Recoil, Zustand)",
    "LangChain",
    "LangGraph"
  ],

  experience: [
    {
      company: "Central Intelligence Organization",
      role: "Cybersecurity & Software Development Intern",
      duration: "Jun 2025 – Present",
      details: "Developing secure software solutions and supporting cybersecurity operations, including vulnerability assessment, security monitoring, and access management."
    },
    {
      company: "INA Internet Group",
      role: "Full Stack Development Intern",
      duration: "Jul 2024 - Oct 2024",
      details: "Contributed to end-to-end development across the stack. Built responsive UIs using React.js and Next.js, integrated backend APIs, and worked with NestJS. Developed Redux actions, Epics, and Resolvers for state management. Integrated Google Maps API and wrote automated tests using Playwright (E2E) and Vest (form validation)."
    },
    {
      company: "Global Eye Intelligence",
      role: "Development Intern",
      duration: "Mar 2024 - May 2024",
      details: "Developed MVP platform using Next.js, tRPC, Redis, and Zustand for state management. Architected content delivery pipelines, built interactive commenting systems with real-time updates using SSE, and created RESTful API endpoints. Developed a custom URL shortener in Go for internal analytics and link tracking."
    },
    {
      company: "Remote Pilot Training Program",
      role: "Development Intern",
      duration: "Jan 2024 - Mar 2024",
      details: "Built a Learning Management System (LMS) for drone pilots using React, Express, and Prisma. Developed role-based UIs, RESTful APIs for course management and user authentication, and implemented database models using Prisma ORM. Used Recoil for state management."
    }
  ],

  projects: [
    {
      title: "ThreatMesh",
      description: "ThreatMesh is a cybersecurity threat-intelligence platform that collects and normalizes public threat feeds, enriches IOCs, and helps analysts investigate relationships between malicious indicators. It uses MITRE ATT&CK mapping, graph-based campaign analysis, explainable risk scoring, and AI-assisted reporting to turn raw threat data into actionable, evidence-backed insights.",
      live: "https://threat-mesh.vercel.app/",
      tech: ["Cybersecurity", "Threat Intelligence", "MITRE ATT&CK", "Graph Analysis", "AI Reporting", "IOC Enrichment", "Risk Scoring"]
    },
    {
      title: "University Website & CMS",
      description: "Contributed to the official Rashtriya Raksha University website using React.js and Next.js, working with CMS workflows, APIs, authentication, and web application architecture.",
      live: "https://rru.ac.in/",
      tech: ["React.js", "Next.js", "CMS", "REST APIs", "Authentication", "Web Architecture"]
    },
    {
      title: "WebShield",
      description: "Secure webhook platform with real-time monitoring and attack simulation. Implemented JWT authentication, HMAC verification, and rate limiting for strong security. Developed using FastAPI backend and Next.js frontend with a live analytics dashboard for real-time insights and threat detection.",
      github: "https://github.com/Anubhav-Bora/WebShield",
      tech: ["FastAPI", "Next.js", "JWT", "HMAC", "Rate Limiting", "Real-time Monitoring", "Analytics Dashboard", "Security"]
    },
    {
      title: "OpsTrack",
      description: "Engineered a full-stack task management platform enabling teams to organize work into rooms, assign role-based tasks, track dependencies, and manage approvals. Leveraged React, TypeScript, TanStack Query for server state management, Node.js, Express, Prisma, and PostgreSQL with serverless deployment on Vercel.",
      live: "https://ops-frontend-amber.vercel.app/login",
      github: "https://github.com/Anubhav-Bora/OpsTrack",
      tech: ["React", "TypeScript", "TanStack Query", "Node.js", "Express", "Prisma", "PostgreSQL", "Vercel"]
    },
    {
      title: "Live AI Debate Arena",
      description: "Real-time AI-driven debate platform with automated scoring, speech recognition, interactive video features, and gamified badges. Integrated real-time chat, leaderboards, and analytics for engaging user experience.",
      live: "https://live-debate-ai.onrender.com/",
      image: "/projects/debate-arena.png",
      tech: ["React", "Node.js", "WebSockets", "Speech Recognition", "AI Analysis"]
    },
    {
      title: "Blockchain Tourist Safety System",
      description: "Tourist safety platform combining mobile app and admin dashboard. Enabled real-time alerts, map-based monitoring, and blockchain-secured communication via Ethereum smart contracts.",
      github: "https://github.com/Neuro-Fox",
      live: "https://drive.google.com/file/d/1dfxdZb8DagYL6ls-_xib0H1yVz1qlx9K/view?usp=sharing",
      image: "/projects/blockchain-tourist.png",
      tech: ["Ethereum", "Next.js", "React Native", "Blockchain", "React", "Maps API", "ML"]
    },
    {
      title: "News Agent",
      description: "An AI-powered news aggregation platform built with Next.js that curates personalized news digests with sentiment analysis, multi-language translation, and multi-format delivery (text, audio, PDF) powered by LangChain and Google Generative AI. Engineered end-to-end features including intelligent feed collection, email distribution, and user interest tracking with Supabase authentication.",
      github: "https://github.com/Anubhav-Bora/News-Agent",
      live: "https://news-agent-snowy-eight.vercel.app/",
      tech: ["Next.js", "Agentic AI", "LangChain", "Google Generative AI", "Supabase", "Email Distribution", "Multi-language", "Audio/PDF"]
    },
    {
      title: "Subtitle Generator",
      description: "Automated subtitle generation tool for videos using speech recognition and AI-based text synchronization. Helps in creating accurate captions quickly.",
      github: "https://github.com/Anubhav-Bora/Subtitle-Generator",
      tech: ["Python", "Speech Recognition", "FFmpeg", "AI/ML"]
    },
    {
      title: "URL Shortener",
      description: "Custom URL shortening service built using Go. Supports analytics and link tracking for optimized link management.",
      github: "https://github.com/Anubhav-Bora/Shortner",
      tech: ["Go", "PostgreSQL", "REST APIs"]
    },

  ],

  certificates: [
    {
      title: "Top 10 — CTF Heaven Competition",
      description: "Ranked in the top 10 among 300+ participating teams in the CTF Heaven cybersecurity competition.",
      link: "https://drive.google.com/file/d/1nXy_CWhm7fZCz8ruJYO0Ap_C4ndClJdt/view?usp=sharing",
      issuer: "CTF Heaven",
      date: "Top 10 of 300+ teams"
    },
    {
      title: "Short-Term GRC Course Completion",
      description: "Completed a short-term course in Governance, Risk, and Compliance (GRC).",
      link: "https://drive.google.com/file/d/1YL1evMnmYP2tIeNBegLRknSUeoMz3OK9/view?usp=sharing",
      issuer: "Governance, Risk & Compliance",
      date: "Short-term course"
    },
    {
      title: "Internal SIH Qualifier",
      image: "/certificates/sih-certificate.png",
      description: "Led a team in the Smart India Hackathon, developing a MERN stack hospital management system that qualified for national level competition.",
      link: "https://drive.google.com/file/d/1OFe_WuLuSbVnBXonC6tBNahW587mF1cR/view?usp=sharing",
      issuer: "Smart India Hackathon",
      date: "2023"
    },
    {
      title: "Full Stack Development Internship Certification",
      image: "/certificates/fullstack-certificate.png",
      description: "Certification in full stack web development covering React, Node.js, NestJS, databases, and modern development practices.",
      link: "https://drive.google.com/file/d/1pbm2VCdqjTDj_C70pms8aoEztzvXvCwc/view?usp=sharing",
      issuer: "Rashtriya Raksha University",
      date: "2024"
    },
    {
      title: "Professional Micro-Certifications",
      description: "Soft Skills, GenAI, Cyber, Data & Tech Risk, PowerShell, and Modern Data Systems.",
      link: "https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=3435",
      issuer: "Tekstac",
      date: "2026"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon Team Leader",
      description: "Guided a cross-functional team to develop a MERN stack hospital management system in 48 hours, qualifying for the national-level competition."
    },
    {
      title: "Competitive Programmer",
      description: "Solved 500+ questions across LeetCode, Codeforces, and CodeChef, demonstrating strong problem-solving and algorithmic skills."
    }
  ],

  education: [
    {
      institution: "Rashtriya Raksha University",
      degree: "B.Tech Computer Science and Engineering",
      duration: "Aug 2023 - Present",
      details: "Focus on web development, security best practices, and advanced algorithm design and implementation. CGPA: 7.8 | Current SGPA: 8.8"
    }
  ]
};

const techStack = {
  frontend: [
    "Next.js 15 - React framework with App Router",
    "React 18 - UI library",
    "TypeScript - Type-safe JavaScript",
    "Tailwind CSS - Utility-first CSS framework",
    "Custom Animations - CSS transitions and keyframes",
  ],
  aiAndMachineLearning: [
    "Google Gemini 2.0 Flash - Latest LLM for question answering",
    "LangChain.js - AI orchestration framework",
    "LangGraph - AI workflow graphs",
    "RAG (Retrieval-Augmented Generation) - Advanced AI architecture",
    "Vector Embeddings - Text-embedding-004 model",
    "Semantic Search - Vector similarity search",
  ],
  backendAndApis: [
    "Next.js API Routes - Serverless functions",
    "YouTubei.js - YouTube data extraction",
    "Memory Vector Store - In-memory vector database",
    "Session Management - Custom session handling",
  ],
};

export default techStack;
