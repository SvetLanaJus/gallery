import { useState } from "react"
import GalleryModal from "./GalleryModal"

type GalleryCardProps = {
  image: string
  title: string
  description: string
}

export default function GalleryCard({
  image,
  title,
  description,
}: GalleryCardProps) {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <article
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          bg-gray-900
          border border-white/10
          shadow-lg
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >

        {/* IMAGE */}
        <div className="relative aspect-square overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/0
              transition-all
              duration-500
              group-hover:bg-black/50
            "
          />

          {/* VIEW PROJECT */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
            "
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-gray-200
              "
            >
              View project →
            </button>
          </div>
        </div>

        {/* TEXT */}
        <div className="p-5">

          <h3 className="mb-2 text-xl font-semibold">
            {title}
          </h3>

          <p className="text-gray-400">
            {description}
          </p>

        </div>

      </article>

      {/* MODAL */}
      {isModalOpen && (
        <GalleryModal
          image={image}
          title={title}
          description={description}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}