import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ContactPage from "@/components/pages/contact/ContactPage";

export const metadata: Metadata = {
  title: "Start a Project — Hire a Design & Dev Agency | Outr Buzz",
  description:
    "Ready to build something great? Get in touch with Outr Buzz — a design and development studio in Lahore and Dubai. Share your brief and we'll come back with a clear plan, not a sales pitch.",
  keywords: [
    "hire design agency Lahore", "hire web developer Dubai", "contact branding agency Pakistan",
    "start a project Outr Buzz", "get a website quote Lahore", "brand design inquiry Dubai",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Start a Project — Hire a Design & Dev Agency | Outr Buzz",
    description:
      "Get in touch with Outr Buzz — design and dev studio in Lahore & Dubai. Share your brief, we reply with structure.",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
