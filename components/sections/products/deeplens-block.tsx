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
        {/* Hero Section */}
        <div className="min-h-[75vh] md:min-h-[85vh] flex items-center pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center w-full">
            {/* Left Column */}
            <FadeUp className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint/20 border border-mint/40 text-emerald text-xs tracking-wider font-bold mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald"></span>
                AI-POWERED PRODUCT
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-ink mb-6 tracking-tight">
                DeepLens
              </h1>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-ink mb-6 leading-tight">
                Understand the Impact of Every Code Change.
              </h2>
              
              <p className="text-lg md:text-xl text-body mb-3 leading-relaxed max-w-xl">
                DeepLens analyzes your codebase, maps hidden dependencies, and predicts the impact of code changes before they reach production.
              </p>
              
              <p className="text-base font-medium text-body/80 mb-10 max-w-xl">
                AI-powered change impact analysis for modern engineering teams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8 h-14 text-base w-full sm:w-auto shadow-md hover:shadow-lg transition-all">
                  <Link href="#how-it-works">Explore DeepLens &rarr;</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border text-ink hover:bg-surface rounded-full px-8 h-14 text-base w-full sm:w-auto shadow-sm hover:shadow-md transition-all">
                  <Link href="/contact">Talk to Our Team</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink/70 font-medium">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald" /> AI-Powered Analysis</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald" /> Dependency Intelligence</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald" /> Developer-Focused</span>
              </div>
            </FadeUp>

            {/* Right Column */}
            <FadeUp delay={0.2} className="relative w-full h-full min-h-[350px] lg:min-h-[500px] flex items-center justify-center mt-8 lg:mt-0">
              {/* Subtle decorative background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,122,95,0.06)_0%,transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(166,232,205,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(166,232,205,0.15)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)] opacity-50 pointer-events-none" />
              
              {/* Product Visual */}
              <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden border border-mint/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:shadow-[0_20px_50px_rgba(14,122,95,0.12)] ring-1 ring-black/5 bg-surface z-10">
                <Image
                  src="/products/deeplens-ai-powered-change-impact-analysis--know-w.jpg"
                  alt="DeepLens Interface"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Problem & Solution Context */}
        <FadeUp className="mb-24 md:mb-32 pt-12 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-body max-w-5xl mx-auto">
            <div>
              <p className="font-semibold text-ink mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald"></span> The problem
              </p>
              <p className="leading-relaxed">Bugs caught in production cost roughly 10x more than bugs caught in development. Modern codebases carry thousands of implicit dependencies that are impossible to trace by hand — one change in a utility file can silently break distant, unrelated features.</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald"></span> The solution
              </p>
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
