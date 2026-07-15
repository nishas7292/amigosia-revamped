import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { ScrollBlurReveal } from "@/components/motion/scroll-blur-reveal";

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
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
