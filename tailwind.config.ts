import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--bg)",
        base2: "var(--bg2)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        line: "var(--border)",
        line2: "var(--border2)",
        ink: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-soft": "var(--accent-soft)",
        glow: "var(--glow)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(0,0,0,.7)",
      },
      keyframes: {
        gridDrift: {
          from: { backgroundPosition: "0 0, 0 0" },
          to: { backgroundPosition: "48px 48px, 48px 48px" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        gridDrift: "gridDrift 18s linear infinite",
        floaty: "floaty 8s ease-in-out infinite",
        glowPulse: "glowPulse 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
