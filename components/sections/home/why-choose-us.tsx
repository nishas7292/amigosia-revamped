import { Container, Section } from "@/components/layout/container";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { CheckCircle2, ShieldCheck, Cpu, Layers, Zap, Lock, RefreshCw, Award } from "lucide-react";

const reasons = [
  {
    title: "Government-Scale Experience",
    description: "Proven experience delivering government-scale digital platforms across India.",
    icon: Award,
  },
  {
    title: "Trusted Public-Sector Partner",
    description: "Trusted technology partner for public sector organizations and missions.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Spectrum Deep Tech",
    description: "Expertise in AI, Cloud, Mobile, and Enterprise Software.",
    icon: Cpu,
  },
  {
    title: "Single-Roof Engineering",
    description: "End-to-end product development under one roof—from discovery to launch.",
    icon: Layers,
  },
  {
    title: "Agility + Enterprise Quality",
    description: "Startup agility combined with rigorous enterprise-quality engineering standards.",
    icon: Zap,
  },
  {
    title: "Future-Ready & Secure",
    description: "Secure, scalable, and future-ready technology architectures.",
    icon: Lock,
  },
  {
    title: "Long-Term Evolution",
    description: "Strong focus on long-term product evolution, maintenance, and support.",
    icon: RefreshCw,
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-surface border-t border-border">
      <Container>
        <FadeUp className="text-center mb-16 md:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald bg-mint-soft px-4 py-1.5 rounded-full border border-mint/40 inline-block mb-4">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-[44px] font-heading font-semibold text-ink max-w-2xl mx-auto leading-tight">
            Why Choose Amigosia?
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <StaggerItem
                key={i}
                className={`bg-surface-alt/70 border border-border/80 rounded-3xl p-8 hover:bg-white hover:border-mint hover:shadow-[var(--shadow-hover)] transition-all flex flex-col justify-between hover:-translate-y-1 ${
                  i === reasons.length - 1 ? "md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto w-full" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-mint-soft flex items-center justify-center text-emerald mb-6 border border-mint/40">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-3">{reason.title}</h3>
                  <p className="text-body text-[15px] sm:text-base leading-relaxed">{reason.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border/60 text-emerald text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald" /> Verified Capability
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
