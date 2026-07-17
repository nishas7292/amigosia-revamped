"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";

const services = [
  {
    title: "UI/UX Design",
    description: "Figma-led design systems, user research, and premium interface design.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Web Development",
    description: "High-performance web applications using React, Next.js, and modern tools.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud architectures, CI/CD pipelines, and automated deployments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems, RAG architectures, and custom LLM integrations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Product Strategy",
    description: "End-to-end product roadmapping, MVP scoping, and growth planning.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
  },
];

export function ServiceSlider() {
  return (
    <Section className="py-24 bg-surface relative">
      <Container className="mb-12">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-ink text-center md:text-left">
            Featured Services
          </h2>
        </FadeUp>
      </Container>

      {/* Vertical Stack Container */}
      <Container>
        <div className="flex flex-col gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative w-full max-w-4xl mx-auto h-[260px] md:h-[300px] rounded-[24px] overflow-hidden group cursor-pointer"
              whileHover="hover"
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                initial: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              {/* Background Image */}
              <motion.div 
                className="absolute inset-0"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </motion.div>
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-white/70 font-medium text-base tracking-wider">
                    0{index + 1}
                  </span>
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                    variants={{
                      initial: { rotate: 0, backgroundColor: "rgba(255,255,255,0.1)" },
                      hover: { rotate: -45, backgroundColor: "rgba(255,255,255,0.2)" }
                    }}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                <div className="md:w-3/4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <button className="text-white text-sm font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
