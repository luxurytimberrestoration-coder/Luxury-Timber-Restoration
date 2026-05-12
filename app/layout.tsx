// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navabar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Luxury Timber Restoration | Premium Wood Floor & Furniture Restoration",
  description:
    "Professional wood floor sanding, polishing, and furniture restoration. Bringing the natural beauty of timber back to life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(playfair.variable, dmSans.variable)}>
      <body className="bg-[#1A1209] font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}