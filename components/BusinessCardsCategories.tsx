"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react"; // assuming this is your UI library (NextUI alias?)
import { ArrowRight, Printer } from "lucide-react";

// Animation Variants
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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const categories = [
  {
    id: 1,
    title: "Sample Business Cards",
    description: "Creative & modern designs for inspiration",
    image: "/images/cardUV.jpg",
    itemCount: 12,
    href: "/categories/sample",
  },
  {
    id: 2,
    title: "Standard Business Cards",
    description: "Classic rectangular • Premium paper options",
    image: "/images/cardUV.jpg",
    itemCount: 28,
    href: "/categories/standard",
  },
  {
    id: 3,
    title: "Square Business Cards",
    description: "Unique square format • Modern & bold look",
    image: "/images/cardUV.jpg",
    itemCount: 15,
    href: "/categories/square",
  },
];

export default function BusinessCardsCategories() {
  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 bg-white"
    >
      {/* Header */}
      <div className="text-center md:text-left mb-12 max-w-3xl mx-auto md:mx-0">
        <motion.p
          variants={cardVariants}
          className="text-sm font-bold uppercase tracking-widest text-[#F31260] mb-3"
        >
          Premium Printing
        </motion.p>
        <motion.h2
          variants={cardVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4"
        >
          Business Cards
        </motion.h2>
        <motion.p variants={cardVariants} className="text-lg text-zinc-600">
          Make a lasting first impression with custom printed business cards —
          from classic to creative.
        </motion.p>
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <Card
              isPressable
              radius="md"
              shadow="sm"
              className="border border-zinc-200/80 bg-white overflow-hidden h-full flex flex-col group"
            >
              {/* Image */}
              <CardBody className="p-0 flex-grow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    radius="none"
                    removeWrapper
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
              </CardBody>

              {/* Content */}
              <CardFooter className="flex flex-col items-start gap-4 p-6">
                <div className="space-y-2 w-full">
                  <h3 className="font-semibold text-xl text-zinc-900 group-hover:text-[#F31260] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {category.description}
                  </p>
                </div>

                <div className="w-full flex items-center justify-between mt-2">
                  <span className="text-sm font-medium text-zinc-500">
                    {category.itemCount} designs
                  </span>

                  <Button
                    size="sm"
                    radius="full"
                    color="danger"
                    variant="light"
                    endContent={<ArrowRight size={16} />}
                    className="font-medium text-sm group-hover:text-[#F31260] transition-colors"
                    as="a"
                    href={category.href}
                  >
                    Explore
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
