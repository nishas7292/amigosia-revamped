import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Store, MapPin, Users, UtensilsCrossed, QrCode } from "lucide-react";

const products = [
  {
    title: "PocketMart",
    description: "A unified platform powering large-scale community commerce — integrating food ordering, local services, elderly care, and e-commerce into a single scalable public-sector ecosystem.",
    icon: Store,
  },
  {
    title: "NearByEstate",
    description: "A geolocation-driven real estate marketplace that simplifies local property discovery through precision mapping and neighborhood connectivity.",
    icon: MapPin,
  },
  {
    title: "Near2Me",
    description: "A hyperlocal marketplace connecting producers directly with nearby consumers — activating neighborhood economies and enabling community commerce at scale.",
    icon: Users,
  },
  {
    title: "Cloud Kitchen Platform",
    description: "An end-to-end digital system that lets modern food businesses manage ordering, operations, and delivery within one scalable infrastructure.",
    icon: UtensilsCrossed,
  },
  {
    title: "DigiCoupon",
    description: "A secure, QR-code-based coupon platform that replaces physical vouchers with real-time digital transactions — built for high-volume event environments.",
    icon: QrCode,
  },
];

export function ProductList() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <FadeUp key={i} delay={i * 0.05} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-border flex flex-col sm:flex-row gap-6 md:gap-8 items-start hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-mint-soft flex items-center justify-center text-emerald shrink-0">
                <product.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-3">{product.title}</h2>
                <p className="text-lg text-body leading-relaxed">{product.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
