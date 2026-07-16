import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { LogoLoop, type LogoItem } from "@/components/reactbits/logo-loop";

const partners = [
  "Kudumbashree",
  "Kerala Livestock Development Board",
  "Logizen LLC",
  "KBN Holdings"
];

const clientLogos: LogoItem[] = partners.map(partner => ({
  node: (
    <span className="text-xl md:text-2xl font-heading font-semibold text-muted hover:text-emerald transition-colors whitespace-nowrap px-4 cursor-pointer">
      {partner}
    </span>
  ),
  title: partner,
}));

export function TrustStrip() {
  return (
    <Section className="py-12 md:py-16 bg-surface border-b border-border">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
          <FadeUp className="text-center">
            <p className="text-sm font-medium tracking-wider text-muted uppercase">
              Recognized by Start-up India &middot; Kerala Start-up Mission
            </p>
          </FadeUp>
          
          <FadeUp delay={0.1} className="w-full">
            <div className="relative h-12 md:h-16">
              <LogoLoop
                logos={clientLogos}
                speed={50}
                direction="left"
                logoHeight={40}
                gap={64}
                fadeOut
                fadeOutColor="#ffffff"
                pauseOnHover
                ariaLabel="Trusted clients and partners"
              />
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
