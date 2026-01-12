"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { button as buttonStyles } from "@heroui/theme";

import { CircleLeft, CircleRight } from "../icons";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  ModalHeader,
  Link,
} from "@heroui/react";
import { ArrowUpRight, PrinterCheckIcon } from "lucide-react";
import MultiStepForm from "../forms/MultiStepForm";
import { MyButton } from "../Button";

const services = [
  {
    service: "Canvas Prints",
    description:
      "Gallery-quality canvas prints that bring your images to life with vibrant colors.",
    image: "/images/canvas.jpg",
  },
  {
    service: "Floor Graphics",
    description:
      "Durable, eye-catching floor decals for promotions, branding, and wayfinding.",
    image: "/images/floor.jpg",
  },
  {
    service: "Vehicle Branding",
    description:
      "Transform your fleet into mobile billboards with high-quality vinyl wraps and graphics.",
    image: "/images/vehicle2.jpeg",
  },
  {
    service: "Rollup Banners",
    description:
      "Portable and professional displays perfect for events, trade shows, and retail spaces.",
    image: "/images/rollup4.jpg",
  },

  {
    service: "Wallpapers",
    description:
      "Custom wallpapers that transform spaces with stunning visuals and durable materials.",
    image: "/images/wall.jpg",
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentSlide: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const imageSlide: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const textSlide: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 30, transition: { duration: 0.3 } },
};

const imageFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.4, ease: [0.4, 0, 0.6, 1] },
  },
};

const LargeFormat = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % services.length);

  const current = services[currentIndex];

  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto mb-16 sm:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl rounded-lg bg-white dark:bg-zinc-900">
        {/* Left Panel - Content */}
        <motion.div
          variants={contentSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className=" lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 min-h-[400px] lg:min-h-[600px]"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Large Format
              <span className="block font-light mt-1 text-zinc-600 dark:text-zinc-400">
                Printing Services
              </span>
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.service}
              variants={textSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4 sm:space-y-6 flex-1 flex flex-col justify-center"
            >
              <span className="inline-block h-1 w-16 rounded-full bg-[#F31260]" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {current.service}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 sm:mt-8"
          >
            <MyButton
              onPress={onOpen}
              color="glass"
              size="xl"
              radius="sm"
              fullWidth
              endContent={<PrinterCheckIcon size={18} />}
              className="font-semibold"
            >
              Create your Order Now
            </MyButton>
            <Modal
              radius="sm"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="center"
              size="lg"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="text-xl font-bold">
                      Add Your Print Details
                    </ModalHeader>
                    <ModalBody className="pb-6">
                      <MultiStepForm />
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </motion.div>
        </motion.div>

        {/* Right Panel - Image Carousel */}
        <motion.div
          variants={imageSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]"
        >
          {/* Image Container */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                variants={imageFade}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={current.service}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* View All Button */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <Link
              isExternal
              className={buttonStyles({
                radius: "full",
                variant: "flat",
                class:
                  "text-xs sm:text-sm font-light text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 px-3 sm:px-4 py-2 min-w-fit",
              })}
              href="/large-format-printing"
            >
              View All
              <ArrowUpRight />
            </Link>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 flex items-center gap-2 bg-black/60 rounded-full backdrop-blur-md p-1.5 sm:p-2">
            <Button
              onPress={handlePrev}
              isIconOnly
              radius="full"
              variant="light"
              className="hover:scale-110 transition-transform"
              aria-label="Previous service"
            >
              <CircleLeft size={28} color="white" />
            </Button>

            <Button
              onPress={handleNext}
              isIconOnly
              radius="full"
              variant="light"
              className="hover:scale-110 transition-transform"
              aria-label="Next service"
            >
              <CircleRight size={28} color="white" />
            </Button>
          </div>

          {/* Mobile Service Indicator */}
          <div className="lg:hidden absolute bottom-4 left-4 z-20 flex gap-1.5">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-white" : "w-1.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LargeFormat;
