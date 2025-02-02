"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// 사용할 테마들
const themes = {
  neon: "bg-gradient-to-r from-purple-700 to-pink-600 text-white",
  retro: "bg-retroBlue text-black",
  classic: "bg-gray-900 text-gray-100",
};

// 타입 정의
type ThemeContextType = {
  theme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
};

// 컨텍스트 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<keyof typeof themes>("retro"); // 기본 테마 설정

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={themes[theme]}>{children}</div> {/* 테마 적용 */}
    </ThemeContext.Provider>
  );
}

// 커스텀 훅
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
