"use client";

import { Code2, Server, Terminal, Layers, Database, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { TechIcon } from "@/components/TechIcons";

interface SkillPill {
  name: string;
  highlight?: boolean;
}

interface SkillGroup {
  label: string;
  skills: SkillPill[];
}

export default function SkillsMatrix() {
  const applicationStack: SkillGroup[] = [
    {
      label: "Languages & Core Runtimes",
      skills: [
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "SQL", highlight: true },
        { name: "Go (Golang)" },
      ],
    },
    {
      label: "Frontend & UI Architecture",
      skills: [
        { name: "Next.js (App Router)", highlight: true },
        { name: "React.js", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Zustand" },
        { name: "Redux Toolkit" },
      ],
    },
    {
      label: "Backend & System APIs",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "WebSockets", highlight: true },
        { name: "Prisma ORM", highlight: true },
      ],
    },
  ];

  const infrastructureStack: SkillGroup[] = [
    {
      label: "Data Architecture & Storage",
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "Prisma ORM", highlight: true },
        { name: "Firebase" },
      ],
    },
    {
      label: "Server & Infrastructure Management",
      skills: [
        { name: "Linux VPS", highlight: true },
        { name: "Docker", highlight: true },
        { name: "Nginx", highlight: true },
        { name: "PM2 Daemon", highlight: true },
      ],
    },
    {
      label: "Delivery, CI/CD & Tooling",
      skills: [
        { name: "GitHub Actions", highlight: true },
        { name: "Vercel", highlight: true },
        { name: "Postman" },
        { name: "VS Code" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-400 mb-3">
            <span>// 02. TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Skills & Architectural Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Structured by full-stack application engineering (how I build) and production infrastructure (how I deploy and operate).
          </p>
        </motion.div>

        {/* 2-Column Senior Split */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Panel 1: Application Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Layers className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Application Engineering
                    </h3>
                    <p className="text-xs text-slate-400">
                      Client interfaces, state management & server APIs
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-indigo-400 font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  BUILD
                </span>
              </div>

              {/* Sub-groups */}
              <div className="space-y-6">
                {applicationStack.map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{group.label}</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <motion.span
                          key={skill.name}
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.15 }}
                          className={`group/badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            skill.highlight
                              ? "bg-indigo-500/10 border border-indigo-500/25 text-indigo-200 font-medium hover:border-indigo-400/50 hover:bg-indigo-500/20"
                              : "bg-white/[0.03] border border-white/[0.07] text-slate-300 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05]"
                          }`}
                        >
                          <TechIcon
                            name={skill.name}
                            className="w-3.5 h-3.5 shrink-0 opacity-75 group-hover/badge:opacity-100 group-hover/badge:scale-110 transition-transform"
                          />
                          <span>{skill.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Systems, Data & Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <Server className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Systems & Infrastructure
                    </h3>
                    <p className="text-xs text-slate-400">
                      Database modeling, Linux VPS & continuous delivery
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-sky-400 font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                  OPERATE
                </span>
              </div>

              {/* Sub-groups */}
              <div className="space-y-6">
                {infrastructureStack.map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>{group.label}</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <motion.span
                          key={skill.name}
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.15 }}
                          className={`group/badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            skill.highlight
                              ? "bg-sky-500/10 border border-sky-500/25 text-sky-200 font-medium hover:border-sky-400/50 hover:bg-sky-500/20"
                              : "bg-white/[0.03] border border-white/[0.07] text-slate-300 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05]"
                          }`}
                        >
                          <TechIcon
                            name={skill.name}
                            className="w-3.5 h-3.5 shrink-0 opacity-75 group-hover/badge:opacity-100 group-hover/badge:scale-110 transition-transform"
                          />
                          <span>{skill.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
