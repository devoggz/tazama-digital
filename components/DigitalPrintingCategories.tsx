"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { digitalPrintingData } from "@/app/data/digital-printing";

/* =======================
   Animation Variants
======================= */
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

/* =======================
   Helper: Convert title to kebab-case slug
======================= */
function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/* =======================
   Component
======================= */
export default function DigitalPrintingCategories() {
  // Convert object → array of categories
  const categories = Object.values(digitalPrintingData);

  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-8 bg-white"
    >
      {/* Header */}
      <div className="text-left mb-12 max-w-3xl">
        <motion.p
          variants={cardVariants}
          className="text-sm font-bold uppercase tracking-widest text-[#F31260] mb-3"
        >
          Digital Printing Excellence
        </motion.p>
        <motion.h2
          variants={cardVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4"
        >
          Premium Digital Prints
        </motion.h2>
        <motion.p variants={cardVariants} className="text-lg text-zinc-600">
          High-quality, fast-turnaround printing for bold brands and modern
          businesses.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {categories.map((category) => {
          const slug = toSlug(category.title);
          const href = `/digital-printing/${slug}`;

          return (
            <motion.div
              key={category.title} // using title as key since it's unique
              variants={cardVariants}
              whileHover="hover"
            >
              <Card
                radius="sm"
                className="border border-zinc-200/70 bg-white overflow-hidden h-full flex flex-col group"
              >
                {/* Image */}
                <CardBody className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.heroImage}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>
                </CardBody>

                {/* Content */}
                <CardFooter className="flex flex-col items-start gap-5 p-6 text-left">
                  <div className="space-y-2 w-full">
                    <h3 className="font-semibold text-xl text-zinc-900">
                      <Link
                        href={href}
                        className="hover:text-[#F31260] transition-colors"
                      >
                        {category.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-600 line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    as={Link}
                    href={href}
                    size="md"
                    radius="sm"
                    color="danger"
                    fullWidth
                    variant="light"
                    className="px-4"
                  >
                    <span className="flex w-full items-center justify-between font-semibold">
                      <span>View Collection</span>
                      <ArrowRight size={16} />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
