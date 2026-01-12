"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowIcon, CircleLeft, CircleRight } from "../icons";
import { button as buttonStyles } from "@heroui/theme";

import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  ModalHeader,
  Link,
} from "@heroui/react";
import DigitalForm from "../Calculators/DigitalForm";
import { ArrowUpRight, PrinterCheckIcon, ShoppingCart } from "lucide-react";

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
    image: "/images/stickers2.jpg",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl min-h-[600px] rounded-sm">
        {/* Left Panel - Content */}
        <motion.div
          variants={contentSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-zinc-50 text-zinc-900 p-8 lg:p-12 flex flex-col justify-between border-r border-zinc-200"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-zinc-600">
              Digital Printing
              <span className="block font-light mt-1">Services</span>
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.service}
              variants={textSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <span className="inline-block h-1 w-16 rounded-full mt-8 bg-[#F31260]" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
                {current.service}
              </h2>

              <p className="text-base md:text-lg text-zinc-700 leading-relaxed max-w-md">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onPress={onOpen}
              color="danger"
              size="lg"
              fullWidth
              radius="sm"
              variant="bordered"
              endContent={<PrinterCheckIcon size={18} />}
              className="font-semibold mt-8 mb-8"
            >
              <span className="flex w-full items-center justify-between">
                <span className="font-semibold text-sm">
                  Create your Order Now
                </span>
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Panel - Image Carousel */}
        <motion.div
          variants={imageSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-black flex items-center justify-center overflow-hidden min-h-[400px] lg:min-h-[600px]"
        >
          {/* Image Container - Hidden on mobile, visible on lg+ */}
          <div className=" lg:block absolute inset-0">
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
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inline-flex top-12 right-12 ">
            <Link
              isExternal
              className={buttonStyles({
                radius: "full", // ← changed to full
                variant: "flat", // flat works better with custom bg
                class:
                  "text-sm md:text-base font-light text-white bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 min-w-fit",
              })}
              href="/digital-printing"
            >
              View All
              <ArrowUpRight />
            </Link>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/60 rounded-lg backdrop-blur-md p-2">
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
        </motion.div>
      </div>

      {/* Modal */}
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
                <DigitalForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.section>
  );
};

export default DigitalPrinting;
