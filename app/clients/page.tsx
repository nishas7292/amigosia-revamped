import { Metadata } from "next";
import { ClientsHero } from "@/components/sections/clients/hero";
import { CaseCards } from "@/components/sections/clients/case-cards";

export const metadata: Metadata = {
  title: "Clients & Case Studies",
  description:
    "Explore case studies and partnerships with Kudumbashree Mission, KLDB, Logizen LLC, and KBN Holdings.",
  alternates: {
    canonical: "https://amigosia.com/clients",
  },
};

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <CaseCards />
    </>
  );
}
