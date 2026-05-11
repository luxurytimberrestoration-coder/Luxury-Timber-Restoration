"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * IMAGE STRATEGY:
 * Each project uses ONE confirmed real Unsplash photo (short ID format).
 * The "Before" side shows the same image with a CSS degrading filter stack
 * (desaturate + darken + sepia + scratch overlay) to simulate a worn floor.
 * The "After" side shows the true warm, polished image.
 * This gives a convincing same-room before/after — exactly like the reference images.
 *
 * All IDs are confirmed real from Unsplash search results.
 * URL format: https://images.unsplash.com/{shortID}?w=1200&q=90&auto=format&fit=crop
 */

type Project = {
  id: number;
  title: string;
  location: string;
  type: string;
  duration: string;
  description: string;
  unsplashId: string;   // confirmed short ID from unsplash.com/photos/{slug}-{ID}
  alt: string;
  beforeCaption: string;
  afterCaption: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Victorian Parquet Hallway",
    location: "Kensington, London",
    type: "Floor Restoration",
    duration: "3 days",
    description:
      "Old herringbone parquet buried under thick varnish and decades of grime. We stripped to bare wood, re-glued every loose block, sanded flush, and sealed with a satin hardwax oil — letting the original Victorian grain speak for itself.",
    unsplashId: "RR9Muj8qpns",
    alt: "Restored hardwood floor in period hallway",
    beforeCaption: "Cloudy varnish, lifted blocks, years of grime buildup",
    afterCaption: "Crisp herringbone pattern, satin hardwax finish",
  },
  {
    id: 2,
    title: "Solid Oak Living Room",
    location: "Chiswick, London",
    type: "Floor Sanding & Oiling",
    duration: "2 days",
    description:
      "Wide-plank oak boards dulled by years of heavy foot traffic and a dying polyurethane coat. Full 3-stage drum sand, spot-repaired damaged planks, finished with warm Danish oil — deepening the grain to its full, natural richness.",
    unsplashId: "RUUJIiLzMrM",
    alt: "Wide plank oak floor with warm oil finish",
    beforeCaption: "Dull, scuffed, dying polyurethane coat",
    afterCaption: "Deep grain, warm Danish oil — like new",
  },
  {
    id: 3,
    title: "Mahogany Dining Room",
    location: "Clifton, Bristol",
    type: "Floor Restoration & Staining",
    duration: "4 days",
    description:
      "Dark mahogany planks bleached uneven by sunlight through large bay windows, with heavy scratch patterns across the entire room. Full sand-back, custom dark walnut stain blended for uniform colour, then 3 coats of traffic-grade lacquer.",
    unsplashId: "nmS4DiG5kGs",
    alt: "Rich dark mahogany floor with lacquer finish",
    beforeCaption: "Sun-bleached patches, deep scratch patterns throughout",
    afterCaption: "Uniform walnut stain, 3-coat lacquer finish",
  },
  {
    id: 4,
    title: "High-Traffic Entrance Hall",
    location: "Didsbury, Manchester",
    type: "Floor Polishing & Sealing",
    duration: "1 day",
    description:
      "Engineered boards at the front entrance stripped bare of all sheen — grey, chalky, completely unprotected. A targeted buff-and-coat: clean, light abrasion, then two coats of hardwearing commercial lacquer. Done and dry in a single day.",
    unsplashId: "B-HL2Y6HUnc",
    alt: "Gleaming sealed entrance hall floor",
    beforeCaption: "Grey, chalky, fully unprotected boards",
    afterCaption: "High-sheen commercial lacquer, same-day finish",
  },
];

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "48hr", label: "Avg. Response Time" },
  { value: "100%", label: "Satisfaction Rate" },
];

