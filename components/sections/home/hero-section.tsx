import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/motion/text-reveal";
import { FadeUp } from "@/components/motion/fade-up";
import { SplineScene } from "@/components/spline/spline-scene";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Mint radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--mint)_0%,transparent_60%)] opacity-30 -z-10 blur-3xl pointer-events-none" />
      
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col z-10">
          <TextReveal 
            text="Building Scalable Digital Products for Startups, Enterprises, and Global Partners" 
            className="text-4xl md:text-5xl lg:text-[64px] font-heading font-semibold leading-[1.1] tracking-tight text-ink mb-6" 
          />
          <FadeUp delay={0.4}>
            <p className="text-lg md:text-[20px] text-body mb-8 max-w-[540px]">
              From government-scale platforms to hyperlocal marketplaces to our own AI-native developer tools — Amigosia designs, builds, and scales digital products that move communities and businesses into the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8 shadow-sm hover:shadow-md transition-all text-base h-12">
                <Link href="/ai-products">Explore Our AI Products &rarr;</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald/5 rounded-full px-8 h-12 text-base">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.2} className="relative h-[400px] lg:h-[600px] w-full z-0">
          <SplineScene 
            label="SPLINE_HERO (Network Graph)" 
            poster="/spline-poster-hero.png" // Placeholder poster path
            scene="" // Pending Spline URL
            className="bg-transparent"
          />
        </FadeUp>
      </div>
    </section>
  );
}
