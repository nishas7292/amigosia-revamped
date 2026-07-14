import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { Store, MapPin, Users, UtensilsCrossed, QrCode } from "lucide-react";

const products = [
  {
    title: "PocketMart",
    description: "A unified platform powering large-scale community commerce — integrating food ordering, local services, elderly care, and e-commerce into a single scalable public-sector ecosystem.",
    icon: Store,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "NearByEstate",
    description: "A geolocation-driven real estate marketplace that simplifies local property discovery.",
    icon: MapPin,
    className: "md:col-span-1",
  },
  {
    title: "Near2Me",
    description: "A hyperlocal marketplace connecting producers directly with nearby consumers.",
    icon: Users,
    className: "md:col-span-1",
  },
  {
    title: "Cloud Kitchen Platform",
    description: "An end-to-end digital system to manage ordering, operations, and delivery in one place.",
    icon: UtensilsCrossed,
    className: "md:col-span-1",
  },
  {
    title: "DigiCoupon",
    description: "A secure, QR-based digital coupon platform for high-volume events.",
    icon: QrCode,
    className: "md:col-span-1",
  },
];

export function ProductsPreview() {
  return (
    <Section className="bg-surface-alt">
      <Container>
        <FadeUp className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-4">Our Products</h2>
          <p className="text-lg md:text-[20px] text-body max-w-2xl mx-auto">
            Platforms built to power commerce, community, and connection.
          </p>
        </FadeUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20 auto-rows-fr">
          {products.map((product, i) => (
            <StaggerItem 
              key={i} 
              className={`bg-white border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all flex flex-col hover:-translate-y-1 ${product.className}`}
            >
              <div className="w-12 h-12 rounded-xl bg-mint-soft flex items-center justify-center text-emerald mb-6 shrink-0">
                <product.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-3">{product.title}</h3>
              <p className="text-body text-[15px] sm:text-base">{product.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="text-center">
          <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald hover:text-white rounded-full px-10 border-2">
            <Link href="/products">View All Products &rarr;</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
