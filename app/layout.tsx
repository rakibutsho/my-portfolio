import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rakibutsho.dev"),
  title: "Md. Rakibul Islam | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer building high-performance web apps with React, Next.js, Node.js, and cloud systems.",
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
  creator: "Md. Rakibul Islam",
  alternates: {
    canonical: "https://rakibutsho.dev",
  },
  openGraph: {
    title: "Md. Rakibul Islam | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building high-performance web apps with React, Next.js, Node.js, and cloud systems.",
    url: "https://rakibutsho.dev",
    siteName: "Md. Rakibul Islam Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md. Rakibul Islam | Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Rakibul Islam | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building high-performance web apps with React, Next.js, Node.js, and cloud systems.",
    creator: "@rakibutsh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md. Rakibul Islam | Full-Stack Software Engineer",
      },
    ],
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
