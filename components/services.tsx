import React from "react";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

const Services = () => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[200px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-4.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[200px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Plant a tree
          </p>
          <h4 className="text-white font-medium text-large">
            Contribute to the planet
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[200px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Supercharged
          </p>
          <h4 className="text-white font-medium text-large">
            Creates beauty like a beast
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-2.jpeg"
        />
      </Card>
    </div>
  );
};

export default Services;
