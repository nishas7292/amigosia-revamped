import { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero";
import { Timeline } from "@/components/sections/about/timeline";
import { TeamGrid } from "@/components/sections/about/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Amigosia's journey, team, and engineering vision. Building state-of-the-art platforms for enterprise clients, government missions, and global startups.",
  alternates: {
    canonical: "https://amigosia.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <TeamGrid />
    </>
  );
}
