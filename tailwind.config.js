/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retroPink: "#FF69B4",
        retroBlue: "#00BFFF",
        retroYellow: "#FFD700",
      },
      fontFamily: {
        retro: ["Comic Sans MS", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
