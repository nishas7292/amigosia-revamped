"use client";

import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { TextReveal } from "@/components/motion/text-reveal";
import { motion } from "motion/react";

export function ServicesHero() {
  return (
    <Section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
          
          {/* Left Side: Large Bold Heading */}
          <div className="lg:w-1/2">
            <span className="block text-sm font-medium text-emerald tracking-widest uppercase mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-ink leading-[1.1] tracking-tight">
              <TextReveal text="Building Digital Products That Drive Growth." />
            </h1>
          </div>
          
          {/* Middle: Floating Icon/Indicator (hidden on mobile, visible on desktop between columns) */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 pt-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full border border-border flex items-center justify-center bg-surface-alt"
            >
              <div className="w-2 h-2 rounded-full bg-emerald" />
            </motion.div>
          </div>

          {/* Right Side: Small Paragraph */}
          <div className="lg:w-1/3 lg:pt-16">
            <FadeUp delay={0.2}>
              <p className="text-xl md:text-2xl text-body leading-relaxed">
                We partner with startups and enterprises to design, develop, and scale modern digital products that deliver exceptional user experiences and measurable business impact.
              </p>
            </FadeUp>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
