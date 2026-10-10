import { ExternalLink, CheckCircle2, Activity, ShieldCheck, FileCheck } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Projects() {
  const projectIcons = {
    spidernode: <Activity className="w-4 h-4 text-emerald-400" />,
    petcare: <ShieldCheck className="w-4 h-4 text-indigo-400" />,
    "healthcare-staffing": <FileCheck className="w-4 h-4 text-sky-400" />,
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-400 mb-3">
            <span>// 01. FLAGSHIP WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Featured Engineering Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Real-world full-stack applications solving distributed monitoring, booking automation, and role-based medical staffing workflows.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-white/[0.06]">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                      {projectIcons[project.id as keyof typeof projectIcons] || (
                        <Activity className="w-4 h-4 text-indigo-400" />
                      )}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                      Production Ready
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    {project.tagline}
                  </p>
                </div>

                {/* Live & GitHub Action Buttons */}
                <div className="flex items-center gap-2.5 self-start shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:text-white transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-sm shadow-indigo-600/30 active:scale-95"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Highlights Bullet Points */}
              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Engineering Architecture & Key Highlights:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  {project.architectureHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 bg-white/[0.015] p-2.5 rounded-lg border border-white/[0.04]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <span className="leading-normal">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-500 mr-2 uppercase tracking-wider">
                  Stack:
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.07] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
