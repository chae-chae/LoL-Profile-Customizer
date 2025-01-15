export default function Home() {
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
        <form className="mb-4">
          <label className="block mb-2 text-lg">Enter Summoner Name:</label>
          <input
            type="text"
            placeholder="Summoner Name"
            className="px-4 py-2 border-2 border-black rounded-lg focus:outline-none"
          />
          <button className="ml-2 px-4 py-2 bg-retroPink text-white border-2 border-black rounded-lg hover:bg-black hover:text-retroPink">
            Search
          </button>
        </form>
        <div className="mt-8">
          <p className="text-xl">💾 Latest stats will appear here!</p>
        </div>
      </main>

      <footer className="py-4 bg-black text-white">
        <p>© 2025 Retro League | Made with ❤️</p>
      </footer>
    </div>
  );
}
