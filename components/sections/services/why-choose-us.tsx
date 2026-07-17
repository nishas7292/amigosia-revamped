import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { LayoutGrid, Layers, RefreshCw, LifeBuoy } from "lucide-react";

const features = [
  {
    title: "User-Centered Design",
    description: "Every decision is driven by user research and empathy, ensuring intuitive and delightful experiences.",
    icon: LayoutGrid,
  },
  {
    title: "Scalable Architecture",
    description: "Built on robust cloud foundations to handle millions of users without compromising performance.",
    icon: Layers,
  },
  {
    title: "Agile Development",
    description: "Iterative sprints, continuous delivery, and transparent communication throughout the project lifecycle.",
    icon: RefreshCw,
  },
  {
    title: "Ongoing Support",
    description: "Post-launch monitoring, optimization, and proactive maintenance to keep your product ahead.",
    icon: LifeBuoy,
  },
];

export function WhyChooseUs() {
  return (
    <Section className="py-24 md:py-32 bg-surface">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="lg:w-1/3">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ink mb-6">
                Why Partner With Us
              </h2>
              <p className="text-lg text-body mb-8 leading-relaxed">
                We don't just write code; we build businesses. Our approach combines high-end design with enterprise-grade engineering.
              </p>
            </FadeUp>
          </div>

          <div className="lg:w-2/3 w-full">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem
                    key={i}
                    className="group bg-surface-alt border border-border rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 hover:border-emerald/30 cursor-default"
                  >
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-emerald" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-body text-[17px] leading-relaxed">
                      {feature.description}
                    </p>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

        </div>
      </Container>
    </Section>
  );
}
