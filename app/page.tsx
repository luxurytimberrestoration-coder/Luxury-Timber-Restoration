import GallerySection from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorks";
import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      {/* <GallerySection /> */}
      <HowItWorksSection />
      <TestimonialsSection />
    </main>
  );
}