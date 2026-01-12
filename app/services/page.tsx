import { services } from "@/app/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="flex items-center flex-col mb-14 max-w-7xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-danger mb-3">
          Our Services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">
          Daily Business Needs
        </h1>
        <p className="text-lg 0">
          Fast, reliable print and document services designed for everyday
          business needs.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
