"use client";

import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { GitBranch, Server, Network, Cloud, Shield, Box, Workflow } from "lucide-react";
import Image from "next/image";

export function DeployMindBlock() {
  return (
    <Section className="bg-surface-alt border-t border-border pt-16 md:pt-24 pb-16 md:pb-24">
      <Container>
        {/* Product Intro */}
        <FadeUp className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint/20 border border-mint/40 text-emerald text-xs tracking-wider font-bold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald"></span>
            DEVOPS & CLOUD PLATFORM
          </div>
          
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-ink/70 mb-4 tracking-tight">
            DeployMind
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-6 max-w-4xl leading-tight tracking-tight">
            Deploy to the Cloud Without the DevOps Overhead
          </h3>
          
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl font-medium">
            Automate infrastructure, CI/CD, and cloud deployment from a single workflow.
          </p>
        </FadeUp>

        {/* Problem -> Solution */}
        <FadeUp className="mb-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border/60 rounded-3xl overflow-hidden bg-white shadow-sm">
            <div className="p-10 md:p-12 md:border-r border-border/60">
              <div className="text-xs font-bold text-ink/40 tracking-widest mb-6 uppercase">
                <span className="text-emerald mr-2">01</span> The Problem
              </div>
              <h4 className="text-2xl font-heading font-semibold text-ink mb-4">
                Deployment shouldn't require days of manual setup
              </h4>
              <p className="text-body leading-relaxed">
                Teams spend days writing infrastructure scripts, configuring servers, wiring CI/CD pipelines, and managing secrets by hand just to get one app online — usually requiring a dedicated DevOps engineer.
              </p>
            </div>
            <div className="p-10 md:p-12 bg-mint/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="text-xs font-bold text-emerald/60 tracking-widest mb-6 uppercase relative z-10">
                <span className="text-emerald mr-2">02</span> The Solution
              </div>
              <h4 className="text-2xl font-heading font-semibold text-ink mb-4 relative z-10">
                From GitHub repository to production-ready infrastructure
              </h4>
              <p className="text-body leading-relaxed relative z-10">
                Connect your GitHub repo, pick your cloud provider, and DeployMind generates everything needed to deploy automatically — infrastructure, pipeline, and all. What used to take days now takes minutes.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Deployment Workflow Visual Diagram */}
        <FadeUp className="mb-12 md:mb-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto px-4 md:px-0">
             
             {/* Node 1 */}
             <div className="flex flex-col items-center text-center group w-full md:w-auto">
               <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-4 transition-colors">
                 <GitBranch className="w-8 h-8 text-ink/70" />
               </div>
               <span className="text-sm font-semibold text-ink">GitHub<br className="hidden md:block"/> Repository</span>
             </div>

             {/* Arrow Desktop */}
             <div className="hidden md:flex flex-1 items-center justify-center px-4">
               <div className="w-full h-px bg-border relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-border rotate-45"></div>
               </div>
             </div>
             {/* Arrow Mobile */}
             <div className="md:hidden h-10 w-px bg-border my-2 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-border rotate-45"></div>
             </div>

             {/* Node 2 - DeployMind */}
             <div className="flex flex-col items-center text-center relative w-full md:w-auto shrink-0">
               <div className="absolute -inset-4 bg-emerald/10 rounded-full blur-xl z-0 pointer-events-none"></div>
               <div className="relative z-10 w-20 h-20 rounded-2xl bg-emerald text-white shadow-[0_0_20px_rgba(14,122,95,0.3)] flex items-center justify-center mb-4 ring-4 ring-emerald/10">
                 <Workflow className="w-10 h-10" />
               </div>
               <span className="text-base font-bold text-emerald">DeployMind</span>
             </div>

             {/* Arrow Desktop */}
             <div className="hidden md:flex flex-1 items-center justify-center px-4">
               <div className="w-full h-px bg-border relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-border rotate-45"></div>
               </div>
             </div>
             {/* Arrow Mobile */}
             <div className="md:hidden h-10 w-px bg-border my-2 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-border rotate-45"></div>
             </div>

             {/* Node 3 */}
             <div className="flex flex-col items-center text-center group w-full md:w-auto">
               <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-4 transition-colors">
                 <Server className="w-8 h-8 text-ink/70" />
               </div>
               <span className="text-sm font-semibold text-ink">Infrastructure</span>
             </div>

             {/* Arrow Desktop */}
             <div className="hidden md:flex flex-1 items-center justify-center px-4">
               <div className="w-full h-px bg-border relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-border rotate-45"></div>
               </div>
             </div>
             {/* Arrow Mobile */}
             <div className="md:hidden h-10 w-px bg-border my-2 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-border rotate-45"></div>
             </div>

             {/* Node 4 */}
             <div className="flex flex-col items-center text-center group w-full md:w-auto">
               <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-4 transition-colors">
                 <Network className="w-8 h-8 text-ink/70" />
               </div>
               <span className="text-sm font-semibold text-ink">CI/CD<br className="hidden md:block"/> Pipeline</span>
             </div>

             {/* Arrow Desktop */}
             <div className="hidden md:flex flex-1 items-center justify-center px-4">
               <div className="w-full h-px bg-border relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-border rotate-45"></div>
               </div>
             </div>
             {/* Arrow Mobile */}
             <div className="md:hidden h-10 w-px bg-border my-2 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-border rotate-45"></div>
             </div>

             {/* Node 5 */}
             <div className="flex flex-col items-center text-center group w-full md:w-auto">
               <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-4 transition-colors">
                 <Cloud className="w-8 h-8 text-ink/70" />
               </div>
               <span className="text-sm font-semibold text-ink">Cloud<br className="hidden md:block"/> Deployment</span>
             </div>
             
          </div>
        </FadeUp>

        {/* Product Visual */}
        <FadeUp delay={0.2} className="mb-24 md:mb-32">
          <div className="relative w-full aspect-video md:aspect-[2/1] rounded-2xl overflow-hidden border border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white max-w-5xl mx-auto ring-1 ring-black/5">
            <Image
              src="/products/deploymind-image.jpg"
              alt="DeployMind Interface"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </FadeUp>

        {/* How It Works */}
        <div className="mb-24 max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16 md:mb-20">
            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-ink mb-4">How it works</h3>
            <p className="text-lg text-body max-w-2xl mx-auto">
              Automate your entire cloud infrastructure and deployment workflow in three simple steps.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connecting line desktop */}
             <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-border/80 z-0"></div>

             <FadeUp delay={0.1} className="relative z-10 flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full bg-surface-alt border-2 border-mint text-emerald font-bold flex items-center justify-center mb-6 shadow-sm relative">
                 <div className="absolute inset-0 bg-white rounded-full -z-10"></div>
                 01
               </div>
               <GitBranch className="w-6 h-6 text-ink/60 mb-4" />
               <h4 className="text-xl font-heading font-semibold text-ink mb-3">Connect</h4>
               <p className="text-body leading-relaxed px-4">Connect your GitHub repository.</p>
             </FadeUp>

             <FadeUp delay={0.2} className="relative z-10 flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full bg-surface-alt border-2 border-mint text-emerald font-bold flex items-center justify-center mb-6 shadow-sm relative">
                 <div className="absolute inset-0 bg-white rounded-full -z-10"></div>
                 02
               </div>
               <Box className="w-6 h-6 text-ink/60 mb-4" />
               <h4 className="text-xl font-heading font-semibold text-ink mb-3">Configure</h4>
               <p className="text-body leading-relaxed px-4">Choose your cloud provider and deployment configuration.</p>
             </FadeUp>

             <FadeUp delay={0.3} className="relative z-10 flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full bg-surface-alt border-2 border-mint text-emerald font-bold flex items-center justify-center mb-6 shadow-sm relative">
                 <div className="absolute inset-0 bg-white rounded-full -z-10"></div>
                 03
               </div>
               <Cloud className="w-6 h-6 text-ink/60 mb-4" />
               <h4 className="text-xl font-heading font-semibold text-ink mb-3">Deploy</h4>
               <p className="text-body leading-relaxed px-4">Deploy your application with infrastructure and CI/CD generated automatically.</p>
             </FadeUp>
          </div>
        </div>

        {/* Key Capabilities */}
        <FadeUp className="max-w-5xl mx-auto text-center border-t border-border pt-16 md:pt-20">
          <h3 className="text-sm font-bold text-ink/50 uppercase tracking-widest mb-12">Built for modern deployment</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center px-2">
              <Server className="w-6 h-6 text-emerald mb-4" />
              <p className="text-sm font-medium text-ink">Automated Infrastructure</p>
            </div>
            <div className="flex flex-col items-center text-center px-2">
              <Network className="w-6 h-6 text-emerald mb-4" />
              <p className="text-sm font-medium text-ink">CI/CD Automation</p>
            </div>
            <div className="flex flex-col items-center text-center px-2">
              <Cloud className="w-6 h-6 text-emerald mb-4" />
              <p className="text-sm font-medium text-ink">Cloud Provider Integration</p>
            </div>
            <div className="flex flex-col items-center text-center px-2">
              <Shield className="w-6 h-6 text-emerald mb-4" />
              <p className="text-sm font-medium text-ink">Secure Deployment Workflows</p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
