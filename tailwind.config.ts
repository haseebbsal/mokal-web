import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: {
          'purple': "#7C4EAF",
          'blue': "#324878",
          "shadeBlue":"#F5F8FF",
          "pink":"rgba(208, 166, 255, 0.20)",
          "lightBlue":"#DBECFF",
          "gridBg":"#F6F9FF"
        },
        text:{
          "gray":"#7B7F9C",
          "gradient":"linear-gradient(90deg, #4263AA 61.47%, #7C4EAF 88.81%)",
          "blue":"#4263AA",
          "lighterDarkBlue":"#596C8D"
        },
        icon:"rgba(113, 113, 122, 1)"
      },
      backgroundImage:{
        "linearPurple":"linear-gradient(180deg, #D0A6FF 0%, rgba(66, 99, 170, 0.50) 100%)",
        "linearBlue":"linear-gradient(292deg, #2C3A62 0%, #374F8F 100%)",
        "gradientText":"linear-gradient(90deg, #4263AA 61.47%, #7C4EAF 88.81%)",
        "grid":"url('/covers/grid.svg')"
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;


