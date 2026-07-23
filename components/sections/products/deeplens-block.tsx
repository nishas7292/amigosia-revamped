"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { CheckCircle2, Network, GitBranch, Cpu } from "lucide-react";

export function DeepLensBlock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const step1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0.3, 1, 0.3]);
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0.3, 1, 0.3]);
  const step3Opacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.3, 1, 1]);

  return (
    <Section>
      <Container>
        {/* Intro */}
        <FadeUp className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-4">DeepLens</h2>
          <p className="text-xl md:text-2xl text-emerald font-medium mb-10">AI-Powered Change Impact Analysis</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-body max-w-5xl">
            <div>
              <p className="font-semibold text-ink mb-3">The problem</p>
              <p className="leading-relaxed">Bugs caught in production cost roughly 10x more than bugs caught in development. Modern codebases carry thousands of implicit dependencies that are impossible to trace by hand — one change in a utility file can silently break distant, unrelated features.</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-3">The solution</p>
              <p className="leading-relaxed">DeepLens is a stateful analysis engine that maps your entire codebase architecture and predicts the blast radius of any change before it reaches production.</p>
            </div>
          </div>
        </FadeUp>

        {/* Scroll Stepper */}
        <div className="mb-24 md:mb-32">
          <h3 className="text-3xl md:text-4xl font-heading font-semibold text-ink mb-16 text-center">How it works</h3>
          <div ref={containerRef} className="relative flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
            {/* Sticky Graphic Column */}
            <div className="md:w-1/2 flex items-start justify-center relative h-[60vh] md:h-auto md:min-h-screen">
              <div className="sticky top-[25vh] w-full max-w-[400px] aspect-square bg-mint-soft rounded-3xl flex items-center justify-center border border-mint overflow-hidden relative">
                <motion.div style={{ opacity: step1Opacity }} className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80" alt="Map" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div style={{ opacity: step2Opacity }} className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80" alt="Detect" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div style={{ opacity: step3Opacity }} className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" alt="Analyze" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
            
            {/* Steps Text Column */}
            <div className="md:w-1/2 flex flex-col py-[10vh] md:py-[20vh]">
              <motion.div style={{ opacity: step1Opacity }} className="min-h-[50vh] flex flex-col justify-center">
                <div className="text-5xl md:text-7xl font-heading font-bold text-mint mb-6">1</div>
                <h4 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">Map</h4>
                <p className="text-body text-lg leading-relaxed">Scanner module parses your Python code via AST, extracting every import, function call, and class dependency into a Neo4j graph database.</p>
              </motion.div>
              <motion.div style={{ opacity: step2Opacity }} className="min-h-[50vh] flex flex-col justify-center">
                <div className="text-5xl md:text-7xl font-heading font-bold text-mint mb-6">2</div>
                <h4 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">Detect</h4>
                <p className="text-body text-lg leading-relaxed">Detector module tracks changes since the last scan (including uncommitted edits) via stateful Git integration.</p>
              </motion.div>
              <motion.div style={{ opacity: step3Opacity }} className="min-h-[50vh] flex flex-col justify-center">
                <div className="text-5xl md:text-7xl font-heading font-bold text-mint mb-6">3</div>
                <h4 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">Analyze</h4>
                <p className="text-body text-lg leading-relaxed">AI engine feeds the diff plus full graph context to an LLM (Groq, Gemini, or OpenAI) for a structured, semantic risk report.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features / Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24">
          <FadeUp>
            <h4 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-6">Why DeepLens is different</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-body"><CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-1" /> Context-aware AI — sees full graph, not just diff</li>
              <li className="flex items-start gap-3 text-body"><CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-1" /> Stateful intelligence — catches uncommitted edits</li>
              <li className="flex items-start gap-3 text-body"><CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-1" /> O(1) impact lookups via Neo4j</li>
            </ul>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h4 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-6">Roadmap</h4>
            <p className="text-body leading-relaxed">Multi-language support (Java, TypeScript, C++), AI-generated auto-fix recommendations, native CI/CD plugins (GitHub Actions, GitLab CI), and 3D graph visualization explorer.</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h4 className="text-xl md:text-2xl font-heading font-semibold text-ink mb-6">Enterprise & privacy</h4>
            <p className="text-body leading-relaxed">Local LLM integration (Ollama, Llama 3 8B, Mistral 7B) in R&D — enabling on-premise analysis with zero cloud exposure for air-gapped/classified environments.</p>
          </FadeUp>
        </div>

        {/* CTA */}
        <FadeUp className="text-center p-12 md:p-16 bg-mint-soft rounded-[2rem] border border-border">
          <h3 className="text-2xl md:text-4xl font-heading font-semibold text-ink mb-8">Try DeepLens in action</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://deeplens.near2me.app" target="_blank" rel="noopener noreferrer" className="text-emerald text-lg font-medium hover:underline">
              deeplens.near2me.app
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-10 h-14 text-lg">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
