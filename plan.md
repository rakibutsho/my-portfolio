# Portfolio Implementation Plan

**Candidate**: Md. Rakibul Islam (Rakib Utsho) — Full-Stack Software Engineer  
**Resume Source**: `/public/Rakibul_Islam_Resume.pdf`  
**Target Audience**: Technical Recruiters, Engineering Managers, and Founders  
**Design Philosophy**: Clean, recruiter-friendly, human-crafted, high-contrast, zero clutter, zero AI clichés.

---

## Table of Contents
1. [Required Dependencies & Font Setup](#1-required-dependencies--font-setup)
2. [Design System & Theme Tokens](#2-design-system--theme-tokens)
3. [Architecture & Folder Structure](#3-architecture--folder-structure)
4. [Step-by-Step Implementation Breakdown](#4-step-by-step-implementation-breakdown)
   - [Phase 1: Environment & Dependencies](#phase-1-environment--dependencies)
   - [Phase 2: Typed Data Layer (`portfolio-data.ts`)](#phase-2-typed-data-layer)
   - [Phase 3: Component Engineering (Section by Section)](#phase-3-component-engineering)
   - [Phase 4: Page Assembly & SEO Metadata](#phase-4-page-assembly--seo-metadata)
   - [Phase 5: Polish, Interaction Feedback & Quality Audit](#phase-5-polish-interaction-feedback--quality-audit)
5. [Validation & Recruiter Review Checklist](#5-validation--recruiter-review-checklist)

---

## 1. Required Dependencies & Font Setup

### Required NPM Packages
Run the following command in `/home/rakib/my-projects/my-portfolio`:
```bash
npm install lucide-react motion clsx tailwind-merge
```

- **`lucide-react`**: Standard, high-craft feather-style SVG icons (`Github`, `Linkedin`, `Mail`, `FileText`, `ExternalLink`, `Code2`, `Server`, `Database`, `Check`, `Copy`, `MapPin`, `Calendar`, etc.).
- **`motion`**: Modern, performant motion library for declarative micro-interactions, subtle scroll reveals, and tab transitions (zero lag, 100% smooth).
- **`clsx` & `tailwind-merge`**: Utility for clean, collision-free Tailwind CSS class composition.

### Typography / Font Configuration
The project uses Next.js Google Fonts in `app/layout.tsx`:
- **Primary Sans**: `Geist` (clean modern geometric sans for headings and interface copy).
- **Secondary Monospace**: `Geist_Mono` (for code snippets, stats, metadata badges, dates).
- Configured with `display: 'swap'` and exported as CSS variables `--font-geist-sans` and `--font-geist-mono`.

---

## 2. Design System & Theme Tokens

### Color Palette (Tailwind CSS v4 in `app/globals.css`)
- **Background**: Deep Obsidian `#090a0f` (soft on eyes, avoids harsh solid `#000000`).
- **Surface / Card Background**: Glassmorphic slate `rgba(18, 20, 30, 0.7)` with subtle backdrop blur.
- **Borders & Dividers**: Hairline borders `rgba(255, 255, 255, 0.08)` for razor-sharp precision.
- **Primary Text**: High-contrast white `#f8fafc`.
- **Muted Text**: Accessible slate `#94a3b8` (WCAG AAA compliant contrast).
- **Accent Primary**: Electric Indigo `#6366f1` / Sky `#38bdf8` for active pills and subtle gradient underlines.
- **Status Green**: Vibrant Emerald `#10b981` with pulsing ring for the live "Available for Hire" indicator.

### Aesthetic Rules (Zero AI Cliché)
1. **NO** floating giant purple/cyan blur blobs.
2. **NO** generic marketing buzzwords; all copy directly reflects verified engineering achievements from the resume.
3. **NO** fake interactive terminal gimmick (recruiters have 15 seconds to scan; we prioritize instant scannability).
4. **NO** progress-bar percentages for skills (a senior practice that recruiters dislike).
5. **YES** to generous whitespace, razor-sharp typography, and responsive touch targets.

---

## 3. Architecture & Folder Structure

```
my-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design tokens, custom scrollbars, animations
│   ├── layout.tsx           # SEO metadata, font variables, root HTML
│   └── page.tsx             # Main page aggregating all portfolio sections
├── components/
│   ├── Navbar.tsx           # Sticky nav with logo, anchors, Resume CTA, theme switch
│   ├── Hero.tsx             # Above-the-fold identity, status pill, actions, local time
│   ├── MetricsStrip.tsx     # 4-card verified impact metrics bar
│   ├── Projects.tsx         # Flagship case studies (SpiderNode, Petcare, Healthcare)
│   ├── SkillsMatrix.tsx     # 4-column structured technical arsenal
│   ├── Experience.tsx       # Timeline of professional roles (SM Tech, Trodev, BCC)
│   ├── Education.tsx        # Jahangirnagar Univ M.Sc. & BUBT B.Sc. + Leadership
│   ├── Contact.tsx          # Frictionless 1-click email copy & social links
│   └── Footer.tsx           # Semantic copyright and technology credit
├── data/
│   └── portfolio-data.ts    # Single source of truth for all resume details & links
├── public/
│   └── Rakibul_Islam_Resume.pdf  # Downloadable PDF resume
└── plan.md                  # This implementation plan
```

---

## 4. Step-by-Step Implementation Breakdown

### Phase 1: Environment & Dependencies
- [ ] Install `lucide-react`, `motion`, `clsx`, `tailwind-merge`.
- [ ] Configure `app/globals.css` with dark theme variables, selection styling, and smooth scrolling.
- [ ] Configure `app/layout.tsx` with proper `<title>` ("Md. Rakibul Islam | Full-Stack Software Engineer"), meta description, OpenGraph tags, and font variable bindings.

---

### Phase 2: Typed Data Layer (`data/portfolio-data.ts`)
Create a strongly-typed data file containing:
- [ ] **Personal Profile**:
  - Full Name: Md. Rakibul Islam (Rakib Utsho)
  - Role: Full-Stack Software Engineer
  - Location: Dhaka, Bangladesh (`Asia/Dhaka` / `UTC+6`)
  - Email: `rakibutsho1920@gmail.com`
  - Phone: `+880 1707-934655`
  - GitHub: `https://github.com/rakibutsho`
  - LinkedIn: `https://linkedin.com/in/rakibutsho`
  - Resume Path: `/Rakibul_Islam_Resume.pdf`
- [ ] **Verified Production Metrics**:
  - `+25%`: Load time improvement (Core Web Vitals)
  - `-30%`: Feature development cycle time via reusable design system
  - `1.5+`: Years full-stack production engineering
  - `3.75`: M.Sc. in Computer Science CGPA
- [ ] **Featured Projects**:
  1. **SpiderNode** (Uptime Monitoring Platform):
     - Stack: Next.js, NextAuth, Prisma, PostgreSQL, Telegram Bot API
     - Highlights: Cron health checks (`Promise.allSettled`), Telegram Webhook alert flow (`/start`), public status pages, rate-limited REST API.
     - Links: Live Demo & GitHub.
  2. **Petcare Booking Platform**:
     - Stack: Next.js, Node.js, TypeScript, Prisma, MongoDB
     - Highlights: Client portal & admin dashboard, JWT/OTP RBAC, automated background jobs, PDF invoice generation, Linux VPS deployment.
     - Links: Live Demo & GitHub.
  3. **Healthcare Staffing Dashboard**:
     - Stack: React.js, Next.js, Node.js, Prisma, Tailwind CSS
     - Highlights: Dual-dashboard for facility and medical provider management, Stripe payments, multi-step Zod form validation.
     - Links: Live Demo & GitHub.
- [ ] **Technical Skills Categories**:
  - Languages: TypeScript, JavaScript (ES6+), SQL, Go *(learning)*
  - Frontend: React.js, Next.js (App Router), Vue.js, Tailwind CSS, Zustand, Redux, Context API
  - Backend & APIs: Node.js, Express.js, REST APIs, WebSockets, Prisma, Firebase
  - Databases & Cloud/DevOps: PostgreSQL, MongoDB, Docker, Linux VPS, Nginx, PM2, GitHub Actions, Vercel
- [ ] **Work Experience**:
  - SM Technology (Apr 2025 – Present) | Junior Executive, Front End (Full-Stack Contributions)
  - Trodev (Feb 2024 – May 2024) | Junior Developer (Remote)
  - Bangladesh Computer Council (BCC) (Mar 2024 – Apr 2024) | Software Quality Testing Intern
- [ ] **Education & Leadership**:
  - M.Sc. in Computer Science @ Jahangirnagar University (CGPA 3.75/4.00, Jan 2026 – Present)
  - B.Sc. in CSE @ BUBT (CGPA 3.34/4.00, Feb 2020 – Dec 2023)
  - President @ BUBT IT Club (Aug 2023 – Feb 2024)
  - Volunteer Lead @ ICPC Asia Dhaka Regional 2023 & National IT Olympiad (BCC)

---

### Phase 3: Component Engineering (Section by Section)

#### Section 3.1: Navbar (`components/Navbar.tsx`)
- [ ] Sticky floating header with glassmorphism backdrop (`backdrop-blur-md`).
- [ ] Brand mark: `rakib.dev` with subtle mono accent.
- [ ] Navigation anchors: `Projects`, `Experience`, `Skills`, `Contact`.
- [ ] Direct CTA: **Download Resume** button (opens/downloads `/Rakibul_Islam_Resume.pdf`).
- [ ] Mobile hamburger drawer for seamless mobile navigation.

#### Section 3.2: Hero (`components/Hero.tsx`)
- [ ] Live Status Pill: `● Available for Full-Time & Remote Roles` with glowing emerald pulse.
- [ ] Main Title: Large, crisp typography introducing **Md. Rakibul Islam**, Full-Stack Software Engineer.
- [ ] Bio Paragraph: Plainspoken, confident summary of building end-to-end web apps with React/Next.js, Node.js, and cloud systems.
- [ ] Location & Live Clock: Displays `Dhaka, BD (UTC+6)` with live ticking time.
- [ ] Action Bar:
  - Primary Button: **Download Resume** (with download icon).
  - Secondary Button: **Copy Email** (`rakibutsho1920@gmail.com`) with instant toast feedback.
  - Social Links: Direct GitHub and LinkedIn icon buttons.

#### Section 3.3: Impact Metrics Bar (`components/MetricsStrip.tsx`)
- [ ] 4-card horizontal grid showing real verified numbers.
- [ ] Minimalist card styling with monospace metric numbers and clear labels.

#### Section 3.4: Featured Projects (`components/Projects.tsx`)
- [ ] Section Header: "Featured Engineering Work" + subtitle "Production applications and full-stack systems".
- [ ] Bento-style case study cards:
  - Project Title & Live Status Indicator.
  - Technical summary & specific architecture highlights (e.g. concurrent `Promise.allSettled` monitoring, JWT/OTP RBAC, Stripe integration).
  - Tech stack tag pills.
  - Live Demo and GitHub Repo action links.

#### Section 3.5: Technical Arsenal (`components/SkillsMatrix.tsx`)
- [ ] 4 distinct architectural columns:
  1. **Core Languages** (TypeScript, JavaScript, SQL, Go)
  2. **Frontend Architecture** (React, Next.js, Vue, Tailwind, Zustand, Redux)
  3. **Backend & System Services** (Node.js, Express, REST APIs, WebSockets, Prisma)
  4. **Databases & Infrastructure** (PostgreSQL, MongoDB, Docker, Linux VPS, Nginx, PM2)
- [ ] Clean badges with subtle hover glow. No arbitrary percentage bars.

#### Section 3.6: Experience & Career Trajectory (`components/Experience.tsx`)
- [ ] Chronological vertical timeline with hairline connecting line.
- [ ] Company, role title, duration badge, and location.
- [ ] Concrete bullet points highlighting real engineering outcomes (load speed +25%, component library adoption across 3+ products, 20+ critical bug fixes).

#### Section 3.7: Education & Leadership (`components/Education.tsx`)
- [ ] Academic degrees (Jahangirnagar M.Sc. & BUBT B.Sc.) with CGPA badges.
- [ ] Leadership & Community card (BUBT IT Club President, ICPC Asia Dhaka Regional Volunteer Lead).

#### Section 3.8: Frictionless Contact & Footer (`components/Contact.tsx` & `Footer.tsx`)
- [ ] "Let's Build Something Meaningful" call-to-action.
- [ ] Instant 1-click email copy card with visual copy notification.
- [ ] Direct email link, LinkedIn, GitHub, and phone contact.
- [ ] Footer with semantic HTML, copyright year, and tech stack badges.

---

### Phase 4: Page Assembly & SEO Metadata
- [ ] Assemble all sections in `app/page.tsx` with smooth scroll behavior.
- [ ] Set up comprehensive metadata in `app/layout.tsx` (title, meta description, keywords, OpenGraph).
- [ ] Test mobile, tablet, and desktop viewports.

---

### Phase 5: Polish, Interaction Feedback & Quality Audit
- [ ] Ensure 1-click email copy works reliably and gives immediate feedback ("Email Copied to Clipboard!").
- [ ] Test that the "Download Resume" button properly serves `/public/Rakibul_Islam_Resume.pdf`.
- [ ] Verify keyboard accessibility and contrast ratios.
- [ ] Audit Lighthouse performance and ensure zero console errors.

---

## 5. Validation & Recruiter Review Checklist

| Requirement | Target | Status |
| :--- | :--- | :--- |
| **Recruiter Scan Time** | Key info visible in < 10 seconds | Planned |
| **Download Resume** | Direct 1-click link to PDF | Planned |
| **Real Numbers** | 25% load speed, 30% dev time, 1.5+ yrs | Included |
| **No AI Cliché** | No fake terminal, no random purple gradients | Enforced |
| **Mobile Responsive** | Fluid across phone, tablet, and widescreen | Planned |
| **Lighthouse Score** | 95+ Performance, Accessibility, Best Practices | Planned |
