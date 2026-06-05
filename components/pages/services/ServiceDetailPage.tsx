"use client";

/**
 * ServiceDetailPage
 *
 * Template for every individual service page (/services/[category]/[service]).
 * All content comes from serviceCategories.ts — edit the data there to update any page.
 *
 * Sections (top → bottom):
 *   Hero → Full-width image → Full-section CTA → Overview (What's Included) → Process → Reviews → CTA
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import CTA from "@/components/sections/CTA";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import type { ServiceCategory, ServiceItem } from "@/lib/data/serviceCategories";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  cat: ServiceCategory;
  item: ServiceItem;
};

export default function ServiceDetailPage({ cat, item }: Props) {
  const imgSectionRef = useRef<HTMLElement>(null);
  const imgInnerRef   = useRef<HTMLDivElement>(null);
  const overviewRef   = useRef<HTMLDivElement>(null);
  const processRef    = useRef<HTMLDivElement>(null);

  /* ── 1. Full-width image parallax ── */
  useEffect(() => {
    if (!imgInnerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgInnerRef.current,
        { yPercent: -18 },
        {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: imgSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  /* ── 2. Deliverable rows stagger in ── */
  useEffect(() => {
    if (!overviewRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        overviewRef.current!.querySelectorAll<HTMLElement>(".deliverable-row"),
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          stagger: 0.13, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: overviewRef.current, start: "top 72%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  /* ── 3. Deliverable image parallax ── */
  useEffect(() => {
    const outers = document.querySelectorAll<HTMLElement>(".dlv-img-outer");
    const inners = document.querySelectorAll<HTMLElement>(".dlv-img-inner");
    const ctx = gsap.context(() => {
      outers.forEach((outer, i) => {
        const inner = inners[i];
        if (!inner) return;
        gsap.fromTo(
          inner,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: outer,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  /* ── 4. Process steps stagger ── */
  useEffect(() => {
    if (!processRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        processRef.current!.querySelectorAll<HTMLElement>(".process-row"),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          stagger: 0.12, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: processRef.current, start: "top 72%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "var(--cream)",
            padding: "clamp(8rem, 14vw, 11rem) clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 7rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle dot-grid texture — purely decorative */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, opacity: 0.06,
              backgroundImage: "radial-gradient(rgba(10,10,10,0.35) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div
            style={{
              position: "relative", zIndex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
              gap: "clamp(2.5rem, 5vw, 5rem)",
              alignItems: "stretch",
            }}
          >
            {/* Left — badge + headline + paragraph */}
            <div>
              {/* Category badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "2rem" }}>
                <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "1.1rem", color: "var(--electric)" }}>
                  {cat.icon}
                </span>
                <Link
                  href={`/services/${cat.slug}`}
                  style={{
                    fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
                    fontSize: "0.72rem", letterSpacing: "0.22em",
                    color: "var(--electric)", textDecoration: "none",
                  }}
                >
                  {cat.title.toUpperCase()}
                </Link>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                  fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em",
                  lineHeight: 0.93, color: "var(--black)", margin: "0 0 2rem",
                }}
              >
                {item.label}
              </h1>

              {/* Description — 2-3 lines, below heading */}
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 500,
                  fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)", letterSpacing: "-0.01em",
                  lineHeight: 1.6, color: "var(--muted)", margin: 0, maxWidth: "840px",
                }}
              >
                {item.description}
              </p>
            </div>

            {/* Right — CTA pinned to bottom-right (left-aligned on mobile) */}
            <div className="service-hero-cta" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.6rem",
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.88rem",
                  color: "var(--black)", backgroundColor: "var(--electric)",
                  padding: "1rem 2.2rem", borderRadius: "100px",
                  textDecoration: "none", letterSpacing: "0.02em",
                }}
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FULL-WIDTH PARALLAX IMAGE
        ════════════════════════════════════════ */}
        <section
          ref={imgSectionRef}
          className="service-banner"
          style={{
            position: "relative",
            height: "clamp(420px, 65vh, 760px)",
            overflow: "hidden",
            borderRadius: "50px",
            margin: "0 auto",
            width: "calc(100% - clamp(2rem, 6vw, 5rem))",
          }}
        >
          <div
            ref={imgInnerRef}
            style={{ position: "absolute", inset: "-22%", height: "144%" }}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100vw"
            />
          </div>

          {/* Gradient overlay — left side fade for readability */}
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.2) 50%, transparent 80%)",
            }}
          />

          {/* Bottom-left label */}
          <div
            style={{
              position: "absolute",
              bottom: "clamp(2rem, 5vw, 4rem)",
              left: "clamp(1.5rem, 5vw, 4rem)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
                fontSize: "0.72rem", letterSpacing: "0.22em",
                color: "rgba(250,250,248,0.6)", display: "block",
              }}
            >
              OUTR BUZZ · {item.label.toUpperCase()}
            </span>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FULL-SECTION CTA — below the image
        ════════════════════════════════════════ */}
        <section
          data-cursor="QUOTE"
          style={{
            position: "relative",
            minHeight: "85vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Background image */}
          <Image
            src="/images/services/inner-cta-background-2.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
            aria-hidden="true"
          />
          {/* Content */}
          <div style={{ position: "relative", zIndex: 1, padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 8vw, 8rem)" }}>
            <h2
              className="cta-heading"
              style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(3rem, 8vw, 8rem)", letterSpacing: "-0.03em",
                lineHeight: 0.98,
                margin: "0 auto 3rem", maxWidth: "1100px",
                // GIF clipped inside the text
                backgroundImage: "url(/images/services/banner-heading-bg.gif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                filter: "invert(1)",
              }}
            >
              <span style={{ display: "block", whiteSpace: "nowrap" }}>Let&apos;s make</span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>some buzz.</span>
            </h2>

            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.8rem",
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", letterSpacing: "0.02em",
                color: "var(--black)", backgroundColor: "transparent",
                border: "2px solid var(--black)",
                padding: "clamp(0.9rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3.5rem)",
                borderRadius: "100px", textDecoration: "none",
              }}
            >
              Get a Free Quote →
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════
            OVERVIEW — about + what's included rows
        ════════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "var(--cream)",
            padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          {/* "What's included" section header */}
          <div
            style={{
              display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              flexWrap: "wrap", gap: "2rem",
              marginBottom: "clamp(2rem, 5vw, 4rem)",
              paddingBottom: "clamp(2rem, 4vw, 3rem)",
              borderBottom: "1px solid rgba(10,10,10,0.1)",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
                  fontSize: "0.72rem", letterSpacing: "0.22em",
                  color: "var(--electric)", display: "block", marginBottom: "1.2rem",
                }}
              >
                WHAT&apos;S INCLUDED
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                  fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.03em",
                  lineHeight: 1.05, color: "var(--black)", margin: 0,
                }}
              >
                Everything it takes<br />to deliver results.
              </h2>
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.88rem",
                color: "var(--black)", backgroundColor: "var(--electric)",
                padding: "0.9rem 2rem", borderRadius: "100px",
                textDecoration: "none", letterSpacing: "0.02em", flexShrink: 0,
              }}
            >
              Start a Project →
            </Link>
          </div>

          {/* Alternating deliverable rows — same pattern as category service list */}
          <div ref={overviewRef}>
            {item.deliverables.map((deliverable, i) => {
              const textLeft = i % 2 === 0;
              const rowImg = i % 2 === 0 ? item.image : cat.image;

              return (
                <div
                  key={deliverable.name}
                  className="deliverable-row"
                  style={{
                    display: "grid",
                    gap: "clamp(2rem, 5vw, 5rem)",
                    alignItems: "center",
                    padding: "clamp(3rem, 6vw, 5rem) 0",
                    borderBottom: i < item.deliverables.length - 1
                      ? "1px solid rgba(10,10,10,0.07)"
                      : "none",
                    opacity: 0,
                  }}
                >
                  {/* Text side */}
                  <div style={{ order: textLeft ? 0 : 1 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                        fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.05em",
                        color: "rgba(10,10,10,0.07)", lineHeight: 1,
                        display: "block", marginBottom: "1.2rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                        fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.03em",
                        lineHeight: 1.1, color: "var(--black)", margin: "0 0 1rem",
                      }}
                    >
                      {deliverable.name}
                    </h3>
                    <ScrollRevealText
                      text={deliverable.description}
                      style={{
                        fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                        lineHeight: 1.9, margin: 0, maxWidth: "100%",
                      }}
                    />
                  </div>

                  {/* Image side */}
                  <div style={{ order: textLeft ? 1 : 0 }}>
                    <div
                      className="dlv-img-outer"
                      style={{
                        position: "relative", width: "100%",
                        aspectRatio: "4 / 3",
                        borderRadius: "30px", overflow: "hidden",
                      }}
                    >
                      <div
                        className="dlv-img-inner"
                        style={{ position: "absolute", inset: "-14%", height: "128%" }}
                      >
                        <Image
                          src={rowImg}
                          alt={deliverable.name}
                          fill
                          style={{ objectFit: "cover", objectPosition: "center" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════
            PROCESS — how we deliver this service
        ════════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "var(--white)",
            padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          {/* Section header */}
          <div
            style={{
              display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              flexWrap: "wrap", gap: "2rem",
              marginBottom: "clamp(3rem, 6vw, 5rem)",
              paddingBottom: "clamp(2rem, 4vw, 3rem)",
              borderBottom: "1px solid rgba(10,10,10,0.1)",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
                  fontSize: "0.72rem", letterSpacing: "0.22em",
                  color: "var(--electric)", display: "block", marginBottom: "1.2rem",
                }}
              >
                HOW WE DO IT
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                  fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.03em",
                  lineHeight: 1.05, color: "var(--black)", margin: 0, maxWidth: "520px",
                }}
              >
                Our process for<br />{item.label}.
              </h2>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)", fontSize: "1rem", lineHeight: 1.8,
                color: "var(--muted)", maxWidth: "360px", margin: 0,
              }}
            >
              Four clear steps. No surprises. You know exactly what happens next at every stage.
            </p>
          </div>

          {/* Numbered process rows */}
          <div ref={processRef}>
            {item.process.map((step, i) => (
              <div
                key={step.title}
                className="process-row"
                style={{
                  display: "grid",
                  alignItems: "center",
                  gap: "clamp(1.5rem, 4vw, 3rem)",
                  padding: "clamp(2rem, 3.5vw, 2.8rem) 0",
                  borderBottom: i < item.process.length - 1
                    ? "1px solid rgba(10,10,10,0.08)"
                    : "none",
                  opacity: 0,
                }}
              >
                {/* Step number */}
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em",
                    color: i === 0 ? "var(--electric)" : "rgba(10,10,10,0.12)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + description */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                      fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "-0.02em",
                      color: "var(--black)", margin: "0 0 0.6rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem",
                      lineHeight: 1.75, color: "var(--muted)", margin: 0, maxWidth: "520px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Phase mascot image */}
                <div
                  style={{
                    position: "relative", width: "220px", height: "148px",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={`/images/services/process-${i + 1}.png`}
                    alt={`Phase ${i + 1}`}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    sizes="220px"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>


        <AboutTestimonials />
        <CTA />

      </main>
      <Footer />
    </>
  );
}
