import { notFound } from "next/navigation";
import Image from "next/image";
import { digitalPrintingData } from "@/app/data/digital-printing";
import DigitalPrintingForm from "@/components/forms/DigitalPrintingForm";
import { Sparkles, Droplets, Layers, ShieldCheck, Palette } from "lucide-react";

const finishIcons: Record<string, React.ReactNode> = {
  Matte: <Layers size={18} />,
  Gloss: <Sparkles size={18} />,
  "Soft Touch": <Droplets size={18} />,
  "Spot UV": <Sparkles size={18} />,
  Laminated: <ShieldCheck size={18} />,
  UV: <Sparkles size={18} />,
  Recycled: <Palette size={18} />,
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;

  const category = digitalPrintingData[categorySlug];
  const product = category?.items.find((item) => item.slug === slug);

  if (!category || !product) notFound();

  return (
    <section className="max-w-7xl mx-auto py-20">
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-[#F31260] font-bold mb-2">
          {category.title}
        </p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT: Product visual + finishes */}
        <div className="space-y-8">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="mb-12 max-w-3xl">
            <h1 className="text-2xl md:text-2xl font-bold ">{product.title}</h1>
            <p className="text-sm">{product.description}</p>
          </div>

          {product.finishes && product.finishes.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-4">Finishes</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.finishes.map((finish) => (
                  <div
                    key={finish}
                    className="flex items-center gap-3 rounded-lg border border-zinc-200  px-4 py-3  transition"
                  >
                    <span className="text-[#F31260]">
                      {finishIcons[finish] ?? <Sparkles size={18} />}
                    </span>
                    <span className="text-sm font-medium ">{finish}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Quotation Form */}
        <aside className="sticky top-28">
          <div className="rounded-xl border border-zinc-200 p-6 ">
            <h3 className="text-xl font-semibold  mb-4">Get a Quote</h3>
            <DigitalPrintingForm />
          </div>
        </aside>
      </div>
    </section>
  );
}
