"use client";

import { motion } from "motion/react";
import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";

const steps = [
  {
    title: "Discovery",
    description: "Deep dive into your business goals, target audience, and market landscape.",
  },
  {
    title: "Strategy",
    description: "Defining the product roadmap, technology stack, and user journey mapping.",
  },
  {
    title: "Design",
    description: "Creating wireframes, interactive prototypes, and a premium design system.",
  },
  {
    title: "Development",
    description: "Agile engineering using modern frameworks for a scalable, secure product.",
  },
  {
    title: "Testing",
    description: "Rigorous QA, automated testing, and user validation before rollout.",
  },
  {
    title: "Launch",
    description: "Smooth deployment, performance monitoring, and ongoing scaling support.",
  },
];

export function ProcessTimeline() {
  return (
    <Section className="py-24 md:py-32 bg-surface-alt">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ink mb-6">Our Process</h2>
            <p className="text-lg md:text-xl text-body max-w-2xl mx-auto">
              A systematic approach to turning complex problems into elegant, scalable digital products.
            </p>
          </FadeUp>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />
            
            {/* Animated Progress Line */}
            <motion.div
              className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-emerald md:-translate-x-1/2 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <div className="flex flex-col gap-12 md:gap-24 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Text Content */}
                  <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <FadeUp delay={0.2}>
                      <span className="text-emerald font-medium tracking-widest uppercase text-sm mb-2 block">
                        Step 0{index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">
                        {step.title}
                      </h3>
                      <p className="text-body text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </FadeUp>
                  </div>

                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-surface border-[4px] border-emerald rounded-full md:-translate-x-1/2 flex items-center justify-center shadow-sm">
                    <div className="w-4 h-4 bg-emerald rounded-full" />
                  </div>

                  {/* Empty Spacer for Layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
