import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#FDF6EC",
        warm: "#F5ECD7",
        brown: {
          DEFAULT: "#2C1810",
          light: "#4A2C1A",
          50: "#FBF5F0",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4B96A",
          dark: "#A8872E",
        },
        night: {
          DEFAULT: "#170D07",
          surface: "#1C1109",
          card: "#241510",
          border: "#3A2015",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
