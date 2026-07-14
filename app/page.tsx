import { HeroSection } from "@/components/sections/home/hero-section";
import { TrustStrip } from "@/components/sections/home/trust-strip";
import { WhoWeAre } from "@/components/sections/home/who-we-are";
import { AIProducts } from "@/components/sections/home/ai-products";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { ClientsImpact } from "@/components/sections/home/clients-impact";
import { ClosingCTA } from "@/components/sections/home/closing-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WhoWeAre />
      <AIProducts />
      <ServicesPreview />
      <ClientsImpact />
      <ClosingCTA />
    </>
  );
}
