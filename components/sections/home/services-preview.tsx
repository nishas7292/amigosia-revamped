import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
<<<<<<< HEAD
import { TiltCard } from "@/components/reactbits/tilt-card";
import { PenTool, Smartphone, Server, Sparkles, Building2 } from "lucide-react";
=======
import { ScrollBlurReveal } from "@/components/motion/scroll-blur-reveal";
>>>>>>> home-page-edit

const services = [
  {
    word: "Design",
    title: "Product Design & UX",
    description: "Figma-led design systems and user experience for web and mobile.",
  },
  {
    word: "Build",
    title: "Web & Mobile App Development",
    description: "React, Angular, React Native, and Flutter builds tailored to your platform.",
  },
  {
    word: "Scale",
    title: "Backend & Cloud Engineering",
    description: "Scalable architectures on Node.js, Python, .NET, and AWS.",
  },
  {
    word: "Intelligence",
    title: "AI & Intelligent Systems",
    description: "RAG architectures, RE-ACT agents, LLM integrations, and custom chatbots.",
  },
  {
    word: "Impact",
    title: "Government & Public-Sector Digitization",
    description: "Large-scale platforms for community missions and public programs.",
  },
];

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <FadeUp className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-6">What We Do</h2>
            <p className="text-lg md:text-[20px] text-body mb-10">
              End-to-end product engineering, from first sketch to scaled deployment.
            </p>
            <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8">
              <Link href="/services">See Our Expertise &rarr;</Link>
            </Button>
          </FadeUp>
          
<<<<<<< HEAD
          <div className="lg:w-2/3 flex flex-col gap-6 w-full">
            {services.map((service, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <TiltCard className="bg-white border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-mint hover:shadow-[var(--shadow-soft)] transition-all">
                  <div className="w-14 h-14 rounded-full bg-mint-soft flex items-center justify-center text-emerald shrink-0">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-2">{service.title}</h3>
                    <p className="text-body text-[15px] sm:text-base">{service.description}</p>
                  </div>
                </TiltCard>
              </FadeUp>
=======
          <div className="lg:w-2/3 flex flex-col w-full">
            {services.map((service, i) => (
              <div key={i} className="py-16 md:py-28 border-b border-border last:border-b-0">
                <span className="block text-sm font-medium text-emerald tracking-widest uppercase mb-6">
                  0{i + 1}
                </span>
                <ScrollBlurReveal
                  word={service.word}
                  subtitle={`${service.title} — ${service.description}`}
                  wordClassName="text-6xl sm:text-7xl md:text-8xl font-heading font-semibold tracking-tight leading-none mb-6"
                  subtitleClassName="text-lg md:text-2xl text-body max-w-2xl leading-relaxed"
                />
              </div>
>>>>>>> home-page-edit
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
