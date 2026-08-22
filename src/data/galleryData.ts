import artwork from "../assets/kot.jpg"
import cat from "../assets/kot2.jpg"
import ballons from "../assets/shary.jpg"
import barries from "../assets/ulov.jpg"
import flowers from "../assets/veresk.jpg"

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
    image: cat,
    title: "Funny cat",
    description: "Another example of my work.",
  },
  {
    image: ballons,
    title: "Birthday",
    description: "One of my latest creative projects.",
  },
  {
    image: barries,
    title: "Barries",
    description: "Another example of my work.",
  },
  {
    image: flowers,
    title: "Flowers",
    description: "Another example of my work.",
  },
]