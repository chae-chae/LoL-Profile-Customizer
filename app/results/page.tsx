import { mockSummonerData } from "./mockData";

export default function ResultsPage() {
  const summoner = mockSummonerData;

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* 헤더 */}
      <header className="w-full py-4 bg-black text-center text-glow border-neon">
        <h1 className="text-4xl">🌟 Summoner Profile 🌟</h1>
      </header>

      {/* 프로필 카드 */}
      <main className="p-8 flex flex-col items-center">
        <div className="w-96 p-6 bg-black border-neon shadow-lg text-left rounded-lg">
          <h2 className="text-2xl text-glow text-center">👤 {summoner.name}</h2>
          <p className="mt-2">
            <strong>🔹 Level:</strong> {summoner.level}
          </p>

          {/* 랭크 */}
          <div className="mt-4 p-3 border-neon rounded-lg">
            <h3 className="text-xl text-glow">🏆 Ranked Stats</h3>
            <p>
              <strong>Rank:</strong> {summoner.rank.tier}{" "}
              {summoner.rank.division}
            </p>
            <p>
              <strong>LP:</strong> {summoner.rank.leaguePoints} LP
            </p>
            <p>
              <strong>Wins:</strong> {summoner.rank.wins},{" "}
              <strong>Losses:</strong> {summoner.rank.losses}
            </p>
            <p>
              <strong>Win Rate:</strong> {summoner.rank.winRate}
            </p>
          </div>

          {/* 챔피언 숙련도 */}
          <div className="mt-4 p-3 border-neon rounded-lg">
            <h3 className="text-xl text-glow">🔥 Top Champions</h3>
            <ul className="list-disc pl-5">
              {summoner.championMastery.map((champ, index) => (
                <li key={index}>
                  {champ.championName} - Level {champ.masteryLevel} (
                  {champ.masteryPoints.toLocaleString()} pts)
                </li>
              ))}
            </ul>
          </div>

          {/* 최근 경기 */}
          <div className="mt-4 p-3 border-neon rounded-lg">
            <h3 className="text-xl text-glow">⚔️ Recent Matches</h3>
            <ul className="list-disc pl-5">
              {summoner.recentMatches.map((match, index) => (
                <li
                  key={index}
                  className={
                    match.result === "Win" ? "text-green-400" : "text-red-400"
                  }
                >
                  {match.champion} - {match.result} (KDA: {match.kda})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* 버튼 */}
      <div className="mt-6">
        <button className="button-retro">🔍 Search Again</button>
      </div>

      {/* 푸터 */}
      <footer className="w-full py-4 text-center bg-black border-neon mt-8">
        <p>© 2025 Retro League | Made with ❤️</p>
      </footer>
    </div>
  );
}
