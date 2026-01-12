"use client";
import React from "react";
import heroImage from "@/public/images/eyes4.jpg";
import Image from "next/image";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import MultiStepForm from "../forms/MultiStepForm";

import DigitalForm from "../Calculators/DigitalForm";

const HeroTwo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();
  return (
    <section className="relative overflow-hidden rounded-md">
      <div className=" max-w-7xl px-6 mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-md  items-center h-min ">
        {/* Background image with zoom effect */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImage}
            alt="Hero background"
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-4">
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
              <span className="text-sm md:text-base font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
                Karibu Tazama
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-4xl  sm:text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Digital & Large Format Printing{" "}
              <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white/90 mt-2">
                in Nairobi, Kenya
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
              <Button
                onPress={onOpen}
                radius="sm"
                size="md"
                color="danger"
                endContent={<ArrowRightIcon />}
              >
                Get a Quote
              </Button>
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

              <Button
                radius="sm"
                size="md"
                color="default"
                variant="bordered"
                className="text-sm md:text-base font-light text-white bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 min-w-fit"
                endContent={<ArrowRightIcon />}
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
