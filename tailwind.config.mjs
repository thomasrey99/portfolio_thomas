/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:"#fafafa",
        foreground:"#ffffff",
        fontItems:"#333333",
        primary:"#7843E9"
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
