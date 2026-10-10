"use client";

import { useState, useEffect } from "react";
import { Download, Copy, Check, ArrowDown, Clock, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle background ambient mesh (no gaudy blobs, strictly restrained) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[250px] bg-sky-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Badges: Availability & Real-Time Dhaka Clock */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PORTFOLIO_DATA.profile.statusText}</span>
          </div>

          {/* Timezone & Live Clock Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 text-xs font-mono">
            <MapPin className="w-3 h-3 text-slate-500" />
            <span>Dhaka, BD (UTC+6)</span>
            {currentTime && (
              <>
                <span className="text-slate-600">·</span>
                <Clock className="w-3 h-3 text-indigo-400" />
                <span className="text-slate-300 font-semibold">{currentTime}</span>
              </>
            )}
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 max-w-3xl">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest font-mono text-indigo-400 font-semibold">
              Full-Stack Software Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {PORTFOLIO_DATA.profile.fullName}
              </span>
            </h1>
          </div>

          {/* Authentic Technical Bio (Directly grounded in resume) */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Building reliable, high-performance web applications end-to-end. Specialized in{" "}
            <span className="text-white font-medium">React / Next.js</span> frontends and{" "}
            <span className="text-white font-medium">Node.js</span> microservices backed by{" "}
            <span className="text-white font-medium">PostgreSQL & MongoDB</span>. Proven track record of delivering a{" "}
            <span className="text-emerald-400 font-mono font-medium">+25% load speed boost</span> and engineering
            real-time systems deployed on Linux VPS infrastructure.
          </p>
        </div>

        {/* Action Controls & Social Strip */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {/* Primary: Download Resume */}
          <a
            href={PORTFOLIO_DATA.profile.resumePdf}
            download="Rakibul_Islam_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/50 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* Secondary: Copy Email with feedback */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-white font-medium text-sm transition-all active:scale-95 group"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </>
            )}
          </button>

          {/* GitHub Link */}
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-all active:scale-95"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Link */}
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-all active:scale-95"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Tech Pill Row */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
          <span className="text-slate-500 font-sans uppercase tracking-wider text-[11px]">Core Stack</span>
          <div className="flex flex-wrap items-center gap-2">
            {["Next.js (App Router)", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Prisma", "Docker", "Linux VPS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
