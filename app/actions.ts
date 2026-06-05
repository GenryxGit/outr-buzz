"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  errors: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
};

// Where contact submissions are delivered.
const TO_EMAIL = "hello@outrbuzz.com";
// Sender — must be on a domain verified in Resend.
// Until outrbuzz.com is verified, use "Outr Buzz <onboarding@resend.dev>" for testing.
const FROM_EMAIL = "Outr Buzz <hello@outrbuzz.com>";

function getStringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendContactEmail(formData: FormData): Promise<ContactFormState> {
  const firstName = getStringValue(formData.get("firstName"));
  const lastName = getStringValue(formData.get("lastName"));
  const email = getStringValue(formData.get("email"));
  const subject = getStringValue(formData.get("subject"));
  const message = getStringValue(formData.get("message"));

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  // ── Validation ──
  const errors: ContactFormState["errors"] = {};
  if (!firstName || !lastName) {
    errors.name = "Please share your full name.";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || message.length < 10) {
    errors.message = "Please add a bit more detail.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  // ── Send via Resend ──
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: "Email is not configured yet. Please try again shortly.",
      errors: {},
    };
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New project inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: subject ? `[Outr Buzz] ${subject}` : `[Outr Buzz] New inquiry from ${fullName}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: "Something went wrong. Please try again.", errors: {} };
    }

    return { status: "success", message: "Thanks! Your message is on its way.", errors: {} };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return { status: "error", message: "Something went wrong. Please try again.", errors: {} };
  }
}
