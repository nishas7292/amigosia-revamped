import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Store, Building2, LucideIcon } from "lucide-react";
import kbnholdingsIcon from "@/public/logos/kbn.png";
import Image, { StaticImageData } from "next/image";
import PocketMartIcon from "@/public/logos/pocket mart.webp";
import kldbIcon from "@/public/logos/live stock .png";

type WorkItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: StaticImageData;
};

const works: WorkItem[] = [
  {
    title: "PocketMart",
    description: "A unified platform powering large-scale community commerce — integrating food ordering, local services, elderly care, and e-commerce into a single scalable public-sector ecosystem.",
    icon: Store,
    image:PocketMartIcon
  },
  {
    title: "Kerala Livestock Development Board",
    description: "Digitizing livestock and pet commerce, connecting farmers to structured online marketplaces.",
    icon: Building2,
    image: kldbIcon
  },
  {
    title: "KBN Holdings",
    description: "Strategic software development partnership, established October 2025.",
    icon: Building2,
    image: kbnholdingsIcon
  }
];

export function WorksList() {
  return (
    <Section className="bg-surface-alt">
      <Container>
        <FadeUp className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-ink mb-4">Client Projects</h2>
          <p className="text-lg md:text-xl text-body max-w-2xl mx-auto">
            Platforms built for our partners to power commerce and connection.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {works.map((work, i) => (
            <FadeUp
              key={i}
              delay={0.1 * i}
              className="bg-white border border-border/50 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all flex flex-col hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-mint-soft flex items-center justify-center text-emerald mb-8 shrink-0">
                {work.image ? (
                  <Image src={work.image} alt={work.title} className="w-8 h-8 object-contain" />
                ) : (
                  work.icon && <work.icon className="w-8 h-8" />
                )}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-ink mb-4">{work.title}</h3>
              <p className="text-body text-lg leading-relaxed">{work.description}</p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
