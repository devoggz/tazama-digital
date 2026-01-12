import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;

// // tailwind.config.js
// const { heroui } = require("@heroui/theme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // single component styles
//     "./node_modules/@heroui/theme/dist/components/button.js",
//     // or you can use a glob pattern (multiple component styles)
//     "./node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// };
