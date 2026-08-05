"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { CheckCircle2 } from "lucide-react";

export function DeepLensBlock() {
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

        {/* How it works */}
        <div className="mb-24 md:mb-32">
          <FadeUp className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-ink mb-4">How it works</h3>
            <p className="text-lg text-body max-w-2xl mx-auto">
              From source code parsing to AI-powered impact assessment in three automated steps.
            </p>
          </FadeUp>

          {/* Product Image Preview */}
          <FadeUp className="mb-12">
            <div className="relative h-[280px] sm:h-[380px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-mint/50 shadow-soft hover:shadow-hover transition-shadow duration-500 group">
              <Image
                src="/products/deeplens-ai-powered-change-impact-analysis--know-w.jpg"
                alt="DeepLens Analysis"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald/20 mix-blend-color transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
            </div>
          </FadeUp>

          {/* 3 Steps in Flex Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FadeUp delay={0.1} className="bg-surface border border-border rounded-2xl p-8 shadow-sm hover:shadow-hover hover:border-mint transition-all flex flex-col hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-heading font-bold text-mint mb-4">01</div>
              <h4 className="text-2xl font-heading font-semibold text-ink mb-3">Map</h4>
              <p className="text-body text-base leading-relaxed">Scanner module parses your Python code via AST, extracting every import, function call, and class dependency into a Neo4j graph database.</p>
            </FadeUp>
            <FadeUp delay={0.2} className="bg-surface border border-border rounded-2xl p-8 shadow-sm hover:shadow-hover hover:border-mint transition-all flex flex-col hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-heading font-bold text-mint mb-4">02</div>
              <h4 className="text-2xl font-heading font-semibold text-ink mb-3">Detect</h4>
              <p className="text-body text-base leading-relaxed">Detector module tracks changes since the last scan (including uncommitted edits) via stateful Git integration.</p>
            </FadeUp>
            <FadeUp delay={0.3} className="bg-surface border border-border rounded-2xl p-8 shadow-sm hover:shadow-hover hover:border-mint transition-all flex flex-col hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-heading font-bold text-mint mb-4">03</div>
              <h4 className="text-2xl font-heading font-semibold text-ink mb-3">Analyze</h4>
              <p className="text-body text-base leading-relaxed">AI engine feeds the diff plus full graph context to an LLM (Groq, Gemini, or OpenAI) for a structured, semantic risk report.</p>
            </FadeUp>
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
