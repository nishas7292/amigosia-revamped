import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";
import Link from "next/link";

const departments = [
  {
    name: "Development",
    openings: [
      {
        title: "Full Stack Software Engineer",
        type: "Full-time",
        location: "Palakkad, Kerala (Hybrid)",
        experience: "3-5 years",
        description: "Build robust backend architectures and sleek frontend interfaces for our flagship products, DeepLens and DeployMind."
      },
      {
        title: "Frontend Developer",
        type: "Full-time",
        location: "Remote",
        experience: "2-4 years",
        description: "Translate complex designs into highly responsive, performant, and accessible user interfaces using Next.js and Tailwind CSS."
      }
    ]
  },
  {
    name: "Tester",
    openings: [
      {
        title: "QA Automation Engineer",
        type: "Full-time",
        location: "Palakkad, Kerala (Hybrid)",
        experience: "2-4 years",
        description: "Design and implement automated testing frameworks for our enterprise products, ensuring high reliability and performance across all releases."
      },
      {
        title: "Manual Test Engineer",
        type: "Full-time",
        location: "Palakkad, Kerala (On-site)",
        experience: "1-3 years",
        description: "Execute detailed test plans and work closely with developers to identify and resolve issues before they reach production."
      },
      {
        title: "QA Intern",
        type: "Internship",
        location: "Palakkad, Kerala (On-site)",
        experience: "0-1 years",
        description: "Learn the ropes of software testing, assisting our QA team in ensuring our digital products meet top quality standards."
      }
    ]
  },
  {
    name: "HR & Finance",
    openings: [
      {
        title: "Talent Acquisition Specialist",
        type: "Full-time",
        location: "Palakkad, Kerala (Hybrid)",
        experience: "3-5 years",
        description: "Help us find the best talent in engineering and design to fuel our growth at the Kerala Start-up Mission Incubation Centre."
      },
      {
        title: "Financial Analyst",
        type: "Full-time",
        location: "Remote",
        experience: "2-5 years",
        description: "Analyze financial data, develop forecasting models, and support strategic decision-making as we scale our operations globally."
      }
    ]
  },
  {
    name: "UI & UX",
    openings: [
      {
        title: "Senior Product Designer",
        type: "Full-time",
        location: "Remote",
        experience: "4+ years",
        description: "Lead the design of complex digital products, creating intuitive and beautiful interfaces that delight our users and enterprise partners."
      },
      {
        title: "UI/UX Intern",
        type: "Internship",
        location: "Palakkad, Kerala (Hybrid)",
        experience: "0-1 years",
        description: "Work closely with our senior designers to create wireframes, prototypes, and high-fidelity mockups for upcoming products."
      }
    ]
  }
];

export function CareersOpenPositions() {
  return (
    <Section className="py-24 md:py-32 bg-white">
      <Container className="max-w-4xl">
        <FadeUp className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ink mb-4 tracking-tight">Current Openings</h2>
          <p className="text-lg text-body">
            Become part of a high-performing & collaborative team
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <Accordion defaultValue={[]} className="w-full">
            {departments.map((dept, idx) => (
              <AccordionItem key={dept.name} value={`item-${idx}`} className="border-b border-border py-2">
                <AccordionTrigger className="text-2xl md:text-3xl font-heading font-semibold text-ink hover:no-underline group hover:text-emerald transition-colors py-6 data-[state=open]:text-emerald">
                  <div className="flex items-center gap-4">
                    <span>{dept.name}</span>
                    <span className="text-muted font-normal text-xl bg-surface-alt px-3 py-1 rounded-full group-hover:bg-mint-soft group-hover:text-emerald transition-colors">{dept.openings.length}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2">
                  <div className="flex flex-col gap-6">
                    {dept.openings.map((job) => (
                      <div key={job.title} className="p-6 md:p-8 rounded-2xl border border-border bg-surface hover:border-mint hover:shadow-sm transition-all group/job">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-ink mb-3 group-hover/job:text-emerald transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-body font-medium mb-4">
                              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-emerald" /> {job.type}</span>
                              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald" /> {job.location}</span>
                              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald" /> {job.experience}</span>
                            </div>
                            <p className="text-body leading-relaxed max-w-2xl">{job.description}</p>
                          </div>
                          <div className="shrink-0 mt-2 md:mt-0">
                            <Button asChild className="bg-emerald hover:bg-emerald-dark text-white rounded-full px-8 shadow-sm hover:shadow transition-all hover:-translate-y-0.5">
                              <Link href="#apply">Apply Now</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="bg-mint-soft border-mint text-emerald hover:bg-emerald hover:text-white hover:border-emerald rounded-lg px-8 py-6 text-base shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              See All Openings &rarr;
            </Button>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
