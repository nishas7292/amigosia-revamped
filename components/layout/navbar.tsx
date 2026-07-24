"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { motion, AnimatePresence } from "motion/react";

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
          "fixed top-0 w-full z-40 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container className="flex items-center justify-between">
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
          <div className="md:hidden flex items-center gap-3">
            <Button asChild size="sm" className="bg-emerald text-white hover:bg-emerald-dark rounded-full">
              <Link href="/contact">Talk to Us</Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-ink"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </Container>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div className="flex items-center justify-end p-5 border-b border-border">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-ink hover:bg-mint-soft hover:text-emerald"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <nav className="flex flex-col gap-6 p-8 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-xl font-medium transition-colors",
                      pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href)) 
                        ? "text-emerald" 
                        : "text-ink hover:text-emerald"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
