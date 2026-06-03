"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        Something went wrong
      </span>

      <h1
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 0.95,
          color: "var(--white)",
          margin: 0,
        }}
      >
        Unexpected<br />
        <span style={{ color: "var(--acid)" }}>error.</span>
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
        Something broke on our end. Try again or head back home.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={reset}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "0.88rem",
            color: "var(--black)",
            backgroundColor: "var(--acid)",
            padding: "0.85rem 2rem",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
        <Link
          href="/"
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
          Back to Home
        </Link>
      </div>
    </main>
  );
}
