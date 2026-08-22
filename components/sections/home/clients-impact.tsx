import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { LogoLoop, type LogoItem } from "@/components/reactbits/logo-loop";
import Image from "next/image";
import kudumbashreeLogo from "@/public/partner_logos/logo-kudumbashree.png";
import kldbLogo from "@/public/partner_logos/KLDB  LOGO PNG (1).png";
import logizenLogo from "@/public/partner_logos/logizen_logo.png";
import kbnholdingsLogo from "@/public/partner_logos/kbn.png";
import digicouponLogo from "@/public/logos/digicoupon.png";

const clients = [
  {
    name: "Kudumbashree",
    subName: "(Government of Kerala)",
    role: "Technology Partner since 2024",
    relationship: "Supporting the digital transformation of India's largest women-led community development mission through innovative e-commerce, event management, and digital commerce solutions.",
    logo: kudumbashreeLogo,
  },
  {
    name: "Kerala Livestock Development Board",
    subName: "(Government of Kerala)",
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
    className: "opacity-95 hover:opacity-100 object-contain h-16 sm:h-20 md:h-24 w-auto transition-all",
  },
  {
    name: "Kerala Livestock Development Board",
    src: "/partner_logos/KLDB  LOGO PNG (1).png",
    alt: "Kerala Livestock Development Board",
    height: 64,
    className: "opacity-95 hover:opacity-100 object-contain h-16 sm:h-20 md:h-24 w-auto transition-all",
  },
  {
    name: "Logizen LLC",
    src: "/partner_logos/logizen_logo.png",
    alt: "Logizen LLC",
    height: 52,
    className: "opacity-95 hover:opacity-100 object-contain h-12 sm:h-16 md:h-18 w-auto transition-all",
  },
  {
    name: "KBN Holdings",
    src: "/partner_logos/kbn.png",
    alt: "KBN Holdings",
    height: 56,
    className: "opacity-95 hover:opacity-100 object-contain h-14 sm:h-18 md:h-20 w-auto transition-all",
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
          <div className="relative h-32 sm:h-40 md:h-48 bg-white rounded-3xl flex items-center shadow-sm border border-border overflow-hidden px-6">
            <LogoLoop
              logos={clientLogos}
              speed={45}
              logoHeight={72}
              direction="left"
              gap={96}
              fadeOut
              fadeOutColor="#ffffff"
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
              <div className="border-t border-border pt-6">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-ink">
                  {client.name}
                </h3>
                {client.subName && (
                  <span className="block text-xs sm:text-sm font-semibold text-[#3f4d48] mt-1">
                    {client.subName}
                  </span>
                )}
              </div>
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
