import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";

export function WhoWeAre() {
  return (
    <Section className="bg-mint-soft">
      <Container>
        <FadeUp className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-widest text-emerald uppercase mb-6">Who We Are</h2>
          <p className="text-2xl md:text-[32px] font-heading font-medium text-ink leading-[1.4] mb-8">
            Amigosia Private Limited is a product-centric software company operating out of the Kerala Start-up Mission Incubation Centre, Palakkad. We partner with startups, enterprises, and government missions worldwide to build platforms that scale — combining design, engineering, and AI to turn ideas into real digital economies.
          </p>
          <Button asChild variant="outline" className="border-emerald text-emerald hover:bg-emerald hover:text-white rounded-full px-8 shadow-sm transition-all">
            <Link href="/about">Learn More About Us &rarr;</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
