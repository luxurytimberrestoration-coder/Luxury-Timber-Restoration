"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Floor Restoration",
    subtitle: "Sanding · Filling · Refinishing",
    description:
      "We strip decades of wear, sand down to bare timber, fill gaps and cracks, then apply premium finishes that bring out the grain's full depth. Parquet, hardwood, engineered — every plank treated with precision.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=900&q=85",
    alt: "Beautifully restored hardwood floor with warm natural tones",
    features: ["Deep sanding & levelling", "Gap filling", "Staining & colouring", "Lacquer & oil finishing"],
  },
  {
    id: "02",
    title: "Furniture Restoration",
    subtitle: "Antiques · Tables · Cabinets",
    description:
      "From heirloom dining tables to aged cabinets, we restore furniture to showroom condition. We repair structural damage, strip old finishes, and apply hand-rubbed oils and waxes that honour the original craftsmanship.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85",
    alt: "Elegantly restored wooden furniture with rich warm finish",
    features: ["Structural repair", "Veneer restoration", "Hand-rubbed oil finish", "Antique wax polishing"],
  },
  {
    id: "03",
    title: "Wood Polishing & Sealing",
    subtitle: "Protection · Sheen · Longevity",
    description:
      "Preserve your timber's beauty for years to come. We apply protective coats, hardwax oils, and UV-resistant lacquers that seal the grain against moisture, traffic, and time — without hiding the wood's natural character.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
    alt: "High-gloss polished wooden floor reflecting warm light",
    features: ["Hardwax oil coating", "UV-resistant lacquer", "Anti-slip treatment", "Maintenance plans"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#1A1209] py-28 px-6 overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase font-medium">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-[#F5EDD6] text-4xl md:text-5xl leading-tight max-w-md">
              Craftsmanship That <em className="text-[#C9A84C] not-italic">Speaks</em> For Itself
            </h2>
            <p className="text-[#9C8A6E] text-sm leading-relaxed max-w-sm md:text-right">
              {/* Every project is treated as a unique restoration challenge.  */}
              We bring the luxury to your home furnitures wood Floors
              No shortcuts.
              No generic solutions. Just skilled hands and premium materials.
            </p>
          </div>
        </div>

        {/* Decorative rule */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200 mt-10 h-px bg-gradient-to-r from-[#C9A84C]/60 via-[#C9A84C]/10 to-transparent" />
      </div>

      {/* Service cards */}
      <div className="max-w-7xl mx-auto space-y-6">
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <ServiceCard service={service} index={i} />
          </div>
        ))}
      </div>

      <style jsx global>{`
        .reveal.in-view {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const imageRight = index % 2 !== 0;

  return (
    <div
      className={`group relative flex flex-col ${imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
        } rounded-sm overflow-hidden bg-[#2C1F0E] border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A84C]/5`}
    >
      {/* Image side */}
      <div className="relative w-full lg:w-[48%] h-64 lg:h-auto min-h-[320px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1209]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#2C1F0E]/40" />
        {/* Service number badge */}
        <div className="absolute top-5 left-5 w-11 h-11 rounded-full border border-[#C9A84C]/60 flex items-center justify-center bg-[#1A1209]/70 backdrop-blur-sm">
          <span className="text-[#C9A84C] font-serif text-sm font-bold">{service.id}</span>
        </div>
      </div>

      {/* Content side */}
      <div className="flex-1 p-4 lg:p-12 flex flex-col justify-center">
        <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-3 font-medium">
          {service.subtitle}
        </p>
        <h3 className="font-serif text-[#F5EDD6] text-3xl lg:text-4xl font-semibold mb-5 leading-tight">
          {service.title}
        </h3>
        <p className="text-[#9C8A6E] text-sm leading-relaxed mb-8 max-w-md">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="grid grid-cols-2 gap-2 mb-10">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[#C4B49A] text-xs">
              <div className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="self-start flex items-center gap-2 text-[#C9A84C] text-sm font-medium border border-[#C9A84C]/40 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 px-5 py-2.5 rounded-sm transition-all duration-300 group/btn"
        >
          Book This Service
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}