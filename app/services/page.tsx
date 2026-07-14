import { ServicesHero } from "@/components/sections/services/hero";
import { ExpertiseStack } from "@/components/sections/services/expertise";
import { ServiceOfferings } from "@/components/sections/services/offerings";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ExpertiseStack />
      <ServiceOfferings />
    </>
  );
}
