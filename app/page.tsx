// app/page.tsx
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navabar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* More sections will be added here */}
    </main>
  );
}