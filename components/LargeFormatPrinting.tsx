"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

// Animation Variants (unchanged)
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
    y: -10,
    scale: 1.0,
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const categories = [
  {
    id: 1,
    title: "Rollup Banners",
    description: "The durable and portable design makes them perfect",
    image: "/images/rollup4.jpg",
    itemCount: 45,
    href: "/digital-printing/flyers",
  },
  {
    id: 2,
    title: "Vehicle Branding",
    description:
      "Tri-fold, bi-fold & gate-fold options for businesses & services",
    image: "/images/car2.avif",
    itemCount: 32,
    href: "/digital-printing/brochures",
  },
  {
    id: 3,
    title: "Floor Graphics",
    description:
      "Custom birthday, holiday & corporate cards with premium finishes",
    image: "/images/floor.jpg",
    itemCount: 18,
    href: "/digital-printing/greeting-cards",
  },
  {
    id: 4,
    title: "Canvas",
    description: "Large format prints for events, advertising & wall decor",
    image: "/images/canvas2.jpg",
    itemCount: 27,
    href: "/digital-printing/posters",
  },
];

export default function LargeFormatPrinting() {
  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 bg-white"
    >
      {/* Header - already left-aligned on md+ */}
      <div className="text-center md:text-left mb-12 max-w-3xl mx-auto md:mx-0">
        <motion.p
          variants={cardVariants}
          className="text-sm font-bold uppercase tracking-widest text-[#F31260] mb-3"
        >
          Large Format Excellence
        </motion.p>
        <motion.h2
          variants={cardVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4"
        >
          Large Format Printing
        </motion.h2>
        <motion.p variants={cardVariants} className="text-lg text-zinc-600">
          High-quality, fast-turnaround digital printing for all your marketing
          & branding needs — vibrant colors, sharp details, and professional
          finishes.
        </motion.p>
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            whileHover="hover"
            transition={{ duration: 0.35 }}
          >
            <Card
              isPressable
              radius="md"
              shadow="sm"
              className="border border-zinc-200/70 bg-white overflow-hidden h-full flex flex-col group "
            >
              {/* Image */}
              <CardBody className="p-0 flex-grow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    radius="none"
                    removeWrapper
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
              </CardBody>

              {/* Content - everything left-aligned */}
              <CardFooter className="flex flex-col items-start gap-4 p-6 text-left">
                <div className="space-y-2 w-full">
                  <h3 className="font-semibold text-xl text-zinc-900 group-hover:text-[#F31260] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-zinc-600 line-clamp-2">
                    {category.description}
                  </p>
                </div>

                {/* Button container - now left-aligned, no justify-between */}
                <div className="w-full mt-3">
                  <Button
                    size="md"
                    fullWidth
                    radius="sm"
                    color="danger"
                    variant="light"
                    endContent={<ArrowRight size={16} />}
                    className="font-medium text-start text-sm group-hover:text-[#F31260] transition-colors"
                    as="a"
                    href={category.href}
                  >
                    <span className="flex w-full items-center justify-between">
                      <span className="font-semibold text-sm">
                        View Collection
                      </span>
                    </span>{" "}
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