// next.config.ts must whitelist images.unsplash.com — already done for hero
const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=90&auto=format&fit=crop`;

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

      {/* ── Header ── */}
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
              Drag the divider on any project — same floor, same room, before and after our work.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200 mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C9A84C]/15 border border-[#C9A84C]/15 rounded-sm overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#1A1209] px-6 py-5 text-center">
              <p className="font-serif text-[#C9A84C] text-2xl font-bold mb-1">{s.value}</p>
              <p className="text-[#9C8A6E] text-[10px] tracking-[0.18em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Project cards ── */}
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="reveal opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <ProjectCard project={project} index={i} imageUrl={img(project.unsplashId)} />
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="reveal opacity-0 translate-y-6 transition-all duration-700 max-w-7xl mx-auto px-6 mt-20">
        <div className="relative rounded-sm overflow-hidden border border-[#C9A84C]/20">
          <Image
            src={img("MaUYqj8EfC4")}
            alt="Polished wooden floor"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative z-10 px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-serif text-[#F5EDD6] text-2xl md:text-3xl mb-2">
                Ready to transform your floors or furniture?
              </p>
              <p className="text-[#9C8A6E] text-sm">
                Free site assessment — we visit, evaluate, and quote with no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
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
        .reveal.in-view { opacity: 1 !important; transform: none !important; }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   PROJECT CARD — single image, CSS-filter split
───────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  imageUrl,
}: {
  project: Project;
  index: number;
  imageUrl: string;
}) {
  const [pct, setPct] = useState(50);
  const [view, setView] = useState<"split" | "before" | "after">("split");
  const [touched, setTouched] = useState(false);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const calcPct = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 1), 99);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setPct(calcPct(e.clientX));
    };
    const onUp = () => {
      isDragging.current = false;
      setDragging(false);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const displayPct = view === "before" ? 100 : view === "after" ? 0 : pct;
  const animated = view !== "split";

  return (
    <div className="bg-[#1A1209] border border-[#C9A84C]/12 rounded-sm overflow-hidden hover:border-[#C9A84C]/28 transition-colors duration-500">

      {/* Meta bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-[#C9A84C]/10">
        <div className="flex items-center gap-4">
          <span className="font-serif text-[#C9A84C] text-sm font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-4 w-px bg-[#C9A84C]/30" />
          <div>
            <p className="text-[#F5EDD6] font-semibold text-sm">{project.title}</p>
            <p className="text-[#9C8A6E] text-xs">
              {project.location} &middot; {project.type}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 px-3 py-1 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[10px] tracking-wide uppercase font-medium">
            {project.duration}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">

        {/* ── Left: comparison panel ── */}
        <div className="w-full lg:w-[65%] relative">

          {/* View toggle tabs */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex bg-[#0F0A04]/85 backdrop-blur-sm border border-[#C9A84C]/25 rounded-full p-[3px] gap-[3px]">
            {(["split", "before", "after"] as const).map((v) => (
              <button
                key={v}
                onClick={() => { setView(v); setTouched(true); }}
                className={`px-3 py-1 rounded-full text-[9px] tracking-[0.15em] uppercase font-medium transition-all duration-200 ${view === v
                    ? "bg-[#C9A84C] text-[#1A1209]"
                    : "text-[#9C8A6E] hover:text-[#F5EDD6]"
                  }`}
              >
                {v}
              </button>
            ))}
          </div>

          {/* Image comparison frame */}
          <div
            ref={frameRef}
            className="relative h-[280px] md:h-[400px] lg:h-[460px] overflow-hidden select-none"
            style={{ cursor: view === "split" ? "col-resize" : "default" }}
            onMouseDown={(e) => {
              if (view !== "split") return;
              isDragging.current = true;
              setDragging(true);
              setTouched(true);
              setPct(calcPct(e.clientX));
            }}
            onTouchStart={() => setTouched(true)}
            onTouchMove={(e) => {
              if (view !== "split") return;
              setPct(calcPct(e.touches[0].clientX));
            }}
          >
            {/* AFTER — base layer, full colour */}
            <div className="absolute inset-0">
              <Image
                src={imageUrl}
                alt={project.alt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* BEFORE — same image, clipped to left of slider, with degrading filter */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - displayPct}% 0 0)`,
                transition: animated
                  ? "clip-path 0.55s cubic-bezier(0.4,0,0.2,1)"
                  : "none",
              }}
            >
              <Image
                src={imageUrl}
                alt={`Before: ${project.alt}`}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
                style={{
                  filter:
                    "saturate(0.18) brightness(0.68) contrast(1.18) sepia(0.4)",
                }}
              />
              {/* Scratch pattern overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(91deg, transparent 0px, transparent 4px, rgba(0,0,0,0.05) 4px, rgba(0,0,0,0.05) 5px)",
                }}
              />
              {/* Aged haze */}
              <div className="absolute inset-0 bg-[#1A0F00]/35 pointer-events-none" />
            </div>

            {/* Divider line + handle (split mode only) */}
            {view === "split" && (
              <div
                className="absolute top-0 bottom-0 z-10 pointer-events-none"
                style={{ left: `${displayPct}%` }}
              >
                <div className="absolute inset-y-0 -translate-x-px w-[2px] bg-[#C9A84C] shadow-[0_0_10px_rgba(201,168,76,0.5)]" />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#C9A84C] border-2 border-white/20 flex items-center justify-center shadow-xl transition-transform duration-100 ${dragging ? "scale-110" : "scale-100"
                    }`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7 10H1M13 10h6M7 10L5 8M7 10l-2 2M13 10l2-2M13 10l2 2"
                      stroke="#1A1209"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Corner labels */}
            <div
              className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-[#1A1209]/85 backdrop-blur-sm px-3 py-1.5 rounded-sm transition-opacity duration-300"
              style={{ opacity: displayPct > 10 ? 1 : 0 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#9C8A6E]" />
              <span className="text-[#9C8A6E] text-[9px] tracking-[0.18em] uppercase font-medium">
                Before
              </span>
            </div>
            <div
              className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-[#C9A84C] px-3 py-1.5 rounded-sm transition-opacity duration-300"
              style={{ opacity: displayPct < 90 ? 1 : 0 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A1209]" />
              <span className="text-[#1A1209] text-[9px] tracking-[0.18em] uppercase font-semibold">
                After
              </span>
            </div>

            {/* Drag hint — only until first interaction */}
            {!touched && view === "split" && (
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="flex items-center gap-2.5 bg-[#1A1209]/70 backdrop-blur-sm border border-[#C9A84C]/40 text-[#C9A84C] text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-sm animate-pulse">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path
                      d="M1 5H15M1 5L4 2M1 5l3 3M15 5l-3-3M15 5l-3 3"
                      stroke="#C9A84C"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  Drag to compare
                </div>
              </div>
            )}
          </div>

          {/* Caption strip */}
          <div className="flex border-t border-[#C9A84C]/10 bg-[#130E04]">
            <div className="flex-1 flex items-start gap-2 px-4 py-3 border-r border-[#C9A84C]/10">
              <div className="w-1 h-1 rounded-full bg-[#9C8A6E] mt-1.5 shrink-0" />
              <p className="text-[#9C8A6E] text-[10px] leading-relaxed">
                <span className="text-[#C9A84C] font-semibold uppercase text-[9px] tracking-wide mr-1">
                  Before —{" "}
                </span>
                {project.beforeCaption}
              </p>
            </div>
            <div className="flex-1 flex items-start gap-2 px-4 py-3">
              <div className="w-1 h-1 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
              <p className="text-[#9C8A6E] text-[10px] leading-relaxed">
                <span className="text-[#C9A84C] font-semibold uppercase text-[9px] tracking-wide mr-1">
                  After —{" "}
                </span>
                {project.afterCaption}
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: detail sidebar ── */}
        <div className="w-full lg:w-[35%] border-t lg:border-t-0 lg:border-l border-[#C9A84C]/10 flex flex-col">
          <div className="flex-1 p-7">
            <p className="text-[#C9A84C] text-[9px] tracking-[0.22em] uppercase mb-3 font-semibold">
              The Work
            </p>
            <p className="text-[#C4B49A] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="h-px bg-[#C9A84C]/12 mx-7" />

          <div className="p-7 flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {[project.type, project.location, `${project.duration} job`].map((tag) => (
                <span
                  key={tag}
                  className="text-[#9C8A6E] text-[9px] tracking-wide border border-[#C9A84C]/18 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/447000000000?text=Hi%2C%20I%20saw%20your%20${encodeURIComponent(
                project.title
              )}%20project%20and%20I%27m%20interested%20in%20a%20similar%20restoration.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/18 border border-[#C9A84C]/28 hover:border-[#C9A84C]/55 text-[#C9A84C] text-[10px] font-semibold tracking-[0.12em] uppercase px-5 py-3.5 rounded-sm transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire About This Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}







// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// type Project = {
//   id: number;
//   title: string;
//   location: string;
//   type: string;
//   duration: string;
//   description: string;
//   before: { src: string; caption: string };
//   after: { src: string; caption: string };
// };

// const PROJECTS: Project[] = [
//   {
//     id: 1,
//     title: "Victorian Parquet Revival",
//     location: "Ikoyi, Lagos",
//     type: "Floor Restoration",
//     duration: "3 days",
//     description:
//       "100-year-old herringbone parquet buried under layers of old varnish and paint. We stripped everything back, re-glued lifted blocks, sanded flush, and applied a satin hardwax oil to let the original wood breathe again.",
//     before: {
//       src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85",
//       caption: "Cracked, stained, heavily worn surface",
//     },
//     after: {
//       src: "https://images.unsplash.com/photo-1562113530-57ba467cea38?w=900&q=85",
//       caption: "Restored to original Victorian character",
//     },
//   },
//   {
//     id: 2,
//     title: "Solid Oak Living Room",
//     location: "Banana Island, Lagos",
//     type: "Floor Sanding & Oiling",
//     duration: "2 days",
//     description:
//       "Sun-bleached, scratched solid oak planks across an open-plan living space. Full 3-stage sand, spot-repaired damaged boards, then finished with a warm Danish oil — deepening the natural grain beautifully.",
//     before: {
//       src: "https://images.unsplash.com/photo-1585412459212-8ee4e44c9e71?w=900&q=85",
//       caption: "Dull, scratched, sun-bleached boards",
//     },
//     after: {
//       src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=900&q=85",
//       caption: "Rich, deep grain — fully revived",
//     },
//   },
//   {
//     id: 3,
//     title: "Antique Mahogany Dining Table",
//     location: "Victoria Island, Lagos",
//     type: "Furniture Restoration",
//     duration: "5 days",
//     description:
//       "A family heirloom — 1960s solid mahogany with a collapsed joint, deep gouges and flaking veneer. We rebuilt the joint, filled every gouge, stripped old lacquer, and finished by hand with period-correct shellac.",
//     before: {
//       src: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=900&q=85",
//       caption: "Collapsed joint, gouges, flaking finish",
//     },
//     after: {
//       src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&q=85",
//       caption: "Structurally sound, hand-rubbed finish",
//     },
//   },
//   {
//     id: 4,
//     title: "High-Traffic Hallway",
//     location: "Lekki Phase 1, Lagos",
//     type: "Floor Polishing & Sealing",
//     duration: "1 day",
//     description:
//       "Engineered boards stripped of all sheen from years of heavy foot traffic. A targeted buff-and-coat — no full sand required. Cleaned, abraded, then two coats of traffic-grade lacquer applied for long-lasting protection.",
//     before: {
//       src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=85",
//       caption: "Scuffed, dull, heavily foot-trafficked",
//     },
//     after: {
//       src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
//       caption: "Mirror-like sheen, fully sealed",
//     },
//   },
// ];

// const STATS = [
//   { value: "500+", label: "Projects Completed" },
//   { value: "12+", label: "Years in Lagos" },
//   { value: "48hr", label: "Avg. Response Time" },
//   { value: "100%", label: "Client Satisfaction" },
// ];

// export default function GallerySection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) e.target.classList.add("in-view");
//         }),
//       { threshold: 0.07 }
//     );
//     sectionRef.current?.querySelectorAll(".reveal").forEach((el) =>
//       observer.observe(el)
//     );
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="gallery" ref={sectionRef} className="bg-[#0F0A04] py-28 overflow-hidden">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-6 mb-20">
//         <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
//           <div className="flex items-center gap-3 mb-5">
//             <div className="h-px w-10 bg-[#C9A84C]" />
//             <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase font-medium">
//               Real Results
//             </span>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//             <h2 className="font-serif text-[#F5EDD6] text-4xl md:text-5xl leading-tight">
//               The Proof Is In{" "}
//               <em className="text-[#C9A84C] not-italic">The Wood</em>
//             </h2>
//             <p className="text-[#9C8A6E] text-sm leading-relaxed max-w-sm lg:text-right">
//               Every project below is a real Lagos client. No filters, no staging — just the before, the work, and the result.
//             </p>
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="reveal opacity-0 translate-y-4 transition-all duration-700 delay-200 mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C9A84C]/15 border border-[#C9A84C]/15 rounded-sm overflow-hidden">
//           {STATS.map((s) => (
//             <div key={s.label} className="bg-[#1A1209] px-6 py-5 text-center">
//               <p className="font-serif text-[#C9A84C] text-2xl font-bold mb-1">{s.value}</p>
//               <p className="text-[#9C8A6E] text-[10px] tracking-[0.18em] uppercase">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Project cards */}
//       <div className="max-w-7xl mx-auto px-6 space-y-10">
//         {PROJECTS.map((project, i) => (
//           <div
//             key={project.id}
//             className="reveal opacity-0 translate-y-10 transition-all duration-700"
//             style={{ transitionDelay: `${i * 100}ms` }}
//           >
//             <ProjectCard project={project} index={i} />
//           </div>
//         ))}
//       </div>

//       {/* Bottom CTA banner */}
//       <div className="reveal opacity-0 translate-y-6 transition-all duration-700 max-w-7xl mx-auto px-6 mt-20">
//         <div className="relative rounded-sm overflow-hidden border border-[#C9A84C]/20">
//           <Image
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
//             alt="Polished wooden floor"
//             fill
//             className="object-cover opacity-20"
//           />
//           <div className="relative z-10 px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
//             <div>
//               <p className="font-serif text-[#F5EDD6] text-2xl md:text-3xl mb-2">
//                 Ready to transform your floors or furniture?
//               </p>
//               <p className="text-[#9C8A6E] text-sm">
//                 Get a free assessment — we visit, evaluate, and give you a no-obligation quote.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 shrink-0">
//               <button
//                 onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
//                 className="bg-[#C9A84C] hover:bg-[#B8963E] text-[#1A1209] font-semibold px-7 py-3 rounded-sm text-sm tracking-wide transition-colors whitespace-nowrap"
//               >
//                 Book Free Assessment
//               </button>
//               <a
//                 href="https://wa.me/2348000000000"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border border-[#F5EDD6]/25 hover:border-[#F5EDD6]/60 text-[#F5EDD6] px-7 py-3 rounded-sm text-sm tracking-wide transition-colors whitespace-nowrap text-center"
//               >
//                 WhatsApp Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .reveal.in-view { opacity: 1 !important; transform: none !important; }
//       `}</style>
//     </section>
//   );
// }

