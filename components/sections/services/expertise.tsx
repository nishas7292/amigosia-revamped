import { Container, Section } from "@/components/layout/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import Link from "next/link";

const stacks = [
  {
    category: "Design & Frontend",
    tags: ["Figma", "Adobe Creative Cloud", "Angular", "React", "React Native", "Flutter", "TypeScript"],
  },
  {
    category: "Backend",
    tags: ["Node.js", "Express.js", "Python", ".NET", "Google OR Tools"],
  },
  {
    category: "Database & Cloud",
    tags: ["MongoDB", "MySQL", "AWS EC2", "AWS EBS"],
  },
  {
    category: "AI Systems",
    tags: ["RAG architectures", "RE-ACT agents", "LLMs", "Custom chatbots"],
    cta: { text: "See this in action → DeepLens, DeployMind", href: "/ai-products" }
  },
];

export function ExpertiseStack() {
  return (
    <Section>
      <Container>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {stacks.map((stack, i) => (
            <StaggerItem key={i} className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm hover:shadow-[var(--shadow-soft)] hover:border-mint transition-all">
              <h3 className="text-2xl font-heading font-semibold text-ink mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-3">
                {stack.tags.map((tag, j) => (
                  <span key={j} className="bg-mint-soft text-emerald px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              {stack.cta && (
                <div className="mt-8 pt-6 border-t border-border">
                  <Link href={stack.cta.href} className="text-emerald hover:text-emerald-dark font-medium transition-colors flex items-center gap-1">
                    {stack.cta.text}
                  </Link>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
