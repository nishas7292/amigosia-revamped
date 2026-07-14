import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { SplineScene } from "@/components/spline/spline-scene";
import { CheckCircle2 } from "lucide-react";

export function AIProducts() {
  return (
    <Section>
      <Container>
        <FadeUp className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-[44px] font-heading font-semibold text-ink mb-6">Our Products</h2>
          <p className="text-lg md:text-[20px] text-body max-w-2xl mx-auto">
            Two engineering-first AI platforms, built in-house — not integrations, our own IP.
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
                <Link href="/ai-products">Explore DeepLens &rarr;</Link>
              </Button>
            </FadeUp>
            <FadeUp delay={0.2} className="relative h-[400px] lg:h-[500px] w-full order-1 lg:order-2">
              <SplineScene 
                label="SPLINE_DEEPLENS_TEASER" 
                poster="/spline-poster-deeplens.png"
              />
            </FadeUp>
          </div>

          {/* DeployMind */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp delay={0.1} className="relative h-[400px] lg:h-[500px] w-full">
              <SplineScene 
                label="SPLINE_DEPLOYMIND_TEASER" 
                poster="/spline-poster-deploymind.png"
              />
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
                <Link href="/ai-products">Explore DeployMind &rarr;</Link>
              </Button>
            </FadeUp>
          </div>
        </div>

        <FadeUp className="text-center">
          <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald hover:text-white rounded-full px-10 border-2">
            <Link href="/ai-products">View All AI Products &rarr;</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
