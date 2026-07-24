"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { TextReveal } from "@/components/motion/text-reveal";
import { SplineScene } from "@/components/spline/spline-scene";

interface HeroSectionProps {
  /** Optional background video URL (mp4). Falls back to the mint radial glow when omitted — swap in a video by passing this prop from app/page.tsx. */
  backgroundVideo?: string;
}

export function HeroSection({ backgroundVideo }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} className={prefersReducedMotion ? "relative" : "relative h-[160vh]"}>
      <div
        className={
          prefersReducedMotion
            ? "relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
            : "sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
        }
      >
        {backgroundVideo ? (
          <>
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover -z-20">
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/70 -z-10" />
          </>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--mint)_0%,transparent_60%)] opacity-30 -z-10 blur-3xl pointer-events-none" />
        )}

        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacity,
            scale: prefersReducedMotion ? 1 : scale,
            y: prefersReducedMotion ? 0 : y,
          }}
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            className="w-40 h-40 md:w-56 md:h-56 mb-8"
            animate={prefersReducedMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <SplineScene
              label="SPLINE_HERO_LOGO"
              poster="/amigosia-logo.png"
              scene=""
              className="!min-h-0 h-full w-full rounded-full"
            />
          </motion.div>

          <TextReveal
            text="Building Scalable Digital Products for Startups, Enterprises, and Global Partners"
            className="justify-center text-4xl md:text-5xl lg:text-[64px] font-heading font-semibold leading-[1.1] tracking-tight text-ink"
          />
        </motion.div>
      </div>
    </section>
  );
}
