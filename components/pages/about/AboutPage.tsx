"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientLogos from "@/components/sections/ClientLogos";
import BentoGrid from "@/components/sections/BentoGrid";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import CTA from "@/components/sections/CTA";
import styles from "./AboutPage.module.css";

gsap.registerPlugin(ScrollTrigger);

/* ── Card geometry constants ── */
const CARD_W = 400;
const IMG_H = 426;   // 8 + 426 + 66 = 500px total card height
const INFO_H = 66;
const PAD_T = 8;
const CARD_H = PAD_T + IMG_H + INFO_H;  // 500px total
const ROW_GAP = 28;

const R1 = "4vh";
const R2 = `calc(4vh + ${CARD_H + ROW_GAP}px)`;
const R3 = `calc(4vh + ${(CARD_H + ROW_GAP) * 2}px)`;

/* ── Team card data ── */
const cards = [
  /* Row 1 — left edge */
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    name: "Zaid Rahman", role: "Creative Director", top: R1, left: "3%"
  },
  /* Row 1 — right edge */
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    name: "Aisha Karim", role: "Lead Designer", top: R1, left: `calc(97% - ${CARD_W}px)`
  },
  /* Row 2 — center-left */
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    name: "Omar Farooq", role: "UI/UX Designer", top: R2, left: `calc(50% - ${CARD_W + 15}px)`
  },
  /* Row 2 — center-right */
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    name: "Sara Malik", role: "Brand Strategist", top: R2, left: "calc(50% + 15px)"
  },
  /* Row 3 — bottom-left */
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
    name: "Bilal Sheikh", role: "Frontend Developer", top: R3, left: "3%"
  },
  /* Row 3 — bottom-right */
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    name: "Hana Siddiqui", role: "Motion Designer", top: R3, left: `calc(97% - ${CARD_W}px)`
  },
];

/* ── Below-hero data ── */
const principles = [
  {
    index: "01",
    title: "Strategy before decoration",
    text: "We start with positioning and intent — so every visual decision earns its place instead of just looking expensive.",
  },
  {
    index: "02",
    title: "Design that knows how to ship",
    text: "Every concept is shaped with implementation in mind. Handoff friction stays low and quality survives the build.",
  },
  {
    index: "03",
    title: "Momentum over theatre",
    text: "Bold visuals, never at the cost of clarity, performance, or the confidence your team needs to keep moving.",
  },
];