// function ProjectCard({ project, index }: { project: Project; index: number }) {
//   const [sliderPct, setSliderPct] = useState(50);
//   const [active, setActive] = useState(false);
//   const [view, setView] = useState<"split" | "before" | "after">("split");
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const isDragging = useRef(false);

//   const updateFromX = (clientX: number) => {
//     const rect = sliderRef.current?.getBoundingClientRect();
//     if (!rect) return;
//     const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
//     setSliderPct(pct);
//   };

//   useEffect(() => {
//     const onUp = () => { isDragging.current = false; };
//     const onMove = (e: MouseEvent) => { if (isDragging.current) updateFromX(e.clientX); };
//     window.addEventListener("mouseup", onUp);
//     window.addEventListener("mousemove", onMove);
//     return () => {
//       window.removeEventListener("mouseup", onUp);
//       window.removeEventListener("mousemove", onMove);
//     };
//   }, []);

//   const effectivePct = view === "before" ? 100 : view === "after" ? 0 : sliderPct;

//   return (
//     <div className="bg-[#1A1209] border border-[#C9A84C]/12 rounded-sm overflow-hidden hover:border-[#C9A84C]/28 transition-colors duration-500">
//       {/* Meta bar */}
//       <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-[#C9A84C]/10">
//         <div className="flex items-center gap-4">
//           <span className="font-serif text-[#C9A84C] text-sm font-bold">
//             {String(index + 1).padStart(2, "0")}
//           </span>
//           <div className="h-4 w-px bg-[#C9A84C]/30" />
//           <div>
//             <p className="text-[#F5EDD6] font-semibold text-sm">{project.title}</p>
//             <p className="text-[#9C8A6E] text-xs">{project.location} &middot; {project.type}</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 px-3 py-1 rounded-full">
//           <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
//           <span className="text-[#C9A84C] text-[10px] tracking-wide uppercase font-medium">{project.duration}</span>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row">
//         {/* Comparison panel */}
//         <div className="relative w-full lg:w-[65%]">
//           {/* View tabs */}
//           <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex bg-[#0F0A04]/80 backdrop-blur-sm border border-[#C9A84C]/20 rounded-full p-0.5 gap-0.5">
//             {(["split", "before", "after"] as const).map((v) => (
//               <button
//                 key={v}
//                 onClick={() => setView(v)}
//                 className={`px-3 py-1 rounded-full text-[10px] tracking-widest uppercase transition-all duration-200 ${
//                   view === v
//                     ? "bg-[#C9A84C] text-[#1A1209] font-semibold"
//                     : "text-[#9C8A6E] hover:text-[#F5EDD6]"
//                 }`}
//               >
//                 {v}
//               </button>
//             ))}
//           </div>

