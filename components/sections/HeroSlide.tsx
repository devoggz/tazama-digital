"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MyButton } from "../Button";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import MultiStepForm from "../forms/MultiStepForm";

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const slides = [
    {
      image: "/images/parrot.jpg",
      title: "Digital Printing",
      subtitle: "Fast Delivery Across Nairobi",
      description:
        "Crisp, vibrant prints that bring your vision to life—delivered at lightning speed.",
      badge: "Karibu Tazama",
    },
    {
      image: "/images/girl.jpg",
      title: "Large Format Printing",
      subtitle: "Fast Delivery Across Nairobi",
      description:
        "Bold, eye-catching displays that command attention and make your brand impossible to miss.",
      badge: "Karibu Tazama",
    },
  ];

  // No auto-rotation - manual control only

  return (
    <section className="relative overflow-hidden rounded-md">
      <div className="max-w-7xl px-6 mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-md items-center h-[640px]">
        {/* Desktop/Tablet Carousel */}
        <div className="hidden md:block absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 10,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0"
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Static Background */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="md:hidden absolute inset-0 z-0"
        >
          <img
            src="/images/parrot.jpg"
            alt="Hero background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Vertical Navigation Dots - Hidden on Mobile */}
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content - Desktop/Tablet with Carousel */}
        <div className="hidden md:block relative z-10 h-full px-6 md:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="h-full flex items-center"
            >
              <div className="max-w-4xl space-y-6 text-center md:text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  {/* <span className="text-sm md:text-base font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
                    {slides[currentSlide].badge}
                  </span> */}
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
                >
                  {slides[currentSlide].title}{" "}
                  <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white/90 mt-2">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 font-light max-w-2xl"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col sm:flex-row justify-center gap-4 md:justify-start pt-4"
                >
                  {/* <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm md:text-base font-light px-5 py-3 rounded-sm transition-colors min-w-fit"
                  >
                    Get a Quote
                    <ArrowRight />
                  </button> */}

                  <MyButton fullWidth onPress={onOpen} color="redglass">
                    Get Started
                    <ArrowRight />
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

                  <MyButton fullWidth color="glass">
                    View Services
                    <ArrowRight />
                  </MyButton>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content - Mobile (Static) */}
        <div className="md:hidden relative z-10 flex h-full items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl space-y-6 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-block"
            >
              {/* <span className="text-sm md:text-base font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
                Karibu Tazama
              </span> */}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Digital & Large Format Printing{" "}
              <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white/90 mt-2">
                Fast Delivery Across Nairobi
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 font-light max-w-2xl"
            >
              We deliver premium digital printing, large-format solutions, and
              bold branding that helps businesses stand out.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:justify-start pt-4"
            >
              <MyButton onPress={onOpen} color="redglass">
                Get a Quote Today!
                <ArrowRight />
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
                        Get Started
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
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;
