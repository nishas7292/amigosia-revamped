import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { LogoLoop, type LogoItem } from "@/components/reactbits/logo-loop";

const clientLogos: LogoItem[] = [
  {
    src: "/partner_logos/logo-kudumbashree.png",
    alt: "Kudumbashree",
    title: "Kudumbashree",
    height: 44,
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
  {
    src: "/partner_logos/logo-kldb.png",
    alt: "Kerala Livestock Development Board",
    title: "Kerala Livestock Development Board",
    height: 40,
  },
];

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
