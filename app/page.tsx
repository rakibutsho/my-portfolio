import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import Projects from "@/components/Projects";
import SkillsMatrix from "@/components/SkillsMatrix";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-indigo-500/30 selection:text-white flex flex-col font-sans">
      {/* Sticky Top Navigation */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Above-The-Fold Hero Section */}
        <Hero />

        {/* Verified Impact Metrics Bar */}
        <MetricsStrip />

        {/* Flagship Projects Section */}
        <Projects />

        {/* Technical Arsenal & Systems Matrix */}
        <SkillsMatrix />

        {/* Professional Career Trajectory */}
        <Experience />

        {/* Academics, Degrees & Community Leadership */}
        <Education />

        {/* Frictionless Contact & 1-Click Email Copy */}
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}
