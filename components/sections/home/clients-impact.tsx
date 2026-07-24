import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { LogoLoop, type LogoItem } from "@/components/reactbits/logo-loop";

const clients = [
  {
    name: "Kudumbashree (Govt. of Kerala)",
    relationship: "Technology partner since 2024, supporting digital expansion of one of India's largest community-led economic missions",
  },
  {
    name: "Kerala Livestock Development Board",
    relationship: "Digitizing livestock and pet commerce, connecting farmers to structured online marketplaces",
  },
  {
    name: "Logizen LLC (USA)",
    relationship: "Engineering partner for next-generation logistics platforms",
  },
  {
    name: "KBN Holdings (Qatar)",
    relationship: "Strategic software development partnership, established October 2025",
  },
];

const clientLogos: LogoItem[] = [
  {
    src: "/partner_logos/logo-kudumbashree.png",
    alt: "Kudumbashree",
    title: "Kudumbashree",
    height: 44,
  },
  {
    src: "/partner_logos/logo-kldb.png",
    alt: "Kerala Livestock Development Board",
    title: "Kerala Livestock Development Board",
    height: 40,
  },
  {
    src: "/partner_logos/logo-logizen.png",
    alt: "Logizen LLC",
    title: "Logizen LLC",
    height: 44,
  },
  {
    src: "/partner_logos/logo-kbnholding.png",
    alt: "KBN Holdings",
    title: "KBN Holdings",
    height: 44,
  },
];

export function ClientsImpact() {
  return (
    <Section className="bg-surface-alt border-y border-border">
      <Container>
        <FadeUp className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-4 max-w-3xl mx-auto leading-tight">
            Trusted By Governments, Enterprises, and Global Partners
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-10 md:mb-20">
          <div className="relative h-16 md:h-20">
            <LogoLoop
              logos={clientLogos}
              speed={60}
              direction="left"
              logoHeight={32}
              gap={64}
              fadeOut
              fadeOutColor="#f6faf8"
              scaleOnHover
              ariaLabel="Clients we work with"
            />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-20">
          {clients.map((client, i) => (
            <StaggerItem 
              key={i} 
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-[var(--shadow-hover)] transition-all flex flex-col justify-between"
            >
              <p className="text-body text-[17px] mb-8 leading-relaxed">
                "{client.relationship}"
              </p>
              <h3 className="text-xl font-heading font-semibold text-ink border-t border-border pt-6">
                {client.name}
              </h3>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="text-center">
          <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald hover:text-white rounded-full px-10 border-2">
            <Link href="/clients">Read Case Studies &rarr;</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
