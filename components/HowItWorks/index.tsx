"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description:
      "Reach out via our booking form or WhatsApp. Tell us about your wood — floors, furniture, staircases — and we'll schedule a visit at your convenience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#C9A96E" strokeWidth="1.5" />
        <line x1="15" y1="17" x2="33" y2="17" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="24" x2="33" y2="24" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="31" x2="24" y2="31" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="36" r="7" fill="#1a1108" stroke="#E8C98A" strokeWidth="1.2" />
        <path d="M33 36l2 2 4-4" stroke="#E8C98A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Assessment & Quote",
    description:
      "Our expert visits your space, assesses the wood's condition, discusses finishes and treatments, then provides a detailed, transparent quote — no hidden costs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="24" cy="22" r="12" stroke="#C9A96E" strokeWidth="1.5" />
        <line x1="24" y1="10" x2="24" y2="14" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="30" x2="24" y2="34" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="22" x2="16" y2="22" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="22" x2="36" y2="22" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="22" r="3" fill="#C9A96E" opacity="0.7" />
        <line x1="30" y1="32" x2="38" y2="42" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Restoration Work",
    description:
      "Our craftsmen arrive fully equipped. Using professional-grade tools and premium products, we sand, repair, and refinish your wood to reveal its natural glory.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M10 38L20 28" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="18" y="14" width="20" height="16" rx="2" transform="rotate(-45 18 14)" stroke="#C9A96E" strokeWidth="1.5" />
        <path d="M32 10l6 6" stroke="#E8C98A" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="36" r="3" stroke="#C9A96E" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Final Finish & Handover",
    description:
      "We apply the chosen protective finish, do a quality walkthrough with you, and leave your space immaculate. Your restored wood is ready to shine for decades.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M10 24l8 8 20-16" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 8c8.837 0 16 7.163 16 16s-7.163 16-16 16S8 32.837 8 24" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 14l4-6 4 6" stroke="#E8C98A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.2) {
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

export default function HowItWorksSection() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0800 0%, #1a1108 40%, #130e04 100%)" }}
    >
      {/* Background wood grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(201,169,110,0.3) 60px,
            rgba(201,169,110,0.3) 61px
          ), repeating-linear-gradient(
            180deg,
            transparent,
            transparent 120px,
            rgba(201,169,110,0.1) 120px,
            rgba(201,169,110,0.1) 121px
          )`,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className="mb-20 max-w-xl"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span
              className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              The Process
            </span>
          </div>
          <h2
            className="text-white leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 300,
            }}
          >
            How It{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 60%, #A67C4E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Works
            </span>
          </h2>
          <p
            className="text-[#8a7260] leading-relaxed"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "1rem" }}
          >
            From first contact to the final reveal — a seamless, fuss-free process designed around you.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #C9A96E22 15%, #C9A96E44 50%, #C9A96E22 85%, transparent 100%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                }}
              >
                {/* Card */}
                <div
                  className="relative p-7 rounded-sm h-full flex flex-col gap-5 transition-all duration-500 group-hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg, rgba(44,31,14,0.6) 0%, rgba(26,17,8,0.8) 100%)",
                    border: "1px solid rgba(201,169,110,0.12)",
                    boxShadow: "0 0 0 rgba(201,169,110,0)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(201,169,110,0.08), inset 0 1px 0 rgba(201,169,110,0.15)";
                    (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(201,169,110,0.25)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(201,169,110,0)";
                    (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(201,169,110,0.12)";
                  }}
                >
                  {/* Step number */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.04) 100%)",
                        border: "1px solid rgba(201,169,110,0.2)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="text-right leading-none select-none"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "3.5rem",
                        fontWeight: 300,
                        color: "rgba(201,169,110,0.1)",
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Gold divider */}
                  <div className="h-px w-8 bg-gradient-to-r from-[#C9A96E] to-transparent" />

                  <div>
                    <h3
                      className="text-white mb-3 leading-snug"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "1.35rem",
                        fontWeight: 400,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#8a7260] leading-relaxed text-sm"
                      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step connector dot (desktop) */}
                <div
                  className="hidden lg:flex absolute -top-0 left-[3.25rem] w-3 h-3 rounded-full items-center justify-center"
                  style={{
                    background: "#C9A96E",
                    boxShadow: "0 0 10px rgba(201,169,110,0.5)",
                    top: "3rem",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a1108]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 flex items-center gap-5"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
          }}
        >
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-[#C9A96E]/20" />
          <a
            href="#booking"
            className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase transition-colors hover:text-[#E8C98A]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Start your restoration →
          </a>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-[#C9A96E]/20" />
        </div>
      </div>
    </section>
  );
}