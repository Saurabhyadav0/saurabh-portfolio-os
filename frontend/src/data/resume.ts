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
    linkedin: "https://www.linkedin.com/in/saurabh-yadav-6406311bb/",
    resume: "https://drive.google.com/file/d/1TBJ2kOT66axlm2k6w3ZqKCkiVeNZ0jW6/view?usp=sharing"
  },
  stats: [
    { value: "5", label: "Internships", sublabel: "Completed" },
    { value: "18+", label: "Production", sublabel: "Projects Shipped" },
    { value: "8.4", label: "CGPA", sublabel: "B.Tech AI-ML" },
    { value: "40%", label: "Load Velocity", sublabel: "Boost Delivered" },
    { value: "2", label: "Hacktoberfests", sublabel: "Contributed" }
  ],
  aboutHeading: "Engineer. Builder. Systems Thinker.",
  aboutBody: "I don't just write code — I build systems end to end, from database schema to deployed interface.\n\nMy work spans backend infrastructure, frontend engineering, and applied AI. I've built scalable Python microservices with Redis caching, LLM-powered chatbots with JWT authentication, responsive React/shadcn interfaces backed by cached RTK-Query APIs, and Next.js applications with SSR and OAuth that measurably improved load performance.\n\nOn the AI side, I've shipped a computer vision pipeline for deepfake detection — OpenCV face extraction feeding a custom PyTorch ResNet50 classifier, wrapped in a Streamlit UI with a REST API — and integrated LLMs into production backend services.\n\nOutside of internships, I serve as Head Student Placement Coordinator at UIET MDU, coordinating placement drives and campus tech events, and I've competed in hackathons including the BNB Chain Bombay Hackathon, NextGenHack RKGIT, and Samsung Solve for Tomorrow. I've also contributed to open source during Hacktoberfest 2023 and 2024.\n\nI believe in shipping working software early and iterating — architecture and API contracts first, features second.",
  techStackGroups: [
    {
      name: "Languages & Databases",
      items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "PostgreSQL", "CockroachDB", "NeonDB", "MongoDB", "Redis", "TigerGraph (GSQL)"]
    },
    {
      name: "Frameworks & Libraries",
      items: ["Next.js", "React", "Tailwind CSS", "Express.js", "Node.js", "Redux Toolkit", "Zustand"]
    },
    {
      name: "GenAI & LLMs",
      items: ["LLM Applications", "AI Agents / Agentic AI", "Model Context Protocol (MCP)", "Prompt Engineering", "RAG & GraphRAG", "LLM-as-Judge Evaluation", "Guardrails", "Anthropic API", "Google Gemini", "OpenAI", "Groq"]
    },
    {
      name: "AI Frameworks",
      items: ["LangChain", "LangGraph", "FAISS", "BM25 Hybrid Retrieval", "Sentence Transformers", "PyTorch", "OpenCV", "FastAPI", "Streamlit"]
    },
    {
      name: "AWS Cloud",
      items: ["Lambda", "API Gateway", "EC2 / ECS", "ECR", "VPC", "S3", "Aurora & RDS", "ElastiCache", "SQS", "Route 53", "IAM", "Secrets Manager"]
    },
    {
      name: "Observability & Security",
      items: ["OpenTelemetry", "Distributed Tracing", "CloudWatch", "Amazon Grafana", "Prometheus", "JWT", "RBAC", "Casbin", "Least-Privilege IAM"]
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
      description: "Building scalable Python microservices on AWS (Lambda, API Gateway, ECS/EC2, ECR, VPC) with ElastiCache/Redis caching, Aurora/RDS and S3 for storage, and SQS for async messaging.\n\nOwn observability end to end with OpenTelemetry distributed tracing surfaced through CloudWatch and Amazon Grafana dashboards, and IAM + Secrets Manager for access control and credential management. Implemented fine-grained authorization with Casbin, and maintain separate prod/dev environments with GitHub Actions CI/CD pipelines.",
      chips: ["AWS Lambda & ECS", "OpenTelemetry Tracing", "Casbin Authorization", "ElastiCache/Redis", "GitHub Actions CI/CD", "Remote"]
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
      id: "fraud-agent",
      title: "Agentic Fraud Investigation Agent",
      date: "2026",
      status: "Live — HH Goa 2026 Task 04",
      github: "https://github.com/Saurabhyadav0/tigergraph-fraud-agent",
      live: "https://hacker-house-goa-task-4.vercel.app/task-4",
      featured: true,
      tags: ["AI/ML", "Backend"],
      description: "An agent that investigates fraud alerts end to end: it gathers evidence from 590K transactions, retrieves similar closed cases from a TigerGraph graph memory (GraphRAG), scores risk via a rule engine or an LLM assessor behind the same interface, and routes next-best actions under bank policy (auto / L1 / L2, with SAR rules).\n\nGraph operations are exposed as MCP tools using the official Model Context Protocol SDK, so any MCP client can reuse the agent's case-memory capabilities. A calibration test on random non-flagged transactions exposed double-counted weak signals; the fixes cut the false-positive rate from 42.5% to 2.5%.",
      chips: ["590K Transactions", "GraphRAG + TigerGraph", "MCP Tool Server", "FP Rate 42.5% → 2.5%"],
      stack: ["Python", "Anthropic API", "MCP SDK", "TigerGraph (GSQL)", "GraphRAG", "Streamlit"]
    },
    {
      id: "voice-rag",
      title: "Voice-Enabled Multilingual RAG",
      date: "2026",
      status: "Live — hh-rag-project.fly.dev",
      github: "https://github.com/Saurabhyadav0/hh_rag_project",
      live: "https://hh-rag-project.fly.dev",
      featured: true,
      tags: ["AI/ML", "Backend"],
      description: "A Hacker House Goa 2026 team build: a multilingual, voice-enabled retrieval system with hybrid semantic + keyword retrieval (FAISS + BM25) and a provider-independent generator.\n\nInput guardrails, context-relevance validation, and a grounding check guard against hallucination, all benchmarked against a 200ms latency budget. Voice queries are transcribed through Sarvam STT for multilingual input.",
      chips: ["Hybrid FAISS + BM25", "Input Guardrails", "Grounding Check", "200ms Budget", "Live"],
      stack: ["Python", "FastAPI", "FAISS", "BM25", "Sarvam STT", "Fly.io"]
    },
    {
      id: "support-agent-eval",
      title: "AI Customer Support Agent with LLM Evaluation",
      date: "2026",
      status: "Shipped",
      github: "https://github.com/saurabhyadav0",
      featured: true,
      tags: ["AI/ML", "Backend"],
      description: "An agent that classifies customer messages into 10 intents, drafts retrieval-grounded replies, and decides auto-handle vs. human escalation — 85.6% intent accuracy vs. a 45.8% TF-IDF baseline on a 216-example golden set.\n\nBuilt an LLM-as-judge evaluation pipeline and measured it against blind human scores (kappa 0.14), documenting where rubric judges miss tone and context. Backed by 31 unit tests and a 17-entry decision log.",
      chips: ["10-Intent Classifier", "85.6% Accuracy", "LLM-as-Judge Eval", "31 Unit Tests"],
      stack: ["Python", "Google Gemini", "Sentence Transformers", "pytest"]
    },
    {
      id: "amrutam-backend",
      title: "Amrutam Telemedicine Backend",
      date: "2026",
      status: "Shipped",
      github: "https://github.com/Saurabhyadav0/amrutam-telemedicine-backend",
      featured: true,
      tags: ["Backend", "Production"],
      description: "A production-grade backend for Amrutam's Ayurvedic teleconsultation platform — identity & RBAC, doctor availability and saga-based booking, consultations, prescriptions, payments, audit and analytics.\n\nBuilt on async FastAPI + SQLAlchemy over PostgreSQL 16 and Redis 7, with an outbox worker for async jobs (delivery, hold expiry, refunds, analytics rollups). Full observability — OpenTelemetry traces, Prometheus metrics with 17 alert rules, Grafana, Loki, and Jaeger — plus 110 tests at 94% coverage, k6 load tests, and Terraform IaC for AWS (ECS Fargate, RDS Multi-AZ, ElastiCache, ALB + WAF, KMS, Secrets Manager). DPDP-compliant.",
      chips: ["Async FastAPI", "Booking Saga", "110 Tests · 94% Coverage", "OpenTelemetry + Grafana", "Terraform IaC"],
      stack: ["Python 3.12", "FastAPI", "PostgreSQL 16", "Redis 7", "SQLAlchemy (async)", "Alembic", "OpenTelemetry", "Prometheus", "Grafana", "Docker", "Terraform", "GitHub Actions"]
    },
    {
      id: "hh-goa-2026",
      title: "Hacker House Goa 2026 — Build Showcase",
      date: "2026",
      status: "Live — hacker-house-goa-task-4.vercel.app",
      github: "https://github.com/Saurabhyadav0/hacker-house-goa-task-4",
      live: "https://hacker-house-goa-task-4.vercel.app",
      featured: true,
      tags: ["Frontend", "Full-Stack"],
      description: "A Next.js showcase site for all four Hacker House Goa 2026 task builds — Frame in Goa, Voice RAG, Face → Chain, and the final TigerGraph Fraud Agent — alongside more deployed projects.\n\nEach card carries a live screenshot and links to its repo and live site; a dedicated page walks through the fraud agent's pipeline, headline stats, and all 20 investigated cases from the agent's real output.",
      chips: ["4 Task Builds", "HH Goa 2026", "Live Screenshots", "Live"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      id: "saarthi-task-engine",
      title: "Saarthi TaskEngine — Task Automation Platform",
      date: "2026",
      status: "Live — sarthi-assingment.vercel.app",
      github: "https://github.com/Saurabhyadav0/sarthi-assingment",
      live: "https://sarthi-assingment.vercel.app/",
      featured: true,
      tags: ["Full-Stack", "Backend"],
      description: "A production-grade asynchronous task automation and job processing platform (Micro SaaS module), built for the Saarthi AI Full-Stack Engineering Challenge.\n\nExpress + BullMQ workers process jobs through a priority queue (URGENT/HIGH/MEDIUM/LOW) with exponential backoff retries and scheduled execution, while Socket.IO pushes live status transitions (PENDING → PROCESSING → COMPLETED/FAILED) straight to a Redux + TanStack Query Next.js dashboard.\n\nJWT access tokens with refresh-token rotation and RBAC (ADMIN/USER) secure the API; PostgreSQL via Prisma handles persistence, Redis backs both the queue and session cache. Fully dockerized with a docker-compose stack (Postgres, Redis, API, worker, frontend) and a GitHub Actions CI pipeline.",
      chips: ["BullMQ Queues", "Socket.IO Real-Time", "JWT + RBAC", "Redis Caching", "Dockerized", "Live"],
      stack: ["Next.js 14", "Express.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "Socket.IO", "Docker", "Redux Toolkit", "TanStack Query"]
    },
    {
      id: "travel-sathi",
      title: "Travel Sathi — Travel Marketplace Platform",
      date: "2026",
      status: "Live — travel-sathi-nextjs.vercel.app",
      github: "https://github.com/Saurabhyadav0/Travel-sathi-nextjs",
      live: "https://travel-sathi-nextjs.vercel.app/",
      featured: true,
      tags: ["Production", "Full-Stack"],
      description: "A live, in-production travel marketplace connecting travelers with tour vendors — browse and book curated trips, pay securely via Razorpay, and get automatic booking confirmation emails.\n\nThree-sided platform: travelers search, filter, book, and review tours; vendors register with document verification, manage listings, and track revenue through an analytics dashboard; admins approve vendors and oversee bookings platform-wide.",
      chips: ["Razorpay Payments", "Vendor Dashboard", "Admin Approval System", "Live"],
      stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma ORM", "Neon DB", "Redux Toolkit", "Tailwind CSS", "Radix UI", "Cloudinary", "JWT"]
    },
    {
      id: "frame-my-goa-pic",
      title: "Frame in Goa",
      date: "2026",
      status: "Live — frame-my-goa-pic.vercel.app",
      github: "https://github.com/Saurabhyadav0/frame-my-goa-pic",
      live: "https://frame-my-goa-pic.vercel.app/",
      featured: false,
      tags: ["Frontend", "UI"],
      description: "A web tool built for Hacker House Goa 2026 — upload a photo, get back a branded HH Goa 2026 graphic in seconds, ready to download and share on X.\n\nTwo formats: a circular PFP frame, and a Builder ID card with photo, name, and role laid out like an event badge. Fully client-side — drag-to-reframe, pinch-to-zoom cropping, HEIC/HEIF auto-conversion, and instant canvas rendering with no server round-trip.",
      chips: ["Client-Side Canvas", "HEIC/HEIF Support", "Drag-to-Reframe", "Share to X", "Live"],
      stack: ["TanStack Start", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Vite", "Vercel"]
    },
    {
      id: "exam-signal-board",
      title: "Exam Signal Board",
      date: "2026",
      status: "Live — exam-signal-board.vercel.app",
      github: "https://github.com/Saurabhyadav0/exam-signal-board",
      live: "https://exam-signal-board.vercel.app/",
      featured: true,
      tags: ["Backend", "Full-Stack"],
      description: "A Next.js platform that ingests exam notifications and results from source sites, stores them in Postgres, and dispatches email alerts to registered users when new signals land.\n\nClerk handles authentication and account management, with a subscription-manage dashboard for users to control what they get notified about.",
      chips: ["Clerk Auth", "Postgres", "Cheerio Ingestion", "Email Dispatch", "Live"],
      stack: ["Next.js", "React", "TypeScript", "Clerk", "PostgreSQL", "Cheerio", "Nodemailer", "Vercel"]
    },
    {
      id: "soarx-platform",
      title: "SoarX Community Platform",
      date: "2025",
      status: "Live — soarx.live",
      github: "https://github.com/saurabhyadav0",
      live: "https://soarx.live",
      featured: true,
      tags: ["Production", "Frontend", "Full-Stack"],
      description: "A scalable, in-production ecosystem for tech workshops and instant certificate verification, live for the SoarX community.\n\nHandles authentication, workshop registration, and a QR-code based instant certificate verification flow at soarx.live/verifycertificate — actively used by attendees to verify workshop certificates in real time.",
      chips: ["NextAuth", "Html5-qrcode", "Certificate Verification", "Live"],
      stack: ["Next.js", "NextAuth", "Html5-qrcode", "Tailwind CSS", "TypeScript"]
    },
    {
      id: "deepfake-detection",
      title: "Deepfake Detection System",
      date: "2025",
      status: "Shipped",
      github: "https://github.com/Saurabhyadav0/deepfake",
      featured: true,
      tags: ["Backend", "AI/ML"],
      description: "A computer vision application that identifies AI media manipulations using OpenCV face extraction and a custom PyTorch ResNet50 classification pipeline.\n\nWrapped in a Streamlit UI with a REST API for programmatic access.",
      chips: ["OpenCV Face Extraction", "Custom ResNet50", "Streamlit UI", "REST API"],
      stack: ["Python", "PyTorch", "ResNet50", "OpenCV", "Streamlit", "REST API"]
    },
    {
      id: "cityfix",
      title: "CityFix",
      date: "2025",
      status: "Live — cityplus-1.vercel.app",
      github: "https://github.com/Saurabhyadav0/Cityplus_1",
      live: "https://cityplus-1.vercel.app/",
      featured: false,
      tags: ["AI/ML", "Full-Stack"],
      description: "A civic issue reporting and tracking platform — \"Empowering Citizens to Create Change.\" Residents report problems like streetlight outages, road damage, and water infrastructure issues with a photo, GPS location, and description, and the system auto-categorizes and prioritizes each report for the responsible department.\n\nBuilt with Next.js and Prisma, with Leaflet and the Google Maps API for location tagging, and Groq + OpenAI powering the automatic issue categorization.",
      chips: ["Auto-Categorization", "GPS Tagging", "Leaflet Maps", "Prisma", "Live"],
      stack: ["Next.js", "Prisma", "PostgreSQL", "Leaflet", "Google Maps API", "Groq", "OpenAI", "Tailwind CSS"]
    },
    {
      id: "smart-waste-tracker",
      title: "Smart Waste Tracker",
      date: "2025",
      status: "Live — sparkathon-walmart.vercel.app",
      github: "https://github.com/saurabhyadav0",
      live: "https://sparkathon-walmart.vercel.app/",
      featured: false,
      tags: ["AI/ML"],
      description: "A dashboard to monitor spoilage and reduce waste, built with team Sparkers for the Walmart Sparkathon.\n\nTracks inventory and waste generation, surfaces AI-powered insights to flag optimization opportunities, and gives teams a central view of waste metrics to act on before spoilage happens.",
      chips: ["AI Insights", "Spoilage Monitoring", "Inventory Tracking", "Live"],
      stack: ["Next.js", "Clerk", "Tailwind CSS", "TypeScript"]
    },
    {
      id: "activerse",
      title: "Activerse",
      date: "2026",
      status: "Live — activerse-nextjs.vercel.app",
      github: "https://github.com/Saurabhyadav0/activerse-nextjs",
      live: "https://activerse-nextjs.vercel.app/",
      featured: true,
      tags: ["Production", "Full-Stack"],
      description: "A live, in-production booking system for Activerse, an arcade and entertainment venue — real-time slot availability (max 24 guests per slot), an admin dashboard for booking management, Razorpay payments, and automated confirmation emails.",
      chips: ["Real-Time Booking", "Razorpay", "Admin Dashboard", "Live"],
      stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Iron-session", "Razorpay", "Nodemailer", "Vercel"]
    },
    {
      id: "docs-realtime",
      title: "Docs — Real-Time Collaborative Editor",
      date: "2025",
      status: "Shipped",
      github: "https://github.com/Saurabhyadav0/-hrGENie--assingment",
      featured: false,
      tags: ["Backend", "AI/ML", "Full-Stack"],
      description: "A production-ready real-time collaborative document editor with AI writing assistance, built for an SDE Intern assignment.\n\nSocket.io powers live text synchronization, cursor broadcasting, and presence tracking across documents with owner/editor/viewer permissions. Google Gemini backs an AI toolkit for grammar checking, enhancement, summarization, completion, and suggestions. JWT auth with httpOnly cookies and refresh-token rotation, autosave, and a hardened Express API (helmet, rate limiting, validation). Fully dockerized with an Nginx reverse proxy for EC2 + PM2 deployment.",
      chips: ["Real-Time Sync (Socket.io)", "Gemini AI Toolkit", "JWT + RBAC", "Dockerized"],
      stack: ["React", "Vite", "Tailwind CSS", "Express", "MongoDB", "Socket.io", "Google Gemini", "Docker", "Nginx"]
    },
    {
      id: "replay-ai",
      title: "Replay.AI",
      date: "2025",
      status: "Live — repaly.ai",
      github: "https://github.com/saurabhyadav0",
      live: "https://www.repaly.ai/",
      featured: true,
      tags: ["Production", "Frontend"],
      description: "A live, in-production AI-driven engagement toolkit automation platform built for 1,000+ content creators — handling automated engagement workflows through a React and Redux-powered interface.",
      chips: ["1,000+ Creators", "Redux", "shadcn/ui", "Live"],
      stack: ["React", "Redux", "Tailwind CSS", "shadcn/ui"]
    },
    {
      id: "epark",
      title: "epark — Urban Mobility & Parking Platform",
      date: "2026",
      status: "Live — ncc-epark.vercel.app",
      github: "https://github.com/Saurabhyadav0/ncc-epark",
      live: "https://ncc-epark.vercel.app/",
      featured: false,
      tags: ["Full-Stack", "Backend"],
      description: "A unified parking and urban mobility platform built for India's Tier 2/3 cities — real-time parking discovery and slot booking, plus a peer-to-peer marketplace where homeowners and businesses list driveways and garages for rent.\n\nRazorpay handles instant checkout, Leaflet powers map-based discovery and navigation to reserved spots, and a vehicle services hub locates nearby EV charging points, CNG stations, and mechanics.",
      chips: ["P2P Parking Marketplace", "Leaflet Maps", "Razorpay Checkout", "Live"],
      stack: ["Next.js", "Clerk", "PostgreSQL", "Prisma ORM", "Leaflet", "Razorpay", "Tailwind CSS"]
    },
    {
      id: "shopease",
      title: "ShopEase — E-Commerce Platform",
      date: "2025",
      status: "Live — shop-ease-omega.vercel.app",
      github: "https://github.com/Saurabhyadav0/ease-shop",
      live: "https://shop-ease-omega.vercel.app/",
      featured: false,
      tags: ["Frontend", "Full-Stack"],
      description: "A multi-category online retail platform — browse and shop electronics, fashion, and more, with Razorpay checkout and Clerk-authenticated accounts.\n\nBuilt on a MongoDB/Mongoose backend, with TanStack Query for data fetching and Zustand for cart/UI state on top of a Radix UI component library.",
      chips: ["Razorpay Checkout", "Clerk Auth", "Multi-Category Catalog", "Live"],
      stack: ["Next.js", "MongoDB", "Mongoose", "Clerk", "Razorpay", "TanStack Query", "Zustand", "Radix UI", "Tailwind CSS"]
    },
    {
      id: "tastebite",
      title: "TasteBite — Restaurant Website",
      date: "2025",
      status: "Live — zyrix-craft-task.vercel.app",
      github: "https://github.com/Saurabhyadav0/zyrix-craft-task",
      live: "https://zyrix-craft-task.vercel.app/",
      featured: false,
      tags: ["Frontend", "UI"],
      description: "A fully responsive restaurant website with a warm, modern design — Home, Menu, Gallery, Reservation, and Contact pages, dark/light theme switching with persistent storage, and Framer Motion animations throughout.",
      chips: ["Dark/Light Mode", "Reservation Form", "Framer Motion", "Live"],
      stack: ["React 19", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "Framer Motion"]
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
  },
  achievements: [
    {
      icon: "🎓",
      title: "Head Student Placement Coordinator",
      description: "Training & Placement Cell, UIET MDU (Sept 2024 – Present). Coordinate placement drives and Sportech events — managing registrations, logistics, and company coordination."
    },
    {
      icon: "🏝️",
      title: "Hacker House Goa 2026",
      description: "Participant — shipped four task builds across the residency, from a client-side image tool to an agentic TigerGraph fraud investigator."
    },
    {
      icon: "🏆",
      title: "BNB Chain Bombay Hackathon",
      description: "Invited participant."
    },
    {
      icon: "🥉",
      title: "NextGenHack RKGIT",
      description: "Ranked 11th."
    },
    {
      icon: "🏅",
      title: "NexHack — Geeta University",
      description: "Top 20 Finalist."
    },
    {
      icon: "📱",
      title: "Samsung Solve for Tomorrow Hackathon 2025",
      description: "Participant."
    },
    {
      icon: "🌐",
      title: "Hacktoberfest 2023 & 2024",
      description: "Open source contributor across both years."
    }
  ]
};
