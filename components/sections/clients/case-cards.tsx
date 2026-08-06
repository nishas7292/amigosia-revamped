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
  role: string;
  relationship: string;
  logo: StaticImageData;
  className?: string;
  tag?: string;
}

const clients: ClientCardItem[] = [
  {
    name: "Kudumbashree (Government of Kerala)",
    role: "Technology Partner since 2024",
    relationship:
      "Supporting the digital transformation of India's largest women-led community development mission through innovative e-commerce, event management, and digital commerce solutions.",
    logo: kudumbashreeLogo,
    tag: "Government & Community",
  },
  {
    name: "Kerala Livestock Development Board (KLDB)",
    role: "Digital Transformation Partner",
    relationship:
      "Developing and maintaining LAPTOP (Livestock And Pets Trading Online Platform), enabling farmers, breeders, and buyers to connect through a secure and efficient digital marketplace across Kerala.",
    logo: kldbLogo,
    className: "brightness-0 opacity-80",
    tag: "Agritech & Marketplace",
  },
  {
    name: "Logizen LLC (USA)",
    role: "Engineering & Technology Partner",
    relationship:
      "Delivering scalable software engineering solutions and collaborating on next-generation logistics and supply chain technology platforms for global markets.",
    logo: logizenLogo,
    tag: "Global Logistics",
  },
  {
    name: "KBN Holdings (Qatar)",
    role: "Strategic Technology Partner",
    relationship:
      "Partnering since October 2025 to design and develop innovative digital solutions, enterprise applications, and scalable business platforms that support operational excellence and digital growth.",
    logo: kbnholdingsLogo,
    tag: "Enterprise Platforms",
  },
  {
    name: "NRO (National Resource Organisation)",
    role: "Official Technology Partner for DigiCoupon Solutions",
    relationship:
      "Providing the DigiCoupon platform—a secure, QR code-enabled digital and physical coupon management system designed for large-scale events, exhibitions, festivals, and community commerce. Amigosia proudly serves NRO (National Resource Organisation) as its trusted technology partner, delivering reliable, high-volume transaction management and seamless digital coupon operations.",
    logo: digicouponLogo,
    tag: "Fintech & Event Solutions",
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
              className={`bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-border hover:shadow-[var(--shadow-hover)] transition-all flex flex-col justify-between hover:-translate-y-1 ${
                i === clients.length - 1 && clients.length % 2 !== 0 ? "md:col-span-2 md:max-w-3xl md:mx-auto w-full" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  {client.tag && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald bg-mint-soft px-3 py-1 rounded-full border border-mint/40">
                      {client.tag}
                    </span>
                  )}
                </div>

                {client.logo && (
                  <div className="h-20 sm:h-24 mb-8 flex items-center justify-center w-full bg-surface-alt/60 rounded-2xl p-4 border border-border/50">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className={`h-16 sm:h-20 max-w-[260px] w-auto object-contain ${client.className || ""}`}
                    />
                  </div>
                )}

                <div className="mb-4">
                  <span className="inline-block text-sm font-semibold text-emerald mb-2">
                    {client.role}
                  </span>
                  <p className="text-body text-base sm:text-lg leading-relaxed">
                    {client.relationship}
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-ink border-t border-border pt-6 mt-6">
                {client.name}
              </h3>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
