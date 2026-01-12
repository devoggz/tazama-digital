"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  addToast,
} from "@heroui/react";
import { ShoppingCart } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const products = [
  {
    id: 1,
    title: "Custom Ceramic Mug",
    description: "High-quality ceramic with vibrant full-color printing",
    img: "/images/mug2.jpg",
    price: 750,
    category: "Merchandise",
  },
  {
    id: 2,
    title: "Branded Keychain",
    description: "Durable metal keychain with custom logo engraving",
    img: "/images/canvas.jpg",
    price: 300,
    category: "Accessories",
  },
  {
    id: 3,
    title: "Vinyl Laptop Stickers",
    description: "Weather-resistant vinyl with premium laminate finish",
    img: "/images/canvas.jpg",
    price: 500,
    category: "Stickers",
  },
  {
    id: 4,
    title: "Premium Photo Frame",
    description: "Elegant wooden frame with custom photo printing",
    img: "/images/canvas.jpg",
    price: 1200,
    category: "Home Decor",
  },
  {
    id: 5,
    title: "Branded Notebook",
    description: "Professional hardcover notebook with custom branding",
    img: "/images/notebooks.jpg",
    price: 1000,
    category: "Stationery",
  },
];

export default function ProductsBento() {
  const router = useRouter();

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    // Get existing cart from localStorage or initialize empty array
    const existingCart = JSON.parse(
      localStorage.getItem("shoppingCart") || "[]"
    );

    // Check if product already exists in cart
    const existingItemIndex = existingCart.findIndex(
      (item: any) => item.id === productId
    );

    if (existingItemIndex >= 0) {
      // Increment quantity if product exists
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Add new product with quantity 1
      existingCart.push({
        ...product,
        quantity: 1,
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem("shoppingCart", JSON.stringify(existingCart));

    // Show success notification
    addToast({
      title: "Added to Cart! 🛒",
      description: `${product.title} has been added to your cart`,
      color: "success",
    });
  };

  const handleViewCart = () => {
    router.push("/shopping-cart");
  };

  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto md:px-6 py-20"
    >
      {/* Header */}
      <div className="text-left mb-12 max-w-7xl flex items-center justify-between gap-2">
        <div>
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-[#F31260]"
          >
            Shop Products
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2"
          >
            Explore Our Products
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-zinc-600 mt-3">
            Premium branded merchandise and custom printed products for modern
            businesses
          </motion.p>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={fadeUp}>
            <Card
              radius="sm"
              shadow="sm"
              className="border border-zinc-200 bg-white hover:shadow-sm transition-shadow"
            >
              {/* Image */}
              <CardBody className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.title}
                    radius="none"
                    className="h-full w-full object-cover hover:scale-102"
                  />
                </div>
              </CardBody>

              {/* Content */}
              <CardFooter className="flex flex-col items-start gap-4 p-4">
                <div className="w-full space-y-4 text-left">
                  {/* Title + Price */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-sm text-zinc-900 leading-snug">
                      {product.title}
                    </h3>

                    <span className="text-xs font-semibold text-[#F31260] whitespace-nowrap">
                      KES {product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600">{product.description}</p>
                </div>

                {/* Full-width button */}
                <Button
                  size="md"
                  radius="sm"
                  color="danger"
                  variant="light"
                  onPress={() => handleAddToCart(product.id)}
                  className="w-full px-4"
                >
                  <span className="flex w-full items-center justify-between">
                    <span className="font-semibold text-sm">Add to Cart</span>
                    <ShoppingCart size={16} />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* View Cart Button */}
      <motion.div variants={fadeUp} className="mt-12 text-center"></motion.div>
    </motion.section>
  );
}
