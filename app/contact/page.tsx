import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ContactPage from "@/components/pages/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project conversation with Outr Buzz. Share your brief, timeline, and goals — we reply with structure, not fluff.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact | Outr Buzz",
    description:
      "Start a project conversation with Outr Buzz. Share your brief, timeline, and goals.",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
