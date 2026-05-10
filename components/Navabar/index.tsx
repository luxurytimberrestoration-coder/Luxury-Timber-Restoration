"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1a1108]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 relative">
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

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#d4b896] hover:text-[#E8C98A] text-sm tracking-widest uppercase transition-colors duration-300 relative group"
                  style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.15em" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A96E] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="#booking" className="hidden md:block">
              <Button
                className="text-[#1a1108] text-xs tracking-widest uppercase font-semibold px-6 py-2 transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.15em",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                }}
              >
                Book a Service
              </Button>
            </a>

            <button
              className="md:hidden text-[#E8C98A] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#1a1108]/98 backdrop-blur-md px-6 py-6 flex flex-col gap-5 border-t border-[#C9A96E]/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#d4b896] hover:text-[#E8C98A] text-sm tracking-widest uppercase transition-colors"
                style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.15em" }}
              >
                {link.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setMenuOpen(false)}>
              <Button
                className="w-full text-[#1a1108] text-xs tracking-widest uppercase font-semibold py-2 mt-2"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)",
                  fontFamily: "'Jost', sans-serif",
                  border: "none",
                }}
              >
                Book a Service
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/YOUR_NUMBER?text=Hello%2C%20I%27d%20like%20to%20book%20a%20service%20with%20Luxury%20Timber%20Restoration"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
        aria-label="Chat on WhatsApp"
      >
        <span
          className="hidden group-hover:block bg-[#1a1108] text-[#E8C98A] text-xs px-3 py-2 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap border border-[#C9A96E]/30"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Chat with us
        </span>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
          style={{ background: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.4)" }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2.333C7.556 2.333 2.333 7.556 2.333 14c0 2.005.528 3.886 1.45 5.516L2.333 25.667l6.317-1.428A11.577 11.577 0 0014 25.667c6.444 0 11.667-5.223 11.667-11.667S20.444 2.333 14 2.333z"
              fill="white"
            />
            <path
              d="M19.833 16.917c-.3-.15-1.772-.874-2.047-.974-.275-.1-.475-.15-.675.15-.2.3-.772.974-.947 1.174-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-.892-.796-1.494-1.779-1.669-2.079-.175-.3-.019-.462.132-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.243-.583-.49-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.115 3.229 5.125 4.529.716.31 1.275.495 1.71.633.719.228 1.374.196 1.891.119.577-.086 1.772-.724 2.022-1.424.25-.7.25-1.3.175-1.424-.075-.125-.275-.2-.575-.35z"
              fill="#25D366"
            />
          </svg>
        </div>
      </a>
    </>
  );
}