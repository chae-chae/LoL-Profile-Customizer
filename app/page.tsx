"use client";
import { useTheme } from "./context/themeContext";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [summonerName, setSummonerName] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <header className="py-6 px-4 border-4 border-black shadow-[6px_6px_0px_black] w-full max-w-3xl text-center">
        <h1 className="text-5xl font-bold uppercase tracking-widest">
          Retro League
        </h1>
        <p className="text-lg mt-2">
          Your personalized League of Legends stats site.
        </p>
      </header>

      {/* 테마 변경 버튼 */}
      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => setTheme("neon")}
          className="px-4 py-2 border-4 border-black bg-purple-700 text-white shadow-md"
        >
          Neon
        </button>
        <button
          onClick={() => setTheme("retro")}
          className="px-4 py-2 border-4 border-black bg-retroBlue text-black shadow-md"
        >
          Retro
        </button>
        <button
          onClick={() => setTheme("classic")}
          className="px-4 py-2 border-4 border-black bg-gray-900 text-gray-100 shadow-md"
        >
          Classic
        </button>
      </div>
    </div>
  );
}
