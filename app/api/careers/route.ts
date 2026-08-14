import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(req: Request) {
  try {
    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let position = "";
    let resumeFile: File | null = null;

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      name = formData.get("name")?.toString().trim() || "";
      email = formData.get("email")?.toString().trim() || "";
      phone = formData.get("phone")?.toString().trim() || "";
      message = formData.get("message")?.toString().trim() || "";
      position = formData.get("position")?.toString().trim() || "";

      const file = formData.get("resume");
      if (file && file instanceof File && file.size > 0) {
        resumeFile = file;
      }
    } else {
      const body = await req.json();
      name = body.name || "";
      email = body.email || "";
      phone = body.phone || "";
      message = body.message || "";
      position = body.position || "";
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO || process.env.CONTACT_EMAIL || "admin@amigosia.com";

    console.log("Processing career connect submission:", {
      name,
      email,
      phone,
      message,
      position,
      resumeFileName: resumeFile?.name,
      recipient,
    });

    let data = null;
    let resendError = null;

    if (process.env.RESEND_API_KEY) {
      const attachments = [];

      if (resumeFile) {
        const arrayBuffer = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        attachments.push({
          filename: resumeFile.name,
          content: buffer,
        });
      }

      const res = await resend.emails.send({
        from: "Amigosia Careers <onboarding@resend.dev>",
        to: recipient,
        replyTo: email,
        subject: `New Career Connect Submission from ${name}`,
        text: `New career connect inquiry from Amigosia Website

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ""}${position ? `Position: ${position}\n` : ""}
Message / Note:
${message || "No message provided."}
${resumeFile ? `\nAttached Resume: ${resumeFile.name} (${Math.round(resumeFile.size / 1024)} KB)` : ""}`,
        attachments: attachments.length > 0 ? attachments : undefined,
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