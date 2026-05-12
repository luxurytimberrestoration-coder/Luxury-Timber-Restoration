import { useEffect, useRef, useState } from "react";

export function LuxurySelect({
  field,
  value,
  onChange,
}: {
  field: { id: string; placeholder: string; options: string[] };
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex items-center justify-between text-left transition-all duration-300"
        style={{
          background: "rgba(44,31,14,0.5)",
          border: `1px solid ${open ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.12)"}`,
          borderRadius: "2px",
          boxShadow: open ? "0 0 0 3px rgba(201,169,110,0.06)" : "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "0.9rem",
            color: value ? "#d4b896" : "#5a4a38",
          }}
        >
          {value || field.placeholder}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M5 7.5l5 5 5-5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className="absolute left-0 right-0 z-30 overflow-hidden transition-all duration-300"
        style={{
          top: "calc(100% + 4px)",
          maxHeight: open ? "260px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          background: "linear-gradient(145deg, #2C1F0E, #1a1108)",
          border: "1px solid rgba(201,169,110,0.2)",
          borderRadius: "2px",
          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
          overflowY: "auto",
        }}
      >
        {field.options.map((opt) => (
          <button
            type="button"
            key={opt}
            onClick={() => { onChange(opt); setOpen(false); }}
            className="w-full text-left px-5 py-3 transition-all duration-200 flex items-center gap-3 group"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "0.875rem",
              color: value === opt ? "#E8C98A" : "#8a7260",
              background: value === opt ? "rgba(201,169,110,0.08)" : "transparent",
              borderBottom: "1px solid rgba(201,169,110,0.05)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,169,110,0.08)";
              (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = value === opt ? "rgba(201,169,110,0.08)" : "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = value === opt ? "#E8C98A" : "#8a7260";
            }}
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200"
              style={{ background: value === opt ? "#C9A96E" : "rgba(201,169,110,0.3)" }}
            />
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export function LuxuryInput({
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className="relative transition-all duration-300"
      style={{
        border: `1px solid ${focused ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.12)"}`,
        borderRadius: "2px",
        background: "rgba(44,31,14,0.5)",
        boxShadow: focused ? "0 0 0 3px rgba(201,169,110,0.06)" : "none",
      }}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-5 py-4 bg-transparent outline-none"
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "0.9rem",
          color: "#d4b896",
        }}
      />
    </div>
  );
}