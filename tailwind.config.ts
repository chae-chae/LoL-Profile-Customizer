import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retroPink: "#ff66b2",
        retroBlue: "#3399ff",
        retroYellow: "#ffcc00",
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "cursive"], // 커스텀 폰트 추가
      },
    },
  },
  plugins: [],
};

export default config;
