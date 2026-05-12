"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path
          d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/YOUR_NUMBER",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 1.89.527 3.66 1.438 5.168L2 22l4.978-1.38A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9.5c.5 1 1.5 2.5 3 3.5s2.5 1.5 3 1.5c.167-.5.5-1.5.5-1.5s-1-.5-1.5-.5-.5.5-.5.5-1.5-.5-3-2-1.5-2.5-1.5-2.5.5-.5.5-1-.5-1.5-.5-1.5-1 .333-1 .5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0800 0%, #080500 100%)" }}
    >
      {/* Top gold border */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #C9A96E40 30%, #C9A96E 50%, #C9A96E40 70%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Wood grain lines */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 80px,
            rgba(201,169,110,0.5) 80px,
            rgba(201,169,110,0.5) 81px
          )`,
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.4fr] gap-12 lg:gap-8 mb-16">

          {/* Col 1: Brand */}
          <div>
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-9 h-9 relative flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="14" width="32" height="5" rx="1" fill="#C9A96E" opacity="0.9" />
                  <rect x="2" y="21" width="32" height="4" rx="1" fill="#A67C4E" opacity="0.7" />
                  <rect x="2" y="27" width="32" height="3" rx="1" fill="#7A5230" opacity="0.5" />
                  <rect x="2" y="8" width="32" height="4" rx="1" fill="#C9A96E" opacity="0.6" />
                  <path d="M8 14 Q18 4 28 14" stroke="#E8C98A" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-serif text-[#E8C98A] tracking-widest text-xs uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: "0.2em" }}
                >
                  Luxury
                </span>
                <span
                  className="font-serif text-white text-base font-semibold tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Timber Restoration
                </span>
              </div>
            </a>

            <p
              className="text-[#6b5c4c] leading-relaxed mb-8 max-w-xs"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.9rem" }}
            >
              Premium wood restoration crafted with decades of expertise. We bring the natural beauty of timber back to life — floors, furniture, staircases and beyond.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#8a7260] transition-all duration-300 hover:text-[#E8C98A] hover:scale-110"
                  style={{
                    border: "1px solid rgba(201,169,110,0.15)",
                    background: "rgba(201,169,110,0.04)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,169,110,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,169,110,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,169,110,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,169,110,0.04)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Navigation
            </h4>
            <div
              className="h-px w-8 mb-6"
              style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }}
            />
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#6b5c4c] hover:text-[#C9A96E] text-sm transition-colors duration-300 flex items-center gap-2 group"
                    style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                  >
                    <span
                      className="h-px w-0 group-hover:w-4 bg-[#C9A96E] transition-all duration-300 flex-shrink-0"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact + Newsletter */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Get in Touch
            </h4>
            <div
              className="h-px w-8 mb-6"
              style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }}
            />

            <ul className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5">
                      <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1110 5a1.5 1.5 0 010 3.5z" stroke="#C9A96E" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                  ),
                  text: "London, United Kingdom",
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5">
                      <path d="M2 5a2 2 0 012-2h2l2 4-2 1a10 10 0 004 4l1-2 4 2v2a2 2 0 01-2 2C7.16 16 2 10.84 2 5z" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  text: "+44 7700 900 000",
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-0.5">
                      <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#C9A96E" strokeWidth="1.2" />
                      <path d="M2 5l8 6 8-6" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  ),
                  text: "hello@luxurytimber.co.uk",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  <span
                    className="text-[#6b5c4c] text-sm"
                    style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <p
                className="text-[#8a7260] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Stay Updated
              </p>
              {submitted ? (
                <p
                  className="text-[#C9A96E] text-sm"
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                >
                  Thank you — we'll be in touch.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 px-4 py-2.5 text-sm text-[#d4b896] placeholder-[#4a3c2e] outline-none transition-all duration-300"
                    style={{
                      background: "rgba(44,31,14,0.6)",
                      border: "1px solid rgba(201,169,110,0.15)",
                      borderRight: "none",
                      borderRadius: "2px 0 0 2px",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                    onFocus={e => {
                      (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(201,169,110,0.4)";
                    }}
                    onBlur={e => {
                      (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(201,169,110,0.15)";
                    }}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-[#1a1108] text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:brightness-110 flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 100%)",
                      fontFamily: "'Jost', sans-serif",
                      border: "none",
                      borderRadius: "0 2px 2px 0",
                    }}
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.15), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#4a3c2e] text-xs"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Luxury Timber Restoration. All rights reserved.
          </p>

          {/* Crafted with love tag */}
          <div className="flex items-center gap-2">
            <div className="h-px w-5 bg-[#C9A96E]/20" />
            <span
              className="text-[#4a3c2e] text-[10px] tracking-widest uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Crafted with care
            </span>
            <div className="h-px w-5 bg-[#C9A96E]/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}