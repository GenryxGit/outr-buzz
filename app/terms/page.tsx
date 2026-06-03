import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Outr Buzz services and website.",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing outrbuzz.com or engaging Outr Buzz for any service, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services. We reserve the right to update these terms at any time with notice posted on this page.`,
  },
  {
    title: "Services",
    body: `Outr Buzz provides design, development, product strategy, and related digital services ("Services") as agreed in individual project proposals or statements of work. The specific scope, deliverables, timeline, and fees for each engagement are defined in a separate written agreement. These Terms apply to all engagements unless explicitly superseded by a signed contract.`,
  },
  {
    title: "Intellectual Property",
    body: `Upon full payment of all outstanding invoices, ownership of final deliverables created specifically for your project transfers to you. Outr Buzz retains the right to display completed work in our portfolio and case studies unless you request otherwise in writing. We retain ownership of all tools, frameworks, methodologies, and pre-existing materials used in delivering the Services.`,
  },
  {
    title: "Payment Terms",
    body: `Payment schedules are specified in each project proposal. Unless otherwise agreed, a deposit of 50% is required before work begins, with the balance due upon project completion. Invoices not settled within 14 days of the due date may incur a late fee of 1.5% per month. Outr Buzz reserves the right to pause or terminate work on overdue accounts.`,
  },
  {
    title: "Confidentiality",
    body: `Both parties agree to keep confidential any non-public information exchanged during an engagement. This obligation does not apply to information that is publicly available, independently developed, or disclosed with the other party's written consent. Confidentiality obligations survive termination of the engagement for a period of two years.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, Outr Buzz shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our Services or website. Our total liability for any claim shall not exceed the fees paid by you for the specific Service giving rise to the claim in the three months preceding the claim.`,
  },
  {
    title: "Governing Law",
    body: `These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these Terms or our Services shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan, unless otherwise agreed in writing.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms? Reach us at hello@outrbuzz.com. For project enquiries, please use our contact page.`,
  },
];

export default function TermsPage() {
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
              Terms of Service
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
              <Link href="/privacy" style={{ color: "var(--black)", textDecoration: "underline" }}>
                Privacy Policy
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
