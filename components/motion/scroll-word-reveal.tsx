"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

interface ScrollWordRevealProps {
  text: string;
  className?: string;
}

function RevealWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export function ScrollWordReveal({ text, className }: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"],
  });
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return (
      <p ref={containerRef} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <RevealWord key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}
