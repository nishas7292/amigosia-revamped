"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Container } from "./container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Works", href: "/works" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
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

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-3">
          <Button asChild size="sm" className="bg-emerald text-white hover:bg-emerald-dark rounded-full">
            <Link href="/contact">Talk to Us</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="text-ink">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href)) 
                        ? "text-emerald" 
                        : "text-ink"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
