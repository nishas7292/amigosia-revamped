import { HeroSection } from "@/components/sections/home/hero-section";
import { IntroReveal } from "@/components/sections/home/intro-reveal";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { AIProducts } from "@/components/sections/home/ai-products";
import { ClientsImpact } from "@/components/sections/home/clients-impact";
import { ClosingCTA } from "@/components/sections/home/closing-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroReveal />
      <ServicesPreview />
      <AIProducts />
      <ClientsImpact />
      <ClosingCTA />
    </>
  );
}
