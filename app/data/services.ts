export type Service = {
  slug: string;
  title: string;
  price: number;
  image: string;
};

export const services: Service[] = [
  {
    slug: "pouch-lamination",
    title: "Pouch Lamination",
    price: 100,
    image: "/images/lamination.jpeg",
  },
  {
    slug: "scanning",
    title: "Scanning",
    price: 50,
    image: "/images/scanner.jpg",
  },
  {
    slug: "photocopy",
    title: "Photocopy",
    price: 50,
    image: "/images/photocopy.jpg",
  },
  {
    slug: "binding",
    title: "Binding",
    price: 100,
    image: "/images/binding.jpg",
  },
];
