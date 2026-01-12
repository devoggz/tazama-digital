export type ProductItem = {
  slug: string;
  title: string;
  image: string;
  description: string;
  finishes?: string[];
};

export type PrintingCategory = {
  title: string;
  description: string;
  heroImage: string;
  items: ProductItem[];
};

export const largeFormatPrintingData: Record<string, PrintingCategory> = {
  "vehicle-branding": {
    title: "Vehicle Branding",
    description: "Turn your vehicle into a powerful mobile advertisement.",
    heroImage: "/images/vehicle2.jpeg",
    items: [
      {
        slug: "full-wrap",
        title: "Full Vehicle Wrap",
        image: "/images/vehicle2.jpeg",
        description: "Short two line Description Goes Here",
        finishes: ["Gloss", "Matte", "Chrome", "Metallic"],
      },
      {
        slug: "partial-wrap",
        title: "Partial Vehicle Wrap",
        image: "/images/partial2.jpg",
        description: "Short two line Description Goes Here",
        finishes: ["Gloss", "Matte", "3M Vinyl"],
      },
      {
        slug: "car-magnet",
        title: "Car Door Magnets",
        image: "/images/car2.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "Removable"],
      },
    ],
  },
  "canvas-prints": {
    title: "Canvas Prints",
    description: "Gallery-quality canvas prints that bring photos to life.",
    heroImage: "/images/canvas.jpg",
    items: [
      {
        slug: "standard-canvas",
        title: "Standard Canvas Prints",
        image: "/images/canvas.jpg",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "Stretched", "Rolled"],
      },
      {
        slug: "gallery-wrap",
        title: "Gallery Wrapped Canvas",
        image: "/images/canvas.jpg",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "UV Protected"],
      },
      {
        slug: "floating-frame",
        title: "Floating Frame Canvas",
        image: "/images/canvas.jpg",
        description: "Short two line Description Goes Here",
        finishes: ["Black Frame", "White Frame", "Natural Wood"],
      },
    ],
  },
  "floor-graphics": {
    title: "Floor Graphics",
    description: "Durable, high-traction floor graphics for retail & events.",
    heroImage: "/images/floor.jpg",
    items: [
      {
        slug: "indoor-floor",
        title: "Indoor Floor Graphics",
        image: "/images/floor.jpg",
        description: "Short two line Description Goes Here",
        finishes: ["Matte Anti-Slip", "Gloss Anti-Slip"],
      },
      {
        slug: "outdoor-floor",
        title: "Outdoor Floor Graphics",
        image: "/images/floor.jpg",
        description: "Short two line Description Goes Here",
        finishes: ["UV Protected", "Laminated", "Anti-Slip"],
      },
      {
        slug: "promotional-floor",
        title: "Promotional Floor Decals",
        image: "/images/floor.jpg",
        description: "Short two line Description Goes Here",
        finishes: ["Removable", "Permanent", "High-Traction"],
      },
    ],
  },
};
