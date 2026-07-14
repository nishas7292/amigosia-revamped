import { Marquee } from "@/components/motion/marquee";

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border bg-surface-alt">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8 mb-6 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Recognized by Start-up India · Kerala Start-up Mission
        </p>
      </div>
      <Marquee speed="normal" className="py-4">
        {[
          "Kudumbashree", 
          "Kerala Livestock Development Board", 
          "Logizen LLC (USA)", 
          "KBN Holdings (Qatar)"
        ].map((client, i) => (
          <div 
            key={i} 
            className="px-8 py-4 text-xl font-heading font-semibold text-muted hover:text-emerald transition-colors whitespace-nowrap grayscale hover:grayscale-0"
          >
            {client}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
