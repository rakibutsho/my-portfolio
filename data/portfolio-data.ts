export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architectureHighlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface ToolItem {
  name: string;
  category: string;
  iconId: string;
  role: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  details?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Md. Rakibul Islam",
    preferredName: "Rakib Utsho",
    role: "Full-Stack Software Engineer",
    location: "Dhaka, Bangladesh",
    timezone: "UTC+6",
    statusText: "Available for Full-Time & Remote Roles",
    bio: "Full-Stack Software Engineer with 1.5+ years of experience engineering high-performance web applications end-to-end — React/Next.js frontends and Node.js/Express backends with MongoDB and PostgreSQL. Delivered a 25% load-time improvement and engineered real-time, job-scheduled systems across multiple production projects. Growing backend depth in Go.",
    email: "rakibutsho1920@gmail.com",
    phone: "+880 1707-934655",
    github: "https://github.com/rakibutsho",
    linkedin: "https://linkedin.com/in/rakibutsho",
    devto: "https://dev.to/rakibutsho",
    website: "https://rakibutsho.dev",
    resumePdf: "/Rakibul_Islam_Resume.pdf",
  },

  metrics: [
    {
      value: "+25%",
      label: "Load Performance",
      subtext: "Core Web Vitals boost across production web applications",
    },
    {
      value: "-30%",
      label: "Dev Cycle Time",
      subtext: "Achieved via modular reusable design system across 3+ core products",
    },
    {
      value: "1.5+",
      label: "Years Experience",
      subtext: "End-to-end full-stack engineering & Linux VPS deployment",
    },
    {
      value: "3.75",
      label: "M.Sc. in CS CGPA",
      subtext: "Jahangirnagar University (1st Semester, actively enrolled)",
    },
  ] as MetricItem[],

  projects: [
    {
      id: "spidernode",
      title: "SpiderNode",
      tagline: "High-Concurrency Uptime Monitoring & Alerting System",
      description:
        "Engineered a full-stack uptime monitoring platform running cron-triggered concurrent health checks via Promise.allSettled, tracking latency, status codes, and downtime.",
      architectureHighlights: [
        "Concurrent health checks running via Promise.allSettled with low server overhead",
        "Telegram Bot webhook integration with a /start linking flow for instant incident alerts",
        "Public status pages per user with historical uptime graphs and incident logging",
        "Protected by NextAuth session auth and rate-limited REST API endpoints",
      ],
      tags: ["Next.js", "NextAuth", "Prisma", "PostgreSQL", "Telegram Bot API", "Tailwind CSS"],
      liveUrl: "https://www.spidernode.site/",
      githubUrl: "https://github.com/rakibutsho/SPIDER_NODE-uptime-tracker",
      featured: true,
    },
    {
      id: "petcare",
      title: "Petcare Booking Platform",
      tagline: "Full-Stack Booking Portal with Automated Background Job Engine",
      description:
        "Full-stack booking platform with a dedicated client portal and admin dashboard, featuring JWT/OTP authentication and granular role-based access control.",
      architectureHighlights: [
        "Automated background cron jobs for schedule syncing and email notifications",
        "Server-side dynamic PDF invoice generation engine with secure download links",
        "Secure JWT/OTP multi-factor verification flow and role-based access control (RBAC)",
        "Production deployment on a Linux VPS with Nginx reverse proxy and PM2 clustering",
      ],
      tags: ["Next.js", "Node.js", "TypeScript", "Prisma", "MongoDB", "Linux VPS"],
      liveUrl: "https://pawradise.lu/fr",
      githubUrl: "https://github.com/rakibutsho/petcare-booking-platform",
      featured: true,
    },
    {
      id: "healthcare-staffing",
      title: "Healthcare Staffing Dashboard",
      tagline: "Dual-Role Management Portal with Multi-Step Form Engine",
      description:
        "Engineered a dual-dashboard management system for medical facilities and healthcare providers featuring end-to-end Stripe payment processing.",
      architectureHighlights: [
        "Complex multi-step form architecture with strict schema validation using React Hook Form and Zod",
        "Zero-data-integrity-error pipeline preventing invalid medical provider credential submissions",
        "Role-partitioned dashboards with custom views for healthcare facilities vs. healthcare providers",
        "Stripe payment gateway integration for automated billing and shift compensation",
      ],
      tags: ["React.js", "Next.js", "Node.js", "Prisma", "Tailwind CSS", "Stripe API", "Zod"],
      liveUrl: "https://anesthelink.com/",
      githubUrl: "https://github.com/rakibutsho/Healthcare-Staffing-Platform_Frontend",
      featured: true,
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      title: "Core Languages",
      description: "Typed foundations & systems programming",
      skills: [
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "SQL", highlight: true },
        { name: "Go (Golang)", highlight: false },
      ],
    },
    {
      title: "Frontend Architecture",
      description: "High-performance reactive interfaces & UI systems",
      skills: [
        { name: "React.js", highlight: true },
        { name: "Next.js (App Router)", highlight: true },
        { name: "Vue.js" },
        { name: "Tailwind CSS", highlight: true },
        { name: "Zustand" },
        { name: "Redux Toolkit" },
        { name: "React Hook Form" },
        { name: "Context API" },
      ],
    },
    {
      title: "Backend & System APIs",
      description: "Scalable server architectures & real-time protocols",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "WebSockets", highlight: true },
        { name: "Prisma ORM", highlight: true },
        { name: "Firebase" },
        { name: "JWT & OTP Auth" },
        { name: "Cron Scheduling" },
      ],
    },
    {
      title: "Databases, Cloud & DevOps",
      description: "Data storage, containerization & production infrastructure",
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "Docker", highlight: true },
        { name: "Linux VPS", highlight: true },
        { name: "Nginx" },
        { name: "PM2" },
        { name: "GitHub Actions" },
        { name: "Vercel", highlight: true },
        { name: "VS Code" },
      ],
    },
  ] as SkillCategory[],

  developerTools: [
    {
      name: "VS Code",
      category: "IDE & Environment",
      iconId: "vscode",
      role: "Primary code editor, debugging, TypeScript tooling & extensions",
    },
    {
      name: "Vercel",
      category: "Edge Deployment",
      iconId: "vercel",
      role: "CI/CD automated preview branches & serverless edge deployments",
    },
    {
      name: "Claude & Gemini",
      category: "AI Pair Programming",
      iconId: "ai",
      role: "Architecture review, code optimization & accelerated debugging",
    },
    {
      name: "Postman",
      category: "API Testing",
      iconId: "postman",
      role: "REST endpoint design, payload validation & contract testing",
    },
    {
      name: "Docker",
      category: "Containers",
      iconId: "docker",
      role: "Containerized environments, image building & process isolation",
    },
    {
      name: "Linux VPS & Bash",
      category: "Systems & Deploy",
      iconId: "terminal",
      role: "Server configuration, Nginx reverse proxy & PM2 daemon runtime",
    },
  ] as ToolItem[],

  experience: [
    {
      role: "Junior Executive, Front End (Full-Stack Contributions)",
      company: "SM Technology",
      location: "Dhaka, Bangladesh",
      period: "April 2025 – Present",
      type: "Full-Time",
      responsibilities: [
        "Enhanced end-to-end data-fetching strategies, state management, and server-client communication, boosting application load performance by 25% (Core Web Vitals).",
        "Architected and deployed application server environments on Linux VPS using PM2 clustering and Nginx reverse proxy; configured and secured production MongoDB clusters.",
        "Engineered an internal reusable component library adopted across 3+ core products, cutting average feature delivery time by 30%.",
      ],
      tags: ["React.js", "Next.js", "Node.js", "MongoDB", "Linux VPS", "Nginx", "PM2"],
    },
    {
      role: "Junior Developer",
      company: "Trodev",
      location: "Remote",
      period: "Feb 2024 – May 2024",
      type: "Remote",
      responsibilities: [
        "Translated 10+ high-fidelity design mockups into fully responsive React interfaces with pixel-perfect cross-browser compatibility and zero layout regressions.",
        "Diagnosed and resolved 20+ critical frontend bugs, measurably improving application stability and reducing user-reported UI issues in production by 40%.",
      ],
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Bug Resolution", "Responsive UI"],
    },
    {
      role: "Software Quality Testing Intern",
      company: "Bangladesh Computer Council (BCC)",
      location: "Dhaka, Bangladesh",
      period: "Mar 2024 – Apr 2024",
      type: "Internship",
      responsibilities: [
        "Executed comprehensive manual test plans covering complex edge cases and regression scenarios across government-scale applications.",
        "Collaborated directly with engineering leads to detect and resolve defects prior to national-scale public release.",
      ],
      tags: ["QA Testing", "Edge Case Scenarios", "Regression Testing", "Issue Tracking"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "M.Sc. in Computer Science",
      institution: "Jahangirnagar University",
      period: "Jan 2026 – Present",
      cgpa: "3.75 / 4.00 (1st Semester)",
      details: "Advanced algorithms, distributed computing, and database theory.",
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Bangladesh University of Business & Technology (BUBT)",
      period: "Feb 2020 – Dec 2023",
      cgpa: "3.34 / 4.00",
      details: "Data Structures, Algorithms, Software Engineering, Database Systems.",
    },
  ] as EducationItem[],

  leadership: [
    {
      role: "President",
      organization: "BUBT IT Club",
      period: "Aug 2023 – Feb 2024",
      description:
        "Led club operations, organized technical hackathons, workshops, and competitive programming bootcamps for 500+ students. Served as Joint Secretary prior (Dec 2022 – Aug 2023).",
    },
    {
      role: "Volunteer Lead",
      organization: "ICPC Asia Dhaka Regional & National IT Olympiad",
      period: "2023",
      description:
        "Coordinated venue logistics, technical equipment, and participant onboarding for regional programming contestants at ICPC Asia Dhaka Regional 2023 and the BCC National IT Olympiad.",
    },
  ] as LeadershipItem[],
};
