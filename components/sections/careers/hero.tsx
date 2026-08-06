"use client";

import { useEffect, useState } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Mail } from "lucide-react";

export function CareersHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent) || window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const email = "amigosia.com@gmail.com";
  const subject = "Job Application / Resume - Amigosia Careers";
  const body = `Hello Amigosia Team,

I would like to submit my resume for opportunities at Amigosia. Please find my details and resume attached.

Thank you!`;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleConnectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      e.preventDefault();
      window.location.href = mailtoUrl;
    }
  };

  return (
    <Section className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 md:pt-44 md:pb-36 bg-surface-alt border-b border-border text-center">
      <Container>
        <FadeUp className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-8 tracking-tight">
            Build the Future With Us
          </h1>
          <p className="text-xl md:text-2xl text-body leading-relaxed max-w-3xl mx-auto font-medium mb-12">
            Join a team of passionate developers, designers, and innovators creating software that makes a real impact.
          </p>

          <div className="flex items-center justify-center">
            <a
              href={isMobile ? mailtoUrl : gmailComposeUrl}
              target={isMobile ? undefined : "_blank"}
              rel={isMobile ? undefined : "noopener noreferrer"}
              onClick={handleConnectClick}
              className="inline-flex items-center justify-center gap-2.5 bg-emerald text-white hover:bg-emerald-dark rounded-full px-10 py-4 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              <span>Connect with us</span>
            </a>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}

