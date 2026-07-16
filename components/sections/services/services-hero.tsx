import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";

export function ServicesHero() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface-alt border-b border-border text-center">
      <Container>
        <FadeUp className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-8 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-body leading-relaxed max-w-3xl mx-auto font-medium">
            Building Digital Products That Drive Growth.
          </p>
          <p className="text-lg text-body leading-relaxed max-w-3xl mx-auto mt-6">
            We partner with startups and enterprises to design, develop, and scale modern digital products that deliver exceptional user experiences and measurable business impact.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}
