"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitCareerApplication } from "@/app/actions/careers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ApplyDialogProps {
  jobTitle: string;
}

export function ApplyDialog({ jobTitle }: ApplyDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const res = await submitCareerApplication(null, formData);
      if (res.success) {
        setOpen(false);
      } else {
        alert(res.message);
      }
    } catch (err) {
      alert("Error submitting application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger 
        render={
          <Button className="cursor-pointer bg-emerald hover:bg-emerald-dark text-white rounded-full px-8 shadow-sm hover:shadow transition-all hover:-translate-y-0.5" />
        }
      >
        Apply Now
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below to apply for this position. We'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" name="first_name" required placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" name="last_name" required placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio / LinkedIn URL (Optional)</Label>
              <Input id="portfolio" name="portfolio" type="url" placeholder="https://" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for applying</Label>
              <Textarea 
                id="reason" 
                name="reason"
                required
                placeholder="What excites you about this role?" 
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
              <Textarea 
                id="cover-letter" 
                name="cover_letter"
                placeholder="Tell us why you're a great fit..." 
                className="min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resume">Resume/CV URL</Label>
              <Input id="resume" name="resume" type="url" required placeholder="https://drive.google.com/..." />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="cursor-pointer w-full bg-emerald hover:bg-emerald-dark text-white rounded-full">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
