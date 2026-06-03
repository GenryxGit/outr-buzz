"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Footer.module.css";

gsap.registerPlugin(ScrollTrigger);

const COLS = [
  {
    head: "nav",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Journal", href: "/#journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    head: "services",
    links: [
      { label: "UI/UX Design", href: "/contact" },
      { label: "Development", href: "/contact" },
      { label: "Product Strategy", href: "/contact" },
      { label: "Brand Identity", href: "/contact" },
    ],
  },
  {
    head: "outrbuzz",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    head: "social",
    links: [
      { label: "Instagram", href: "https://instagram.com/outrbuzz" },
      { label: "Dribbble", href: "https://dribbble.com/outrbuzz" },
      { label: "Behance", href: "https://behance.net/outrbuzz" },
      { label: "LinkedIn", href: "https://linkedin.com/company/outrbuzz" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(brandRef.current,
        { x: "10vw" },
        {
          x: "-22vw",
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.5,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef}>

      {/* ══ SECTION 1 — BLACK: subscribe + nav + OUTR BUZZ ══ */}
      <div style={{ backgroundColor: "var(--black)" }}>

        {/* Top row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "3rem",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)",
        }}>

          {/* Left: heading + paragraph + subscribe */}
          <div style={{ maxWidth: "360px" }}>
            <h2 style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
              color: "var(--white)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "0.8rem",
            }}>
              The right amount<br />of Buzz.
            </h2>
            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.84rem",
              color: "rgba(250,250,248,0.55)",
              lineHeight: 1.65,
              marginBottom: "1.6rem",
            }}>
              Design insights, case studies and studio news —<br />drop us a line to stay in the loop.
            </p>
            <Link
              href="mailto:hello@outrbuzz.com"
              className={styles.ctaBtn}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.72rem 1.6rem",
                borderRadius: "100px",
                backgroundColor: "var(--acid)",
                color: "var(--black)",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "0.82rem",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              hello@outrbuzz.com →
            </Link>
          </div>

          {/* Right: 4 nav columns */}
          <div style={{
            display: "flex",
            gap: "clamp(2rem, 4vw, 4rem)",
            flexWrap: "wrap",
            paddingTop: "0.2rem",
          }}>
            {COLS.map((col) => (
              <div key={col.head}>
                <span style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  color: "rgba(250,250,248,0.28)",
                  letterSpacing: "0.04em",
                  display: "block",
                  marginBottom: "1rem",
                }}>
                  {col.head}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={styles.channel}
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 400,
                        fontSize: "0.88rem",
                        color: "rgba(250,250,248,0.55)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* OUTR BUZZ mega text — neon color on black bg */}
        <div style={{ overflow: "hidden", lineHeight: 0.82 }}>
          <span
            ref={brandRef}
            style={{
              display: "block",
              textAlign: "center",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "21vw",
              color: "#f0ede6",
              letterSpacing: "-0.03em",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            OUTR BUZZ
          </span>
        </div>

      </div>

      {/* ══ SECTION 2 — disclaimer + copyright ══ */}
      <div style={{ backgroundColor: "#f0ede6" }}>

        {/* Disclaimer row */}
        <div style={{
          display: "flex",
          gap: "clamp(2rem, 5vw, 4rem)",
          padding: "clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 5vw, 4rem) clamp(1rem, 2vw, 1.5rem)",
          alignItems: "flex-start",
        }}>
          <span style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 600,
            fontSize: "0.7rem",
            color: "rgba(10,10,10,0.55)",
            letterSpacing: "0.04em",
            minWidth: "80px",
            paddingTop: "0.15rem",
            flexShrink: 0,
          }}>
            disclaimer
          </span>
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.78rem",
            color: "rgba(10,10,10,0.65)",
            lineHeight: 1.7,
            maxWidth: "680px",
          }}>
            All projects, case studies and work presented on this site are the property of Outr Buzz and respective clients. Results shown represent outcomes achieved for specific engagements and may vary. Outr Buzz is a design and development studio — we do not provide legal, financial or medical advice.
          </p>
        </div>

        {/* Copyright bar */}
        <div style={{
          borderTop: "1px solid rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem clamp(1.5rem, 5vw, 4rem) 1.5rem",
        }}>
          <span style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            color: "rgba(10,10,10,0.45)",
          }}>
            © 2025 Outr Buzz — outrbuzz.com
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={styles.footerLink}
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                  color: "rgba(10,10,10,0.45)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
}
