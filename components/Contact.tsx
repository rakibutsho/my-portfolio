"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, Download, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { GithubIcon, LinkedinIcon, DevtoIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] relative overflow-hidden"
          >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-400 mb-3">
              <span>// 05. CONTACT & COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s Build Something High-Impact.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              I am actively open for full-time software engineering roles and high-impact remote engineering opportunities. Whether you have an open position, an engineering challenge, or just want to say hi, my inbox is always open.
            </p>
          </div>

          {/* Quick Contact Actions Grid */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {/* 1-Click Email Copy Card */}
            <div className="p-5 rounded-2xl bg-[#090a0f]/80 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Direct Email</span>
                </span>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white font-mono break-all">
                  {PORTFOLIO_DATA.profile.email}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  title="Open mail client"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Resume & Phone Card */}
            <div className="p-5 rounded-2xl bg-[#090a0f]/80 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Phone & Location</span>
                </span>
                <p className="mt-1 text-sm sm:text-base font-semibold text-white font-mono">
                  {PORTFOLIO_DATA.profile.phone}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {PORTFOLIO_DATA.profile.location} (UTC+6)
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={PORTFOLIO_DATA.profile.resumePdf}
                  download="Rakibul_Islam_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm shadow-indigo-600/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Social Row */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/rakibutsho</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/rakibutsho</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={PORTFOLIO_DATA.profile.devto}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dev.to Profile"
                title="Dev.to Profile"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-colors"
              >
                <DevtoIcon className="w-3.5 h-3.5" />
                <span>dev.to/rakibutsh</span>
              </motion.a>
            </div>

            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Response time: &lt; 24 hours</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
