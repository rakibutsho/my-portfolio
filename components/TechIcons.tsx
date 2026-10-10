import React from "react";

export function TechIcon({
  name,
  className = "w-3.5 h-3.5 shrink-0",
}: {
  name: string;
  className?: string;
}) {
  const norm = name.toLowerCase();

  // 1. TypeScript
  if (norm.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#3178c6" }}>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12.9 8.2h3.2v9.6h-3.2v-7.3H10.1V8.2h5.7zm5.5 2.1c.5 0 .9.1 1.2.2v2.2c-.4-.2-.8-.3-1.2-.3-.5 0-.8.2-.8.5 0 .3.2.5.7.7l.8.3c1 .4 1.5 1.1 1.5 2.1 0 1.5-1.1 2.3-2.6 2.3-.6 0-1.2-.1-1.7-.3v-2.3c.5.3 1.1.4 1.6.4.5 0 .8-.2.8-.5 0-.3-.2-.5-.7-.7l-.8-.3c-1-.4-1.5-1.1-1.5-2.1 0-1.4 1-2.2 2.7-2.2z" />
      </svg>
    );
  }

  // 2. JavaScript
  if (norm.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#f7df1e" }}>
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.88-1.799-2.247-2.36-1.274-.537-1.523-.771-1.523-1.242 0-.387.29-.691.894-.691.642 0 1.258.261 1.688.583l.872-1.396c-.636-.511-1.542-.779-2.531-.779-2.029 0-3.047 1.056-3.047 2.457 0 1.353.978 2.083 2.508 2.684.978.384 1.274.654 1.274 1.144 0 .47-.464.757-1.135.757-.96 0-1.685-.436-2.197-.88l-.897 1.392c.677.676 1.83 1.077 3.064 1.077 2.226 0 3.123-1.143 3.123-2.746h.007zm-8.816-6.666h-2.148v7.266c0 1.306-.525 1.812-1.657 1.812-.55 0-.994-.092-1.282-.204l-.324 1.487c.433.197 1.148.339 2.003.339 2.115 0 3.408-1.074 3.408-3.328v-7.372z" />
      </svg>
    );
  }

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

  // 4. Go (Golang)
  if (norm.includes("go")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#00add8" }}>
        <path d="M1.986 10.963c.427-.087.854-.152 1.282-.196.427-.044.854-.065 1.282-.065 1.154 0 2.176.24 3.065.719.889.48 1.58 1.166 2.072 2.059.493.894.739 1.93.739 3.109 0 1.18-.256 2.222-.767 3.127-.512.905-1.229 1.597-2.152 2.076-.923.479-1.99.719-3.203.719-1.132 0-2.147-.213-3.045-.639-.899-.427-1.603-1.042-2.113-1.846C.641 19.243.385 18.286.385 17.172c0-1.177.261-2.215.782-3.113.522-.898 1.246-1.589 2.174-2.072.927-.484 1.996-.726 3.207-.726.685 0 1.344.076 1.977.228.632.153 1.206.386 1.721.7zM16.142 8.448c.95 0 1.83.179 2.64.537.81.358 1.488.877 2.033 1.557.545.68.94 1.498 1.185 2.454.245.956.368 2.012.368 3.168 0 1.156-.123 2.212-.368 3.168-.245.956-.64 1.774-1.185 2.454-.545.68-1.223 1.199-2.033 1.557-.81.358-1.69.537-2.64.537-1.157 0-2.18-.245-3.07-.735-.89-.49-1.58-1.185-2.07-2.085-.49-.9-.735-1.935-.735-3.105 0-1.17.245-2.205.735-3.105.49-.9 1.18-1.595 2.07-2.085.89-.49 1.913-.735 3.07-.735z" />
      </svg>
    );
  }

  // 5. Next.js
  if (norm.includes("next.js") || norm === "nextjs") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.52L9.2 6.55h-2.1v10.9h1.74V9.88l7.51 10.02c.49-.33.95-.71 1.47-1.38v-1z" />
      </svg>
    );
  }

  // 6. React.js
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" style={{ color: "#61dafb" }}>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  // 7. Tailwind CSS
  if (norm.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#38bdf8" }}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
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

  // 9. Redux Toolkit
  if (norm.includes("redux")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#764abc" }}>
        <path d="M15.8 4.2c-2.4-1.8-5.8-1.4-8.1.5-2.7 2.2-3.1 6.1-1 8.9l3.5 4.6c.4.5 1 .8 1.6.8.5 0 1-.2 1.4-.5l3.8-3.4c2.5-2.2 2.8-6.1.7-8.7l-1.9-2.2zm-3.3 11.2l-2.7-3.6c-1.3-1.7-1-4.2.7-5.5 1.5-1.2 3.6-1 4.9.4l1.2 1.4c1.3 1.7 1 4.2-.7 5.5l-3.4 1.8z" />
      </svg>
    );
  }

  // 10. Node.js
  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#5fa04e" }}>
        <path d="M12 2l10 5.8v11.5L12 25l-10-5.7V7.8L12 2zm0 2.3L4.2 8.7v8.8L12 22l7.8-4.5V8.7L12 4.3z" />
      </svg>
    );
  }

  // 11. Express.js
  if (norm.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
        <path d="M24 18.5h-3.4l-3-4.5-3 4.5h-3.4l4.7-6.8L11.5 5h3.4l2.8 4.3 2.9-4.3H24l-4.6 6.7 4.6 6.8zM9.5 14c-.3 1.2-1.3 2-2.7 2-1.7 0-2.8-1.2-2.8-3.5 0-2.2 1.2-3.5 2.8-3.5 1.4 0 2.4.9 2.7 2.2h2.5C11.6 8.5 9.7 6.7 6.8 6.7 3 6.7.5 9.2.5 12.5s2.5 5.8 6.3 5.8c2.9 0 4.8-1.8 5.2-4.5H9.5z" />
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

  // 14. Prisma ORM
  if (norm.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#5a67d8" }}>
        <path d="M1.66 18.59L10.73 1.2a1.44 1.44 0 0 1 2.54 0l9.07 17.39a1.44 1.44 0 0 1-1.27 2.11H2.93a1.44 1.44 0 0 1-1.27-2.11zm10.34-14.2l-7.7 14.77h15.4L12 4.39z" />
      </svg>
    );
  }

  // 15. PostgreSQL
  if (norm.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#4169e1" }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.04 0-5.5-2.46-5.5-5.5S9.96 7.5 13 7.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" />
      </svg>
    );
  }

  // 16. MongoDB
  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#47a248" }}>
        <path d="M12.007 0C11.94 0 10.74 3.79 10.74 8.78c0 4.19 2.05 7.23 2.05 11.75 0 2.24-.78 3.47-.78 3.47s1.39-.77 2.11-2.26c.86-1.78.88-4.32.88-6.19 0-5.46-2.99-15.55-2.993-15.55z" />
      </svg>
    );
  }

  // 17. Firebase
  if (norm.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffca28" }}>
        <path d="M4.6 17.5L8.4 2.8c.1-.4.6-.5.9-.2l4 5.3L4.6 17.5zm14.8 0L17.5 7.3c-.1-.3-.5-.4-.7-.1L4.6 17.5h14.8zm-14.8 0l7.4 4.5 7.4-4.5H4.6z" />
      </svg>
    );
  }

  // 18. Linux VPS (Tux Penguin)
  if (norm.includes("linux")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#fcc624" }}>
        <path d="M12.012 0c-3.266 0-5.617 2.39-5.617 5.727 0 1.258.337 2.658.914 3.656-.638.938-1.574 2.258-1.574 4.09 0 2.457 1.48 4.293 3.629 5.094-.656.766-1.375 1.586-1.375 2.434 0 1.656 2.035 3 3.996 3 2.012 0 4.027-1.344 4.027-3 0-.848-.715-1.668-1.375-2.434 2.152-.801 3.633-2.637 3.633-5.094 0-1.832-.938-3.152-1.574-4.09.574-.998.914-2.398.914-3.656C17.605 2.39 15.254 0 12.012 0z" />
      </svg>
    );
  }

  // 19. Docker
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#2496ed" }}>
        <path d="M13 8h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm9 7c-.5-.3-1.6-.4-2.5.1-.2-.8-.7-1.5-1.5-1.9L18 10H2v4c0 3.3 2.7 6 6 6h7c3.3 0 6-2.7 6-6 0-.8-.2-1.5-.6-2z" />
      </svg>
    );
  }

  // 20. Nginx
  if (norm.includes("nginx")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#009639" }}>
        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm5.6 15.6l-2-2.5V17H14V7h1.6l2 2.5V7H19v10h-1.4zM8.4 17H7V7h1.6l3.4 4.5V7h1.4v10H12l-3.6-4.8V17z" />
      </svg>
    );
  }

  // 21. PM2 Daemon
  if (norm.includes("pm2")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#2b037a" }}>
        <rect x="2" y="3" width="9" height="8" rx="2" fill="#805ad5" />
        <rect x="13" y="3" width="9" height="8" rx="2" fill="#6b46c1" />
        <rect x="2" y="13" width="9" height="8" rx="2" fill="#6b46c1" />
        <rect x="13" y="13" width="9" height="8" rx="2" fill="#9f7aea" />
      </svg>
    );
  }

  // 22. GitHub Actions
  if (norm.includes("github actions") || norm.includes("actions")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#2088ff" }}>
        <path d="M22.5 12a10.5 10.5 0 0 0-20.76-2.25 1 1 0 0 0 1.97.35A8.5 8.5 0 1 1 12 20.5a8.46 8.46 0 0 1-5.69-2.22l1.4-1.4a.5.5 0 0 0-.35-.86H3.5a.5.5 0 0 0-.5.5v3.86a.5.5 0 0 0 .85.35l1.35-1.35A10.46 10.46 0 0 0 12 22.5 10.5 10.5 0 0 0 22.5 12z" />
        <circle cx="12" cy="12" r="3" fill="#38bdf8" />
      </svg>
    );
  }

  // 23. Vercel
  if (norm.includes("vercel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ffffff" }}>
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    );
  }

  // 24. Postman (Astronaut glyph)
  if (norm.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#ff6c37" }}>
        <circle cx="12" cy="12" r="10" fill="#ff6c37" opacity="0.2" />
        <circle cx="12" cy="12" r="9" stroke="#ff6c37" strokeWidth="1.5" fill="none" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#ff6c37" />
      </svg>
    );
  }

  // 25. VS Code
  if (norm.includes("vs code") || norm.includes("vscode")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: "#007acc" }}>
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.44-3.4a1.05 1.05 0 0 0-1.4.113L.265 6.84a1.045 1.045 0 0 0 .097 1.54l4.29 3.62-4.29 3.62a1.045 1.045 0 0 0-.097 1.54l.94.996a1.05 1.05 0 0 0 1.4.113l4.44-3.4 9.46 8.63c.49.447 1.18.57 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.15V3.85a1.5 1.5 0 0 0-.85-1.263zM18 17.5l-6.5-5.5L18 6.5v11z" />
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
