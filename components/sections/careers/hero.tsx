import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";

export function CareersHero() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface-alt border-b border-border text-center">
      <Container>
        <FadeUp className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-8 tracking-tight">
            Build the Future With Us
          </h1>
          <p className="text-xl md:text-2xl text-body leading-relaxed mb-12 font-medium">
            Join a team of passionate developers, designers, and innovators creating software that makes a real impact.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}
