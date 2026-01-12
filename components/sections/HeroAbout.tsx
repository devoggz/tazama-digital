"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowIcon, BoltIcon, ClockIcon, PrintIcon } from "@/components/icons";
import { Image } from "@heroui/image";
import {
  Button,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/react";

/* -------------------------------------------------------------------------- */
/*                              Animations                                    */
/* -------------------------------------------------------------------------- */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Component                                     */
/* -------------------------------------------------------------------------- */

export default function HeroAbout() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28">
        {/* ======================= HERO ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div variants={container} className="max-w-xl text-white">
            <motion.p
              variants={fadeUp}
              className="uppercase text-sm tracking-wide text-white/70 mb-4"
            >
              Karibu Tazama Digital
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-bold text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
            >
              High-Quality{" "}
              <span className="bg-linear-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                Digital & Large Format
              </span>{" "}
              Printing
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/85 leading-relaxed"
            >
              Precision printing, bold branding, and disciplined production —
              built for businesses that take presentation seriously.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex gap-4 mt-10 flex-wrap"
            >
              <Button
                onPress={onOpen}
                endContent={<ArrowIcon size={18} />}
                radius="full"
                size="lg"
                className="bg-white text-black font-medium"
              >
                Get a Free Quote
              </Button>

              <Button
                radius="full"
                size="lg"
                variant="bordered"
                className="border-white text-white"
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — Images */}
          <motion.div
            variants={container}
            className="relative hidden lg:flex justify-center items-center"
          >
            <motion.div
              variants={imageReveal}
              whileHover={{ y: -6 }}
              className="relative z-10 w-[420px]"
            >
              <Tooltip content="Large Format Printing">
                <Image
                  src="/images/largeformat.jpg"
                  alt="Large Format Printing"
                  width={420}
                  height={560}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </Tooltip>
            </motion.div>

            <motion.div
              variants={imageReveal}
              transition={{ delay: 0.25 }}
              className="absolute -top-12 -right-6"
            >
              <Image
                src="/images/color.jpg"
                alt="Branding"
                width={220}
                height={300}
                className="rounded-xl shadow-xl object-cover"
              />
            </motion.div>

            <motion.div
              variants={imageReveal}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-14 -left-32"
            >
              <Image
                src="/images/digital.jpg"
                alt="Digital Printing"
                width={260}
                height={180}
                className="rounded-xl shadow-xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ======================= ABOUT ======================= */}
        <motion.div
          variants={container}
          className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 text-white"
        >
          {/* Text */}
          <div className="space-y-6">
            <motion.p
              variants={fadeUp}
              className="uppercase text-xs tracking-widest text-white/70"
            >
              Why Tazama Digital
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
            >
              Printing that reflects the seriousness of your brand
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/80 max-w-lg"
            >
              We combine calibrated machines, disciplined workflows, and
              thoughtful finishing to produce print work that holds up —
              visually and commercially.
            </motion.p>
          </div>

          {/* Features */}
          <div className="space-y-10">
            <Feature
              icon={<PrintIcon size={26} />}
              title="Consistent, controlled quality"
              description="Calibrated machines, tested materials, zero guesswork."
            />
            <Feature
              icon={<BoltIcon size={26} />}
              title="Speed without chaos"
              description="Fast turnaround baked into the workflow, not rushed."
            />
            <Feature
              icon={<ClockIcon size={26} />}
              title="One production partner"
              description="Digital, large format, branding, finishing — one roof."
            />
          </div>
        </motion.div>
      </div>

      {/* Modal placeholder (kept minimal) */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Add your print details</ModalHeader>
          <ModalBody>Form goes here</ModalBody>
        </ModalContent>
      </Modal>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Feature                                      */
/* -------------------------------------------------------------------------- */

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={fadeUp} className="flex gap-6 items-start">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/15 text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-white/75 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
