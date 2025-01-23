"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const mockData = {
  summonerName: "RetroGamer",
  rank: "Platinum IV",
  level: 245,
  winRate: "57%",
  topChampion: "Jinx",
  kda: "3.2",
  mostPlayedRole: "ADC",
  recentGames: [
    { result: "Win", champion: "Jinx", kda: "5/2/8" },
    { result: "Lose", champion: "Ezreal", kda: "2/5/4" },
    { result: "Win", champion: "Caitlyn", kda: "7/1/9" },
  ],
};

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const summonerName = searchParams.get("summonerName");
  const [summonerData, setSummonerData] = useState(null);
  const [layout, setLayout] = useState([
    { i: "profile", x: 0, y: 0, w: 2, h: 2 },
    { i: "rank", x: 2, y: 0, w: 2, h: 2 },
    { i: "games", x: 0, y: 2, w: 4, h: 2 },
  ]);

  useEffect(() => {
    setSummonerData(mockData);
  }, [summonerName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-600 text-white font-retro p-6">
      <header className="text-center text-4xl font-bold mb-6">
        Summoner Profile
      </header>
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={100}
        width={800}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
      >
        <div
          key="profile"
          className="p-4 bg-gray-800 shadow-lg border-2 border-yellow-400"
        >
          <h2 className="text-xl font-bold">{summonerData?.summonerName}</h2>
          <p>Level: {summonerData?.level}</p>
        </div>
        <div
          key="rank"
          className="p-4 bg-gray-800 shadow-lg border-2 border-pink-400"
        >
          <p>Rank: {summonerData?.rank}</p>
          <p>Win Rate: {summonerData?.winRate}</p>
        </div>
        <div
          key="games"
          className="p-4 bg-gray-800 shadow-lg border-2 border-green-400"
        >
          <h3>Recent Games</h3>
          {summonerData?.recentGames.map((game, index) => (
            <p key={index}>
              {game.result} - {game.champion} ({game.kda})
            </p>
          ))}
        </div>
      </GridLayout>
    </div>
  );
}
