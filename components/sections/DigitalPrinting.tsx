"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { MyButton } from "../Button";
import { ArrowRight } from "lucide-react";
import MultiStepForm from "../forms/MultiStepForm";

const CircleLeft = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8l-4 4 4 4M16 12H8" />
  </svg>
);

const CircleRight = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8l4 4-4 4M8 12h8" />
  </svg>
);

const PrinterCheckIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
    <path d="M6 14h12v8H6z" />
    <path d="M9 17l2 2 4-4" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const services = [
  {
    service: "Business Cards",
    description:
      "Thick premium papers with finishes like Spot UV for a lasting impression.",
    image: "/images/cards2.jpg",
  },
  {
    service: "Custom Stickers",
    description: "Perfect for promotions, branding, weddings, and events.",
    image: "/images/stickers.jpg",
  },
  {
    service: "Notebooks",
    description:
      "Professional marketing tools with rich colors and sharp finishes.",
    image: "/images/notebooks.jpg",
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

const DigitalPrinting = () => {
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
      className="max-w-7xl mx-auto mb-16 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl rounded-lg bg-white dark:bg-zinc-900">
        {/* Left Panel - Content */}
        <motion.div
          variants={contentSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 min-h-[400px] lg:min-h-[600px]"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Digital Printing
              <span className="block font-light mt-1 text-zinc-600 dark:text-zinc-400">
                Services
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
            className="mt-6 sm:mt-8 w-full"
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
            {/* <button className="w-full bg-[#F31260] hover:bg-[#F31260]/90 text-white font-semibold py-3 sm:py-4 px-6 rounded-sm flex items-center justify-center gap-2 transition-colors">
              <span className="text-sm sm:text-base">
                Create your Order Now
              </span>
              <PrinterCheckIcon size={18} />
            </button> */}
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
                <img
                  src={current.image}
                  alt={current.service}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* View All Button */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <a
              href="/digital-printing"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-light text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 px-3 sm:px-4 py-2 rounded-full transition-colors"
            >
              View All
              <ArrowUpRight />
            </a>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 flex items-center gap-2 bg-black/60 rounded-full backdrop-blur-md p-1.5 sm:p-2">
            <button
              onClick={handlePrev}
              className="p-1.5 sm:p-2 hover:scale-110 transition-transform rounded-full hover:bg-white/10"
              aria-label="Previous service"
            >
              <CircleLeft size={24} color="white" />
            </button>

            <button
              onClick={handleNext}
              className="p-1.5 sm:p-2 hover:scale-110 transition-transform rounded-full hover:bg-white/10"
              aria-label="Next service"
            >
              <CircleRight size={24} color="white" />
            </button>
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

export default DigitalPrinting;
