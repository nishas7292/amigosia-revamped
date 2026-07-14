import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { PenTool, Smartphone, Server, Sparkles, Building2 } from "lucide-react";

const services = [
  {
    title: "Product Design & UX",
    description: "Figma-led design systems and user experience for web and mobile.",
    icon: PenTool,
  },
  {
    title: "Web & Mobile App Development",
    description: "React, Angular, React Native, and Flutter builds tailored to your platform.",
    icon: Smartphone,
  },
  {
    title: "Backend & Cloud Engineering",
    description: "Scalable architectures on Node.js, Python, .NET, and AWS.",
    icon: Server,
  },
  {
    title: "AI & Intelligent Systems",
    description: "RAG architectures, RE-ACT agents, LLM integrations, and custom chatbots.",
    icon: Sparkles,
  },
  {
    title: "Government & Public-Sector Digitization",
    description: "Large-scale platforms for community missions and public programs.",
    icon: Building2,
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
          
          <StaggerContainer className="lg:w-2/3 flex flex-col gap-6 w-full">
            {services.map((service, i) => (
              <StaggerItem 
                key={i} 
                className="bg-white border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-mint hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-mint-soft flex items-center justify-center text-emerald shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-2">{service.title}</h3>
                  <p className="text-body text-[15px] sm:text-base">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}
