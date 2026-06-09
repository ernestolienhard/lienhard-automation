import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark navy / charcoal base
        navy: {
          950: "#070d18",
          900: "#0a1424",
          800: "#0f1d33",
          700: "#152744",
          600: "#1d3357",
        },
        // Lienhard brand red — primary accent (from the logo)
        accent: {
          50: "#fdeceb",
          100: "#fbd5d2",
          200: "#f6b4ae",
          300: "#f0867d",
          400: "#ec5249",
          500: "#e1251b",
          600: "#c61e15",
          700: "#a51811",
          800: "#881712",
          900: "#71160f",
        },
        // Neutral steel grays
        steel: {
          50: "#f6f8fb",
          100: "#eceff4",
          200: "#dce1ea",
          300: "#c0c8d6",
          400: "#9aa6ba",
          500: "#74829a",
          600: "#586679",
          700: "#465162",
          800: "#2f3744",
          900: "#1c222b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "80rem",
      },
      spacing: {
        13: "3.25rem",
        18: "4.5rem",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,20,36,0.06), 0 8px 24px -12px rgba(10,20,36,0.18)",
        "card-hover":
          "0 2px 4px rgba(10,20,36,0.08), 0 16px 40px -16px rgba(198,30,21,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
