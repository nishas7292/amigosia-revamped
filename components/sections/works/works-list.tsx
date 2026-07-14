import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Store, Building2 } from "lucide-react";

const works = [
  {
    title: "PocketMart",
    description: "A unified platform powering large-scale community commerce — integrating food ordering, local services, elderly care, and e-commerce into a single scalable public-sector ecosystem.",
    icon: Store,
  },
  {
    title: "KBN Holdings",
    description: "Strategic software development partnership, established October 2025.",
    icon: Building2,
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
                <work.icon className="w-8 h-8" />
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
