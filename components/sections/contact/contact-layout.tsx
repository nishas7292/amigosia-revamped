"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";

export function ContactLayout() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
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
              Whether you're a startup with an MVP idea or an enterprise scaling a platform, we build it with you — end to end.
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
                  <p className="text-body text-lg">Thank you for reaching out. We'll get back to you shortly.</p>
                  <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4 rounded-full border-2 text-emerald hover:bg-emerald hover:text-white">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-6">
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
                      <Input id="name" name="name" required placeholder="Enter your name" className="h-12 rounded-xl focus-visible:ring-emerald" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-ink">Email <span className="text-destructive">*</span></label>
                      <Input id="email" name="email" type="email" required placeholder="Enter your email" className="h-12 rounded-xl focus-visible:ring-emerald" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
                    <Input id="company" name="company" placeholder="Acme Inc." className="h-12 rounded-xl focus-visible:ring-emerald" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">Message <span className="text-destructive">*</span></label>
                    <Textarea id="message" name="message" required placeholder="How can we help you?" className="min-h-[150px] rounded-xl resize-none focus-visible:ring-emerald" />
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
