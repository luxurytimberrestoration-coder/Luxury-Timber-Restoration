"use client";

import { useEffect, useRef } from "react";
import { PROJECTS, STATS } from "./types";
import { ProjectCard } from "./ProjectCard";

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        }),
      { threshold: 0.07 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="bg-[#0F0A04] py-28 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase font-medium">
              Real Results
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-[#F5EDD6] text-4xl md:text-5xl leading-tight">
              The Proof Is In{" "}
              <em className="text-[#C9A84C] not-italic">The Wood</em>
            </h2>
            <p className="text-[#9C8A6E] text-sm leading-relaxed max-w-sm lg:text-right">
              Real client photos. Same floor, same furniture — before and after
              our work. Drag the divider to compare.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200 mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C9A84C]/15 border border-[#C9A84C]/15 rounded-sm overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#1A1209] px-6 py-5 text-center">
              <p className="font-serif text-[#C9A84C] text-2xl font-bold mb-1">
                {s.value}
              </p>
              <p className="text-[#9C8A6E] text-[10px] tracking-[0.18em] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Project cards */}
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="reveal opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="reveal opacity-0 translate-y-6 transition-all duration-700 max-w-7xl mx-auto px-6 mt-20">
        <div className="relative rounded-sm overflow-hidden border border-[#C9A84C]/20 bg-[#1A1209]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 to-transparent" />
          <div className="relative z-10 px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-serif text-[#F5EDD6] text-2xl md:text-3xl mb-2">
                Ready to transform your floors or furniture?
              </p>
              <p className="text-[#9C8A6E] text-sm">
                Free site assessment — we visit, evaluate, and quote with no
                obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#C9A84C] hover:bg-[#B8963E] text-[#1A1209] font-semibold px-7 py-3 rounded-sm text-sm tracking-wide transition-colors whitespace-nowrap"
              >
                Book Free Assessment
              </button>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F5EDD6]/25 hover:border-[#F5EDD6]/60 text-[#F5EDD6] px-7 py-3 rounded-sm text-sm tracking-wide transition-colors whitespace-nowrap text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
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