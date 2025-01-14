"use client";

import { useState } from "react";

export default function HomePage() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerData, setSummonerData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!summonerName) {
      setError("소환사 이름을 입력해주세요.");
      return;
    }
    setError(null);
    setSummonerData(null);

    try {
      const response = await fetch(
        `/api/summoner?summonerName=${summonerName}`
      );
      if (!response.ok) {
        throw new Error("소환사를 찾을 수 없습니다.");
      }
      const data = await response.json();
      setSummonerData(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">롤 전적 검색</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="소환사 이름을 입력하세요"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          검색
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {summonerData && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">
            {summonerData.summonerName}
          </h2>
          <p>랭크: {summonerData.rank}</p>
          <p>레벨: {summonerData.level}</p>
        </div>
      )}
    </div>
  );
}
