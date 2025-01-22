"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [summonerName, setSummonerName] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (summonerName.trim()) {
      router.push(`/results?summonerName=${encodeURIComponent(summonerName)}`);
    }
  };

  return (
    <div className="min-h-screen bg-noise bg-gradient-to-r from-retroPink to-retroBlue text-center font-retro flex flex-col justify-center items-center">
      {/* 헤더 */}
      <header className="py-6 px-4 bg-retroYellow border-4 border-black shadow-[6px_6px_0px_black] text-black w-full max-w-3xl">
        <h1 className="text-5xl font-bold uppercase tracking-widest text-shadow animate-bounce">
          Retro League
        </h1>
        <p className="text-lg mt-2">
          Your personalized League of Legends stats site.
        </p>
      </header>

      {/* 메인 검색 영역 */}
      <main className="p-8 w-full max-w-2xl border-4 border-black bg-retroBlue text-white mt-6 shadow-[6px_6px_0px_black]">
        <form
          onSubmit={handleSearch}
          className="flex flex-col items-center space-y-4"
        >
          <label className="text-xl uppercase tracking-widest text-shadow">
            Enter Summoner Name:
          </label>
          <input
            type="text"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
            placeholder="Summoner Name"
            className="px-4 py-2 w-64 text-lg border-4 border-black bg-retroYellow text-black shadow-[4px_4px_0px_black] focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 text-lg font-bold uppercase border-4 border-black bg-retroPink text-white shadow-[4px_4px_0px_black] hover:bg-black hover:text-retroPink hover:scale-110 transition-all"
          >
            Search
          </button>
        </form>
      </main>

      {/* 푸터 */}
      <footer className="py-4 bg-black text-white mt-8 w-full max-w-3xl border-t-4 border-dotted border-white">
        <p>© 2025 Retro League | Made with ❤️</p>
      </footer>
    </div>
  );
}
