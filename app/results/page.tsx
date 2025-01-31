"use client";
import { useTheme } from "../context/themeContext";

export default function ResultsPage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen p-6 ${theme}`}>
      <header className="text-center text-4xl font-bold mb-6">
        Summoner Profile
      </header>
      {/* ... 기존 UI 유지 ... */}
    </div>
  );
}
