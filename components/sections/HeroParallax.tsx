"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { MyButton } from "../Button";
import {
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

export default function HeroParallax() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle movement — barely noticeable
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const bandSlow = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);
  const bandFast = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  const slides = [
    {
      image: "/images/parrot.jpg",
      title: "Digital & Large Format",
      subtitle: "Printing in Nairobi, Kenya",
      description:
        "We deliver premium digital printing, large-format solutions, and bold branding that helps businesses stand out.",
    },
    {
      image: "/images/girl.jpg",
      title: "Bold Brand Visibility",
      subtitle: "Fast Delivery Across Nairobi",
      description:
        "Eye-catching visuals, precision finishes, and consistent quality across every format.",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden rounded-md">
      <div className="relative mx-auto max-w-7xl h-[560px] md:h-[640px] px-6 flex items-center">
        {/* ================= IMAGE ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={slides[currentSlide].image}
                alt=""
                className="h-full w-full object-cover"
                style={{ y: imageY }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= BOLD CURVED BANDS ================= */}
        {/* Pink band */}
        <motion.div
          style={{ y: bandFast }}
          className="absolute z-10 -right-[35%] top-[-40%] h-[140%] w-[90%] rounded-full bg-[#F31260] rotate-[18deg]"
        />

        {/* Yellow band */}
        <motion.div
          style={{ y: bandSlow }}
          className="absolute z-10 -right-[15%] top-[-20%] h-[120%] w-[70%] rounded-full bg-[#f5b400] rotate-[-12deg]"
        />

        {/* Blue accent band */}
        <motion.div
          style={{ y: bandSlow }}
          className="absolute z-10 -left-[40%] bottom-[-50%] h-[120%] w-[80%] rounded-full bg-[#0099FF] rotate-[22deg]"
        />

        {/* ================= CONTENT ================= */}
        <div className="relative z-20 max-w-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-sm tracking-wide text-white/80">
                Karibu Tazama
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {slides[currentSlide].title}
                <span className="block text-2xl md:text-4xl font-semibold text-white/90 mt-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-lg text-white/90 max-w-xl">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <MyButton onPress={onOpen} color="redglass">
                  Get a Quote
                  <ArrowRight />
                </MyButton>

                <MyButton color="glass">
                  View Services
                  <ArrowRight />
                </MyButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= SLIDE DOTS ================= */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-xl font-bold">
                Add Your Print Details
              </ModalHeader>
              <ModalBody>
                <MultiStepForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
