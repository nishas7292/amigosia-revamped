import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";
import Image from "next/image";

export function IntroReveal() {
  return (
    <Section className="py-[110px] md:py-[140px] border-b border-border bg-white relative overflow-hidden z-0">
      
      {/* Very Subtle Emerald Glow on Right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[80%] bg-[radial-gradient(100%_100%_at_100%_50%,rgba(14,122,95,0.03)_0%,rgba(166,232,205,0.01)_50%,transparent_100%)] pointer-events-none -z-10" />

      <Container className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left Column (40%) */}
          <div className="relative w-full lg:w-[35%] xl:w-[30%] flex flex-col items-start text-left shrink-0">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7f9f1] border border-[#a6e8cd]/50 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#0e7a5f]" />
                <span className="text-[#0e7a5f] text-[11px] sm:text-[13px] font-semibold tracking-wide uppercase">
                  ABOUT AMIGOSIA
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h3 className="text-2xl sm:text-[26px] font-semibold text-ink mb-4">
                Who We Are
              </h3>
              <p className="text-[17px] text-[#52616b] font-medium leading-relaxed mb-6 max-w-[280px]">
                Building digital solutions that create meaningful impact.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="relative z-10">
              <p className="text-[14px] sm:text-[15px] text-[#52616b] font-medium leading-relaxed max-w-[280px]">
                Driving digital transformation for India’s largest women-led community development mission through innovative e-commerce and digital solutions
              </p>
            </FadeUp>

            {/* Subtle Amigosia Logo Watermark underneath (replacing 'A' text watermark) */}
            <div className="absolute -bottom-16 -left-8 pointer-events-none select-none opacity-[0.06] z-0 hidden sm:block w-[260px] h-[260px]">
              <Image
                src="/amigosia-logo.png"
                alt="Amigosia Logo Watermark"
                width={260}
                height={260}
                className="object-contain"
              />
            </div>
          </div>

          {/* Visual Accent */}
          <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-[#a6e8cd]/30 to-transparent self-stretch mx-2" />
          
          {/* Mobile Visual Accent */}
          <div className="block lg:hidden w-12 h-[1px] bg-[#a6e8cd]/30 my-4" />

          {/* Right Column (60%) */}
          <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col text-left">
            <FadeUp delay={0.1}>
              <h2 className="text-4xl sm:text-[46px] lg:text-[50px] font-heading font-bold text-ink leading-[1.08] tracking-tight mb-10 text-balance">
                Technology Built for Real-World Impact
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-[17px] sm:text-[18px] text-[#52616b] leading-[1.7] mb-8 max-w-[650px]">
                Amigosia Private Limited is an innovation-led technology company established in 2022 and incubated at the Kerala Startup Mission (KSUM). We build scalable digital products, AI-powered solutions, enterprise applications, and public-sector platforms that help organizations transform digitally and grow sustainably.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-[17px] sm:text-[18px] text-[#52616b] leading-[1.7] max-w-[650px]">
                Trusted by government organizations, startups, and international businesses, we combine engineering excellence, modern technologies, and user-centric design to deliver secure, scalable, and impactful software solutions across India and global markets.
              </p>
            </FadeUp>
          </div>

        </div>
      </Container>
    </Section>
  );
}
