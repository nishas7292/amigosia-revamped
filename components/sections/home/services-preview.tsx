"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";

const services = [
  {
    title: "Design",
    category: "Product Design & User Experience",
    description: "Creating intuitive digital experiences through user research, UI/UX design, design systems, prototyping, and usability-focused workflows.",
    tech: "UI/UX · Figma · Design Systems · Prototyping",
  },
  {
    title: "Development",
    category: "Web & Mobile Development",
    description: "Building high-performance web, mobile, and enterprise applications designed for reliability, scalability, and real-world business needs.",
    tech: "React · Angular · React Native · Flutter · Node.js",
  },
  {
    title: "Cloud & Scale",
    category: "Cloud & Backend Engineering",
    description: "Building secure APIs, scalable backend systems, cloud infrastructure, microservices, and reliable DevOps pipelines.",
    tech: "AWS · Azure · APIs · Microservices · DevOps",
  },
  {
    title: "AI & Automation",
    category: "Artificial Intelligence & Automation",
    description: "Building intelligent solutions that automate workflows, enhance decision-making, and turn business data into actionable insights.",
    tech: "LLMs · RAG · AI Agents · Automation · Analytics",
  },
  {
    title: "Transformation",
    category: "Government Digital Transformation",
    description: "Modernizing public-sector services through secure, scalable digital platforms built around real-world organizational needs.",
    tech: "Digital Platforms · Modernization · Public Sector",
  },
];

function ServiceItem({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  return (
    <div 
      ref={ref}
      data-active={isInView}
      className="py-10 md:py-12 border-b border-[#e7f9f1] last:border-0 transition-all duration-500 ease-out opacity-100 lg:opacity-40 lg:scale-95 data-[active=true]:lg:opacity-100 data-[active=true]:lg:scale-[1.02] transform-gpu origin-left"
    >
      <span className="block text-[13px] sm:text-[14px] font-semibold tracking-widest uppercase mb-4 transition-colors duration-500 text-muted data-[active=true]:lg:text-[#0e7a5f]">
        0{index + 1}
      </span>
      
      <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold tracking-tight leading-[1.05] transition-colors duration-500 text-ink data-[active=true]:lg:text-ink lg:text-ink/60">
        {service.title}
      </h3>
      
      {/* Grid technique for smooth height expansion */}
      <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] data-[active=true]:lg:grid-rows-[1fr] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-100 lg:opacity-0 data-[active=true]:lg:opacity-100 mt-4 lg:mt-0 data-[active=true]:lg:mt-4">
        <div className="overflow-hidden">
          <p className="text-[16px] sm:text-[18px] font-medium text-[#0e7a5f] mb-3 pt-1">
            {service.category}
          </p>
          <p className="text-[17px] sm:text-[18px] text-[#52616b] leading-[1.7] max-w-[620px] mb-5">
            {service.description}
          </p>
          <p className="text-[13px] sm:text-[14px] font-medium text-[#0e7a5f] tracking-wide pb-2">
            {service.tech}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <Section className="py-[120px] bg-white relative">
      
      {/* Extremely subtle background radial glow centered in the right column area */}
      <div className="hidden lg:block absolute top-1/2 right-[5%] -translate-y-1/2 w-[45%] h-[70%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(14,122,95,0.03)_0%,rgba(166,232,205,0.01)_50%,transparent_100%)] pointer-events-none -z-10" />

      <Container className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
          
          {/* Left Column - Sticky on Desktop */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-[120px] h-fit shrink-0 pt-4">
            <FadeUp>
              <h2 className="text-4xl sm:text-[48px] lg:text-[56px] font-heading font-bold text-ink leading-[1.05] tracking-tight mb-6">
                What We Do
              </h2>
              <p className="text-[17px] sm:text-[18px] text-[#52616b] leading-[1.6] mb-10 max-w-[420px]">
                End-to-end technology solutions, from product design and development to AI, cloud, and digital transformation.
              </p>
              <Button asChild size="lg" className="bg-[#0e7a5f] hover:bg-[#0b634c] text-white rounded-full px-8 h-12 md:h-14 text-base font-semibold shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300">
                <Link href="/services">See Our Expertise &rarr;</Link>
              </Button>
            </FadeUp>
          </div>

          {/* Right Column - Scrollable List */}
          <div className="w-full lg:w-[60%] flex flex-col relative z-10 lg:pb-[25vh] lg:pt-[5vh]">
            {services.map((service, i) => (
              <ServiceItem key={i} service={service} index={i} />
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
