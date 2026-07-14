import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";

export function ClosingCTA() {
  return (
    <Section className="bg-ink text-surface relative overflow-hidden">
      {/* Mint glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--emerald-dark)_0%,transparent_60%)] opacity-30 -z-0 blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <FadeUp className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-[56px] font-heading font-semibold text-white mb-6">
            Have a Product in Mind?
          </h2>
          <p className="text-xl text-surface-alt/80 mb-10 leading-relaxed">
            Whether you're a startup with an MVP idea or an enterprise scaling a platform, we build it with you — end to end.
          </p>
          <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-10 h-14 text-lg border-2 border-emerald hover:border-emerald-dark">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
