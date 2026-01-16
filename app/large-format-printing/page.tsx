"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { largeFormatPrintingData } from "@/app/data/large-format-printing";

export default function LargeFormatCategories() {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="flex items-center flex-col mb-14 max-w-7xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-danger mb-3">
          LARGE FORMAT PRINTING
        </p>
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">
          Massive Impact Prints
        </h1>
        <p className="text-lg 0">
          Eye-catching large format solutions for indoor & outdoor advertising.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(largeFormatPrintingData).map(([slug, category]) => {
          const href = `/large-format-printing/${slug}`;
          return (
            <motion.div
              key={slug}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card radius="sm" className="h-full overflow-hidden group">
                <CardBody className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.heroImage}
                      alt={category.title}
                      removeWrapper
                      className="h-full w-full object-cover group-hover:scale-102 "
                    />
                  </div>
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-4 p-6">
                  <h3 className="text-xl font-semibold text-left">
                    {category.title}
                  </h3>
                  <p className="text-sm  text-left">{category.description}</p>
                  <Button
                    as={Link}
                    href={href}
                    color="danger"
                    variant="bordered"
                    className="border-1"
                    fullWidth
                    endContent={<ArrowRight size={16} />}
                  >
                    <span className="flex w-full items-center justify-between">
                      <span className="font-light text-sm">
                        View Collection
                      </span>
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
