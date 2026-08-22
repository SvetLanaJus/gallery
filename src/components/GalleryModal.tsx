type GalleryModalProps = {
  image: string
  title: string
  description: string
  onClose: () => void
}

export default function GalleryModal({
  image,
  title,
  description,
  onClose,
}: GalleryModalProps) {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/80
        p-6
      "
    >
      <div className="relative max-w-6xl w-full">

        {/* CLOSE BUTTON */}
        <button
  type="button"
  onClick={onClose}
  className="
    absolute
    top-4
    right-4
    z-20
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-black/70
    text-2xl
    font-bold
    text-white
    shadow-lg
    transition
    hover:bg-black
    hover:scale-110
  "
  aria-label="Close"
>
  ✕
</button>

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="
            w-full
            max-h-[85vh]
            object-contain
            rounded-2xl
          "
        />

        {/* TEXT */}
        <div className="mt-4 text-center text-white">
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="mt-2 text-gray-300">
            {description}
          </p>
        </div>

      </div>
    </div>
  )
}