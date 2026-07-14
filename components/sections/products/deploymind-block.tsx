"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { CheckCircle2, GitMerge, Settings, Cloud } from "lucide-react";
import { CountUp } from "@/components/motion/count-up";

export function DeployMindBlock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const step1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0.3, 1, 0.3]);
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0.3, 1, 0.3]);
  const step3Opacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.3, 1, 1]);

  return (
    <Section className="bg-surface-alt border-t border-border pt-24 md:pt-32 pb-0">
      <Container>
        {/* Intro */}
        <FadeUp className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-4">DeployMind</h2>
          <p className="text-xl md:text-2xl text-emerald font-medium mb-10">Automated Cloud Deployment Platform</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-body max-w-5xl">
            <div>
              <p className="font-semibold text-ink mb-3">The problem</p>
              <p className="leading-relaxed">Teams spend days writing infrastructure scripts, configuring servers, wiring CI/CD pipelines, and managing secrets by hand just to get one app online — usually requiring a dedicated DevOps engineer.</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-3">The solution</p>
              <p className="leading-relaxed">Connect your GitHub repo, pick your cloud provider, and DeployMind generates everything needed to deploy automatically — infrastructure, pipeline, and all. What used to take days now takes minutes.</p>
            </div>
          </div>
        </FadeUp>

        {/* Scroll Stepper */}
        <div className="mb-24 md:mb-32">
          <h3 className="text-3xl md:text-4xl font-heading font-semibold text-ink mb-16 text-center">How it works</h3>
          <div ref={containerRef} className="relative flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
            {/* Sticky Graphic Column */}
            <div className="md:w-1/2 flex items-start justify-center relative h-[60vh] md:h-auto md:min-h-screen">
              <div className="sticky top-[25vh] w-full max-w-[400px] aspect-square bg-mint-soft rounded-3xl flex items-center justify-center border border-mint overflow-hidden">
                <motion.div style={{ opacity: step1Opacity }} className="absolute">
                  <GitMerge className="w-24 h-24 md:w-32 md:h-32 text-emerald" />
                </motion.div>
                <motion.div style={{ opacity: step2Opacity }} className="absolute">
                  <Settings className="w-24 h-24 md:w-32 md:h-32 text-emerald" />
                </motion.div>
                <motion.div style={{ opacity: step3Opacity }} className="absolute">
                  <Cloud className="w-24 h-24 md:w-32 md:h-32 text-emerald" />
                </motion.div>
              </div>
            </div>
            
            {/* Steps Text Column */}
            <div className="md:w-1/2 flex flex-col py-[10vh] md:py-[20vh]">
              <motion.div style={{ opacity: step1Opacity }} className="min-h-[50vh] flex flex-col justify-center">
                <div className="text-5xl md:text-7xl font-heading font-bold text-mint mb-6">1</div>
                <h4 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">Connect</h4>
                <p className="text-body text-lg leading-relaxed">DeployMind scans your GitHub project to understand what your app needs to run.</p>
              </motion.div>
              <motion.div style={{ opacity: step2Opacity }} className="min-h-[50vh] flex flex-col justify-center">
                <div className="text-5xl md:text-7xl font-heading font-bold text-mint mb-6">2</div>
                <h4 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">Generate</h4>
                <p className="text-body text-lg leading-relaxed">We generate everything — deployment pipeline and cloud setup files, no configuration needed.</p>
              </motion.div>
              <motion.div style={{ opacity: step3Opacity }} className="min-h-[50vh] flex flex-col justify-center">
                <div className="text-5xl md:text-7xl font-heading font-bold text-mint mb-6">3</div>
                <h4 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-4">Go Live</h4>
                <p className="text-body text-lg leading-relaxed">Your app goes live — the pipeline runs automatically on the cloud of your choice.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features / Details */}
        <div className="mb-24">
          <FadeUp>
            <h4 className="text-2xl md:text-3xl font-heading font-semibold text-ink mb-10 text-center">What you get</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Auto-generated infrastructure (no manual scripting)",
                "Automatic deployment pipeline on every push",
                "Containerized, consistent deployments",
                "Secure secrets handling (keys kept out of code)",
                "Live deployment tracking dashboard",
                "Your choice of cloud: Azure, AWS, Google Cloud, DigitalOcean"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <CheckCircle2 className="w-6 h-6 text-emerald shrink-0" />
                  <span className="text-body font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Stat Strip */}
        <FadeUp className="mb-24">
          <div className="bg-ink rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row justify-around items-center gap-12 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-heading font-bold text-mint mb-3">Minutes</div>
              <div className="text-surface-alt/80 font-medium tracking-wide uppercase">Not days to go live</div>
            </div>
            <div className="hidden md:block w-px h-24 bg-white/20"></div>
            <div>
              <div className="text-5xl md:text-6xl font-heading font-bold text-mint mb-3">Zero</div>
              <div className="text-surface-alt/80 font-medium tracking-wide uppercase">DevOps expertise needed</div>
            </div>
            <div className="hidden md:block w-px h-24 bg-white/20"></div>
            <div>
              <div className="text-5xl md:text-6xl font-heading font-bold text-mint mb-3">
                <CountUp to={4} duration={1.5} />
              </div>
              <div className="text-surface-alt/80 font-medium tracking-wide uppercase">Major clouds supported</div>
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp className="text-center p-12 md:p-16 border border-border bg-white rounded-[2rem] mb-24 md:mb-32">
          <h3 className="text-2xl md:text-4xl font-heading font-semibold text-ink mb-8">Ready to automate your deployments?</h3>
          <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-10 h-14 text-lg">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
