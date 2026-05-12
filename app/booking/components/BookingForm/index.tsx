import { useState } from "react";
import { FormState, selectFields } from "../../page";
import { LuxuryInput, LuxurySelect } from "../BookingFields";

type BookingFormProps = {
  submitted: boolean;
  setSubmitted: any;
  form: FormState;
  set: (key: keyof FormState) => (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export const BookingForm = ({ submitted, setSubmitted, form, set, onSubmit }: BookingFormProps) => {
  const [msgFocused, setMsgFocused] = useState(false);

  return (
    <>
      {submitted ? (
        <div
          className="p-10 md:p-14 rounded-sm flex flex-col items-center justify-center text-center min-h-[500px]"
          style={{
            background: "linear-gradient(145deg, rgba(44,31,14,0.6), rgba(26,17,8,0.9))",
            border: "1px solid rgba(201,169,110,0.15)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(201,169,110,0.15), rgba(201,169,110,0.05))",
              border: "1px solid rgba(201,169,110,0.3)",
            }}
          >
            <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
              <path d="M6 16l7 7L26 9" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3
            className="text-white mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 300 }}
          >
            We've got your request.
          </h3>
          <p
            className="text-[#8a7260] max-w-xs leading-relaxed"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.9rem" }}
          >
            Our team will review your details and be in touch within 24 hours with your personalised quote.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-[#C9A96E] text-xs tracking-widest uppercase hover:text-[#E8C98A] transition-colors"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Submit another enquiry →
          </button>
        </div>
      ) : (
        <div
          className="p-8 md:p-10 rounded-sm relative"
          style={{
            background: "linear-gradient(145deg, rgba(44,31,14,0.6), rgba(26,17,8,0.9))",
            border: "1px solid rgba(201,169,110,0.12)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,169,110,0.08)",
          }}
        >
          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
            style={{
              background: "linear-gradient(225deg, rgba(201,169,110,0.08) 0%, transparent 60%)",
              borderTop: "1px solid rgba(201,169,110,0.2)",
              borderRight: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "0 2px 0 0",
            }}
          />

          <h3
            className="text-white mb-1"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 300 }}
          >
            Request a Free Quote
          </h3>
          <p
            className="text-[#6b5c4c] text-xs mb-8"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            All fields marked * are required
          </p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* Row: Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <LuxuryInput placeholder="Full Name *" value={form.name} onChange={set("name")} required />
              <LuxuryInput type="email" placeholder="Email Address *" value={form.email} onChange={set("email")} required />
            </div>

            {/* Phone */}
            <LuxuryInput type="tel" placeholder="Phone Number *" value={form.phone} onChange={set("phone")} required />

            {/* Row: Service + Property */}
            <div className="grid sm:grid-cols-2 gap-4">
              <LuxurySelect field={selectFields[0]} value={form.service} onChange={set("service")} />
              <LuxurySelect field={selectFields[1]} value={form.property} onChange={set("property")} />
            </div>

            {/* Row: Rooms + Timeline */}
            <div className="grid sm:grid-cols-2 gap-4">
              <LuxurySelect field={selectFields[2]} value={form.rooms} onChange={set("rooms")} />
              <LuxurySelect field={selectFields[3]} value={form.timeline} onChange={set("timeline")} />
            </div>

            {/* Message */}
            <div
              className="relative transition-all duration-300"
              style={{
                border: `1px solid ${msgFocused ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.12)"}`,
                borderRadius: "2px",
                background: "rgba(44,31,14,0.5)",
                boxShadow: msgFocused ? "0 0 0 3px rgba(201,169,110,0.06)" : "none",
              }}
            >
              <textarea
                placeholder="Tell us more about your project — materials, condition, any specific concerns..."
                value={form.message}
                onChange={e => set("message")(e.target.value)}
                onFocus={() => setMsgFocused(true)}
                onBlur={() => setMsgFocused(false)}
                rows={4}
                className="w-full px-5 py-4 bg-transparent outline-none resize-none"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#d4b896",
                }}
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#C9A96E]/20 to-transparent my-1" />

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 text-[#1a1108] text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-[1.01] hover:brightness-110 active:scale-[0.99]"
              style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)",
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.2em",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 8px 32px rgba(201,169,110,0.3)",
              }}
            >
              Send Enquiry
            </button>

            <p
              className="text-center text-[#4a3c2e] text-xs"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              We respect your privacy. No spam, ever.
            </p>
          </form>

          {/* Decorative offset */}
          <div
            className="absolute -bottom-2 -right-2 -z-10 w-full h-full rounded-sm"
            style={{
              border: "1px solid rgba(201,169,110,0.05)",
              background: "rgba(26,17,8,0.3)",
            }}
          />
        </div>
      )}
    </>
  )
}