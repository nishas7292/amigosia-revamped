import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";

export function ClientsHero() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface-alt border-b border-border text-center">
      <Container>
        <FadeUp>
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-6 tracking-tight">Our Clients</h1>
          <p className="text-xl md:text-2xl text-emerald font-medium max-w-2xl mx-auto">
            Trusted by governments, enterprises, and global partners.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}
