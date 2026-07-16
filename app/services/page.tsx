import { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/services-hero";
import { ServiceSlider } from "@/components/sections/services/service-slider";
import { WhyChooseUs } from "@/components/sections/services/why-choose-us";
import { ServicesCTA } from "@/components/sections/services/services-cta";

export const metadata: Metadata = {
  title: "Services | Amigosia",
  description: "End-to-end product engineering, from first sketch to scaled deployment. We partner with startups and enterprises to design, develop, and scale modern digital products.",
};

export default function ServicesPage() {
  return (
    <main className="bg-surface">
      <ServicesHero />
      <ServiceSlider />
      <WhyChooseUs />
      <ServicesCTA />
    </main>
  );
}
