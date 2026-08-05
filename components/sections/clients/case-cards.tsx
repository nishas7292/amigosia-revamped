import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import Image, { StaticImageData } from "next/image";
import kudumbashreeLogo from "@/public/partner_logos/logo-kudumbashree.png";
import kldbLogo from "@/public/partner_logos/logo-kldb.png";
import logizenLogo from "@/public/logos/logizen_logo.png";
import kbnholdingsLogo from "@/public/logos/kbn.png";
import digicouponLogo from "@/public/logos/digicoupon.png";

interface ClientCardItem {
  name: string;
  relationship: string;
  logo: StaticImageData;
  className?: string;
}

const clients: ClientCardItem[] = [
  {
    name: "Kudumbashree (Govt. of Kerala)",
    relationship: "Technology partner since 2024, supporting digital expansion of one of India's largest community-led economic missions",
    logo: kudumbashreeLogo,
  },
  {
    name: "Kerala Livestock Development Board",
    relationship: "Digitizing livestock and pet commerce, connecting farmers to structured online marketplaces",
    logo: kldbLogo,
    className: "brightness-0 opacity-80",
  },
  {
    name: "Logizen LLC (USA)",
    relationship: "Engineering partner for next-generation logistics platforms",
    logo: logizenLogo,
  },
  {
    name: "KBN Holdings (Qatar)",
    relationship: "Strategic software development partnership, established October 2025",
    logo: kbnholdingsLogo,
  },
  {
    name: "NRO (National Resource Organisation)",
    relationship: "Providing a secure, QR-based physical coupon platform for high-volume events and local commerce. NRO (National Resource Organisation) is also our client.",
    logo: digicouponLogo,
  },
];

export function CaseCards() {
  return (
    <Section>
      <Container>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clients.map((client, i) => (
            <StaggerItem 
              key={i} 
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-border hover:shadow-[var(--shadow-hover)] transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {client.logo && (
                  <div className="h-20 sm:h-24 mb-8 flex items-center justify-center w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className={`h-16 sm:h-20 max-w-[260px] w-auto object-contain ${client.className || ""}`}
                    />
                  </div>
                )}
                <p className="text-body text-lg leading-relaxed mb-12">
                  "{client.relationship}"
                </p>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-ink border-t border-border pt-8">
                {client.name}
              </h3>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
