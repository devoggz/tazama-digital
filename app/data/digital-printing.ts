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

export const digitalPrintingData: Record<string, PrintingCategory> = {
  "business-cards": {
    title: "Business Cards",
    description: "Premium cards for strong first impressions.",
    heroImage: "/images/cards2.jpg",
    items: [
      {
        slug: "sample",
        title: "Sample Business Cards",
        image: "/images/samplecards.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "Soft Touch"],
      },
      {
        slug: "standard",
        title: "Standard Business Cards",
        image: "/images/standardcard.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "Soft Touch"],
      },
      {
        slug: "square",
        title: "Square Business Cards",
        image: "/images/squarecard.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "Spot UV"],
      },
      {
        slug: "halfcard",
        title: "Half Cards",
        image: "/images/halfcard.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "Spot UV"],
      },
      {
        slug: "kraft",
        title: "Kraft Business Cards",
        image: "/images/kraftcard.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Uncoated", "Textured", "Recycled"],
      },
      {
        slug: "textured",
        title: "Textured Business Cards",
        image: "/images/texturedcard.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Uncoated", "Textured", "Recycled"],
      },
    ],
  },

  flyers: {
    title: "Flyers",
    description: "High-impact marketing materials.",
    heroImage: "/images/poster.avif",
    items: [
      {
        slug: "a4",
        title: "A4 Flyers",
        description: "Short two line Description Goes Here",
        image: "/images/flyer2.jpg",
        finishes: ["Gloss", "Matte", "Silk"],
      },
      {
        slug: "a5",
        title: "A5 Flyers",
        description: "Short two line Description Goes Here",
        image: "/images/flyer2.jpg",
        finishes: ["Gloss", "Matte", "Uncoated"],
      },
      {
        slug: "dl",
        title: "DL Flyers",
        description: "Short two line Description Goes Here",
        image: "/images/flyer2.jpg",
        finishes: ["Gloss", "Matte", "UV Coated"],
      },
    ],
  },

  stickers: {
    title: "Stickers",
    description: "Durable, vibrant, custom cut.",
    heroImage: "/images/stickers3.jpg",
    items: [
      {
        slug: "vinyl",
        title: "Vinyl Stickers",
        description: "Short two line Description Goes Here",
        image: "/images/vinyl.avif",
        finishes: ["Laminated", "UV", "Weatherproof"],
      },
      {
        slug: "paper",
        title: "Paper Stickers",
        description: "Short two line Description Goes Here",
        image: "/images/stickers3.jpg",
        finishes: ["Gloss", "Matte", "Uncoated"],
      },
      {
        slug: "transparent",
        title: "Transparent Stickers",
        description: "Short two line Description Goes Here",
        image: "/images/stickers3.jpg",
        finishes: ["Gloss", "UV", "Scratch Resistant"],
      },
    ],
  },

  booklets: {
    title: "Booklets",
    description: "Perfect for catalogs and reports.",
    heroImage: "/images/booklets.avif",
    items: [
      {
        slug: "saddle-stitched",
        title: "Saddle Stitched Booklets",
        description: "Short two line Description Goes Here",
        image: "/images/booklets.avif",
        finishes: ["Gloss Cover", "Matte Cover", "Self Cover"],
      },
      {
        slug: "perfect-bound",
        title: "Perfect Bound Booklets",
        description: "Short two line Description Goes Here",
        image: "/images/booklets.avif",
        finishes: ["Gloss Cover", "Matte Cover", "Laminated Spine"],
      },
      {
        slug: "wire-o",
        title: "Wire-O Booklets",
        image: "/images/booklets.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Plastic Coil", "Metal Coil", "Clear Cover"],
      },
    ],
  },

  menus: {
    title: "Menus",
    description: "Stylish menus built to last.",
    heroImage: "/images/menu.avif",
    items: [
      {
        slug: "laminated",
        title: "Laminated Menus",
        image: "/images/menu.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Gloss Lamination", "Matte Lamination", "Anti-Scuff"],
      },
      {
        slug: "paper",
        title: "Paper Menus",
        image: "/images/menu.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Matte", "Gloss", "Recyclable"],
      },
      {
        slug: "folded",
        title: "Folded Menus",
        image: "/images/menu.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Bi-Fold", "Tri-Fold", "Accordion"],
      },
    ],
  },

  brochures: {
    title: "Brochures",
    description: "Professional folded brochures.",
    heroImage: "/images/brochure.avif",
    items: [
      {
        slug: "tri-fold",
        title: "Tri-Fold Brochures",
        image: "/images/brochure.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Gloss", "Matte", "Silk"],
      },
      {
        slug: "bi-fold",
        title: "Bi-Fold Brochures",
        image: "/images/brochure.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Gloss", "Matte", "Soft Touch"],
      },
      {
        slug: "z-fold",
        title: "Z-Fold Brochures",
        image: "/images/brochure.avif",
        description: "Short two line Description Goes Here",
        finishes: ["Gloss", "Matte", "UV Coated"],
      },
    ],
  },
};
