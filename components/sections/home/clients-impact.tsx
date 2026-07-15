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

const clientLogos: LogoItem[] = clients.map(client => ({
  node: (
    <span className="text-xl md:text-2xl font-heading font-semibold text-muted whitespace-nowrap">
      {client.name.replace(/\s*\(.*\)\s*$/, "")}
    </span>
  ),
  title: client.name,
}));

export function ClientsImpact() {
  return (
    <Section className="bg-surface-alt border-y border-border">
      <Container>
        <FadeUp className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-4 max-w-3xl mx-auto leading-tight">
            Trusted By Governments, Enterprises, and Global Partners
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-16 md:mb-20">
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20">
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
