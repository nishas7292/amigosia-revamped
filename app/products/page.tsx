import { Metadata } from "next";
import { AIProductsHero } from "@/components/sections/products/hero";
import { DeepLensBlock } from "@/components/sections/products/deeplens-block";
import { DeployMindBlock } from "@/components/sections/products/deploymind-block";
import { OtherProductsBlock } from "@/components/sections/products/other-products-block";
import { FadeUp } from "@/components/motion/fade-up";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "AI Products & Platforms",
  description:
    "Explore Amigosia's flagship AI products including DeepLens for intelligent visual processing and DeployMind for automated infrastructure deployment.",
  alternates: {
    canonical: "https://amigosia.com/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductJsonLd
        name="DeepLens AI"
        description="Intelligent computer vision and visual intelligence platform for enterprise monitoring and security."
        url="https://amigosia.com/products#deeplens"
      />
      <ProductJsonLd
        name="DeployMind"
        description="Autonomous AI deployment agent and infrastructure orchestration platform for modern devops teams."
        url="https://amigosia.com/products#deploymind"
      />
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
