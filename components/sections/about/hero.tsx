import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";

export function AboutHero() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface-alt border-b border-border text-center">
      <Container>
        <FadeUp className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-8 tracking-tight">About Amigosia</h1>
          <p className="text-xl md:text-2xl text-body leading-relaxed mb-12 font-medium">
            Amigosia Private Limited is an innovative software startup established in September 2022, operating from the Kerala Start-up Mission Incubation Centre, Palakkad.
          </p>
          <p className="text-lg text-body leading-relaxed max-w-3xl mx-auto mb-16">
            We design and build impactful digital platforms that help businesses and communities transition seamlessly into the digital economy. As a product-centric company, we collaborate with startups and enterprises globally — acting as a trusted, cost-efficient software partner from concept to scale.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm font-medium text-emerald uppercase tracking-wider">
            <span>Recognized by Start-up India</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Recognized by Kerala Start-up Mission</span>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
