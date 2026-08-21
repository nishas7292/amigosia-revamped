import { Metadata } from "next";
import { ContactLayout } from "@/components/sections/contact/contact-layout";

export const metadata: Metadata = {
  title: "Contact Us & Project Inquiry",
  description:
    "Get in touch with Amigosia engineering team. Discuss your platform idea, AI project, or enterprise partnership.",
  alternates: {
    canonical: "https://amigosia.com/contact",
  },
};

export default function ContactPage() {
  return (
    <ContactLayout />
  );
}
