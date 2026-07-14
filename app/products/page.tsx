import { AIProductsHero } from "@/components/sections/products/hero";
import { DeepLensBlock } from "@/components/sections/products/deeplens-block";
import { DeployMindBlock } from "@/components/sections/products/deploymind-block";
import { OtherProductsBlock } from "@/components/sections/products/other-products-block";

export default function ProductsPage() {
  return (
    <>
      <AIProductsHero />
      <DeepLensBlock />
      <DeployMindBlock />
      <OtherProductsBlock />
    </>
  );
}
