"use server";

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  mailtoHref?: string;
  errors: Partial<Record<"name" | "email" | "services" | "details", string>>;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
};

const CONTACT_EMAIL = "hello@outrbuzz.com";

function getStringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function createContactDraft(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = getStringValue(formData.get("name"));
  const email = getStringValue(formData.get("email"));
  const company = getStringValue(formData.get("company"));
  const timeline = getStringValue(formData.get("timeline"));
  const budget = getStringValue(formData.get("budget"));
  const source = getStringValue(formData.get("source"));
  const details = getStringValue(formData.get("details"));
  const services = formData
    .getAll("services")
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);

  const errors: ContactFormState["errors"] = {};

  if (!name) {
    errors.name = "Please share your name.";
  }

  if (!email) {
    errors.email = "Please share your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (services.length === 0) {
    errors.services = "Choose at least one service.";
  }

  if (!details || details.length < 30) {
    errors.details = "Add a bit more detail so the brief is useful.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  const subject = `[Outr Buzz Inquiry] ${name}${company ? ` - ${company}` : ""}`;
  const bodyLines = [
    "Hi Outr Buzz,",
    "",
    "I would like to discuss a new project.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Services: ${services.join(", ")}`,
    `Budget: ${budget || "Not provided"}`,
    `Timeline: ${timeline || "Not provided"}`,
    `How they heard about us: ${source || "Not provided"}`,
    "",
    "Project details:",
    details,
  ];

  return {
    status: "success",
    message:
      "Your project brief is ready. Open the drafted email below to send it directly to our team.",
    mailtoHref: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`,
    errors: {},
  };
}
