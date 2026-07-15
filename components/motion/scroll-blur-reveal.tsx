"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollBlurRevealProps {
  word: string;
  subtitle: string;
  className?: string;
  wordClassName?: string;
  subtitleClassName?: string;
}

export function ScrollBlurReveal({ word, subtitle, className, wordClassName, subtitleClassName }: ScrollBlurRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const wordOpacity = useTransform(scrollYProgress, [0, 0.55], [0.12, 1]);
  const wordScale = useTransform(scrollYProgress, [0, 0.55], [0.94, 1]);
  const wordBlurPx = useTransform(scrollYProgress, [0, 0.55], [18, 0]);
  const wordFilter = useTransform(wordBlurPx, v => `blur(${v}px)`);

  const subtitleOpacity = useTransform(scrollYProgress, [0.25, 0.85], [0, 1]);
  const subtitleBlurPx = useTransform(scrollYProgress, [0.25, 0.85], [8, 0]);
  const subtitleFilter = useTransform(subtitleBlurPx, v => `blur(${v}px)`);

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={className}>
        <h3 className={wordClassName}>{word}</h3>
        <p className={subtitleClassName}>{subtitle}</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      <motion.h3
        style={{ opacity: wordOpacity, scale: wordScale, filter: wordFilter }}
        className={cn("text-transparent [-webkit-text-stroke:1.5px_var(--ink)]", wordClassName)}
      >
        {word}
      </motion.h3>
      <motion.p style={{ opacity: subtitleOpacity, filter: subtitleFilter }} className={subtitleClassName}>
        {subtitle}
      </motion.p>
    </div>
  );
}
