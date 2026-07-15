import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CareersDepartments() {
  const departments = [
    {
      title: "Human Resources (HR)",
      description: "Help us build and support the incredible team at Amigosia. Our HR department is dedicated to fostering a culture of innovation and continuous growth.",
      link: "/careers/hr"
    },
    {
      title: "Finance",
      description: "Join our finance team to drive sustainable growth and manage resources efficiently as we scale our digital products and enterprise solutions.",
      link: "/careers/finance"
    }
  ];

  return (
    <Section className="py-24 md:py-32 bg-surface">
      <Container>
        <FadeUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ink mb-4 tracking-tight">Our Departments</h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Discover opportunities to make an impact in key functional areas that power our business.
          </p>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {departments.map((dept, index) => (
            <FadeUp key={dept.title} delay={0.1 * index}>
              <Link href={dept.link} className="block h-full group">
                <Card className="h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-border group-hover:border-mint overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--mint-soft),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl font-semibold text-ink">{dept.title}</CardTitle>
                    <CardDescription className="text-base text-body leading-relaxed mt-2">
                      {dept.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="mt-auto relative z-10 pt-4">
                    <span className="text-emerald font-medium flex items-center gap-2 group-hover:text-emerald-dark transition-colors">
                      View Openings <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
