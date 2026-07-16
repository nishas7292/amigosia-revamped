"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";

const services = [
  {
    title: "UI/UX Design",
    description: "Figma-led design systems, user research, and premium interface design.",
    color: "from-emerald-900 to-ink",
  },
  {
    title: "Web Development",
    description: "High-performance web applications using React, Next.js, and modern tools.",
    color: "from-blue-900 to-ink",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences for iOS and Android.",
    color: "from-purple-900 to-ink",
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud architectures, CI/CD pipelines, and automated deployments.",
    color: "from-amber-900 to-ink",
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems, RAG architectures, and custom LLM integrations.",
    color: "from-rose-900 to-ink",
  },
  {
    title: "Product Strategy",
    description: "End-to-end product roadmapping, MVP scoping, and growth planning.",
    color: "from-teal-900 to-ink",
  },
];

export function ServiceSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Section className="py-24 bg-surface overflow-hidden relative">
      <Container className="mb-12 flex justify-between items-end">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink">Featured Services</h2>
        </FadeUp>
        
        <FadeUp delay={0.1} className="hidden md:flex gap-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 text-ink" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 text-ink" />
          </button>
        </FadeUp>
      </Container>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-6 md:px-8 lg:px-[calc((100vw-1200px)/2+2rem)] gap-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] h-[500px] md:h-[600px] rounded-[24px] snap-center overflow-hidden group cursor-pointer"
            whileHover="hover"
            initial="initial"
          >
            {/* Background Placeholder with Gradient */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-white/70 font-medium text-lg tracking-wider">
                  0{index + 1}
                </span>
                <motion.div 
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                  variants={{
                    initial: { rotate: 0, backgroundColor: "rgba(255,255,255,0.1)" },
                    hover: { rotate: -45, backgroundColor: "rgba(255,255,255,0.2)" }
                  }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 text-lg max-w-md mb-8 line-clamp-2">
                  {service.description}
                </p>
                <button className="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Service <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
