import { AIProductsHero } from "@/components/sections/products/hero";
import { DeepLensBlock } from "@/components/sections/products/deeplens-block";
import { DeployMindBlock } from "@/components/sections/products/deploymind-block";
import { OtherProductsBlock } from "@/components/sections/products/other-products-block";
import { FadeUp } from "@/components/motion/fade-up";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <AIProductsHero />
      <DeepLensBlock />
      <DeployMindBlock />
      
      {/* Centered Talk to Our Team CTA under flagship AI product blocks */}
      <section className="py-12 md:py-16 bg-surface-alt border-t border-border">
        <Container>
          <FadeUp className="text-center flex flex-col items-center justify-center">
            <p className="text-base md:text-lg text-body mb-6 font-medium">
              Want to see how our AI solutions fit your engineering workflow?
            </p>
            <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-10 h-14 text-base font-semibold shadow-md hover:shadow-lg transition-all">
              <Link href="/contact">Talk to Our Team &rarr;</Link>
            </Button>
          </FadeUp>
        </Container>
      </section>

      <OtherProductsBlock />
    </>
  );
}
