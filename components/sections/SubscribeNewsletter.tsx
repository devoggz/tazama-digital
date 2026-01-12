"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Button, Input } from "@heroui/react";

const sectionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentSlide: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const formSlide: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
  },
};

function SubscribeNewsletter() {
  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto mb-16 px-4"
    >
      <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 p-8 md:p-12 lg:p-14 text-white flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 rounded-sm shadow-2xl">
        {/* Content */}
        <motion.div
          variants={contentSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-xl text-center lg:text-left"
        >
          <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
            Stay Inspired. Stay Ahead.
          </h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Subscribe to our newsletter for design inspiration, printing tips,
            and special offers.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={formSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-auto flex flex-col sm:flex-row gap-0 min-w-[320px] lg:min-w-[400px]"
        >
          <Input
            type="email"
            size="lg"
            placeholder="Enter your email"
            radius="none"
            classNames={{
              inputWrapper: "bg-white shadow-sm",
              input: "text-zinc-900 placeholder:text-zinc-500 ",
            }}
            aria-label="Email address"
          />
          <Button
            radius="none"
            size="lg"
            className="bg-[#FFCF00] text-black font-bold px-8 hover:bg-[#FFD700] transition-colors"
          >
            Subscribe
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SubscribeNewsletter;
