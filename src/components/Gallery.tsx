import GalleryCard from "./GalleryCard"
import artwork from "../assets/kot.jpg"

export default function Gallery() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-4">
          Featured Gallery
        </h2>

        <p className="text-gray-400 mb-10">
          Explore some of my latest creative work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <GalleryCard
            image={artwork}
            title="My Artwork"
            description="A creative project from my gallery."
          />

          <GalleryCard
            image={artwork}
            title="Creative Work"
            description="Another example of my work."
          />

          <GalleryCard
            image={artwork}
            title="Latest Project"
            description="One of my latest creative projects."
          />

        </div>

      </div>
    </section>
  )
}