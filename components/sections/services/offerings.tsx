import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { CheckCircle2 } from "lucide-react";

const offerings = [
  {
    title: "Custom Product Development",
    description: "From MVP to full-scale platform builds for startups and enterprises.",
  },
  {
    title: "Public-Sector & Government Digitization",
    description: "Large-scale, mission-critical platforms for community and government programs.",
  },
  {
    title: "AI-Powered Solutions",
    description: "Chatbots, intelligent agents, and RAG-based systems tailored to your data and workflows.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Scalable, secure deployments on AWS.",
  },
  {
    title: "Global Engineering Partnerships",
    description: "Dedicated engineering teams for international clients (as with Logizen LLC and KBN Holdings).",
  },
];

export function ServiceOfferings() {
  return (
    <Section className="bg-surface-alt border-t border-border">
      <Container>
        <FadeUp className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink mb-6">Service Offerings</h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            End-to-end product engineering, from first sketch to scaled deployment.
          </p>
        </FadeUp>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {offerings.map((offering, i) => (
            <FadeUp key={i} delay={i * 0.1} className="bg-white rounded-2xl p-8 shadow-sm border border-border flex items-start gap-6 hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all">
              <CheckCircle2 className="w-8 h-8 text-emerald shrink-0 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-2">{offering.title}</h3>
                <p className="text-body text-[17px] leading-relaxed">{offering.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
