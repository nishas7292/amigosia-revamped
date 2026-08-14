import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { ApplyDialog } from "./apply-dialog";

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
    <Section className="py-24 md:py-36 bg-white">
      <Container className="max-w-6xl">
        <FadeUp className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald text-sm font-semibold mb-4">
            <span>Career Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ink mb-4 tracking-tight">Current Openings</h2>
          <p className="text-lg md:text-xl text-body max-w-2xl">
            Become part of a high-performing & collaborative team building world-class software products.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <Accordion defaultValue={["item-0", "item-1"]} className="w-full space-y-4">
            {departments.map((dept, idx) => (
              <AccordionItem key={dept.name} value={`item-${idx}`} className="border border-border rounded-3xl px-6 md:px-10 py-2 bg-surface-alt/50 data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all">
                <AccordionTrigger className="cursor-pointer text-2xl md:text-3xl font-heading font-semibold text-ink hover:no-underline group hover:text-emerald transition-colors py-6 md:py-8 data-[state=open]:text-emerald **:data-[slot=accordion-trigger-icon]:size-7 md:**:data-[slot=accordion-trigger-icon]:size-9 **:data-[slot=accordion-trigger-icon]:text-emerald">
                  <div className="flex items-center gap-4">
                    <span>{dept.name}</span>
                    <span className="text-emerald font-semibold text-base md:text-lg bg-mint-soft px-4 py-1 rounded-full group-hover:bg-mint transition-colors">
                      {dept.openings.length} {dept.openings.length === 1 ? "opening" : "openings"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-4">
                  <div className="flex flex-col gap-6">
                    {dept.openings.map((job) => (
                      <div key={job.title} className="p-6 md:p-10 rounded-2xl border border-border bg-white hover:border-mint hover:shadow-md transition-all group/job">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4 group-hover/job:text-emerald transition-colors tracking-tight">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-body font-medium mb-5">
                              <span className="flex items-center gap-2.5 bg-surface-alt px-3.5 py-1.5 rounded-xl border border-border/60"><Briefcase className="w-4 h-4 text-emerald" /> {job.type}</span>
                              <span className="flex items-center gap-2.5 bg-surface-alt px-3.5 py-1.5 rounded-xl border border-border/60"><MapPin className="w-4 h-4 text-emerald" /> {job.location}</span>
                              <span className="flex items-center gap-2.5 bg-surface-alt px-3.5 py-1.5 rounded-xl border border-border/60"><Clock className="w-4 h-4 text-emerald" /> {job.experience}</span>
                            </div>
                            <p className="text-body text-base md:text-lg leading-relaxed max-w-3xl">{job.description}</p>
                          </div>
                          <div className="shrink-0 mt-4 lg:mt-0">
                            <ApplyDialog jobTitle={job.title} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </Container>
    </Section>
  );
}
