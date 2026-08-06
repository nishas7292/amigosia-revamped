import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { ScrollBlurReveal } from "@/components/motion/scroll-blur-reveal";

const services = [
  {
    word: "Design",
    title: "Product Design & User Experience",
    description:
      "Creating intuitive, user-centric web and mobile experiences through research-driven UI/UX design, design systems, rapid prototyping, and interactive Figma workflows.",
  },
  {
    word: "Development",
    title: "Web & Mobile Development",
    description:
      "Developing high-performance web applications, enterprise portals, and mobile apps using React, Angular, React Native, Flutter, Node.js, and modern cloud-native technologies.",
  },
  {
    word: "Cloud & Scale",
    title: "Cloud & Backend Engineering",
    description:
      "Designing scalable backend architectures, secure APIs, microservices, cloud infrastructure, and DevOps pipelines on AWS, Azure, and modern cloud platforms.",
  },
  {
    word: "AI & Automation",
    title: "Artificial Intelligence & Automation",
    description:
      "Building intelligent business solutions using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, workflow automation, predictive analytics, and custom AI applications.",
  },
  {
    word: "Transformation",
    title: "Government Digital Transformation",
    description:
      "Delivering secure, scalable technology platforms for government departments, public-sector organizations, cooperative missions, and community-driven digital initiatives across India.",
  },
];

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <FadeUp className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-6">What We Do</h2>
            <p className="text-lg md:text-[20px] text-body mb-10 leading-relaxed">
              End-to-end digital product engineering—from strategy and design to deployment and long-term support.
            </p>
            <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8">
              <Link href="/services">See Our Expertise &rarr;</Link>
            </Button>
          </FadeUp>

          <div className="lg:w-2/3 flex flex-col w-full">
            {services.map((service, i) => (
              <div key={i} className="py-6 md:py-10 border-b border-border last:border-b-0">
                <span className="block text-sm font-medium text-emerald tracking-widest uppercase mb-4">
                  0{i + 1}
                </span>
                <ScrollBlurReveal
                  word={service.word}
                  subtitle={`${service.title} — ${service.description}`}
                  wordClassName="text-5xl sm:text-6xl md:text-7xl font-heading font-semibold tracking-tight leading-none mb-4"
                  subtitleClassName="text-base md:text-lg text-body max-w-2xl leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
