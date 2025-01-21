export const mockSummonerData = {
  name: "ExampleSummoner",
  level: 145,
  profileIconId: 1234,
  rank: {
    tier: "Diamond",
    division: "II",
    leaguePoints: 75,
    wins: 120,
    losses: 80,
    winRate: "60%", // 승률 계산 (승리 / (승리 + 패배) * 100)
  },
  championMastery: [
    { championName: "Ahri", masteryLevel: 7, masteryPoints: 250000 },
    { championName: "Lee Sin", masteryLevel: 6, masteryPoints: 180000 },
    { championName: "Jinx", masteryLevel: 5, masteryPoints: 130000 },
  ],
  recentMatches: [
    { champion: "Ahri", result: "Win", kda: "10/2/8" },
    { champion: "Lee Sin", result: "Lose", kda: "3/7/2" },
    { champion: "Jinx", result: "Win", kda: "12/3/5" },
  ],
};
