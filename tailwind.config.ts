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
        /* 侘寂美学 × 赛博极简 色彩系统 */
        void: "#0a0a0b",          // 深邃黑（背景基底）
        carbon: "#121214",         // 碳灰（卡片/区块）
        ash: "#1c1c1f",            // 灰烬（悬浮层）
        stone: "#2a2a2e",          // 岩石灰（边框/分割）
        moss: {
          50: "#e8f0ec",
          100: "#c5d9cf",
          200: "#9bbfac",
          300: "#7aa898",
          400: "#5e8f7e",         // 苔藓绿（主色）
          500: "#4a7d6c",
          600: "#3a6655",
          700: "#2d5042",
          800: "#1f3a30",
          900: "#122520",
        },
        neon: {
          jade: "#7fdbb6",         // 霓虹玉色（高光强调）
          silver: "#b8c4cc",       // 液态银
          glow: "#5eead4",         // 发光绿
        },
        bone: "#e8e6e3",           // 骨白（主文字）
        dust: "#9a9a9e",           // 灰尘（次要文字）
        fade: "#5a5a5e",           // 褪色（辅助文字）
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "system-ui", "sans-serif"],
        song: ["Noto Serif SC", "Songti SC", "SimSun", "serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "typewriter": "typewriter 2s steps(20) forwards",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", filter: "blur(8px)" },
          "50%": { opacity: "0.8", filter: "blur(12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
