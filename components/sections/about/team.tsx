"use client";

import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { AnimatedTeamGallery } from "./animated-team-gallery";
import Link from "next/link";
import { motion } from "motion/react";

export function TeamGrid() {
  return (
    <div className="bg-white border-t border-border/60">
      {/* Team - Featured Section Showcase */}
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-16 pt-[120px] pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-[70px] lg:gap-[90px] items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-start text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7f9f1] border border-[#a6e8cd]/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0e7a5f]" />
              <span className="text-[#0e7a5f] text-[11px] sm:text-[13px] font-semibold tracking-wide uppercase">
                WE'RE HIRING
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-[56px] lg:text-[60px] font-heading font-bold text-ink mb-6 leading-[1.05] tracking-tight">
              Our Team
            </h2>
            
            <p className="text-[17px] sm:text-[18px] text-[#52616b] leading-[1.6] max-w-[560px] mb-10">
              We bring together creative minds and technical experts to transform ambitious ideas into high-performance digital products. Every solution is crafted with innovation, precision, and scalability in mind.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#0e7a5f] hover:bg-[#0b634c] text-white rounded-full px-8 h-12 md:h-14 text-base font-semibold shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300">
                <Link href="/careers">Join Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-border text-ink bg-white hover:bg-[#e7f9f1] hover:text-[#0e7a5f] hover:border-[#a6e8cd] rounded-full px-8 h-12 md:h-14 text-base font-semibold transition-all duration-300">
                <Link href="/careers#culture">Life at Our Company</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full z-10 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
             <AnimatedTeamGallery />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
