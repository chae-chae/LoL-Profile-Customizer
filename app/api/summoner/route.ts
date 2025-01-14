import { NextResponse } from "next/server";

const apiKey = process.env.RIOT_API_KEY;
console.log(process.env.RIOT_API_KEY);

if (!apiKey) {
  throw new Error(
    "Riot API key is not defined. Please check your .env.local file."
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const summonerName = searchParams.get("summonerName");

  if (!summonerName) {
    return NextResponse.json(
      { error: "Missing summonerName" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: {
          "X-Riot-Token": apiKey!,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching summoner:", errorData);
      throw new Error(`Failed to fetch summoner data: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
    console.log("API Key:", apiKey); // 환경 변수가 제대로 로드되는지 확인
    console.log(
      "Request URL:",
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch summoner data" },
      { status: 500 }
    );
  }
}
