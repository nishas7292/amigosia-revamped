"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("bot_field") as string;

  if (honeypot) {
    return { success: false, error: "Spam detected." };
  }

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!process.env.RESEND_API_KEY) {
    // Mock success if API key is missing (e.g. local dev without env setup)
    console.log("Mock email sent:", { name, email, company, message });
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_TO || "nidheeshvrealme@gmail.com",
      subject: `New Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        
        Message:
        ${message}
      `,
    });
    
    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
