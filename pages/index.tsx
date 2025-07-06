import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>SpiritCheck – Alkoholpreisvergleich</title>
      </Head>

      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-700">SpiritCheck</h1>
        <p className="text-gray-600 mt-2">Finde den besten Preis für deine Lieblingsspirituose</p>
      </header>

      <main className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Suche nach 'Jack Daniel's'..."
          className="w-full p-3 border border-gray-300 rounded-xl mb-6"
        />

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold text-indigo-800 mb-2">Jack Daniel's Old No. 7 – 0,7L</h2>
          <img
            src="https://images.unsplash.com/photo-1604917877933-8ac5e6d731d5?auto=format&fit=crop&w=400&q=80"
            alt="Jack Daniel's Bottle"
            className="w-32 h-auto mb-4 rounded"
          />
          <p className="text-gray-700 mb-1">Preis: <span className="font-semibold">€16,99</span></p>
          <p className="text-gray-700 mb-3">Händler: <span className="font-medium">ShopXY</span></p>
          <a
            href="https://example.com/jack-daniels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Zum Angebot
          </a>
        </div>
      </main>
    </div>
  );
}
