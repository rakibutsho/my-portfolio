import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { TrendingUp, Zap, Server, GraduationCap } from "lucide-react";

export default function MetricsStrip() {
  const icons = [
    <Zap key="perf" className="w-4 h-4 text-emerald-400" />,
    <TrendingUp key="speed" className="w-4 h-4 text-indigo-400" />,
    <Server key="exp" className="w-4 h-4 text-sky-400" />,
    <GraduationCap key="gpa" className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section className="py-8 border-y border-white/[0.08] bg-white/[0.015]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {metric.label}
                </span>
                <span className="p-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  {icons[idx]}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <p className="mt-1.5 text-xs text-slate-400 leading-snug line-clamp-2">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
