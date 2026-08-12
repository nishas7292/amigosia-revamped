import { FadeUp } from "@/components/motion/fade-up";
import { Container } from "@/components/layout/container";

export function AboutHero() {
  return (
    <div className="relative w-full min-h-[650px] md:min-h-[700px] flex items-center justify-center bg-white overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Subtle emerald radial gradient behind the central hero content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(14,122,95,0.06)_0%,transparent_60%)] pointer-events-none" />

      <Container className="relative z-10 max-w-[1280px] w-full px-6 flex flex-col items-center text-center">
        
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7f9f1] border border-[#a6e8cd]/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0e7a5f]" />
            <span className="text-[#0e7a5f] text-[11px] sm:text-[13px] font-semibold tracking-wide uppercase">
              ABOUT AMIGOSIA
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="w-full max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-[64px] lg:text-[72px] font-heading font-bold text-ink leading-[1.05] tracking-tight mb-8">
            Building Technology<br className="hidden sm:block" /> That Creates Impact.
          </h1>
        </FadeUp>

        <FadeUp delay={0.3} className="w-full max-w-3xl mx-auto">
          <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#52616b] leading-[1.6] mb-16">
            We design and build scalable digital platforms that help businesses, governments, and communities move confidently into the digital future.
          </p>
        </FadeUp>

        {/* Company Highlights */}
        <FadeUp delay={0.4} className="w-full max-w-[800px] mx-auto mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 pt-10 border-t border-[#a6e8cd]/40">
            
            <div className="flex flex-col items-center flex-1">
              <span className="text-[#0e7a5f] text-[11px] font-bold tracking-[0.25em] mb-2 opacity-90 uppercase">01</span>
              <span className="text-ink font-bold text-[19px] md:text-[21px] mb-1">Established</span>
              <span className="text-[#52616b] text-[15px] md:text-[16px] font-medium">2022</span>
            </div>

            <div className="hidden md:block w-px h-[60px] bg-[#a6e8cd]/40" />

            <div className="flex flex-col items-center flex-1">
              <span className="text-[#0e7a5f] text-[11px] font-bold tracking-[0.25em] mb-2 opacity-90 uppercase">02</span>
              <span className="text-ink font-bold text-[19px] md:text-[21px] mb-1">KSUM</span>
              <span className="text-[#52616b] text-[15px] md:text-[16px] font-medium">Incubated</span>
            </div>

            <div className="hidden md:block w-px h-[60px] bg-[#a6e8cd]/40" />

            <div className="flex flex-col items-center flex-1">
              <span className="text-[#0e7a5f] text-[11px] font-bold tracking-[0.25em] mb-2 opacity-90 uppercase">03</span>
              <span className="text-ink font-bold text-[19px] md:text-[21px] mb-1">Global</span>
              <span className="text-[#52616b] text-[15px] md:text-[16px] font-medium">Technology Partner</span>
            </div>

          </div>
        </FadeUp>

      </Container>
    </div>
  );
}
