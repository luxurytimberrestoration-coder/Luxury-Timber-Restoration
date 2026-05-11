"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    name: "Charlotte Pemberton",
    location: "Notting Hill, London",
    rating: 5,
    avatar: "CP",
    service: "Floor Sanding & Polishing",
    quote:
      "I genuinely didn't recognise my floors when they were done. Decades of scratches and dullness — completely gone. The team was professional, punctual, and left my home spotless. Absolutely worth it.",
  },
  {
    name: "James Whitfield",
    location: "Clifton, Bristol",
    rating: 5,
    avatar: "JW",
    service: "Furniture Restoration",
    quote:
      "They brought my late father's dining set back to life. What felt like a sentimental lost cause became a centrepiece again. The craftsmanship and care they put in was truly extraordinary.",
  },
  {
    name: "Fiona Drummond",
    location: "Morningside, Edinburgh",
    rating: 5,
    avatar: "FD",
    service: "Staircase Restoration",
    quote:
      "Our staircase had been an eyesore for years. After Luxury Timber's work, guests are now asking who designed it. Fast turnaround, fair pricing, and results that speak for themselves.",
  },
  {
    name: "Oliver Hargreaves",
    location: "Didsbury, Manchester",
    rating: 5,
    avatar: "OH",
    service: "Full Floor Restoration",
    quote:
      "I hired them for three rooms of hardwood floor restoration. Each one came out perfect — smooth, even finish, beautiful natural sheen. Professional team with deep expertise. Highly recommend.",
  },
  {
    name: "Niamh Gallagher",
    location: "Jesmond, Newcastle",
    rating: 5,
    avatar: "NG",
    service: "Wood Polishing & Sealing",
    quote:
      "Excellent service from quote to completion. They were transparent about what was needed and didn't oversell. The finished floors look better than when we first moved in.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <path
            d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"
            fill="#C9A96E"
          />
        </svg>
      ))}
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function TestimonialsSection() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 300);
  }, [active, isAnimating]);

  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + testimonials.length) % testimonials.length), [active, goTo]);

  useEffect(() => {
    autoRef.current = setInterval(next, 6000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [next]);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #130e04 0%, #1a1108 60%, #0d0800 100%)" }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-16 right-12 md:right-24 select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          fontWeight: 700,
          color: "rgba(201,169,110,0.04)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        "
      </div>

      {/* Left gold accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-center">

          {/* Left: Header + navigation */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span
                className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Client Stories
              </span>
            </div>

            <h2
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                fontWeight: 300,
              }}
            >
              What Our{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 60%, #A67C4E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clients
              </span>{" "}
              Say
            </h2>

            <p
              className="text-[#8a7260] leading-relaxed mb-10 max-w-sm"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
            >
              Every piece of wood has a story. Here's what people say after we help write the next chapter.
            </p>

            {/* Navigation controls */}
            <div className="flex items-center gap-4 mb-10">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                style={{
                  border: "1px solid rgba(201,169,110,0.3)",
                  background: "transparent",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,169,110,0.1)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,169,110,0.5)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,169,110,0.3)";
                }}
                aria-label="Previous"
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path d="M12 4l-6 6 6 6" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(201,169,110,0.3)",
                }}
                aria-label="Next"
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path d="M8 4l6 6-6 6" stroke="#1a1108" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Counter */}
              <span
                className="text-[#8a7260] text-sm ml-1"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                <span className="text-[#C9A96E]">{String(active + 1).padStart(2, "0")}</span>
                {" / "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? "2rem" : "0.4rem",
                    height: "0.4rem",
                    borderRadius: "999px",
                    background: i === active ? "#C9A96E" : "rgba(201,169,110,0.25)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Testimonial card */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div
              className="relative"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Main card */}
              <div
                className="relative p-8 md:p-10 rounded-sm"
                style={{
                  background: "linear-gradient(145deg, rgba(44,31,14,0.7) 0%, rgba(26,17,8,0.9) 100%)",
                  border: "1px solid rgba(201,169,110,0.15)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,169,110,0.1)",
                }}
              >
                {/* Top: rating + service tag */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                  <StarRating count={t.rating} />
                  <span
                    className="text-[10px] tracking-widest uppercase text-[#C9A96E] px-3 py-1 rounded-full"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      border: "1px solid rgba(201,169,110,0.2)",
                      background: "rgba(201,169,110,0.06)",
                    }}
                  >
                    {t.service}
                  </span>
                </div>

                {/* Opening quote mark */}
                <div
                  className="mb-4 leading-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "3rem",
                    color: "#C9A96E",
                    lineHeight: "1",
                    opacity: 0.6,
                  }}
                >
                  "
                </div>

                {/* Quote text */}
                <blockquote
                  className="mb-8 leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
                    fontWeight: 300,
                    color: "#d4b896",
                    fontStyle: "italic",
                    letterSpacing: "0.01em",
                  }}
                >
                  {t.quote}
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#C9A96E]/30 to-transparent mb-6" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #C9A96E 0%, #A67C4E 100%)",
                    }}
                  >
                    <span
                      className="text-[#1a1108] font-semibold text-xs"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[#8a7260] text-xs tracking-wide"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}