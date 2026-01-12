"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowIcon } from "@/components/icons";
import { Image } from "@heroui/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden   ">
      <div className="relative max-w-7xl mx-auto px-2 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20  space-y-4 mb-8 items-center ">
        {/* Text */}
        <motion.div initial="hidden" animate="visible" className="space-y-6">
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-xs text-slate-500"
          >
            Karibu Tazama Digital
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-6xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            High-Quality
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Digital & Large Format
            </span>{" "}
            Printing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-md text-slate-600 max-w-xl "
          >
            We deliver premium digital printing, large-format solutions, <br />{" "}
            and bold branding that helps businesses stand out.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4  mt-12">
            <Button
              radius="md"
              size="lg"
              color="danger"
              endContent={<ArrowIcon size={18} />}
            >
              Get a Quote
            </Button>

            <Button
              radius="md"
              size="lg"
              color="danger"
              variant="bordered"
              endContent={<ArrowIcon size={18} />}
            >
              View Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Image src="/images/eye.png" alt="Printing samples" className="" />
        </motion.div>
      </div>
    </section>
  );
}
