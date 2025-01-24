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
  const [summonerData, setSummonerData] = useState<typeof mockData | null>(
    null
  );
  const [layout, setLayout] = useState([
    { i: "profile", x: 0, y: 0, w: 2, h: 2 },
    { i: "rank", x: 2, y: 0, w: 2, h: 2 },
    { i: "games", x: 0, y: 2, w: 4, h: 2 },
  ]);

  useEffect(() => {
    setSummonerData(mockData);
  }, [summonerName]);

  return (
    <div className="min-h-screen bg-noise bg-gradient-to-r from-retroPink to-retroBlue text-center font-retro flex flex-col justify-center items-center p-6">
      <header className="text-4xl font-bold text-black bg-retroYellow border-4 border-black shadow-[6px_6px_0px_black] px-6 py-4 w-full max-w-3xl">
        Summoner Profile
      </header>
      <div className="w-full max-w-4xl bg-retroBlue border-4 border-black shadow-[6px_6px_0px_black] p-6 mt-6">
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
            className="p-4 bg-retroYellow shadow-[4px_4px_0px_black] border-4 border-black text-black"
          >
            <h2 className="text-xl font-bold">{summonerData?.summonerName}</h2>
            <p>Level: {summonerData?.level}</p>
          </div>
          <div
            key="rank"
            className="p-4 bg-retroPink shadow-[4px_4px_0px_black] border-4 border-black text-black"
          >
            <p>Rank: {summonerData?.rank}</p>
            <p>Win Rate: {summonerData?.winRate}</p>
          </div>
          <div
            key="games"
            className="p-4 bg-retroYellow shadow-[4px_4px_0px_black] border-4 border-black text-black"
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
    </div>
  );
}
