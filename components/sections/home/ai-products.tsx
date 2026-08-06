import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { SplineScene } from "@/components/spline/spline-scene";
import { CheckCircle2, UtensilsCrossed, QrCode, LucideIcon } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import near2meIcon from "@/public/logos/near_2_me_final.png";
import nearbyestateIcon from "@/public/logos/near_by_estate_final.png";
import pocketmartIcon from "@/public/logos/pocket mart.webp";
import digicouponLogo from "@/public/logos/digicoupon.png";
import cloudKitchenIcon from "@/public/logos/cloud kitchen platform.png";
import Image, { StaticImageData } from "next/image";

interface ProductItem {
  title: string;
  subtitle: string;
  description: string;
  icon?: LucideIcon;
  image: StaticImageData;
  features?: string[];
}

const otherProducts: ProductItem[] = [
  {
    title: "NearByEstate",
    subtitle: "Smart Location-Based Real Estate Platform",
    description:
      "A comprehensive digital marketplace connecting property owners, buyers, tenants, and real estate professionals through intelligent location-based property discovery and management.",
    image: nearbyestateIcon,
  },
  {
    title: "Near2Me",
    subtitle: "Hyperlocal Marketplace Platform",
    description:
      "Connecting local businesses, service providers, and consumers through a powerful hyperlocal commerce ecosystem that promotes neighbourhood economies and digital inclusion.",
    image: near2meIcon,
  },
  {
    title: "Cloud Kitchen Platform",
    subtitle: "Complete Restaurant & Food Delivery Management",
    description:
      "An integrated platform for cloud kitchens, restaurants, and food businesses featuring online ordering, kitchen operations, inventory management, delivery tracking, analytics, and customer engagement.",
    icon: UtensilsCrossed,
    image: cloudKitchenIcon,
  },
  {
    title: "DigiCoupon",
    subtitle: "QR-Based Digital Coupon Management System",
    description:
      "A secure, high-performance coupon platform designed for government programmes, exhibitions, food festivals, community events, and large-scale public gatherings.",
    icon: QrCode,
    image: digicouponLogo,
    features: [
      "QR Code Validation",
      "Real-Time Redemption",
      "Wallet Management",
      "Financial Analytics",
      "Vendor Dashboard",
      "Offline Verification",
      "Event Reporting",
    ],
  },
];

const pocketMartModules = [
  "Community Marketplace",
  "Food Ordering",
  "Local Services",
  "Digital Payments",
  "Delivery Management",
  "Vendor Dashboard",
  "Analytics & Reporting",
];

