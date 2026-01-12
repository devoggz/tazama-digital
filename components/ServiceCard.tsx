"use client";

import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { BikeIcon, ShoppingCart, UploadIcon } from "lucide-react";

type Props = {
  title: string;
  price: number;
  image: string;
};

export function ServiceCard({ title, price, image }: Props) {
  return (
    <Card
      radius="md"
      shadow="sm"
      className="  overflow-hidden h-full flex flex-col"
    >
      {/* Image */}
      <CardBody className="p-0">
        <Image
          src={image}
          alt={title}
          removeWrapper
          className="w-full h-[220px] object-cover"
        />
      </CardBody>

      {/* Content */}
      <CardFooter className="flex flex-col items-start gap-4 p-4">
        {/* Title + Price */}
        <div className="w-full flex items-center justify-between">
          <h3 className="font-semibold text-base ">{title}</h3>

          <span className="text-sm text-zinc-500">
            From{""}
            {price.toFixed(2)}
          </span>
        </div>

        {/* CTA */}
        <Button
          fullWidth
          radius="sm"
          size="md"
          color="danger"
          variant="flat"
          className="flex items-center justify-between"
        >
          <span>Upload Files</span>
          <UploadIcon size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
}
