import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const summonerName = searchParams.get("summonerName");

  return (
    <div className="min-h-screen bg-gradient-to-r from-retroPink to-retroBlue text-center font-retro">
      <header className="py-4 bg-retroYellow shadow-md border-b-4 border-black">
        <h1 className="text-4xl font-bold text-black">Summoner Profile</h1>
      </header>

      <main className="p-8">
        {summonerName ? (
          <div className="mt-8 p-4 bg-retroYellow border-4 border-black shadow-lg text-left max-w-md mx-auto animate-fadeIn">
            <h2 className="text-2xl font-bold text-black mb-4">
              Profile for {summonerName}
            </h2>
            {/* 여기에 실제 API 호출 결과를 렌더링 */}
            <p>
              <strong>Name:</strong> {summonerName}
            </p>
            <p>
              <strong>Rank:</strong> Gold
            </p>
            <p>
              <strong>Level:</strong> 30
            </p>
          </div>
        ) : (
          <p className="text-xl text-black">No summoner name provided.</p>
        )}
      </main>

      <footer className="py-4 bg-black text-white">
        <p>© 2025 Retro League | Made with ❤️</p>
      </footer>
    </div>
  );
}
