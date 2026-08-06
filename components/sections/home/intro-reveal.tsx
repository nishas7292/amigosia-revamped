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

        {/* Recognized By */}
        <FadeUp delay={0.15} className="w-full max-w-5xl mx-auto mb-16">
          <div className="w-full flex flex-col gap-6 sm:flex-row sm:gap-0 sm:bg-emerald sm:text-white sm:rounded-3xl sm:p-10 sm:px-14 sm:py-12 sm:shadow-xl sm:border sm:border-mint/30 sm:items-center sm:justify-around">
            {/* Startup India */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5 bg-emerald text-white rounded-2xl p-8 sm:bg-transparent sm:p-0 sm:shadow-none sm:border-0 shadow-lg border border-mint/25 text-center">
              <div className="h-20 sm:h-28 md:h-36 flex items-center justify-center">
                <Image
                  src="/logos/startu india logo (1).png"
                  alt="Recognized by Start-up India"
                  width={400}
                  height={140}
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wider uppercase text-white/95 leading-snug">
                Recognized by Start-up India
              </span>
            </div>

            {/* Divider on Desktop */}
            <div className="hidden sm:block w-px h-36 bg-white/20 mx-8 md:mx-12" />

            {/* Kerala Startup Mission */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5 bg-emerald text-white rounded-2xl p-8 sm:bg-transparent sm:p-0 sm:shadow-none sm:border-0 shadow-lg border border-mint/25 text-center">
              <div className="h-20 sm:h-28 md:h-36 flex items-center justify-center">
                <Image
                  src="/logos/kerala-startup-mission-logo (1).png"
                  alt="Recognized by Kerala Start-up Mission"
                  width={400}
                  height={140}
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wider uppercase text-white/95 leading-snug">
                Recognized by Kerala Start-up Mission
              </span>
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
