import { mockSummonerData } from "./mockData";

export default function ResultsPage() {
  const summoner = mockSummonerData;

  return (
    <div className="min-h-screen bg-gradient-to-r from-retroPink to-retroBlue text-center font-retro">
      <header className="py-4 bg-retroYellow shadow-md border-b-4 border-black">
        <h1 className="text-4xl font-bold text-black">Summoner Profile</h1>
      </header>

      <main className="p-8">
        <div className="mt-8 p-4 bg-retroYellow border-4 border-black shadow-lg text-left max-w-lg mx-auto animate-fadeIn">
          <h2 className="text-2xl font-bold text-black mb-4">
            Profile for {summoner.name}
          </h2>
          <p>
            <strong>Level:</strong> {summoner.level}
          </p>

          {/* 랭크 정보 */}
          <div className="mt-4 p-3 bg-retroPink text-white border-2 border-black rounded-lg">
            <h3 className="text-xl font-bold">Ranked Stats</h3>
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
          <div className="mt-4 p-3 bg-retroYellow border-2 border-black rounded-lg">
            <h3 className="text-xl font-bold">Top Champions</h3>
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
          <div className="mt-4 p-3 bg-retroPink text-white border-2 border-black rounded-lg">
            <h3 className="text-xl font-bold">Recent Matches</h3>
            <ul className="list-disc pl-5">
              {summoner.recentMatches.map((match, index) => (
                <li
                  key={index}
                  className={
                    match.result === "Win" ? "text-green-300" : "text-red-300"
                  }
                >
                  {match.champion} - {match.result} (KDA: {match.kda})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="py-4 bg-black text-white">
        <p>© 2025 Retro League | Made with ❤️</p>
      </footer>
    </div>
  );
}
