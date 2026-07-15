import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";
import { ScrollWordReveal } from "@/components/motion/scroll-word-reveal";

export function IntroReveal() {
  return (
    <Section className="py-32 md:py-48">
      <Container>
        <ScrollWordReveal
          text="From government-scale platforms to hyperlocal marketplaces to our own AI-native developer tools — Amigosia designs, builds, and scales digital products that move communities and businesses into the digital economy."
          className="text-3xl md:text-5xl font-heading font-medium leading-[1.3] text-ink max-w-4xl mx-auto text-center"
        />
        <FadeUp delay={0.1} className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8 h-12 shadow-sm hover:shadow-md transition-all text-base">
            <Link href="/ai-products">Explore Our AI Products &rarr;</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald/5 rounded-full px-8 h-12 text-base">
            <Link href="/contact">Talk to Us</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
