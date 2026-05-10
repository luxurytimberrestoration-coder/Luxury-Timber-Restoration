"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { Instagram } from "lucide-react";

type GalleryItem = {
  id: number;
  before: string;
  after: string;
  label: string;
  type: string;
  location: string;
  span?: "tall" | "wide" | "normal";
};

const GALLERY: GalleryItem[] = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    after: "https://images.unsplash.com/photo-1562113530-57ba467cea38?w=800&q=80",
    label: "Victorian Parquet",
    type: "Floor Restoration",
    location: "Ikoyi, Lagos",
    span: "tall",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
    label: "Oak Dining Table",
    type: "Furniture Restoration",
    location: "Victoria Island, Lagos",
    span: "normal",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1585412459212-8ee4e44c9e71?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80",
    label: "Mahogany Hallway",
    type: "Floor Polishing",
    location: "Lekki Phase 1",
    span: "normal",
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80",
    after: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
    label: "Walnut Cabinet",
    type: "Furniture Restoration",
    location: "Ajah, Lagos",
    span: "wide",
  },
  {
    id: 5,
    before: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    label: "Engineered Hardwood",
    type: "Floor Restoration",
    location: "Banana Island",
    span: "normal",
  },
  {
    id: 6,
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    after: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    label: "Antique Dresser",
    type: "Furniture Restoration",
    location: "Surulere, Lagos",
    span: "normal",
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-[#110C05] py-28 px-6 overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase font-medium">
              Our Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-[#F5EDD6] text-4xl md:text-5xl leading-tight max-w-lg">
              Before & After —{" "}
              <em className="text-[#C9A84C] not-italic">The Transformation</em>
            </h2>
            <p className="text-[#9C8A6E] text-sm leading-relaxed max-w-xs md:text-right">
              Hover over each project to reveal the transformation. Every image is a real client result.
            </p>
          </div>
        </div>
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {GALLERY.map((item, i) => (
            <div
              key={item.id}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 ${item.span === "tall" ? "lg:row-span-2" : ""
                } ${item.span === "wide" ? "sm:col-span-2" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-500 max-w-7xl mx-auto mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#C9A84C]/15 pt-10">
        <div>
          <p className="text-[#F5EDD6] font-serif text-xl mb-1">See more of our work</p>
          <p className="text-[#9C8A6E] text-sm">Follow us on Instagram for daily transformations</p>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 border border-[#C9A84C]/40 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 text-[#C9A84C] px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300"
        >
          {/* <Instagram size={16} /> */}
          @luxurytimberrestoration
        </a>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  const [hovered, setHovered] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pct);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full h-full rounded-sm overflow-hidden cursor-col-resize group/card select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setIsDragging(false); setSliderPos(50); }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* AFTER image (base) */}
      <Image
        src={item.after}
        alt={`After: ${item.label}`}
        fill
        quality={80}
        className="object-cover"
      />

      {/* BEFORE image (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden transition-none"
        style={{ clipPath: `inset(0 ${100 - (hovered ? sliderPos : 100)}% 0 0)` }}
      >
        <Image
          src={item.before}
          alt={`Before: ${item.label}`}
          fill
          quality={80}
          className="object-cover"
        />
        {/* BEFORE label */}
        <div className="absolute top-3 left-3 bg-[#1A1209]/80 backdrop-blur-sm text-[#9C8A6E] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm">
          Before
        </div>
      </div>

      {/* Slider handle */}
      {hovered && (
        <div
          className="absolute top-0 bottom-0 w-px bg-[#C9A84C] pointer-events-none z-10 transition-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 7H1M10 7h3M4 7l2-2M4 7l2 2M10 7l-2-2M10 7l-2 2" stroke="#1A1209" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}

      {/* AFTER label */}
      <div className="absolute top-3 right-3 bg-[#C9A84C]/90 backdrop-blur-sm text-[#1A1209] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm font-semibold">
        After
      </div>

      {/* Bottom info overlay — always visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0800]/90 via-[#0D0800]/50 to-transparent p-4 pt-10 translate-y-1 group-hover/card:translate-y-0 transition-transform duration-300">
        <p className="text-[#C9A84C] text-[9px] tracking-[0.2em] uppercase mb-0.5">{item.type}</p>
        <p className="text-[#F5EDD6] font-serif text-base font-medium">{item.label}</p>
        <p className="text-[#9C8A6E] text-xs">{item.location}</p>
      </div>

      {/* Hover hint (only on first hover before dragging) */}
      {!hovered && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#1A1209]/70 backdrop-blur-sm text-[#C9A84C] text-[10px] tracking-widest uppercase px-3 py-2 rounded-sm">
            Drag to compare
          </div>
        </div>
      )}
    </div>
  );
}