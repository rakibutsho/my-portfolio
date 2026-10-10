import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Code2, Layout, Server, Database } from "lucide-react";
import { TechIcon } from "@/components/TechIcons";

export default function SkillsMatrix() {
  const categoryIcons = [
    <Code2 key="lang" className="w-5 h-5 text-indigo-400" />,
    <Layout key="front" className="w-5 h-5 text-sky-400" />,
    <Server key="back" className="w-5 h-5 text-emerald-400" />,
    <Database key="devops" className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-400 mb-3">
            <span>// 02. TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Skills & Architectural Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive, scannable breakdown of technologies used in production systems across client and server layers.
          </p>
        </div>

        {/* 4-Column Grid: Core Engineering Capabilities with Tech Icons inside each badge */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    {categoryIcons[idx]}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-snug">
                  {category.description}
                </p>
              </div>

              {/* Badges List with Tech Icons */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`group/badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                      skill.highlight
                        ? "bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-medium hover:border-indigo-400/40 hover:bg-indigo-500/15"
                        : "bg-white/[0.03] border border-white/[0.07] text-slate-300 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05]"
                    }`}
                  >
                    <TechIcon
                      name={skill.name}
                      className="w-3.5 h-3.5 shrink-0 opacity-75 group-hover/badge:opacity-100 group-hover/badge:scale-110 transition-transform"
                    />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
