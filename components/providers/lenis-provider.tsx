"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import "lenis/dist/lenis.css";

function LenisScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });

      const timer = setTimeout(() => {
        lenis.resize();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  return null;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
        infinite: false,
        autoRaf: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <LenisScrollHandler />
      {children}
    </ReactLenis>
  );
}

