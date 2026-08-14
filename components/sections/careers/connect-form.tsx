"use client";

import { useState } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, AlertCircle, Send, Mail, User } from "lucide-react";

export function CareersConnectForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const botField = formData.get("bot_field");

    if (botField) {
      setStatus("error");
      setErrorMsg("Spam detected.");
      return;
    }

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !email) {
      setStatus("error");
      setErrorMsg("Please fill in both your name and email.");
      return;
    }

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <Section id="connect-with-us" className="py-24 md:py-32 bg-surface-alt border-t border-border">
      <Container className="max-w-4xl">
        <FadeUp className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-soft text-emerald text-sm font-semibold mb-4">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-ink tracking-tight mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Don't see an open position that fits? Send us your details and we'll reach out when a suitable role opens up.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border max-w-2xl mx-auto">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                <CheckCircle2 className="w-16 h-16 text-emerald mb-2" />
                <h3 className="text-2xl font-heading font-semibold text-ink">Message Sent!</h3>
                <p className="text-body text-lg">
                  Thank you for reaching out! Your submission has been sent to admin@amigosia.com and we'll get back to you soon.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="mt-4 rounded-full border-2 text-emerald hover:bg-emerald hover:text-white"
                >
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
                  <label>
                    Don't fill this out: <input name="bot_field" tabIndex={-1} />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="careers-connect-name" className="text-sm font-medium text-ink flex items-center gap-1.5">
                      <User className="w-4 h-4 text-emerald" />
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="careers-connect-name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="h-12 rounded-xl focus-visible:ring-emerald"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="careers-connect-email" className="text-sm font-medium text-ink flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-emerald" />
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="careers-connect-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="h-12 rounded-xl focus-visible:ring-emerald"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="careers-connect-message" className="text-sm font-medium text-ink">
                    Message / Note (Optional)
                  </label>
                  <Textarea
                    id="careers-connect-message"
                    name="message"
                    placeholder="Tell us about your background, skills, or position of interest..."
                    className="min-h-[120px] rounded-xl resize-none focus-visible:ring-emerald"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full bg-emerald text-white hover:bg-emerald-dark rounded-full h-14 text-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>{status === "loading" ? "Connecting..." : "Connect with us"}</span>
                </Button>
              </form>
            )}
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
