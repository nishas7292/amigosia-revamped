import Image from "next/image";
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
          
          <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-12 bg-emerald text-white rounded-3xl p-8 sm:px-12 sm:py-9 shadow-lg border border-mint/25">
            <div className="flex-1 flex flex-col items-center gap-4 text-center">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/95">
                Recognized by Start-up India
              </span>
              <Image
                src="/logos/startu india logo.png"
                alt="Start-up India"
                width={160}
                height={40}
                className="h-9 md:h-10 w-auto object-contain"
              />
            </div>

            <div className="hidden sm:block w-px h-16 bg-white/20" />

            <div className="flex-1 flex flex-col items-center gap-4 text-center">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/95">
                Recognized by Kerala Start-up Mission
              </span>
              <Image
                src="/logos/kerala-startup-mission-logo.png"
                alt="Kerala Start-up Mission"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

