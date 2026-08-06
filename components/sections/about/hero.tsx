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
          
          {/* Recognized By */}
          <div className="w-full max-w-5xl mx-auto mt-16">
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
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

