import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#5b21b6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
