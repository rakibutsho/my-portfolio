"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Copy, Check, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
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
      setCopied(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-1/3 right-1/4 w-[350px] h-[300px] bg-sky-500/5 blur-[100px] pointer-events-none rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text, Status & CTAs (7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
            {/* Top Badge: Availability */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PORTFOLIO_DATA.profile.statusText}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-widest font-mono text-indigo-400 font-semibold">
                Full-Stack Software Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  {PORTFOLIO_DATA.profile.fullName}
                </span>
              </h1>
            </motion.div>

            {/* Authentic Technical Bio */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              Building reliable, high-performance web applications end-to-end. Specialized in{" "}
              <span className="text-white font-medium">React / Next.js</span> frontends and{" "}
              <span className="text-white font-medium">Node.js</span> microservices backed by{" "}
              <span className="text-white font-medium">PostgreSQL & MongoDB</span>. Delivered a{" "}
              <span className="text-emerald-400 font-mono font-medium">+25% load speed boost</span> and engineered
              real-time job-scheduled systems deployed on Linux VPS infrastructure.
            </motion.p>

            {/* Action Controls & Social Strip */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* Primary: Download Resume */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={PORTFOLIO_DATA.profile.resumePdf}
                download="Rakibul_Islam_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/50"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.a>

              {/* Secondary: Copy Email */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 hover:text-white font-medium text-sm transition-colors group"
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
              </motion.button>

              {/* GitHub Link */}
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>

              {/* LinkedIn Link */}
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Quick Tech Pill Row */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500 font-sans uppercase tracking-wider text-[11px]">Core Stack</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Linux VPS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-300 text-[11px]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Professional Portrait Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="relative group flex flex-col items-center lg:items-end">
              {/* Subtle ambient back-glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Image Container */}
              <div className="relative w-64 sm:w-72 md:w-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0e1017] border border-white/[0.12] shadow-2xl shadow-black/80">
                <Image
                  src="/profile.jpg"
                  alt="Md. Rakibul Islam - Full-Stack Software Engineer"
                  width={400}
                  height={480}
                  priority
                  className="w-full h-auto aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle gradient vignette at bottom to smoothly blend with card footer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Bottom Card Pill Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#090a0f]/85 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Md. Rakibul Islam</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-300">
                    Full-Stack
                  </span>
                </div>
              </div>

              {/* Live Timezone & Local Clock Bar under image */}
              {currentTime && (
                <div className="mt-3.5 flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 text-xs font-mono shadow-sm backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Dhaka, BD (UTC+6)</span>
                  <span className="text-slate-600">·</span>
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-slate-200 font-semibold">{currentTime}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
