"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
];

export function AnimatedTeamGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full z-10 flex justify-center">
      {/* Subtle Amigosia emerald/mint glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(14,122,95,0.12)_0%,transparent_50%)] pointer-events-none -z-10" />

      <div className="relative w-full max-w-[720px] grid rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white">
        {images.map((src, idx) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: idx === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="col-start-1 row-start-1 w-full h-full"
          >
            <Image
              src={src}
              alt={`Amigosia Team Collaboration ${idx + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority={idx === 0}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
