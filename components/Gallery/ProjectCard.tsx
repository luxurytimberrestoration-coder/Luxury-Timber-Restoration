import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Project } from "./types";


export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
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

  const displayPct =
    view === "before" ? 100 : view === "after" ? 0 : pct;
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
            <p className="text-[#F5EDD6] font-semibold text-sm">
              {project.title}
            </p>
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

        {/* Comparison panel */}
        <div className="w-full lg:w-[65%] relative">

          {/* View tabs */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex bg-[#0F0A04]/90 backdrop-blur-sm border border-[#C9A84C]/25 rounded-full p-[3px] gap-[3px]">
            {(["split", "before", "after"] as const).map((v) => (
              <button
                key={v}
                onClick={() => {
                  setView(v);
                  setTouched(true);
                }}
                className={`px-3 py-1 rounded-full text-[9px] tracking-[0.15em] uppercase font-medium transition-all duration-200 ${view === v
                  ? "bg-[#C9A84C] text-[#1A1209]"
                  : "text-[#9C8A6E] hover:text-[#F5EDD6]"
                  }`}
              >
                {v}
              </button>
            ))}
          </div>

          {/* Frame */}
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
            {/* AFTER — base layer, always full width */}
            <div className="absolute inset-0">
              <Image
                src={project.after}
                alt={`After: ${project.title}`}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* BEFORE — clipped to left of slider */}
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
                src={project.before}
                alt={`Before: ${project.title}`}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            </div>

            {/* Divider + handle */}
            {view === "split" && (
              <div
                className="absolute top-0 bottom-0 z-10 pointer-events-none"
                style={{ left: `${displayPct}%` }}
              >
                <div className="absolute inset-y-0 -translate-x-px w-[2px] bg-[#C9A84C] shadow-[0_0_10px_rgba(201,168,76,0.6)]" />
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

            {/* BEFORE label */}
            <div
              className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-[#1A1209]/85 backdrop-blur-sm px-3 py-1.5 rounded-sm transition-opacity duration-300"
              style={{ opacity: displayPct > 10 ? 1 : 0 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#9C8A6E]" />
              <span className="text-[#9C8A6E] text-[9px] tracking-[0.18em] uppercase font-medium">
                Before
              </span>
            </div>

            {/* AFTER label */}
            <div
              className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-[#C9A84C] px-3 py-1.5 rounded-sm transition-opacity duration-300"
              style={{ opacity: displayPct < 90 ? 1 : 0 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A1209]" />
              <span className="text-[#1A1209] text-[9px] tracking-[0.18em] uppercase font-semibold">
                After
              </span>
            </div>

            {/* Drag hint */}
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

        {/* Detail sidebar */}
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
              {[project.type, project.location, `${project.duration} job`].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[#9C8A6E] text-[9px] tracking-wide border border-[#C9A84C]/18 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href={`https://wa.me/447000000000?text=Hi%2C%20I%20saw%20your%20${encodeURIComponent(
                project.title
              )}%20project%20and%20I%27m%20interested%20in%20a%20similar%20restoration.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/18 border border-[#C9A84C]/28 hover:border-[#C9A84C]/55 text-[#C9A84C] text-[10px] font-semibold tracking-[0.12em] uppercase px-5 py-3.5 rounded-sm transition-all duration-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#C9A84C"
                className="shrink-0"
              >
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