"use client";

import { useState } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";

export function ContactLayout() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const botField = formData.get("bot_field");

    if (botField) {
      setStatus("error");
      setErrorMsg("Spam detected.");
      return;
    }

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const company = formData.get("company")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const errors: { name?: string; email?: string; message?: string } = {};

    if (!name) {
      errors.name = "Name is required.";
    } else if (name.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "Name must contain only letters and spaces.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email format.";
    }

    if (!message) {
      errors.message = "Message is required.";
    } else if (message.length < 5) {
      errors.message = "Message must be at least 5 characters.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMsg("Please fix the errors in the form before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, company, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFieldErrors({});
    } catch (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <Section className="pt-32 pb-24 md:pt-40 bg-surface-alt min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <FadeUp className="lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-ink mb-6 tracking-tight">
              Let's Build Something Together
            </h1>
            <p className="text-lg text-body mb-12 max-w-md leading-relaxed">
              Whether you're a startup with an idea or an enterprise scaling a platform, we build it with you — end to end.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-mint-soft flex items-center justify-center shrink-0 group-hover:bg-mint transition-colors">
                  <MapPin className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-lg mb-1">Amigosia Private Limited</h3>
                  <p className="text-body leading-relaxed">Kerala Start-up Mission Incubation Centre<br/>Palakkad, Kerala, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-mint-soft flex items-center justify-center shrink-0 group-hover:bg-mint transition-colors">
                  <Mail className="w-6 h-6 text-emerald" />
                </div>
                <a href="mailto:admin@amigosia.com" className="text-body text-lg hover:text-emerald transition-colors font-medium">
                  admin@amigosia.com
                </a>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-mint-soft flex items-center justify-center shrink-0 group-hover:bg-mint transition-colors">
                  <Phone className="w-6 h-6 text-emerald" />
                </div>
                <a href="tel:+918123425003" className="text-body text-lg hover:text-emerald transition-colors font-medium">
                  +91 81234 25003
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Right: Form */}
          <FadeUp delay={0.2} className="lg:w-7/12">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald mb-2" />
                  <h3 className="text-2xl font-heading font-semibold text-ink">Message Sent!</h3>
                  <p className="text-body text-lg">Your message has been sent successfully. We'll get back to you soon.</p>
                  <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4 rounded-full border-2 text-emerald hover:bg-emerald hover:text-white">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="bg-destructive/10 text-destructive p-4 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>{errorMsg}</p>
                    </div>
                  )}
                  
                  {/* Honeypot */}
                  <div className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot_field" tabIndex={-1} /></label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-ink">Name <span className="text-destructive">*</span></label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className={`h-12 rounded-xl focus-visible:ring-emerald ${
                          fieldErrors.name ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-destructive font-medium mt-1">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-ink">Email <span className="text-destructive">*</span></label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`h-12 rounded-xl focus-visible:ring-emerald ${
                          fieldErrors.email ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-destructive font-medium mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-ink">Company <span className="text-body text-xs font-normal">(Optional)</span></label>
                    <Input id="company" name="company" placeholder="Acme Inc." className="h-12 rounded-xl focus-visible:ring-emerald" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">Message <span className="text-destructive">*</span></label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      className={`min-h-[150px] rounded-xl resize-none focus-visible:ring-emerald ${
                        fieldErrors.message ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-destructive font-medium mt-1">{fieldErrors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={status === "loading"} 
                    className="w-full bg-emerald text-white hover:bg-emerald-dark rounded-full h-14 text-lg mt-4 shadow-sm hover:shadow-md transition-all"
                  >
                    {status === "loading" ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
