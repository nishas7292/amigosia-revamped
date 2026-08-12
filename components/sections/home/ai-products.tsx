"use client";

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
import { motion } from "framer-motion";

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
          {/* DeepLens - Featured Product Showcase */}
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-16 pt-[120px] pb-[120px] mb-16 md:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-[64px] items-center">
              
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full flex flex-col items-start text-left z-10"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7f9f1] border border-[#a6e8cd]/50 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#0e7a5f]" />
                  <span className="text-[#0e7a5f] text-[11px] sm:text-[13px] font-semibold tracking-wide uppercase">
                    FEATURED PRODUCT
                  </span>
                </div>
                
                <h3 className="text-5xl sm:text-[56px] lg:text-[60px] font-heading font-bold text-ink mb-4 leading-[1.05] tracking-tight">
                  DeepLens
                </h3>
                
                <p className="text-[#0e7a5f] text-[18px] sm:text-[20px] lg:text-[22px] font-medium mb-8 leading-snug">
                  AI-Powered Code Intelligence & Change Impact Analysis
                </p>
                
                <p className="text-[17px] sm:text-[18px] text-[#52616b] leading-[1.6] max-w-[560px] mb-8">
                  Understand the impact of code changes before they reach production. DeepLens combines source-code graph analysis with Large Language Models to identify dependencies, predict risks, and accelerate software delivery.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 max-w-[560px] mb-10">
                  {[
                    "AI-powered impact analysis",
                    "Code dependency visualization",
                    "Git-aware change tracking",
                    "LLM-assisted engineering insights",
                    "Enterprise-ready architecture",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#0e7a5f] shrink-0 mt-0.5" />
                      <span className="text-[#52616b] text-[14px] sm:text-[15px] font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="bg-[#0e7a5f] hover:bg-[#0b634c] text-white rounded-full px-8 h-12 md:h-14 text-base font-semibold shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300">
                  <Link href="/products">Explore DeepLens &rarr;</Link>
                </Button>
              </motion.div>

              {/* Right Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative w-full z-10 flex justify-center lg:justify-end mt-10 lg:mt-0"
              >
                {/* Subtle Amigosia emerald/mint glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(14,122,95,0.12)_0%,transparent_50%)] pointer-events-none -z-10" />

                <div className="relative w-full max-w-[680px]">
                  <Image
                    src="/products/deeplens-ai-powered-change-impact-analysis--know-w.jpg"
                    alt="DeepLens AI Code Intelligence"
                    width={1280}
                    height={1024}
                    className="w-full h-auto rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                </div>
              </motion.div>

            </div>
          </div>

          {/* Deployment - Featured Product Showcase */}
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[43%_57%] gap-[64px] items-center">
              
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full flex flex-col items-start text-left z-10"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e7f9f1] border border-[#a6e8cd]/50 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#0e7a5f]" />
                  <span className="text-[#0e7a5f] text-[11px] sm:text-[13px] font-semibold tracking-wide uppercase">
                    DEPLOYMENT
                  </span>
                </div>
                
                <h3 className="text-5xl sm:text-[56px] lg:text-[60px] font-heading font-bold text-ink mb-6 leading-[1.05] tracking-tight">
                  Deployment & Cloud Infrastructure
                </h3>
                
                <p className="text-[17px] sm:text-[18px] text-[#52616b] leading-[1.6] max-w-[560px] mb-10">
                  Deploying secure, scalable, and reliable digital solutions with modern cloud infrastructure, DevOps practices, and production-ready architectures.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 max-w-[560px] mb-10">
                  {[
                    "Cloud-native deployment",
                    "Secure API infrastructure",
                    "CI/CD automation",
                    "Scalable backend architecture",
                    "Monitoring & reliability",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#0e7a5f] shrink-0 mt-0.5" />
                      <span className="text-[#52616b] text-[14px] sm:text-[15px] font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="bg-[#0e7a5f] hover:bg-[#0b634c] text-white rounded-full px-8 h-12 md:h-14 text-base font-semibold shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300">
                  <Link href="/products">Explore Our Technology &rarr;</Link>
                </Button>
              </motion.div>

              {/* Right Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative w-full z-10 flex justify-center lg:justify-end mt-10 lg:mt-0"
              >
                {/* Subtle Amigosia emerald/mint glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(14,122,95,0.12)_0%,transparent_50%)] pointer-events-none -z-10" />

                <div className="relative w-full max-w-[680px]">
                  <Image
                    src="/products/deploymind-image.jpg"
                    alt="Deployment & Cloud Infrastructure"
                    width={1280}
                    height={1024}
                    className="w-full h-auto rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                    sizes="(max-width: 1024px) 100vw, 57vw"
                  />
                </div>
              </motion.div>

            </div>
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
