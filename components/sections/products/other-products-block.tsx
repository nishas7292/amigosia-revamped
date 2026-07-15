import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { MapPin, Users, UtensilsCrossed, QrCode } from "lucide-react";

const otherProducts = [
  {
    title: "NearByEstate",
    description: "A geolocation-driven real estate marketplace that simplifies local property discovery.",
    icon: MapPin,
  },
  {
    title: "Near2Me",
    description: "A hyperlocal marketplace connecting producers directly with nearby consumers.",
    icon: Users,
  },
  {
    title: "Cloud Kitchen Platform",
    description: "An end-to-end digital system to manage ordering, operations, and delivery in one place.",
    icon: UtensilsCrossed,
  },
  {
    title: "DigiCoupon",
    description: "A secure, QR-based digital coupon platform for high-volume events.",
    icon: QrCode,
  },
];

export function OtherProductsBlock() {
  return (
    <Section className="bg-surface-alt">
      <Container>
        <FadeUp className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-ink mb-4">More Company Products</h2>
          <p className="text-lg md:text-xl text-body max-w-2xl mx-auto">
            Platforms built to power commerce, community, and connection.
          </p>
        </FadeUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 auto-rows-fr">
          {otherProducts.map((product, i) => (
            <StaggerItem 
              key={i} 
              className="bg-white border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all flex flex-col hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-mint-soft flex items-center justify-center text-emerald mb-6 shrink-0">
                <product.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-3">{product.title}</h3>
              <p className="text-body text-[15px] sm:text-base">{product.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
