import { AIProductsHero } from "@/components/sections/ai-products/hero";
import { DeepLensBlock } from "@/components/sections/ai-products/deeplens-block";
import { DeployMindBlock } from "@/components/sections/ai-products/deploymind-block";

export default function AIProductsPage() {
  return (
    <>
      <AIProductsHero />
      <DeepLensBlock />
      <DeployMindBlock />
    </>
  );
}
