import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Rakibul Islam | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 1.5+ years of production experience building high-performance web applications with React, Next.js, Node.js, and modern cloud infrastructure.",
  keywords: [
    "Md. Rakibul Islam",
    "Rakib Utsho",
    "Full-Stack Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Md. Rakibul Islam", url: "https://rakibutsho.dev" }],
  openGraph: {
    title: "Md. Rakibul Islam | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building end-to-end web applications with React/Next.js, Node.js, and cloud systems.",
    url: "https://rakibutsho.dev",
    siteName: "Md. Rakibul Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
