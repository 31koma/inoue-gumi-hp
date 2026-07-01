import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ベース：黒・白・グレー
        ink: "#0b0c0e", // ほぼ黒（背景・文字）
        charcoal: "#15171b", // チャコール
        graphite: "#23262c", // 罫線・カード
        stone: "#8a8d93", // グレー（補助テキスト）
        paper: "#f6f4ee", // 温かみのあるオフホワイト
        // アクセント：上品なゴールド/真鍮
        brass: "#c2a15b",
        "brass-light": "#dcc389",
        "brass-dark": "#9c7f3f",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"], // 和文見出し（高級感）
        display: ["var(--font-display)", "sans-serif"], // 欧文見出し・数字
        body: ["var(--font-body)", "sans-serif"], // 本文
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0, 0, 0, 0.28)",
        card: "0 12px 40px rgba(0, 0, 0, 0.18)",
      },
      letterSpacing: {
        widest2: "0.34em",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
