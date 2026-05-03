import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        iron: "#07080a",
        steel: "#17191d",
        ember: "#f7b500",
        signal: "#f7c600",
        concrete: "#f2f0e9"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        hard: "0 28px 80px rgba(0, 0, 0, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
