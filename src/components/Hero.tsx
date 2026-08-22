export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-72px)] px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <p className="text-blue-400 font-semibold tracking-widest mb-4">
            WELCOME TO
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            My Gallery
          </h1>

          <p className="text-xl text-gray-400 max-w-xl mb-8">
            Creative ideas, beautiful artwork and inspiring projects
            collected in one place.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Explore Gallery
          </button>
        </div>

        {/* IMAGE AREA */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gray-900 border border-gray-800 flex items-center justify-center overflow-hidden">

            <span className="text-gray-500 text-xl">
              Your image here
            </span>

          </div>
        </div>

      </div>
    </section>
  )
}