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

  const recipient = process.env.CONTACT_TO || "abhishek.konnayil@gmail.com";

  console.log("Contact form submitted:", { name, email, company, message, recipient });

  if (process.env.RESEND_API_KEY) {
    try {
      const { error } = await resend.emails.send({
        from: "Amigosia Contact Form <onboarding@resend.dev>",
        to: recipient,
        replyTo: email,
        subject: `New Contact from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Company: ${company || "N/A"}
          
          Message:
          ${message}
        `,
      });
      if (error) {
        console.error("Resend error:", error);
      }
    } catch (err) {
      console.error("Resend exception:", err);
    }
  }

  return { success: true };
}
