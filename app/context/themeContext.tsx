"use client";
import { createContext, useContext, useEffect, useState } from "react";

const themes = {
  neon: "bg-gradient-to-r from-purple-700 to-pink-600 text-white",
  retro: "bg-retroBlue text-black",
  classic: "bg-gray-900 text-gray-100",
};

const ThemeContext = createContext({
  theme: "neon",
  setTheme: (theme: string) => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("neon");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={themes[theme] || themes["neon"]}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
