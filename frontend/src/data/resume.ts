import { ResumeData } from '@/types';

export const RESUME_DATA: ResumeData = {
  name: "Saurabh Yadav",
  role: "Full-Stack Engineer & AI Systems Developer",
  headline: "I build backend systems, AI pipelines, and interfaces that ship.",
  subheadline: "Full-Stack Engineer · AI & Cloud Systems · 5 Internships · B.Tech AI-ML '27",
  summary: "I design and build production software — from REST APIs and database schemas to LLM-powered pipelines and computer vision systems. Currently a Software Engineer Intern at FarAlpha Technologies, with four prior internships spanning full-stack, AI backend, and UI engineering. Final year B.Tech in Artificial Intelligence & Machine Learning, Maharshi Dayanand University (2027).",
  location: "Haryana, India (Open to Remote)",
  education: "B.Tech in Artificial Intelligence & Machine Learning, Maharshi Dayanand University (Expected 2027)",
  contact: {
    email: "yadavv.saurab@gmail.com",
    phone: "+91 8528797606",
    github: "https://github.com/saurabhyadav0",
    linkedin: "https://www.linkedin.com/in/saurabh-yadav0"
  },
  stats: [
    { value: "5", label: "Internships", sublabel: "Completed" },
    { value: "5+", label: "Production", sublabel: "Projects Shipped" },
    { value: "8.4", label: "CGPA", sublabel: "B.Tech AI-ML" },
    { value: "40%", label: "Load Velocity", sublabel: "Boost Delivered" },
    { value: "2", label: "Hacktoberfests", sublabel: "Contributed" }
  ],
  aboutHeading: "Engineer. Builder. Systems Thinker.",
  aboutBody: "I don't just write code — I build systems end to end, from database schema to deployed interface.\n\nMy work spans backend infrastructure, frontend engineering, and applied AI. I've built scalable Python microservices with Redis caching, LLM-powered chatbots with JWT authentication, responsive React/shadcn interfaces backed by cached RTK-Query APIs, and Next.js applications with SSR and OAuth that measurably improved load performance.\n\nOn the AI side, I've shipped a computer vision pipeline for deepfake detection — OpenCV face extraction feeding a custom PyTorch ResNet50 classifier, wrapped in a Streamlit UI with a REST API — and integrated LLMs into production backend services.\n\nOutside of internships, I serve as Head Student Placement Coordinator at UIET MDU, coordinating placement drives and campus tech events, and I've competed in hackathons including the BNB Chain Bombay Hackathon, NextGenHack RKGIT, and Samsung Solve for Tomorrow. I've also contributed to open source during Hacktoberfest 2023 and 2024.\n\nI believe in shipping working software early and iterating — architecture and API contracts first, features second.",
  techStackGroups: [
    {
      name: "Languages & Databases",
      items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "PostgreSQL", "CockroachDB", "NeonDB", "MongoDB", "Redis"]
    },
    {
      name: "Frameworks & Libraries",
      items: ["Next.js", "React", "Tailwind CSS", "Express.js", "Node.js", "Redux Toolkit", "Zustand"]
    },
    {
      name: "AI & Cloud Architecture",
      items: ["LLM Integration", "AI Agents", "Microservices", "AWS Lambda", "API Gateway", "IAM", "Secrets Manager", "CloudWatch"]
    },
    {
      name: "DevOps & Deployment",
      items: ["Docker", "GitHub Actions", "CI/CD", "Message Queues", "Nginx", "Git", "Vercel", "Render"]
    }
  ],
  experiences: [
    {
      id: "faralpha",
      company: "FarAlpha Technologies",
      role: "Software Engineer Intern",
      period: "May 2026 – Present",
      tag: "Current Internship · Remote",
      description: "Building scalable Python microservices with Redis caching and centralized tracing/monitoring — focused on backend reliability and infrastructure observability for distributed services.",
      chips: ["Python Microservices", "Redis Caching", "Tracing & Monitoring", "Remote"]
    },
    {
      id: "avani",
      company: "Avani Enterprises",
      role: "Web Developer Intern",
      period: "January 2026 – April 2026",
      tag: "Full-Stack · Hybrid",
      description: "Developed full-stack Next.js/MERN applications end-to-end and handled direct deployment to cloud environments, working across frontend UI, API routes, and database layers.",
      chips: ["Next.js", "MERN Stack", "Cloud Deployment", "Hybrid"]
    },
    {
      id: "datenstrom",
      company: "DatenStrom-3AG Solutions",
      role: "Backend & AI Intern",
      period: "September 2025 – December 2025",
      tag: "AI Backend · Remote, Berlin",
      description: "Built backend systems featuring LLM-powered chatbots, JWT authentication, and containerized Docker services for a Berlin-based team, working fully remote.",
      chips: ["LLM Chatbots", "JWT Auth", "Docker", "Remote · Berlin"]
    },
    {
      id: "airth",
      company: "Airth",
      role: "Full Stack Developer Intern",
      period: "July 2025 – September 2025",
      tag: "UI & API · Remote",
      description: "Built responsive React and shadcn/ui interfaces integrated with cached RTK-Query APIs, focusing on frontend performance and clean component architecture.",
      chips: ["React", "shadcn/ui", "RTK Query", "Remote"]
    },
    {
      id: "soarx-exp",
      company: "SoarX (formerly Campus Code)",
      role: "Web Developer Intern",
      period: "February 2025 – August 2025",
      tag: "Optimization · Remote",
      description: "Developed Next.js pages with server-side rendering and OAuth, boosting load velocity metrics by up to 40% through optimization work.",
      chips: ["Next.js", "SSR", "OAuth", "+40% Load Velocity"]
    }
  ],
  projects: [
    {
      id: "soarx-platform",
      title: "SoarX Community Platform",
      date: "2025",
      status: "Live — soarx.live",
      github: "https://github.com/saurabhyadav0",
      live: "https://soarx.live",
      featured: true,
      tags: ["Full-Stack", "Platform"],
      description: "A scalable ecosystem for tech workshops and instant certificate verification, built for the SoarX community.\n\nHandles authentication, workshop registration, and a QR-code based instant certificate verification flow at soarx.live/verifycertificate.",
      chips: ["NextAuth", "Html5-qrcode", "Certificate Verification", "Live"],
      stack: ["Next.js", "NextAuth", "Html5-qrcode", "Tailwind CSS", "TypeScript"]
    },
    {
      id: "deepfake-detection",
      title: "Deepfake Detection System",
      date: "2025",
      status: "Shipped",
      github: "https://github.com/saurabhyadav0",
      featured: true,
      tags: ["AI/ML", "Computer Vision"],
      description: "A computer vision application that identifies AI media manipulations using OpenCV face extraction and a custom PyTorch ResNet50 classification pipeline.\n\nWrapped in a Streamlit UI with a REST API for programmatic access.",
      chips: ["OpenCV Face Extraction", "Custom ResNet50", "Streamlit UI", "REST API"],
      stack: ["Python", "PyTorch", "ResNet50", "OpenCV", "Streamlit", "REST API"]
    },
    {
      id: "activerse",
      title: "Activerse",
      date: "2025",
      status: "Live",
      github: "https://github.com/saurabhyadav0",
      live: "https://github.com/saurabhyadav0",
      featured: false,
      tags: ["Full-Stack", "E-Commerce"],
      description: "An interactive game booking platform engineered for real-time ticket scaling, secure transactions, and accelerated edge content delivery via Cloudflare.",
      chips: ["Real-Time Ticketing", "Razorpay", "Cloudflare Edge"],
      stack: ["Next.js", "TypeScript", "Cloudflare", "Cloudinary", "Razorpay", "Vercel"]
    },
    {
      id: "docs-realtime",
      title: "Docs — Real-Time Collaborative System",
      date: "2025",
      status: "Live",
      github: "https://github.com/saurabhyadav0",
      live: "https://github.com/saurabhyadav0",
      featured: false,
      tags: ["Backend", "Real-Time"],
      description: "A collaborative real-time cloud suite with live chat and secure Docker containerization — deployed on AWS EC2 behind Nginx, with LLM-assisted features layered into the collaboration workflow.",
      chips: ["Socket.io", "AWS EC2", "Nginx", "Docker"],
      stack: ["Node.js", "Express", "Socket.io", "AWS EC2", "Nginx", "LLM"]
    },
    {
      id: "replay-ai",
      title: "Replay.AI",
      date: "2025",
      status: "Live — repaly.ai",
      github: "https://github.com/saurabhyadav0",
      live: "https://www.repaly.ai/",
      featured: false,
      tags: ["Frontend", "AI"],
      description: "An AI-driven engagement toolkit automation platform built for 1,000+ content creators — handling automated engagement workflows through a React and Redux-powered interface.",
      chips: ["1,000+ Creators", "Redux", "shadcn/ui"],
      stack: ["React", "Redux", "Tailwind CSS", "shadcn/ui"]
    }
  ],
  howIWork: [
    {
      icon: "📄",
      title: "Document first, code second",
      body: "Every project starts with a clear picture of what I'm building and why before I touch a keyboard."
    },
    {
      icon: "🏗️",
      title: "Architecture before features",
      body: "Database schema before routes. API contracts before controllers. The foundation determines everything else."
    },
    {
      icon: "🚢",
      title: "Ship to learn",
      body: "Production is the only real teacher. I build for deployment — proper error handling, environment configs, and real users from day one."
    }
  ],
  openToRoles: [
    {
      title: "Full-Stack Engineer",
      description: "End-to-end product ownership. Node.js + React/Next.js + PostgreSQL + Redis."
    },
    {
      title: "Backend Engineer",
      description: "API architecture, database design, caching, microservices."
    },
    {
      title: "Software Development Engineer (SDE)",
      description: "Strong CS fundamentals. System design. Clean architecture."
    },
    {
      title: "AI / Gen AI Engineer",
      description: "LLM integrations, AI agents, prompt engineering, applied ML."
    },
    {
      title: "AI/ML Engineer",
      description: "Computer vision, PyTorch, classification pipelines, production ML systems."
    },
    {
      title: "DevOps / Cloud Engineer",
      description: "AWS, Docker, CI/CD pipelines, GitHub Actions, deployment infrastructure."
    }
  ],
  availability: {
    types: "Internship · Full-time · Contract",
    location: "Haryana · Remote · Open to relocation",
    status: "Immediately Available"
  },
  certification: {
    title: "Open Source Contributor — Hacktoberfest",
    school: "DigitalOcean Hacktoberfest 2023 & 2024",
    period: "Oct 2023 – Oct 2024",
    link: "https://github.com/saurabhyadav0"
  }
};