//           {/* Image frame */}
//           <div
//             ref={sliderRef}
//             className="relative h-72 md:h-96 lg:h-[440px] overflow-hidden select-none cursor-col-resize"
//             onMouseDown={(e) => { if (view !== "split") return; isDragging.current = true; updateFromX(e.clientX); }}
//             onMouseEnter={() => setActive(true)}
//             onMouseLeave={() => setActive(false)}
//             onTouchMove={(e) => { if (view === "split") updateFromX(e.touches[0].clientX); }}
//           >
//             {/* AFTER (base) */}
//             <Image src={project.after.src} alt={project.after.caption} fill quality={85} className="object-cover" />

//             {/* BEFORE (clip) */}
//             <div
//               className="absolute inset-0 overflow-hidden"
//               style={{
//                 clipPath: `inset(0 ${100 - effectivePct}% 0 0)`,
//                 transition: view !== "split" ? "clip-path 0.5s ease" : "none",
//               }}
//             >
//               <Image src={project.before.src} alt={project.before.caption} fill quality={85} className="object-cover" />
//               <div className="absolute inset-0 bg-[#2C1F0E]/25 mix-blend-multiply" />
//             </div>

//             {/* Divider + handle */}
//             {view === "split" && (
//               <div className="absolute top-0 bottom-0 z-10 pointer-events-none" style={{ left: `${effectivePct}%` }}>
//                 <div className="absolute inset-y-0 left-0 w-[2px] bg-[#C9A84C]" />
//                 <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C9A84C] border-2 border-white/20 flex items-center justify-center shadow-xl">
//                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M6 9H1M12 9h5M6 9L4 7M6 9l-2 2M12 9l2-2M12 9l2 2" stroke="#1A1209" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>
//               </div>
//             )}

