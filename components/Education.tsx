import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GraduationCap, Award, Users, Trophy } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-400 mb-3">
            <span>// 04. ACADEMICS & LEADERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Education & Community Leadership
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Strong foundational computer science background paired with active community leadership and event organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Formal Education</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-indigo-300 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06] shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  {edu.cgpa && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-medium">
                      <Award className="w-3.5 h-3.5" />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  )}

                  {edu.details && (
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Activities Card */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-400" />
              <span>Leadership & Community</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.leadership.map((lead) => (
                <div
                  key={lead.role + lead.organization}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.14] transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                        <span>{lead.role}</span>
                        <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      </h4>
                      <p className="text-sm font-medium text-sky-300 mt-0.5">
                        {lead.organization}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06] shrink-0">
                      {lead.period}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {lead.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
