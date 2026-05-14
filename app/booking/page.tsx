"use client";

import { useState, useRef, useEffect } from "react";
import { BookingInfo } from "./components/BookingInfo";
import { BookingForm } from "./components/BookingForm";

export type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  property: string;
  rooms: string;
  timeline: string;
};

export const selectFields = [
  {
    id: "service",
    placeholder: "Service Required",
    options: [
      "Floor Sanding & Polishing",
      "Furniture Restoration",
      "Staircase Restoration",
      "Wood Sealing & Finishing",
      "Parquet Floor Repair",
      "Hardwood Installation",
      "Other (specify in message)",
    ],
  },
  {
    id: "property",
    placeholder: "Type of Property",
    options: [
      "Flat / Apartment",
      "Terraced House",
      "Semi-Detached House",
      "Detached House",
      "Commercial (specify in message)",
    ],
  },
  {
    id: "rooms",
    placeholder: "Number of Rooms",
    options: ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms", "5+ Rooms", "Whole Property"],
  },
  {
    id: "timeline",
    placeholder: "Preferred Timeline",
    options: [
      "As soon as possible",
      "Within 2 weeks",
      "Within a month",
      "I'm flexible",
    ],
  },
];

export default function BookingPage() {
  function useInView(threshold = 0.1) {
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

  const [submitted, setSubmitted] = useState(false);
  const { ref: sectionRef, inView } = useInView(0.05);
const [form, setForm] =
  useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    property: "",
    rooms: "",
    timeline: "",
  });

  // const set = (key: string) => (val: string) => setForm(f => ({ ...f, [key]: val }));
  const set =
    (key: keyof FormState) =>
      (value: string) =>
        setForm((prev) => ({
          ...prev,
          [key]: value,
        }));

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "/api",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to send enquiry"
      );
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
      property: "",
      rooms: "",
      timeline: "",
    });
  } catch (error) {
    console.error(error);
    alert(
      "Something went wrong. Please try again."
    );
  }
};

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0800 0%, #1a1108 50%, #0d0800 100%)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 40px,
            rgba(201,169,110,0.3) 40px, rgba(201,169,110,0.3) 41px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 60px,
            rgba(201,169,110,0.15) 60px, rgba(201,169,110,0.15) 61px
          )`,
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%)" }}
      />

      {/* Right gold accent */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

          {/* Left: info panel */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateX(0)"
                : "translateX(-28px)",
              transition:
                "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <BookingInfo />
          </div>


          {/* Right: Form */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <BookingForm
              submitted={submitted}
              setSubmitted={setSubmitted}
              form={form}
              set={set}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}