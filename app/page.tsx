import { HeroSection } from "@/components/Hero"; // Componente Hero
import { ServicesSection } from "@/components/Services" // Componente Servicios
import { TestimonialsSection } from "@/components/Testimonials"; // Componente Opiniones
import { PricingSection } from "@/components/Pricing"; // Componente Precios
import { CorporateSection } from "@/components/Corporate"; // Componente Eventos corporativos
import { GallerySection } from "@/components/Gallery"; // Componente Galería
import { FAQSection } from "@/components/FAQ"; // Componente FAQ
import { CTASection } from "@/components/CTA"; // Componente CTA

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-blush">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <CorporateSection />
      <GallerySection />
      <FAQSection />
      <CTASection />
    </main>
  );
}