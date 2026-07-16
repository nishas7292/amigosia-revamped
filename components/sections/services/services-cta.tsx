"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";

export function ServicesCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-ink">
      {/* Animated Gradient Background & Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ink via-[#0d2119] to-ink opacity-80" />
        
        {/* Animated Blobs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-emerald mix-blend-screen blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-mint mix-blend-screen blur-[100px]"
        />
        
        {/* Floating Particles (Simple CSS pattern or small divs) */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <FadeUp>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-emerald-400">
              Extraordinary
            </span> Together.
          </h2>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Bring us your vision. We'll bring the engineering, design, and strategy to make it a reality.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <Button 
            asChild 
            size="lg" 
            className="h-16 px-10 rounded-full bg-white text-emerald-dark hover:bg-mint hover:scale-105 transition-all duration-300 text-lg font-semibold shadow-[0_0_40px_rgba(166,232,205,0.3)] hover:shadow-[0_0_60px_rgba(166,232,205,0.5)]"
          >
            <Link href="/contact">
              Start Your Project &rarr;
            </Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
