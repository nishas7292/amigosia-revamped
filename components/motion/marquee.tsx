import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "fast" | "normal" | "slow";
}

export function Marquee({ children, className, speed = "normal" }: MarqueeProps) {
  const duration = speed === "fast" ? "15s" : speed === "slow" ? "40s" : "25s";
  return (
    <div className={cn("group flex overflow-hidden p-2 [--gap:2rem] gap-[var(--gap)]", className)}>
      <div 
        className="flex shrink-0 items-center justify-around gap-[var(--gap)] min-w-full animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {children}
      </div>
      <div 
        className="flex shrink-0 items-center justify-around gap-[var(--gap)] min-w-full animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
