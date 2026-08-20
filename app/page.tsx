import { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { IntroReveal } from "@/components/sections/home/intro-reveal";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { AIProducts } from "@/components/sections/home/ai-products";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { ClientsImpact } from "@/components/sections/home/clients-impact";
import { ClosingCTA } from "@/components/sections/home/closing-cta";

export const metadata: Metadata = {
  title: "Amigosia | Scalable Digital Products & AI Solutions",
  description:
    "Engineering government-scale platforms, hyperlocal marketplaces, and AI-native developer tools built for speed, stability, and scale.",
  alternates: {
    canonical: "https://amigosia.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroReveal />
      <ServicesPreview />
      <AIProducts />
      <WhyChooseUs />
      <ClientsImpact />
      <ClosingCTA />
    </>
  );
}