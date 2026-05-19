import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        ember: "var(--color-ember)",
        cream: "var(--color-cream)",
        muted: "var(--color-muted)",
        divider: "var(--color-divider)",
        green: "var(--color-green)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        accent: ["var(--font-accent)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      boxShadow: {
        gold: "0 20px 80px rgba(232, 160, 32, 0.22)",
        ember: "0 16px 60px rgba(201, 75, 31, 0.28)"
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(110deg, #8b5a0d 0%, #e8a020 25%, #f5c842 45%, #fff1a6 50%, #e8a020 65%, #8b5a0d 100%)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(201, 75, 31, 0)" },
          "50%": { boxShadow: "0 0 36px rgba(201, 75, 31, 0.38)" }
        }
      },
      animation: {
        shimmer: "shimmer 3.5s linear infinite",
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
