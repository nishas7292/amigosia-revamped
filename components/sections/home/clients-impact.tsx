import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { LogoLoop, type LogoItem } from "@/components/reactbits/logo-loop";
import Image from "next/image";
import kudumbashreeLogo from "@/public/partner_logos/logo-kudumbashree.png";
import kldbLogo from "@/public/logos/KLDB  LOGO PNG (1).png";
import logizenLogo from "@/public/logos/logizen_logo.png";
import kbnholdingsLogo from "@/public/logos/kbn.png";
import digicouponLogo from "@/public/logos/digicoupon.png";

const clients = [
  {
    name: "Kudumbashree Mission (Government of Kerala)",
    role: "Technology Partner since 2024",
    relationship: "Supporting the digital transformation of India's largest women-led community development mission through innovative e-commerce, event management, and digital commerce solutions.",
    logo: kudumbashreeLogo,
  },
  {
    name: "Kerala Livestock Development Board (KLDB)",
    role: "Digital Platform Development",
    relationship: "Developing and maintaining LAPTOP (Livestock And Pets Trading Online Platform), enabling farmers, breeders, and buyers to connect through a secure and efficient digital marketplace across Kerala.",
    logo: kldbLogo,
  },
  {
    name: "National Resource Organisation (NRO)",
    role: "DigiCoupon Technology Partner",
    relationship: "Providing the DigiCoupon platform—a secure, QR code-enabled digital and physical coupon management system designed for large-scale events, exhibitions, festivals, and community commerce.",
    logo: digicouponLogo,
  },
  {
    name: "Logizen LLC (USA)",
    role: "Engineering Partner",
    relationship: "Delivering scalable software engineering solutions and collaborating on next-generation logistics and supply chain technology platforms for global markets.",
    logo: logizenLogo,
  },
  {
    name: "KBN Holdings (Qatar)",
    role: "Strategic Technology Partner",
    relationship: "Partnering since October 2025 to design and develop innovative digital solutions, enterprise applications, and scalable business platforms that support operational excellence and digital growth.",
    logo: kbnholdingsLogo,
  },
];

type ClientLogoItem = {
  src: string;
  name?: string;
  alt?: string;
  title?: string;
  height?: number;
  width?: number;
  className?: string;
};

const clientLogos: ClientLogoItem[] = [
  {
    name: "Kudumbashree Mission",
    src: "/partner_logos/logo-kudumbashree.png",
    alt: "Kudumbashree Mission",
    height: 64,
    className: "brightness-0 invert opacity-85 hover:opacity-100",
  },
  {
    name: "Kerala Livestock Development Board",
    src: "/logos/KLDB  LOGO PNG (1).png",
    alt: "Kerala Livestock Development Board",
    height: 60,
    className: "opacity-85 hover:opacity-100",
  },
  {
    name: "Logizen LLC",
    src: "/partner_logos/logo-logizen.png",
    alt: "Logizen LLC",
    height: 38,
    className: "opacity-85 hover:opacity-100",
  },
  {
    name: "KBN Holdings",
    src: "/partner_logos/logo-kbnholding.png",
    alt: "KBN Holdings",
    height: 56,
    className: "opacity-85 hover:opacity-100",
  },
];

export function ClientsImpact() {
  return (
    <Section className="bg-surface-alt border-y border-border">
      <Container>
        <FadeUp className="text-center mb-10 md:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald bg-mint-soft px-4 py-1.5 rounded-full border border-mint/40 inline-block mb-4">
            Our Partnerships
          </span>
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-4 max-w-3xl mx-auto leading-tight">
            Trusted By
          </h2>
          <p className="text-body text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by governments, enterprises, and global partners to build resilient digital infrastructure.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-10 md:mb-20">
          <div className="relative h-28 md:h-36 bg-ink rounded-3xl flex items-center shadow-soft border border-mint/10 overflow-hidden">
            <LogoLoop
              logos={clientLogos}
              speed={55}
              direction="left"
              gap={72}
              fadeOut
              fadeOutColor="#0b1512"
              scaleOnHover
              ariaLabel="Clients we work with"
            />
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-20">
          {clients.map((client, i) => (
            <StaggerItem 
              key={i} 
              className={`bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-[var(--shadow-hover)] transition-all flex flex-col justify-between hover:-translate-y-1 ${
                i === clients.length - 1 && clients.length % 2 !== 0 ? "md:col-span-2 md:max-w-2xl md:mx-auto w-full" : ""
              }`}
            >
              <div>
                {client.logo && (
                  <div className="h-28 sm:h-36 md:h-40 mb-8 flex items-center justify-center w-full bg-surface-alt/50 rounded-2xl p-4 border border-border/40">
                    <Image src={client.logo} alt={client.name} className="h-20 sm:h-28 md:h-32 max-w-[320px] sm:max-w-[360px] w-auto object-contain transition-transform duration-300 hover:scale-105" />
                  </div>
                )}
                <span className="inline-block text-xs font-semibold text-emerald uppercase tracking-wider mb-2">
                  {client.role}
                </span>
                <p className="text-body text-[16px] mb-8 leading-relaxed">
                  {client.relationship}
                </p>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-ink border-t border-border pt-6">
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
