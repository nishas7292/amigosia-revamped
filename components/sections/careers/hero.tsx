"use client";

import { useState, useRef } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertCircle, Send, Mail, User, Phone, UploadCloud, FileText, X } from "lucide-react";

export function CareersHero() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg("File size must be less than 5MB.");
        return;
      }
      setSelectedFile(file);
      setErrorMsg("");
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg("File size must be less than 5MB.");
        return;
      }
      setSelectedFile(file);
      setErrorMsg("");
    }
  }

  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

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
    const phone = formData.get("phone")?.toString().trim() || "";

    const errors: { name?: string; email?: string; phone?: string } = {};

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

    if (!phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number must be exactly 10 digits.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMsg("Please fix the errors in the form before submitting.");
      return;
    }

    if (selectedFile) {
      formData.set("resume", selectedFile);
    }

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setSelectedFile(null);
      setFieldErrors({});
    } catch (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <Section className="min-h-[75vh] flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 bg-surface-alt border-b border-border">
      <Container>
        <FadeUp className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald text-sm font-semibold mb-6">
            <Mail className="w-4 h-4" />
            <span>Join Amigosia Team</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-ink mb-6 tracking-tight">
            Build the Future With Us
          </h1>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto font-normal mb-10">
            Join a team of passionate developers, designers, and innovators creating software that makes a real impact.
          </p>

          {/* Quick Connect Form Card */}
          <div className="w-full max-w-3xl bg-white p-8 sm:p-10 md:p-12 rounded-3xl border border-border shadow-md text-left">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald mb-2" />
                <h3 className="text-2xl font-heading font-semibold text-ink">Thank you for connecting!</h3>
                <p className="text-body text-base max-w-lg">
                  We have received your details and resume at <span className="font-semibold text-emerald">admin@amigosia.com</span>. Our hiring team will get back to you shortly.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  size="lg"
                  className="mt-4 rounded-full border-2 text-emerald hover:bg-emerald hover:text-white px-8"
                >
                  Connect another candidate
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-ink mb-1">Quick Connect</h3>
                </div>

                {status === "error" && (
                  <div className="bg-destructive/10 text-destructive p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="hero-name" className="text-sm font-medium text-ink flex items-center gap-1.5">
                      <User className="w-4 h-4 text-emerald" /> Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="hero-name"
                      name="name"
                      placeholder="Your full name"
                      className={`h-13 sm:h-14 rounded-2xl focus-visible:ring-emerald text-base px-4 ${
                        fieldErrors.name ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-destructive font-medium mt-1">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="hero-email" className="text-sm font-medium text-ink flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-emerald" /> Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="hero-email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      className={`h-13 sm:h-14 rounded-2xl focus-visible:ring-emerald text-base px-4 ${
                        fieldErrors.email ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-destructive font-medium mt-1">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-2">
                  <label htmlFor="hero-phone" className="text-sm font-medium text-ink flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald" /> Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="hero-phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit Indian phone number"
                    className={`h-13 sm:h-14 rounded-2xl focus-visible:ring-emerald text-base px-4 ${
                      fieldErrors.phone ? "border-destructive focus-visible:ring-destructive" : ""
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-xs text-destructive font-medium mt-1">{fieldErrors.phone}</p>
                  )}
                </div>

                {/* Resume Upload Box */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ink flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald" /> Resume / CV Attachment <span className="text-body text-xs font-normal">(PDF, DOC, DOCX up to 5MB)</span>
                  </label>

                  <input
                    type="file"
                    ref={fileInputRef}
                    name="resume"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {selectedFile ? (
                    <div className="flex items-center justify-between p-4 bg-mint-soft/50 border border-mint rounded-2xl">
                      <div className="flex items-center gap-3 truncate">
                        <div className="p-2.5 bg-emerald/10 text-emerald rounded-xl">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="truncate text-left">
                          <p className="text-sm font-semibold text-ink truncate">{selectedFile.name}</p>
                          <p className="text-xs text-body">{Math.round(selectedFile.size / 1024)} KB</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setSelectedFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="text-body hover:text-destructive hover:bg-destructive/10 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                        isDragging
                          ? "border-emerald bg-mint-soft/40 scale-[1.01]"
                          : "border-border hover:border-emerald/60 hover:bg-surface-alt/50"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="p-3 bg-mint-soft text-emerald rounded-full">
                          <UploadCloud className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-ink">
                          Click to upload <span className="text-body font-normal">or drag and drop your resume</span>
                        </p>
                        <p className="text-xs text-body">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full bg-emerald text-white hover:bg-emerald-dark rounded-full h-14 sm:h-16 text-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-4"
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


