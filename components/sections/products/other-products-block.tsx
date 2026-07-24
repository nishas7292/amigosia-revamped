import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { MapPin, Users, UtensilsCrossed, QrCode, Briefcase } from "lucide-react";

const otherProducts = [
  {
    title: "NearByEstate",
    description: "A geolocation-driven real estate marketplace that simplifies local property discovery.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    icon: MapPin,
  },
  {
    title: "Near2Me",
    description: "A hyperlocal marketplace connecting producers directly with nearby consumers.",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80",
    icon: Users,
  },
  {
    title: "Cloud Kitchen Platform",
    description: "An end-to-end digital system to manage ordering, operations, and delivery in one place.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    icon: UtensilsCrossed,
  },
  {
    title: "DigiCoupon",
    description: "A secure, QR-based digital coupon platform for high-volume events.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    icon: QrCode,
  },
  {
    title: "HR Roll App",
    description: "A comprehensive HR management application to streamline your team operations.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    icon: Briefcase,
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
              className="bg-white border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all flex flex-col hover:-translate-y-1"
            >
              <div className="h-48 w-full bg-surface-alt relative overflow-hidden group">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 relative">
                <div className="w-12 h-12 rounded-xl bg-mint-soft flex items-center justify-center text-emerald mb-6 shrink-0 absolute -top-6 left-6 border-4 border-white">
                  <product.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-ink mb-3 mt-4">{product.title}</h3>
                <p className="text-body text-[15px] sm:text-base">{product.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
