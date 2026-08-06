import Image from "next/image";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { LogoLoop, type LogoItem } from "@/components/reactbits/logo-loop";

type TrustLogoItem = {
  src: string;
  name?: string;
  alt?: string;
  title?: string;
  height?: number;
  width?: number;
  className?: string;
};

const clientLogos: TrustLogoItem[] = [
  {
    name: "Kudumbashree",
    src: "/partner_logos/logo-kudumbashree.png",
    alt: "Kudumbashree",
    height: 40,
    className: "opacity-80 hover:opacity-100",
  },
  {
    name: "Logizen LLC",
    src: "/partner_logos/logo-logizen.png",
    alt: "Logizen LLC",
    height: 22,
    className: "brightness-0 opacity-70 hover:opacity-100",
  },
  {
    name: "KBN Holdings",
    src: "/partner_logos/logo-kbnholding.png",
    alt: "KBN Holdings",
    height: 36,
    className: "brightness-0 opacity-70 hover:opacity-100",
  },
  {
    name: "Kerala Livestock Development Board",
    src: "/partner_logos/logo-kldb.png",
    alt: "Kerala Livestock Development Board",
    height: 38,
    className: "brightness-0 opacity-70 hover:opacity-100",
  },
];

export function TrustStrip() {
  return (
    <Section className="py-12 md:py-16 bg-surface border-b border-border">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
          <FadeUp className="text-center flex flex-col items-center">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">
              Recognized by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/startu india logo (1).png"
                  alt="Start-up India Logo"
                  width={140}
                  height={40}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </div>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/kerala-startup-mission-logo (1).png"
                  alt="Kerala Start-up Mission Logo"
                  width={140}
                  height={44}
                  className="h-9 md:h-11 w-auto object-contain"
                />
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.1} className="w-full">
            <div className="relative h-12 md:h-16">
              <LogoLoop
                logos={clientLogos}
                speed={50}
                direction="left"
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
