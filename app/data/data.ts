export type PrintingService = "digital" | "large";

export const PRODUCTS = {
  digital: [
    { key: "card", label: "Business Cards" },
    { key: "sticker", label: "Stickers" },
    { key: "brochure", label: "Brochures" },
    { key: "notebook", label: "Notebooks" },
    { key: "flyers", label: "Flyers" },
  ],
  large: [
    { key: "rollup", label: "Rollup Banners" },
    { key: "floor", label: "Floor Graphics" },
    { key: "canvas", label: "Canvas Prints" },
    { key: "banner", label: "Media Banner" },
    { key: "window", label: "Window Graphics" },
  ],
} as const;

export const finishes = [
  { key: "gloss", label: "Gloss Lamination" },
  { key: "matte", label: "Matte Lamination" },
  { key: "spot", label: "Spot UV" },
  { key: "none", label: "none" },
];

export const weights = [
  { key: "150", label: "150gsm" },
  { key: "200", label: "250gsm" },
  { key: "250", label: "250gsm" },
  { key: "300", label: "250gsm" },
  { key: "350", label: "350gsm" },
];

export const types = [
  { key: "ivory", label: "Ivory" },
  { key: "textured", label: "Textured" },
];

export const edges = [
  { key: "rounded", label: "Rounded" },
  { key: "sharp", label: "Sharp" },
];

export const PRICING = {
  digital: {
    paperType: {
      ivory: 0.5,
      textured: 1.5,
    },
    weight: {
      "150": 0.5,
      "250": 1.0,
      "350": 1.5,
    },
    finish: {
      gloss: 0.5,
      matte: 1.0,
      spot: 2.0,
      none: 0,
    },
  },
  large: {
    material: {
      vinyl: 0.004,
      canvas: 0.006,
    },
    finish: {
      lamination: 0.003,
      none: 0,
    },
  },
} as const;

export const businessCards = {
  sample: {
    title: "Sample Business Cards",
    description:
      "Explore a curated selection of business card designs for inspiration.",
    image: "/images/samplecards.avif",
    finishes: ["Matte", "Gloss"],
  },

  standard: {
    title: "Standard Business Cards",
    description:
      "Classic rectangular business cards with premium paper options.",
    image: "/images/standardcard.avif",
    finishes: ["Matte", "Gloss", "Soft Touch"],
  },

  square: {
    title: "Square Business Cards",
    description: "Modern square format for bold brands.",
    image: "/images/squarecard.avif",
    finishes: ["Matte", "Gloss"],
  },

  "spot-uv": {
    title: "Spot UV Business Cards",
    description:
      "Premium cards with raised gloss accents for standout designs.",
    image: "/images/cardUV.avif",
    finishes: ["Matte + Spot UV"],
  },

  // add the rest here
};
