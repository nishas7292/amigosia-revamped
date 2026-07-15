"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(166,232,205,0.35), transparent 60%)`
  );

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformPerspective: 800,
      }}
      className={cn("group relative [transform-style:preserve-3d]", className)}
    >
      {children}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
}
