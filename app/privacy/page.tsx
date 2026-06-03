import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Outr Buzz collects, uses, and protects your information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Introduction",
    body: `Outr Buzz ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect when you visit outrbuzz.com, how we use it, and your rights regarding that data. By using our website you agree to the practices described here.`,
  },
  {
    title: "Information We Collect",
    body: `We collect information you provide directly — such as your name, email address, and project details when you fill out our contact form. We also collect certain technical data automatically, including your IP address, browser type, referring URL, and pages visited, via standard server logs and analytics tools.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to respond to your enquiries, deliver the services you request, improve our website and service quality, and send occasional updates or project-related communications. We do not sell, rent, or share your personal data with third parties for their own marketing purposes.`,
  },
  {
    title: "Cookies",
    body: `Our website uses cookies to remember your preferences and analyse traffic patterns. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Some features of the site may not function properly without cookies. We do not use cookies to track you across third-party websites.`,
  },
  {
    title: "Data Retention",
    body: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected or as required by applicable law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have the right to access, correct, or delete your personal data, object to or restrict its processing, or request data portability. To exercise any of these rights, please contact us at the email address below.`,
  },
  {
    title: "Contact",
    body: `If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at hello@outrbuzz.com. We aim to respond to all enquiries within 5 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--cream)", minHeight: "100dvh" }}>

        {/* Hero */}
        <section
          style={{
            padding: "clamp(8rem, 14vw, 12rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 6rem)",
            borderBottom: "1px solid rgba(10,10,10,0.08)",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "var(--electric)",
                display: "block",
                marginBottom: "1.2rem",
              }}
            >
              LEGAL
            </span>
            <h1
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "var(--black)",
                margin: "0 0 1.5rem",
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--muted)",
                margin: 0,
              }}
            >
              Last updated: June 2025 &nbsp;·&nbsp;{" "}
              <Link href="/terms" style={{ color: "var(--black)", textDecoration: "underline" }}>
                Terms of Service
              </Link>
            </p>
          </div>
        </section>

        {/* Body */}
        <section
          style={{
            padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    letterSpacing: "-0.01em",
                    color: "var(--black)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.98rem",
                    lineHeight: 1.8,
                    color: "var(--muted)",
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
