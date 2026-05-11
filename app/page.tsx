// app/page.tsx
import GallerySection from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorks";
import Navbar from "@/components/Navabar";
import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      {/* <GallerySection /> */}
      <HowItWorksSection />
      <TestimonialsSection />

    </main>
  );
}