"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { TrendingUp, Zap, Server, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

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
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.03] transition-colors cursor-default"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="flex-1 min-w-0 text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-medium leading-tight pt-1 break-words">
                  {metric.label}
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center rounded-md bg-white/[0.04] border border-white/[0.06]">
                  {icons[idx]}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <p className="mt-1.5 text-xs text-slate-400 leading-snug line-clamp-2">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
