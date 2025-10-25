// actions/sendEmail.ts
"use server";

import nodemailer from "nodemailer";

// Optional: basic length checks if you don't already have helpers
function ok(input: unknown, max: number) {
  return typeof input === "string" && input.trim().length > 0 && input.length <= max;
}

export async function sendEmail(formData: FormData) {
  const senderName = String(formData.get("senderName") || "").trim();
  const senderEmail = String(formData.get("senderEmail") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!ok(senderEmail, 500) || !ok(message, 5000)) {
    return { data: null, error: "Please fill out all fields correctly." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL || !TO_EMAIL) {
    return { data: null, error: "Email is not configured on the server." };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for 587
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const info = await transporter.sendMail({
    from: `Portfolio Contact <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: senderEmail, // so you can reply to the visitor
    subject: `New message from ${senderName || "Portfolio"}`,
    text: `From: ${senderName} <${senderEmail}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${senderName} &lt;${senderEmail}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });

  return info.messageId
    ? { data: "ok", error: null }
    : { data: null, error: "Failed to send email." };
}
