"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Spline = dynamic(() => import("@splinetool/react-spline/next"), {
  ssr: false,
});

interface SplineSceneProps {
  scene?: string;
  poster?: string;
  label?: string;
  className?: string;
}

export function SplineScene({ scene, poster, label, className }: SplineSceneProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldRenderFallback = !isMounted || isMobile || prefersReducedMotion || !scene;

  return (
    <div className={cn("relative w-full h-full min-h-[400px] bg-mint-soft rounded-xl overflow-hidden", className)}>
      {shouldRenderFallback ? (
        poster ? (
          <Image
            src={poster}
            alt={label || "3D Scene"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-emerald font-medium">
            {label || "Pending Spline Scene"}
          </div>
        )
      ) : (
        <Spline scene={scene} className="w-full h-full" />
      )}
    </div>
  );
}
