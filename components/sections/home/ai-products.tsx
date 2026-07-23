import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { SplineScene } from "@/components/spline/spline-scene";
import { CheckCircle2, Store, MapPin, Users, UtensilsCrossed, QrCode } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import Image from "next/image";

const otherAiProducts = [
  {
    title: "NearByEstate",
    description: "A geolocation-driven real estate marketplace that simplifies local property discovery.",
    icon: MapPin,
  },
  {
    title: "Near2Me",
    description: "A hyperlocal marketplace connecting producers directly with nearby consumers.",
    icon: Users,
  },
  {
    title: "Cloud Kitchen Platform",
    description: "An end-to-end digital system to manage ordering, operations, and delivery in one place.",
    icon: UtensilsCrossed,
  },
  {
    title: "DigiCoupon",
    description: "A secure, QR-based digital coupon platform for high-volume events.",
    icon: QrCode,
  },
];

export function AIProducts() {
  return (
    <Section className="bg-surface-alt">
      <Container>
        <FadeUp className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-[44px] font-heading font-semibold text-ink mb-6">Our Products</h2>
          <p className="text-lg md:text-[20px] text-body max-w-2xl mx-auto">
            Engineering-first AI platforms, built in-house — not integrations, our own IP.
          </p>
        </FadeUp>

        <div className="flex flex-col gap-24 md:gap-32 mb-16 md:mb-24">
          {/* DeepLens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp delay={0.1} className="order-2 lg:order-1">
              <h3 className="text-3xl md:text-[32px] font-heading font-semibold text-ink mb-2">DeepLens</h3>
              <p className="text-emerald text-lg font-medium mb-6">AI-Powered Change Impact Analysis</p>
              <p className="text-body text-lg mb-8">
                Know what breaks before you commit. DeepLens builds a Neo4j knowledge graph of your entire codebase from Python AST parsing, then uses an LLM to assess the real risk of any code change — before it reaches production. Stateful Git tracking means no uncommitted change or skipped commit is ever missed.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Graph-first analysis: Neo4j + AST parser",
                  "AI risk assessment: Groq, Gemini, OpenAI-powered",
                  "Seamless Git/CI-CD workflow integration",
                  "Privacy-first roadmap: on-premise / local LLM support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald shrink-0 mt-0.5" />
                    <span className="text-body text-[17px]">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8">
                <Link href="/products">Explore DeepLens &rarr;</Link>
              </Button>
            </FadeUp>
            <FadeUp delay={0.2} className="relative h-[400px] lg:h-[500px] w-full order-1 lg:order-2 group rounded-3xl overflow-hidden border border-mint/50 shadow-soft hover:shadow-hover transition-shadow duration-500">
              <Image
                src="/products/deeplens-ai-powered-change-impact-analysis--know-w.jpg"
                alt="DeepLens Analysis"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald/30 mix-blend-color transition-opacity duration-500 group-hover:opacity-0" />
            </FadeUp>
          </div>

          {/* DeployMind */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp delay={0.1} className="relative h-[400px] lg:h-[500px] w-full group rounded-3xl overflow-hidden border border-mint/50 shadow-soft hover:shadow-hover transition-shadow duration-500">
              <Image 
                src="/products/deploymind-image.jpg" 
                alt="DeployMind" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald/30 mix-blend-color transition-opacity duration-500 group-hover:opacity-0" />
            </FadeUp>
            <FadeUp delay={0.2}>
              <h3 className="text-3xl md:text-[32px] font-heading font-semibold text-ink mb-2">DeployMind</h3>
              <p className="text-emerald text-lg font-medium mb-6">Automated Cloud Deployment Platform</p>
              <p className="text-body text-lg mb-8">
                Push your code. We handle the cloud. DeployMind turns any GitHub repo into a live, running cloud application automatically — no DevOps team required. Connect your repo, pick a cloud provider, and DeployMind generates the infrastructure and deployment pipeline for you.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Auto-generated infrastructure — no manual scripting",
                  "Automatic CI/CD pipeline triggered on every push",
                  "Containerized, consistent deployments every time",
                  "Secure secrets handling"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald shrink-0 mt-0.5" />
                    <span className="text-body text-[17px]">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8">
                <Link href="/products">Explore DeployMind &rarr;</Link>
              </Button>
            </FadeUp>
          </div>
        </div>

        {/* Other AI Products Bento */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24 auto-rows-fr">
          {otherAiProducts.map((product, i) => (
            <StaggerItem
              key={i}
              className="bg-white border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all flex flex-col hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-mint-soft flex items-center justify-center text-emerald mb-6 shrink-0">
                <product.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-3">{product.title}</h3>
              <p className="text-body text-[15px] sm:text-base">{product.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* PocketMart - Flagship Community Platform */}
        <FadeUp className="text-center mb-10">
          <h2 className="text-3xl md:text-[36px] font-heading font-semibold text-ink mb-4">Our Flagship Community Platform</h2>
        </FadeUp>

        <FadeUp className="mb-16 md:mb-24">
          <div className="bg-white border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-mint-soft flex items-center justify-center text-emerald shrink-0">
                <Store className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">PocketMart</h3>
                <p className="text-body text-lg max-w-4xl">
                  A unified platform powering large-scale community commerce — integrating food ordering, local services, elderly care, and e-commerce into a single scalable public-sector ecosystem.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp className="text-center">
          <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald hover:text-white rounded-full px-10 border-2">
            <Link href="/works">View All Works &rarr;</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