export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  /* ── Pinned tilt-in animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const getEndY = () => {
        const vh = window.innerHeight;
        // row 3 bottom = 4vh + (CARD_H + ROW_GAP)*2 + CARD_H
        // push until row 3 bottom is fully above viewport top (y=0)
        const row3Bottom = vh * 0.04 + (CARD_H + ROW_GAP) * 2 + CARD_H;
        return -row3Bottom;
      };

      gsap.set(cardsWrapRef.current, {
        y: "55vh",
        rotateX: 32,
        transformOrigin: "center bottom",
        transformPerspective: 1100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => {
            const vh = window.innerHeight;
            const travel = vh + Math.abs(getEndY());
            return `+=${travel * 0.72}`;
          },
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cardsWrapRef.current, {
        y: () => getEndY(),
        rotateX: 0,
        ease: "power2.inOut",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Hero headline entrance (page load) ── */
  useEffect(() => {
    const lines = document.querySelectorAll<HTMLElement>(".about-hero-line");
    gsap.fromTo(
      lines,
      { yPercent: 110 },
      { yPercent: 0, stagger: 0.1, duration: 1, ease: "power4.out", delay: 0.15 }
    );
  }, []);

  /* ── Principles stagger ── */
  useEffect(() => {
    if (!principlesRef.current) return;
    const rows = principlesRef.current.querySelectorAll<HTMLElement>(".about-p-card");
    gsap.fromTo(
      rows,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: principlesRef.current, start: "top 75%", once: true },
      }
    );
  }, []);


  /* ── Refresh all ScrollTriggers after page fully mounts ── */
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* ══════════════════════════════════
            HERO — pinned, cards tilt in
        ══════════════════════════════════ */}
        <section ref={sectionRef} className={styles.hero}>

          {/* Centered headline — behind cards */}
          <div className={styles.heroCenter}>
            <span className={styles.heroEyebrow}>ABOUT US</span>
            <h1 className={styles.heroHeading}>
              <div className="line-mask">
                <span className="about-hero-line" style={{ display: "block" }}>
                  OUTR BUZZ<span className={styles.heroDot}>.</span>
                </span>
              </div>
            </h1>
            <Link href="/contact" className={styles.heroBtn}>Start a Project</Link>
          </div>

          {/* Cards wrapper — whole group tilts in together */}
          <div ref={cardsWrapRef} className={styles.cardsWrap} aria-hidden="true">
            {cards.map((card, i) => (
              <div
                key={i}
                className={styles.card}
                style={{ top: card.top, left: card.left }}
              >
                {/* brackets at corners of the outer frame */}
                <span className={`${styles.bracket} ${styles.bracketTL}`} />
                <span className={`${styles.bracket} ${styles.bracketTR}`} />
                <span className={`${styles.bracket} ${styles.bracketBL}`} />
                <span className={`${styles.bracket} ${styles.bracketBR}`} />

                {/* main dark blur frame — wraps image + info strip */}
                <div className={styles.cardFrame}>
                  <div className={styles.cardImgWrap}>
                    <Image
                      src={card.src}
                      alt={card.name}
                      width={CARD_W}
                      height={IMG_H}
                      style={{ objectFit: "cover", objectPosition: "top center", display: "block", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardName}>{card.name}</span>
                    <span className={styles.cardRole}>{card.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        <ClientLogos />

        {/* ══════════════════════════════════
            HOW WE WORK — redesigned
        ══════════════════════════════════ */}
        <section style={{ backgroundColor: "var(--cream)", padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)" }}>

          {/* Top row — label + heading split */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)", borderBottom: "1px solid rgba(10,10,10,0.1)" }}>
            <div>
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.22em", color: "var(--electric)", display: "block", marginBottom: "1.2rem" }}>
                HOW WE WORK
              </span>
              <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--black)", margin: 0, maxWidth: "560px" }}>
                Design is infrastructure,<br />not decoration.
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: "420px", margin: 0 }}>
              The strongest brands don&apos;t come from inspiration spikes. They come from systems — narrative, interaction, layout, performance, and delivery treated as one connected problem.
            </p>
          </div>

          {/* Principles — editorial numbered rows */}
          <div ref={principlesRef}>
            {principles.map((p, i) => (
              <div
                key={p.index}
                className="about-p-card"
                style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", alignItems: "start", gap: "clamp(1.5rem, 4vw, 3rem)", padding: "clamp(2rem, 3.5vw, 2.8rem) 0", borderBottom: "1px solid rgba(10,10,10,0.08)", opacity: 0 }}
              >
                {/* Number */}
                <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em", color: i === 0 ? "var(--electric)" : i === 1 ? "var(--black)" : "var(--muted)", lineHeight: 1 }}>
                  {p.index}
                </span>

                {/* Title + text */}
                <div>
                  <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "-0.02em", color: "var(--black)", margin: "0 0 0.6rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted)", margin: 0, maxWidth: "520px" }}>
                    {p.text}
                  </p>
                </div>

                {/* Tag badge */}
                <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--black)", backgroundColor: i === 0 ? "rgba(255,61,0,0.08)" : i === 1 ? "rgba(10,10,10,0.06)" : "rgba(10,10,10,0.04)", padding: "0.45rem 1rem", borderRadius: "100px", whiteSpace: "nowrap", marginTop: "0.2rem" }}>
                  {i === 0 ? "STRATEGY" : i === 1 ? "EXECUTION" : "DELIVERY"}
                </span>
              </div>
            ))}
          </div>

        </section>


        <BentoGrid />
        <AboutTestimonials />
        <CTA />

      </main>
      <Footer />
    </>
  );
}
