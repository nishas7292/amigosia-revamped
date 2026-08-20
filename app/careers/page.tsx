import { Metadata } from "next";
import { CareersHero } from "@/components/sections/careers/hero";

export const metadata: Metadata = {
  title: "Careers & Open Positions",
  description:
    "Join the engineering team at Amigosia. Build impactful digital products, AI tools, and scalable platforms alongside world-class developers.",
  alternates: {
    canonical: "https://amigosia.com/careers",
  },
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
    </main>
  );
}