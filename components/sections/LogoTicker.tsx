"use client";

import React from "react";
import acmeLogo from "@/public/images/logo-acme.png";
import quantumLogo from "@/public/images/logo-quantum.png";
import echoLogo from "@/public/images/logo-echo.png";
import celestialLogo from "@/public/images/logo-celestial.png";
import pulseLogo from "@/public/images/logo-pulse.png";
import apexLogo from "@/public/images/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

function LogoTicker() {
  return (
    <div className="py-8  bg-white md:py-8">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QTM Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Cel Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />

            {/* Second Logo Set */}
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="QTM Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Cel Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
