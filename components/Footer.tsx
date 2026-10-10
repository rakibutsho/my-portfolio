import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.08] bg-[#07080c] text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-slate-300">
            {PORTFOLIO_DATA.profile.fullName}
          </span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span>Full-Stack Software Engineer</span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span>Dhaka, Bangladesh</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-slate-500">
            Next.js 16 · React 19 · Tailwind v4
          </span>
          <a
            href="#"
            className="p-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
