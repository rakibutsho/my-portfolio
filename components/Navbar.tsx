"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-tight text-base hover:text-white transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold transition-transform group-hover:scale-105">
            RI
          </span>
          <span className="font-medium text-slate-200">
            rakibutsho<span className="text-indigo-400 font-mono">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Download Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PORTFOLIO_DATA.profile.resumePdf}
            download="Rakibul_Islam_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm shadow-indigo-600/30 hover:shadow-indigo-500/50 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={PORTFOLIO_DATA.profile.resumePdf}
            download="Rakibul_Islam_Resume.pdf"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-600 text-white"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white rounded-md border border-white/[0.08] bg-white/[0.03]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#090a0f]/95 border-b border-white/[0.1] px-4 pt-3 pb-5 backdrop-blur-lg">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.profile.resumePdf}
                download="Rakibul_Islam_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume PDF
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
