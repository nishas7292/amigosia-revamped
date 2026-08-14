import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, position, phone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO || process.env.CONTACT_EMAIL || "admin@amigosia.com";

    console.log("Processing career connect submission:", { name, email, message, position, recipient });

    let data = null;
    let resendError = null;

    if (process.env.RESEND_API_KEY) {
      const res = await resend.emails.send({
        from: "Amigosia Careers <onboarding@resend.dev>",
        to: recipient,
        replyTo: email,
        subject: `New Career Connect Submission from ${name}`,
        text: `New career connect inquiry from Amigosia Website

Name: ${name}
Email: ${email}
${position ? `Position: ${position}\n` : ""}${phone ? `Phone: ${phone}\n` : ""}
Message / Note:
${message || "No message provided."}`,
      });
      data = res.data;
      resendError = res.error;
    }

    if (resendError) {
      console.error("Resend API error:", resendError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Careers API route error:", error);
    return NextResponse.json({ success: true, message: "Logged submission" });
  }
}