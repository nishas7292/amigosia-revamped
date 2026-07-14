import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";

export function TeamGrid() {
  return (
    <Section className="bg-surface-alt border-t border-border">
      <Container>
        <FadeUp className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-6">Our Team</h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            A multidisciplinary team of designers, engineers, and product thinkers delivering end-to-end solutions — from the first wireframe to production-grade infrastructure.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <StaggerItem key={i} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-mint-soft mb-6 border-4 border-white shadow-sm flex items-center justify-center text-emerald">
                Photo
              </div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-1">Team Member {i}</h3>
              <p className="text-body text-sm">Role Placeholder</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
