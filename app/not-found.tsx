import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        backgroundColor: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        gap: "2rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          color: "var(--electric)",
          textTransform: "uppercase",
        }}
      >
        404
      </span>

      <h1
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(3rem, 10vw, 8rem)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 0.92,
          color: "var(--white)",
          margin: 0,
        }}
      >
        Page not<br />
        <span style={{ color: "var(--acid)" }}>found.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "1rem",
          color: "rgba(250,250,248,0.55)",
          lineHeight: 1.7,
          maxWidth: "420px",
          margin: 0,
        }}
      >
        This page doesn&apos;t exist or was moved. The rest of the site is right where you left it.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "0.88rem",
            color: "var(--black)",
            backgroundColor: "var(--acid)",
            padding: "0.85rem 2rem",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/work"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 600,
            fontSize: "0.88rem",
            color: "rgba(250,250,248,0.7)",
            border: "1px solid rgba(250,250,248,0.15)",
            padding: "0.85rem 2rem",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          See Our Work
        </Link>
      </div>
    </main>
  );
}
