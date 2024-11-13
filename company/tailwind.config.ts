import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

// Import DaisyUI
const daisyui = require("daisyui");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        gray: {
          900: "#121212",
          800: "#2a2a2a",
          700: "#3a3a3a",
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
        bounce: "bounce 0.5s infinite",
        pulse: "pulse 0.5s infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": { transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  // Import DaisyUI and NextUI as plugins
  plugins: [daisyui, nextui()],
};

export default config;
