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
    <div className="min-h-screen bg-gradient-to-r from-retroPink to-retroBlue text-center font-retro">
      <header className="py-4 bg-retroYellow shadow-md border-b-4 border-black">
        <h1 className="text-4xl font-bold text-black">
          Welcome to Retro League!
        </h1>
        <p className="text-sm">
          Your personalized League of Legends stats site.
        </p>
      </header>

      <main className="p-8">
        <form onSubmit={handleSearch} className="mb-8">
          <label className="block mb-2 text-lg">Enter Summoner Name:</label>
          <input
            type="text"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
            placeholder="Summoner Name"
            className="px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-retroPink text-white border-2 border-black rounded-lg hover:bg-black hover:text-retroPink"
          >
            Search
          </button>
        </form>
      </main>

      <footer className="py-4 bg-black text-white">
        <p>© 2025 Retro League | Made with ❤️</p>
      </footer>
    </div>
  );
}
