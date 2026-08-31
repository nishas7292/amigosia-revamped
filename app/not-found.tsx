import Link from "next/link";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center bg-surface-alt">
      <Container className="text-center flex flex-col items-center">
        <p className="text-emerald font-semibold tracking-wide mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-lg text-body mb-10 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald-dark rounded-full px-10 h-14 text-base font-semibold">
          <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    </Section>
  );
}