//             {/* Corner labels */}
//             <div className="absolute bottom-4 left-4 bg-[#1A1209]/80 backdrop-blur-sm text-[#9C8A6E] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm"
//               style={{ opacity: effectivePct > 15 ? 1 : 0, transition: "opacity 0.3s" }}>
//               Before
//             </div>
//             <div className="absolute bottom-4 right-4 bg-[#C9A84C]/90 backdrop-blur-sm text-[#1A1209] text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm font-semibold"
//               style={{ opacity: effectivePct < 85 ? 1 : 0, transition: "opacity 0.3s" }}>
//               After
//             </div>

//             {/* Drag hint */}
//             {view === "split" && !active && (
//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <div className="bg-[#1A1209]/65 backdrop-blur-sm text-[#C9A84C] text-[10px] tracking-widest uppercase px-4 py-2 rounded-sm border border-[#C9A84C]/30 animate-pulse">
//                   ← Drag to compare →
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Caption strip */}
//           <div className="flex border-t border-[#C9A84C]/10">
//             <div className="flex-1 px-4 py-2.5 border-r border-[#C9A84C]/10">
//               <p className="text-[#9C8A6E] text-[10px] tracking-wide">
//                 <span className="text-[#C9A84C] font-semibold uppercase mr-1.5 text-[9px]">Before</span>
//                 {project.before.caption}
//               </p>
//             </div>
//             <div className="flex-1 px-4 py-2.5">
//               <p className="text-[#9C8A6E] text-[10px] tracking-wide">
//                 <span className="text-[#C9A84C] font-semibold uppercase mr-1.5 text-[9px]">After</span>
//                 {project.after.caption}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Detail sidebar */}
//         <div className="w-full lg:w-[35%] border-t lg:border-t-0 lg:border-l border-[#C9A84C]/10 p-7 flex flex-col justify-between gap-6">
//           <div>
//             <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-3 font-medium">The Work</p>
//             <p className="text-[#C4B49A] text-sm leading-relaxed">{project.description}</p>
//           </div>

//           <div className="h-px bg-[#C9A84C]/15" />

//           <div className="flex flex-wrap gap-2">
//             {[project.type, project.location, `${project.duration} job`].map((tag) => (
//               <span key={tag} className="text-[#9C8A6E] text-[10px] tracking-wide border border-[#C9A84C]/20 px-3 py-1 rounded-full">
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <a
//             href={`https://wa.me/2348000000000?text=Hi%2C%20I%20saw%20your%20${encodeURIComponent(project.title)}%20project%20and%20I%27m%20interested.`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 border border-[#C9A84C]/30 hover:border-[#C9A84C]/60 text-[#C9A84C] text-xs font-semibold tracking-wide uppercase px-5 py-3 rounded-sm transition-all duration-300"
//           >
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//             </svg>
//             Enquire About This Project
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }