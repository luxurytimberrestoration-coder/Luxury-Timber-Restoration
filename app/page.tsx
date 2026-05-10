// app/page.tsx
import GallerySection from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navabar";
import ServicesSection from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      {/* <GallerySection /> */}

    </main>
  );
}