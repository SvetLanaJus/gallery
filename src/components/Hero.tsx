export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <p className="text-blue-400 font-semibold mb-4">
          WELCOME TO MY GALLERY
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Creative ideas.
          <br />
          Beautiful work.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Explore my collection of creative projects, artwork and ideas.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Explore Gallery
        </button>
      </div>
    </section>
  )
}