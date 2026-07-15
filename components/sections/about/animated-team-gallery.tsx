"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const images = [
  "/careers/team-1.svg",
  "/careers/team-2.svg",
  "/careers/team-3.svg",
  "/careers/team-4.svg",
];

export function AnimatedTeamGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full aspect-[4/5] max-w-sm md:max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Keyboard accessibility for pausing/playing could be added here, but hover handles most cases.
    >
      <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {images.map((src, index) => {
            const offset = (index - activeIndex + images.length) % images.length;
            
            const isActive = offset === 0;
            const isNext = offset === 1;
            const isThird = offset === 2;
            const isPrev = offset === images.length - 1;
            
            let zIndex = 20 - offset;
            let scale = 1 - (offset * 0.08);
            let yOffset = offset * 25;
            let opacity = 1 - (offset * 0.25);
            
            // The previous image slides up and fades out
            if (isPrev) {
                scale = 1.05;
                yOffset = -40;
                opacity = 0;
                zIndex = 30; // On top as it fades away
            }

            // Hide anything beyond the 3rd card in the stack
            if (!isActive && !isNext && !isThird && !isPrev) {
                opacity = 0; 
                zIndex = 0;
            }

            return (
              <motion.div
                key={src}
                className="absolute w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(14,122,95,0.12)] border border-white/40 bg-white"
                initial={false}
                animate={{
                  scale,
                  y: yOffset,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  mass: 0.8
                }}
                style={{
                  transformOrigin: "top center"
                }}
              >
                <Image
                  src={src}
                  alt={`Team member ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Glassmorphism gradient effect on the cards */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none mix-blend-overlay" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Animated rotating circular badge */}
      <motion.div 
        className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-28 h-28 md:w-36 md:h-36 bg-mint/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center z-40 text-emerald-dark font-heading font-bold text-xs md:text-sm tracking-widest border border-white/60 overflow-hidden"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5 md:p-2 fill-emerald-dark">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text>
                <textPath href="#circlePath" startOffset="0%">
                JOIN OUR TEAM • JOIN OUR TEAM •
                </textPath>
            </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-emerald-dark" />
        </div>
      </motion.div>
    </div>
  );
}
