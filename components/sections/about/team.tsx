import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { AnimatedTeamGallery } from "./animated-team-gallery";
import Link from "next/link";

export function TeamGrid() {
  return (
    <Section className="relative py-24 md:py-32 overflow-hidden bg-white border-t border-border">
      {/* Decorative floating shapes and gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,var(--mint-soft),transparent_70%)] opacity-80" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,var(--mint-soft),transparent_70%)] opacity-60" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint-soft border border-mint mb-8 text-sm font-medium text-emerald">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
                </span>
                We&apos;re Hiring
              </div>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-ink mb-6 tracking-tight leading-tight">
                Our Team
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                We bring together creative minds and technical experts to transform ambitious ideas into high-performance digital products. Every solution is crafted with innovation, precision, and scalability in mind.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-emerald hover:bg-emerald-dark text-white rounded-xl px-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-base h-14">
                  <Link href="/careers">Join Our Team</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-border text-ink hover:bg-mint-soft hover:text-emerald hover:border-mint rounded-xl px-8 transition-all text-base h-14">
                  <Link href="/careers#culture">Life at Our Company</Link>
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Animated Gallery */}
          <div className="w-full mt-4 lg:mt-0 px-4 sm:px-12 lg:px-4">
            <FadeUp delay={0.4} className="h-full">
               <AnimatedTeamGallery />
            </FadeUp>
          </div>

        </div>
      </Container>
    </Section>
  );
}
