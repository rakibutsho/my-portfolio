import React from "react";

export function TechIcon({ name, className = "w-3.5 h-3.5 shrink-0" }: { name: string; className?: string }) {
  const norm = name.toLowerCase();

  // Languages
  if (norm.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.758 13.902h-2.316V20H7.558v-6.098H5.25v-2.035h7.008v2.035zm4.848 1.488c.996 0 1.77.348 2.322 1.043.553.695.83 1.637.83 2.824 0 .973-.244 1.791-.732 2.457-.489.664-1.229 1.107-2.223 1.33a8.91 8.91 0 0 1-1.922.203c-.879 0-1.744-.127-2.598-.381v-2.18c.8.381 1.666.572 2.598.572.638 0 1.111-.117 1.42-.351.309-.234.463-.615.463-1.143 0-.41-.123-.729-.371-.957-.247-.229-.68-.455-1.299-.68-.86-.312-1.492-.684-1.898-1.113-.404-.43-.607-1.012-.607-1.748 0-.918.271-1.666.814-2.246.543-.58 1.295-.87 2.256-.87.723 0 1.465.109 2.227.328v2.09c-.71-.287-1.428-.43-2.152-.43-.535 0-.943.109-1.225.328-.281.219-.422.541-.422.967 0 .371.127.674.381.908.254.234.697.469 1.33.703.957.342 1.656.73 2.098 1.166z" />
      </svg>
    );
  }

  if (norm.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.88-1.799-2.247-2.36-1.274-.537-1.523-.771-1.523-1.242 0-.387.29-.691.894-.691.642 0 1.258.261 1.688.583l.872-1.396c-.636-.511-1.542-.779-2.531-.779-2.029 0-3.047 1.056-3.047 2.457 0 1.353.978 2.083 2.508 2.684.978.384 1.274.654 1.274 1.144 0 .47-.464.757-1.135.757-.96 0-1.685-.436-2.197-.88l-.897 1.392c.677.676 1.83 1.077 3.064 1.077 2.226 0 3.123-1.143 3.123-2.746h.007zm-8.816-6.666h-2.148v7.266c0 1.306-.525 1.812-1.657 1.812-.55 0-.994-.092-1.282-.204l-.324 1.487c.433.197 1.148.339 2.003.339 2.115 0 3.408-1.074 3.408-3.328v-7.372z" />
      </svg>
    );
  }

  if (norm.includes("sql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  if (norm.includes("go")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.986 10.963c.427-.087.854-.152 1.282-.196.427-.044.854-.065 1.282-.065 1.154 0 2.176.24 3.065.719.889.48 1.58 1.166 2.072 2.059.493.894.739 1.93.739 3.109 0 1.18-.256 2.222-.767 3.127-.512.905-1.229 1.597-2.152 2.076-.923.479-1.99.719-3.203.719-1.132 0-2.147-.213-3.045-.639-.899-.427-1.603-1.042-2.113-1.846C.641 19.243.385 18.286.385 17.172c0-1.177.261-2.215.782-3.113.522-.898 1.246-1.589 2.174-2.072.927-.484 1.996-.726 3.207-.726.685 0 1.344.076 1.977.228.632.153 1.206.386 1.721.7zM16.142 8.448c.95 0 1.83.179 2.64.537.81.358 1.488.877 2.033 1.557.545.68.94 1.498 1.185 2.454.245.956.368 2.012.368 3.168 0 1.156-.123 2.212-.368 3.168-.245.956-.64 1.774-1.185 2.454-.545.68-1.223 1.199-2.033 1.557-.81.358-1.69.537-2.64.537-1.157 0-2.18-.245-3.07-.735-.89-.49-1.58-1.185-2.07-2.085-.49-.9-.735-1.935-.735-3.105 0-1.17.245-2.205.735-3.105.49-.9 1.18-1.595 2.07-2.085.89-.49 1.913-.735 3.07-.735z" />
      </svg>
    );
  }

  // Frontend
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  if (norm.includes("next.js") || norm === "nextjs") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.52L9.2 6.55h-2.1v10.9h1.74V9.88l7.51 10.02c.49-.33.95-.71 1.47-1.38v-1z" />
      </svg>
    );
  }

  if (norm.includes("vue")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 1.61H14.01L12 5.1 9.99 1.61H0l12 20.78L24 1.61zm-4.79 0L12 14.07 4.79 1.61h3.76L12 7.74l3.45-6.13h3.76z" />
      </svg>
    );
  }

  if (norm.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  if (norm.includes("redux")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    );
  }

  // Backend
  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 5.8v11.5L12 25l-10-5.7V7.8L12 2zm0 2.3L4.2 8.7v8.8L12 22l7.8-4.5V8.7L12 4.3z" />
      </svg>
    );
  }

  if (norm.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16M14 6l6 6-6 6" />
      </svg>
    );
  }

  if (norm.includes("rest") || norm.includes("api")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  if (norm.includes("websocket")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  if (norm.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.63 1.48a1 1 0 0 0-1.26 0l-9.5 7.42a1 1 0 0 0-.37.78v11.84a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V9.68a1 1 0 0 0-.37-.78l-9.5-7.42zM12 4.08l7.5 5.86H4.5L12 4.08zM4.5 11.94h15v8.58h-15v-8.58z" />
      </svg>
    );
  }

  if (norm.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.6 17.5L8.4 2.8c.1-.4.6-.5.9-.2l4 5.3L4.6 17.5zm14.8 0L17.5 7.3c-.1-.3-.5-.4-.7-.1L4.6 17.5h14.8zm-14.8 0l7.4 4.5 7.4-4.5H4.6z" />
      </svg>
    );
  }

  // Databases & DevOps
  if (norm.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.04 0-5.5-2.46-5.5-5.5S9.96 7.5 13 7.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" />
      </svg>
    );
  }

  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.007 0C11.94 0 10.74 3.79 10.74 8.78c0 4.19 2.05 7.23 2.05 11.75 0 2.24-.78 3.47-.78 3.47s1.39-.77 2.11-2.26c.86-1.78.88-4.32.88-6.19 0-5.46-2.99-15.55-2.993-15.55z" />
      </svg>
    );
  }

  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 8h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm9 7c-.5-.3-1.6-.4-2.5.1-.2-.8-.7-1.5-1.5-1.9L18 10H2v4c0 3.3 2.7 6 6 6h7c3.3 0 6-2.7 6-6 0-.8-.2-1.5-.6-2z" />
      </svg>
    );
  }

  if (norm.includes("linux")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-3.3 0-5 2.2-5 5.5 0 1.5.4 3.2 1 4.5C6.5 13.5 5 15.6 5 18c0 2.2 3.1 4 7 4s7-1.8 7-4c0-2.4-1.5-4.5-3-6 .6-1.3 1-3 1-4.5 0-3.3-1.7-5.5-5-5.5z" />
      </svg>
    );
  }

  if (norm.includes("nginx")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm5.6 15.6l-2-2.5V17H14V7h1.6l2 2.5V7H19v10h-1.4zM8.4 17H7V7h1.6l3.4 4.5V7h1.4v10H12l-3.6-4.8V17z" />
      </svg>
    );
  }

  if (norm.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6" />
        <circle cx="18" cy="9" r="3" />
        <path d="M6 15a6 6 0 0 0 6-6" />
      </svg>
    );
  }

  if (norm.includes("vercel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19.7778H22L12 2Z" />
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
