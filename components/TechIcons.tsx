import React from "react";
import Image from "next/image";

export function TechIcon({
  name,
  className = "w-3.5 h-3.5 shrink-0",
}: {
  name: string;
  className?: string;
}) {
  const norm = name.toLowerCase();

  // Mapping of normalized skill names to their corresponding SVG files in /public/skills
  const svgMap: Record<string, string> = {
    typescript: "typescript.svg",
    "javascript (es6+)": "javascript.svg",
    javascript: "javascript.svg",
    "go (golang)": "go.svg",
    go: "go.svg",
    "next.js (app router)": "nextjs.svg",
    "next.js": "nextjs.svg",
    nextjs: "nextjs.svg",
    "react.js": "react.svg",
    react: "react.svg",
    "tailwind css": "tailwind-css.svg",
    tailwind: "tailwind-css.svg",
    "redux toolkit": "redux.svg",
    redux: "redux.svg",
    "node.js": "nodejs.svg",
    node: "nodejs.svg",
    "express.js": "expressdotjs.svg",
    express: "expressdotjs.svg",
    "prisma orm": "prisma.svg",
    prisma: "prisma.svg",
    postgresql: "postgresql.svg",
    postgres: "postgresql.svg",
    mongodb: "mongodb.svg",
    mongo: "mongodb.svg",
    firebase: "firebase.svg",
    "linux vps": "linux.svg",
    linux: "linux.svg",
    docker: "docker.svg",
    nginx: "nginx.svg",
    "pm2 daemon": "pm2.svg",
    pm2: "pm2.svg",
    git: "git.svg",
    github: "github-mono.svg",
    "github actions": "github-actions.svg",
    vercel: "vercel.svg",
    postman: "postman.svg",
    "vs code": "visual-studio-code.svg",
    vscode: "visual-studio-code.svg",
  };

  // Find exact match first, otherwise check if 'norm' contains a key
  let matchedFile = svgMap[norm];
  if (!matchedFile) {
    const matchingKey = Object.keys(svgMap).find((key) => norm.includes(key));
    if (matchingKey) {
      matchedFile = svgMap[matchingKey];
    }
  }

  if (matchedFile) {
    return (
      <div className={`${className} relative flex items-center justify-center`}>
        <Image
          src={`/skills/${matchedFile}`}
          alt={`${name} icon`}
          fill
          className="object-contain"
        />
      </div>
    );
  }

  // Fallbacks for icons not provided in the /public/skills directory

  // 3. SQL
  if (norm.includes("sql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#38bdf8" }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // 8. Zustand (Official Bear Mark)
  if (norm.includes("zustand")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#d97706" }}>
        <path d="M4 18c0 1.5 2 3 5 3s4-1 6-1 3 1 5-2c0-3-1-6-3-8 1-1.5 1-3.5 0-4.5-1-1-3-1-4.5.5C11 5 9 5 7.5 6 6 7 5 9 5 11c-1.5 1-2 4-1 7z" />
        <circle cx="9" cy="11" r="1" fill="#090a0f" />
        <circle cx="15" cy="11" r="1" fill="#090a0f" />
        <ellipse cx="12" cy="14" rx="1.5" ry="1" fill="#090a0f" />
      </svg>
    );
  }

  // 12. REST APIs
  if (norm.includes("rest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#38bdf8" }}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  // 13. WebSockets
  if (norm.includes("websocket")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#f59e0b" }}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" opacity="0.3" />
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  // Default fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

