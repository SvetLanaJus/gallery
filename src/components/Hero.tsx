import artwork from "../assets/kot.jpg"

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

        {/* 3D IMAGE AREA */}
        <div className="relative group perspective-[1000px]">

          {/* Glow behind the card */}
          <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-3xl" />

          {/* 3D Card */}
          <div
            className="
              relative
              aspect-square
              rounded-3xl
              bg-gray-900
              border border-white/10
              overflow-hidden
              shadow-2xl
              transition-all
              duration-500
              transform-gpu
              group-hover:rotate-y-3
              group-hover:-rotate-x-2
              group-hover:scale-[1.02]
            "
          >
            <img
              src={artwork}
              alt="My artwork"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  )
}