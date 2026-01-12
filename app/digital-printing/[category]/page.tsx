"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { digitalPrintingData } from "@/app/data/digital-printing";

type Props = {
  params: Promise<{ category: string }>;
};

export default function CategoryPage({ params }: Props) {
  const { category: categorySlug } = use(params);
  const category = digitalPrintingData[categorySlug];
  if (!category) notFound();

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
          {category.title}
        </h1>
        <p className="text-lg text-zinc-600">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <Link
            key={item.slug}
            href={`/digital-printing/${categorySlug}/${item.slug}`}
          >
            <Card
              isFooterBlurred
              className="w-full h-[350px] group overflow-hidden"
            >
              <CardHeader className="absolute z-10 top-3 flex-col items-start">
                {/* <p className="text-tiny text-white/80 uppercase font-bold bg-black/20 px-2 py-1 rounded">
                  {category.title}
                </p> */}
              </CardHeader>
              <Image
                removeWrapper
                alt={item.title}
                className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={item.image}
              />
              <CardFooter className="absolute bg-white/30 backdrop-blur-sm bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black font-semibold text-md">
                    {item.title}
                  </p>
                </div>
                <Button
                  className="text-tiny"
                  color="danger"
                  radius="full"
                  size="sm"
                  endContent={<ArrowRight size={14} />}
                >
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
