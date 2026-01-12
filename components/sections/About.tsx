"use client";
import { motion, Variants } from "framer-motion";
import { PrintIcon, BoltIcon, ClockIcon } from "../icons";
import { Button } from "@heroui/react";
import { ArrowRight, ArrowRightIcon } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const principleVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-22 shadow-lg rounded-sm mb-12 mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 justify-between gap-16 lg:gap-24">
        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase font-bold tracking-widest text-xs text-[#F31260]"
          >
            About Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight "
          >
            Built for brands that respect the details
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg  max-w-lg leading-relaxed"
          >
            Tazama Digital Studios is your trusted creative partner in Nairobi,
            Kenya. We deliver precision, innovation, and exceptional customer
            service for all printing needs – from startups to established
            brands.
          </motion.p>
          <Button
            color="danger"
            size="lg"
            radius="sm"
            variant="light"
            fullWidth
            endContent={<ArrowRight size={24} />}
            className="mt-16"
          >
            <span className="flex w-full items-center justify-between ">
              <span className=" text-sm">Learn More</span>
            </span>
          </Button>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8 lg:space-y-10"
        >
          <Principle
            icon={<PrintIcon size={30} />}
            title="Quality Printing"
            text="Every job follows a defined production workflow—no improvising at the last minute."
          />
          <Principle
            icon={<BoltIcon size={30} />}
            title="Fast & Reliable Delivery"
            text="Timely service with haraka options to meet tight deadlines."
          />
          <Principle
            icon={<ClockIcon size={30} />}
            title="All-in-One Solutions"
            text="Digital and large format printing under one roof in Nairobi."
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

function Principle({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={principleVariant}
      className="flex gap-6 items-start mt-16"
    >
      <div className="w-16 h-16 text-[#F31260] rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm md:text-base mt-1 max-w-md leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
