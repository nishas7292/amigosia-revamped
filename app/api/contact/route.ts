import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO || process.env.CONTACT_EMAIL || "admin@amigosia.com";

    console.log("Processing contact form submission:", { name, email, company, message, recipient });

    let data = null;
    let resendError = null;

    if (process.env.RESEND_API_KEY) {
      const res = await resend.emails.send({
        from: "Amigosia Contact Form <onboarding@resend.dev>",
        to: recipient,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `New contact form submission from Amigosia Website

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}

Message:
${message}`,
      });
      data = res.data;
      resendError = res.error;
    }

    if (resendError) {
      console.error("Resend API error:", resendError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact API route error:", error);
    return NextResponse.json({ success: true, message: "Logged submission" });
  }
}
