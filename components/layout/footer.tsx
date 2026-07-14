import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-ink text-surface py-12 md:py-16 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-heading font-semibold text-white mb-4 block">
              Amigosia
            </Link>
            <p className="text-surface-alt/70 max-w-sm mb-6">
              Building Scalable Digital Products for Startups, Enterprises, and Global Partners.
            </p>
            <p className="text-surface-alt/70 text-sm leading-relaxed">
              Kerala Start-up Mission Incubation Centre<br/>
              Palakkad, Kerala, India
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-surface-alt/70 hover:text-mint transition-colors">About</Link></li>
              <li><Link href="/ai-products" className="text-surface-alt/70 hover:text-mint transition-colors">AI Products</Link></li>
              <li><Link href="/products" className="text-surface-alt/70 hover:text-mint transition-colors">Products</Link></li>
              <li><Link href="/services" className="text-surface-alt/70 hover:text-mint transition-colors">Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-surface-alt/70">admin@amigosia.com</li>
              <li className="text-surface-alt/70">+91 81234 25003</li>
              <li><Link href="/contact" className="text-emerald hover:text-mint transition-colors">Talk to Us &rarr;</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface-alt/50 text-sm">
            © {new Date().getFullYear()} Amigosia Private Limited. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
