const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    colors: {
      ...colors,
      headingSection: colors.neutral["900"],
      headingInner: colors.neutral["800"],
      chromaticBlue: colors.sky["400"],
      chromaticRed: colors.red["400"],
      backgroundPage: "#f3ead9",
      body: colors.neutral["700"],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
