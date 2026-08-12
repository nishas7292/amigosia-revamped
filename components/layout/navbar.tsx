"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Container } from "./container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b shadow-sm",
          scrolled ? "border-border/60 py-3" : "border-border/20 py-4"
        )}
      >
        <Container className="flex items-center justify-between min-h-[56px] md:min-h-[64px]">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 -mt-1">
            <Image
              src="/amigosia-logo.png"
              alt="Amigosia"
              width={1131}
              height={1600}
              priority
              className="h-11 md:h-12 w-auto"
            />
            <span className="text-xl font-heading font-semibold tracking-tight text-ink">Amigosia</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors hover:text-emerald",
                  pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href)) 
                    ? "text-emerald" 
                    : "text-body"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-6 shadow-sm hover:shadow-md transition-all">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button asChild size="sm" className="bg-emerald text-white hover:bg-emerald-dark rounded-full text-xs px-3.5 h-8">
              <Link href="/contact">Talk to Us</Link>
            </Button>
            
            <button 
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-2 text-ink hover:text-emerald hover:bg-mint-soft rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald active:scale-95"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Nav Overlay & Sidebar Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[100] md:hidden transition-all duration-300",
          isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Sidebar Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-[100dvh] w-[85vw] max-w-[320px] bg-white shadow-2xl flex flex-col border-l border-border transition-transform duration-300 ease-out z-[101]",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-border bg-white">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <Image
                src="/amigosia-logo.png"
                alt="Amigosia"
                width={1131}
                height={1600}
                className="h-8 w-auto"
              />
              <span className="font-heading font-semibold text-lg text-ink">Amigosia</span>
            </Link>
            <button 
              type="button"
              className="p-2 text-ink hover:text-emerald hover:bg-mint-soft rounded-lg transition-colors active:scale-95"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 flex flex-col gap-1.5 p-5 overflow-y-auto bg-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between",
                    isActive 
                      ? "bg-mint-soft text-emerald font-semibold" 
                      : "text-ink hover:bg-surface-alt hover:text-emerald"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-emerald" />}
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-border bg-surface-alt">
            <Button asChild className="w-full bg-emerald text-white hover:bg-emerald-dark rounded-full h-12 text-base font-medium shadow-sm">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Talk to Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
