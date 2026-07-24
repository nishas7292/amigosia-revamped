import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";

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
  {
    name: "DigiCoupon",
    relationship: "Providing a secure, QR-based digital coupon platform for high-volume events and local commerce.",
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
              <p className="text-body text-lg leading-relaxed mb-12">
                "{client.relationship}"
              </p>
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
