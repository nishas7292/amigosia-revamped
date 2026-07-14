import { AboutHero } from "@/components/sections/about/hero";
import { Timeline } from "@/components/sections/about/timeline";
import { TeamGrid } from "@/components/sections/about/team";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <TeamGrid />
    </>
  );
}
