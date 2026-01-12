import React from "react";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";
import { ArrowRight, GithubIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

function MainHero() {
  return (
    <section className=" flex flex-col justify-start gap-4 py-8 h-[600px] rounded-xl relative md:py-10 bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="absolute bottom-30 left-0">
        <div className="inline-block max-w-md text-start mx-4 py-8 justify-start ">
          <p className="uppercase font-light text-sm">Welcome</p>
          <h1 className="font-bold text-4xl">Tazama Digital Studios</h1>
          <small>
            We are a full-service location print shop & creative company
            specializing in digital printing, & creative design
          </small>
          <div className="flex gap-3 mt-12">
            <Button color="primary" endContent={<ArrowRight />}>
              Get Started
            </Button>
            <Button
              endContent={<ArrowRight />}
              color="primary"
              variant="bordered"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
