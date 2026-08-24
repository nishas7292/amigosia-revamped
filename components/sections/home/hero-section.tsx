"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-32 flex items-center bg-white overflow-hidden z-0">
      
      {/* Left Edge Emerald Glow */}
      <div className="absolute top-0 left-0 w-[50%] h-full bg-[radial-gradient(100%_100%_at_0%_50%,rgba(14,122,95,0.08)_0%,rgba(166,232,205,0.02)_40%,transparent_100%)] pointer-events-none -z-10" />
      
      {/* Right Edge Emerald Glow */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(100%_100%_at_100%_50%,rgba(14,122,95,0.15)_0%,rgba(166,232,205,0.05)_45%,transparent_100%)] pointer-events-none -z-10" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column - Content (50-55%) */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left shrink-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7f9f1] border border-[#a6e8cd]/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#0e7a5f]" />
              <span className="text-[#0e7a5f] text-[11px] sm:text-[13px] font-semibold tracking-wide uppercase">
                INNOVATION-LED TECHNOLOGY COMPANY
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[700px]"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-heading font-[700] text-ink leading-[1.05] tracking-tight mb-6">
                Building Technology That Matters
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] sm:text-[19px] text-[#52616b] leading-relaxed max-w-[580px] mb-8"
            >
              We build scalable digital products, AI-powered solutions, enterprise applications, and public-sector platforms that help organizations transform digitally and grow sustainably.
            </motion.p>

            {/* Trust & Credibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-1.5 mb-12"
            >
              <p className="text-[11px] sm:text-xs font-semibold text-ink/70 uppercase tracking-widest">
                Trusted across sectors
              </p>
              <p className="text-[13px] sm:text-sm text-[#52616b] font-medium mb-1">
                Government <span className="text-[#a6e8cd] mx-1.5">•</span> Startups <span className="text-[#a6e8cd] mx-1.5">•</span> Global Partnership
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-[#52616b]/80 font-medium">
                <span>Established 2022</span>
                <span className="w-1 h-1 rounded-full bg-[#a6e8cd]" />
                <span>Startup India / Kerala Startup Mission Incubated</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button
                asChild
                className="w-full sm:w-auto bg-[#0e7a5f] hover:bg-[#0b634c] text-white rounded-full px-8 h-12 md:h-14 text-base font-semibold shadow-[0_4px_14px_0_rgba(14,122,95,0.25)] hover:shadow-[0_6px_20px_rgba(14,122,95,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link href="/services">Explore Solutions →</Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto bg-white border-border/80 text-ink hover:bg-surface-alt rounded-full px-8 h-12 md:h-14 text-base font-medium shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Visuals (45-50%) */}
          <div className="w-full lg:w-[45%] relative flex items-center justify-center min-h-[350px] lg:min-h-[500px] lg:translate-x-6 xl:translate-x-10">
            {/* Subtle Concentric Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] -z-10 pointer-events-none opacity-[0.35]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] lg:w-[440px] lg:h-[440px] rounded-full border border-[#0e7a5f]/40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px] sm:w-[450px] sm:h-[450px] lg:w-[520px] lg:h-[520px] rounded-full border border-[#0e7a5f]/25" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] sm:w-[520px] sm:h-[520px] lg:w-[610px] lg:h-[610px] rounded-full border border-[#0e7a5f]/15" />
            </div>

            {/* Circular Logo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative flex items-center justify-center w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] lg:w-[320px] lg:h-[320px] bg-white rounded-full overflow-hidden border border-[#e7f9f1] shadow-[0_0_60px_rgba(14,122,95,0.12)] z-10"
            >
              <div className="relative w-[85%] h-[85%]">
                <Image
                  src="/amigosia-logo.png"
                  alt="Amigosia Main Logo"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
