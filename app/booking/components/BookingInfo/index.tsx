export const BookingInfo = () => {
  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px w-10 bg-[#C9A96E]" />
        <span
          className="text-[#C9A96E] text-xs tracking-[0.35em] uppercase"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Book a Service
        </span>
      </div>

      <h2
        className="text-white leading-tight mb-6"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
          fontWeight: 300,
        }}
      >
        Let's Restore{" "}
        <br />
        <span
          className="italic"
          style={{
            background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 60%, #A67C4E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Your Wood.
        </span>
      </h2>

      <p
        className="text-[#8a7260] leading-relaxed mb-12 max-w-sm"
        style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
      >
        Fill in the form and we'll get back to you within 24 hours with a free, no-obligation quote tailored to your project.
      </p>

      {/* Trust signals */}
      <div className="flex flex-col gap-5 mb-12">
        {[
          { icon: "✦", label: "Free Consultation", desc: "No obligation, no pressure — just honest advice." },
          { icon: "✦", label: "Transparent Pricing", desc: "Clear quotes before any work begins." },
          { icon: "✦", label: "Fully Insured", desc: "Comprehensive cover on every project we take on." },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <span
              className="text-[#C9A96E] text-xs mt-1 flex-shrink-0"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {item.icon}
            </span>
            <div>
              <p
                className="text-white text-sm mb-0.5"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem" }}
              >
                {item.label}
              </p>
              <p
                className="text-[#6b5c4c] text-xs leading-relaxed"
                style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact quick-links */}
      <div
        className="p-6 rounded-sm"
        style={{
          background: "linear-gradient(145deg, rgba(44,31,14,0.5), rgba(26,17,8,0.7))",
          border: "1px solid rgba(201,169,110,0.1)",
        }}
      >
        <p
          className="text-[#8a7260] text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Prefer to call?
        </p>
        <a
          href="tel:+447700900000"
          className="flex items-center gap-3 text-[#C9A96E] hover:text-[#E8C98A] transition-colors duration-300 mb-3 group"
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
            <path d="M2 5a2 2 0 012-2h2l2 4-2 1a10 10 0 004 4l1-2 4 2v2a2 2 0 01-2 2C7.16 16 2 10.84 2 5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 300 }}>
            +44 7700 900 000
          </span>
        </a>
        <a
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-[#6b5c4c] hover:text-[#C9A96E] transition-colors duration-300 group"
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
            <path d="M10 2C5.58 2 2 5.58 2 10c0 1.57.44 3.05 1.2 4.3L2 18l3.78-1.17A7.96 7.96 0 0010 18c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M7 8.5s0-.5.5-1 1-.5 1-.5.5 1 .5 1.5-.5 1-.5 1 1 2 3 2.5c0 0 .5-.5 1-.5s1 .5 1 .5-.5 1.5-1.5 1.5C11.5 13 7 10.5 7 8.5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 300 }}>
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  )
}