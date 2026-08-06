import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";

export function IntroReveal() {
  return (
    <Section className="py-20 md:py-32 border-b border-border bg-surface">
      <Container>
        {/* Main Section Header */}
        <FadeUp className="text-center mb-8">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald bg-mint-soft px-4 py-1.5 rounded-full border border-mint/40 inline-block mb-4">
            About Amigosia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-ink tracking-tight max-w-3xl mx-auto leading-tight">
            Building Technology That Matters
          </h2>
        </FadeUp>

        {/* Narrative */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <FadeUp delay={0.05}>
            <p className="text-lg md:text-2xl text-body font-medium leading-relaxed">
              Amigosia Private Limited is an innovation-driven software company established in 2022 and incubated at the Kerala Startup Mission (KSUM). We build scalable digital products, AI-powered solutions, enterprise applications, and public-sector platforms that help organizations transform digitally and grow sustainably.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-base md:text-xl text-body/90 leading-relaxed max-w-3xl mx-auto">
              Trusted by government organizations, startups, and international businesses, we combine engineering excellence, modern technologies, and user-centric design to deliver secure, scalable, and impactful software solutions across India and global markets.
            </p>
          </FadeUp>
        </div>

        {/* Recognized By Badges */}
        <FadeUp delay={0.15} className="flex flex-col items-center justify-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-5">
            Recognized by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 bg-surface-alt border border-border px-8 py-5 rounded-2xl sm:rounded-full shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">🇮🇳</span>
              <Image
                src="/logos/startu india logo.png"
                alt="Startup India Logo"
                width={140}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <span className="font-heading font-semibold text-ink text-sm sm:text-base">Startup India</span>
            </div>
            <div className="h-6 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className="text-xl">🚀</span>
              <Image
                src="/logos/kerala-startup-mission-logo.png"
                alt="Kerala Startup Mission (KSUM)"
                width={140}
                height={44}
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="font-heading font-semibold text-ink text-sm sm:text-base">Kerala Startup Mission (KSUM)</span>
            </div>
          </div>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8 h-12 shadow-sm hover:shadow-md transition-all text-base">
            <Link href="/products">Explore Our Products &rarr;</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald/5 rounded-full px-8 h-12 text-base">
            <Link href="/contact">Talk to Us</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
