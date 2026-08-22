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
  return (
    <article className="group overflow-hidden rounded-2xl bg-gray-900 border border-white/10">
      
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-400">
          {description}
        </p>
      </div>

    </article>
  )
}