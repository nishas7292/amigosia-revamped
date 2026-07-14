"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";

const events = [
  { year: "Sept 2022", title: "Amigosia founded at Kerala Start-up Mission Incubation Centre, Palakkad" },
  { year: "2024", title: "Became technology partner to Kudumbashree" },
  { year: "Oct 2025", title: "Entered international expansion with KBN Holdings (Qatar) partnership" },
  { year: "2026", title: "Ongoing product suite expansion (PocketMart, Near2Me, DigiCoupon, and more)" },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section>
      <Container>
        <FadeUp className="text-center mb-24">
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-4">Our Journey</h2>
        </FadeUp>

        <div ref={containerRef} className="max-w-3xl mx-auto relative pb-10">
          {/* Background line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-mint-soft -translate-x-1/2 rounded-full" />
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 top-0 w-1 bg-emerald -translate-x-1/2 rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-32">
            {events.map((event, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className="absolute left-[39px] md:left-1/2 top-0 md:top-1/2 w-6 h-6 bg-mint border-4 border-white rounded-full shadow-sm -translate-x-1/2 md:-translate-y-1/2 z-10" />
                
                <div className={`pl-24 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right"}`}>
                  <FadeUp delay={0.1}>
                    <div className="text-emerald font-heading font-bold text-3xl md:text-4xl mb-4">{event.year}</div>
                    <div className="text-body text-lg md:text-xl leading-relaxed font-medium">{event.title}</div>
                  </FadeUp>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
