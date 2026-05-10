"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center pt-16"
    >
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1609861058671-b67b2042b657?q=80&w=2070&auto=format&fit=crop"
          alt="Beautifully restored hardwood floor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0800]/90 via-[#1a1108]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0800]/60 via-transparent to-[#0d0800]/30" />

      {/* Decorative grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Gold vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span
              className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Premium Wood Restoration
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-6 leading-[1.05]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Bringing{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 60%, #A67C4E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wood
            </span>{" "}
            <br />
            Back to Life.
          </h1>

          {/* Subheadline */}
          <p
            className="text-[#c4a882] text-base md:text-lg mb-10 leading-relaxed max-w-lg"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            Premium floor sanding, furniture restoration, and wood polishing —
            crafted with decades of expertise and a passion for natural beauty.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="#booking">
              <Button
                size="lg"
                className="text-[#1a1108] text-sm tracking-widest uppercase font-semibold px-8 py-4 h-auto hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.15em",
                  border: "none",
                  boxShadow: "0 8px 32px rgba(201,169,110,0.4)",
                }}
              >
                Book a Service
              </Button>
            </a>

            <a href="#gallery">
              <Button
                size="lg"
                variant="outline"
                className="text-[#E8C98A] text-sm tracking-widest uppercase font-semibold px-8 py-4 h-auto hover:bg-white/10 transition-all duration-300"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.15em",
                  border: "1px solid rgba(201,169,110,0.5)",
                  background: "transparent",
                }}
              >
                View Our Work
              </Button>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Projects Done" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-2xl md:text-3xl font-light"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "#E8C98A",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[#8a7260] text-xs tracking-widest uppercase mt-0.5"
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.12em" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom right decorative image peek */}
      <div className="absolute right-0 bottom-0 w-80 h-64 hidden lg:block overflow-hidden">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top right, #0d0800 30%, transparent 70%), linear-gradient(to right, #0d0800 0%, transparent 40%)",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
          alt="Restored furniture detail"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-[#8a7260] text-[10px] tracking-widest uppercase"
          style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em" }}
        >
          Scroll
        </span>
        <ChevronDown size={16} className="text-[#C9A96E]" />
      </div>
    </section>
  );
}