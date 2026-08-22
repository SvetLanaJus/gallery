import artwork from "../assets/kot.jpg"

export type GalleryItem = {
  image: string
  title: string
  description: string
}

export const galleryData: GalleryItem[] = [
  {
    image: artwork,
    title: "My Artwork",
    description: "A creative project from my gallery.",
  },
  {
    image: artwork,
    title: "Creative Work",
    description: "Another example of my work.",
  },
  {
    image: artwork,
    title: "Latest Project",
    description: "One of my latest creative projects.",
  },
]