export function AIProducts() {
  return (
    <Section className="bg-surface-alt">
      <Container>
        <FadeUp className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-[44px] font-heading font-semibold text-ink mb-4">Our Products</h2>
          <p className="text-lg md:text-[20px] text-body max-w-3xl mx-auto leading-relaxed">
            Innovative software platforms engineered, developed, and maintained by Amigosia.
          </p>
        </FadeUp>

        <div className="flex flex-col gap-24 md:gap-32 mb-16 md:mb-24">
          {/* DeepLens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp delay={0.1} className="order-2 lg:order-1">
              <h3 className="text-3xl md:text-[34px] font-heading font-semibold text-ink mb-2">DeepLens</h3>
              <p className="text-emerald text-lg font-medium mb-6">
                AI-Powered Code Intelligence & Change Impact Analysis
              </p>
              <p className="text-body text-base sm:text-lg mb-8 leading-relaxed">
                DeepLens enables engineering teams to understand the real impact of every code change before deployment. By combining source-code graph analysis with Large Language Models, DeepLens identifies dependencies, predicts risks, and accelerates software delivery with confidence.
              </p>
              <div className="mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "AI-powered impact analysis",
                    "Code dependency visualization",
                    "Git-aware change tracking",
                    "LLM-assisted engineering insights",
                    "Enterprise-ready architecture",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                      <span className="text-body text-sm sm:text-[15px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8 shadow-sm">
                <Link href="/products">Explore DeepLens &rarr;</Link>
              </Button>
            </FadeUp>
            <FadeUp delay={0.2} className="relative h-[380px] lg:h-[480px] w-full order-1 lg:order-2 group rounded-3xl overflow-hidden border border-mint/50 shadow-soft hover:shadow-hover transition-shadow duration-500">
              <SplineScene
                label="SPLINE_DEEPLENS_TEASER"
                poster="/products/deeplens-ai-powered-change-impact-analysis--know-w.jpg"
                className="w-full h-full border-0 rounded-none bg-transparent"
                posterClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald/30 mix-blend-color transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
            </FadeUp>
          </div>

          {/* DeployMind */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp delay={0.1} className="relative h-[380px] lg:h-[480px] w-full group rounded-3xl overflow-hidden border border-mint/50 shadow-soft hover:shadow-hover transition-shadow duration-500">
              <Image
                src="/products/deploymind-image.jpg"
                alt="DeployMind"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald/30 mix-blend-color transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
            </FadeUp>
            <FadeUp delay={0.2}>
              <h3 className="text-3xl md:text-[34px] font-heading font-semibold text-ink mb-2">DeployMind</h3>
              <p className="text-emerald text-lg font-medium mb-6">
                Intelligent Cloud Deployment Automation
              </p>
              <p className="text-body text-base sm:text-lg mb-8 leading-relaxed">
                DeployMind transforms Git repositories into production-ready cloud deployments with minimal configuration. It automates infrastructure provisioning, CI/CD pipelines, container deployment, and cloud orchestration.
              </p>
              <div className="mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "One-click deployments",
                    "Automated CI/CD",
                    "Docker & Kubernetes support",
                    "Secure secrets management",
                    "Multi-cloud architecture",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                      <span className="text-body text-sm sm:text-[15px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-8 shadow-sm">
                <Link href="/products">Explore DeployMind &rarr;</Link>
              </Button>
            </FadeUp>
          </div>
        </div>

        {/* 4 Other Products Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-24">
          {otherProducts.map((product, i) => {
            return (
              <StaggerItem key={i} className="bg-white border border-border/70 rounded-3xl p-8 shadow-sm hover:shadow-[var(--shadow-hover)] hover:border-mint transition-all flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-surface-alt w-16 h-16 rounded-2xl flex justify-center items-center shadow-sm border border-border overflow-hidden shrink-0 p-2.5">
                      {product.image ? (
                        <Image src={product.image} alt={product.title} className={`w-full h-full ${product.title === "Cloud Kitchen Platform" ? "object-cover scale-110" : "object-contain"}`} />
                      ) : (
                        <div className="w-full h-full bg-mint-soft flex items-center justify-center">
                          {product.icon && <product.icon className="w-7 h-7 text-emerald" />}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-ink">{product.title}</h3>
                      <p className="text-xs sm:text-sm font-medium text-emerald">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-body text-base leading-relaxed mb-6">{product.description}</p>
                </div>

                {product.features && (
                  <div className="pt-4 border-t border-border/60 mt-auto">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feat, idx) => (
                        <span key={idx} className="text-xs font-medium bg-mint-soft text-emerald px-2.5 py-1 rounded-full border border-mint/40">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* PocketMart - Flagship Community Platform */}
        <FadeUp className="mb-16 md:mb-24">
          <div className="bg-white border border-border/80 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-20 h-20 rounded-2xl bg-mint-soft flex items-center justify-center text-emerald shrink-0 p-3.5 border border-mint/50">
                <Image src={pocketmartIcon} alt="PocketMart Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald bg-mint-soft px-3 py-1 rounded-full border border-mint/40 inline-block mb-2">
                    Flagship Community Platform
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-heading font-semibold text-ink">PocketMart</h3>
                  <p className="text-emerald text-lg font-medium mt-1">Empowering Community Commerce</p>
                </div>
                
                <p className="text-body text-base sm:text-lg leading-relaxed mb-4">
                  PocketMart is Amigosia's flagship digital commerce ecosystem developed for large-scale community networks. It integrates local marketplaces, food ordering, logistics, service providers, digital payments, and community enterprises into a unified platform that enables sustainable economic growth.
                </p>
                <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
                  Designed to support government initiatives, self-help groups, cooperatives, and local entrepreneurs, PocketMart promotes inclusive digital commerce while connecting producers directly with consumers.
                </p>

                <div className="border-t border-border pt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Core Modules</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {pocketMartModules.map((mod, idx) => (
                      <span key={idx} className="text-xs sm:text-sm font-semibold bg-surface-alt text-ink border border-border px-3.5 py-1.5 rounded-full shadow-2xs">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp className="text-center">
          <Button asChild variant="outline" size="lg" className="border-emerald text-emerald hover:bg-emerald hover:text-white rounded-full px-10 border-2">
            <Link href="/products">Explore All Products &rarr;</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
