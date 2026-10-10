import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-400 mb-3">
            <span>// 03. CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Track record of shipping production features, optimizing application performance, and maintaining server infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-[1px] before:bg-white/[0.08]">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div
              key={`${item.company}-${item.period}`}
              className="relative pl-10 sm:pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-1.5 sm:left-2 top-1.5 -translate-x-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#090a0f] border border-indigo-500/40 group-hover:border-indigo-400 transition-colors">
                <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium text-indigo-300">
                      <span>{item.company}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400 font-normal flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-indigo-400 font-mono text-xs mt-1 shrink-0">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/[0.02] border border-white/[0.06] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
