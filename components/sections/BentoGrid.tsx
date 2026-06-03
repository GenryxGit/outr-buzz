"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    label: "50+",
    sub: "Projects Shipped",
    tag: "IMPACT",
    bg: "var(--electric)",
    color: "var(--white)",
    tagColor: "rgba(255,255,255,0.5)",
  },
  {
    id: 2,
    label: "UI/UX First",
    sub: "Every pixel intentional",
    tag: "APPROACH",
    bg: "#111",
    color: "var(--white)",
    tagColor: "var(--acid)",
  },
  {
    id: 3,
    label: "30+",
    sub: "Happy Clients",
    tag: "TRUST",
    bg: "var(--acid)",
    color: "var(--black)",
    tagColor: "rgba(0,0,0,0.4)",
  },
  {
    id: 4,
    label: "We ship fast.",
    sub: "Without cutting corners.",
    tag: "DELIVERY",
    bg: "#0d0d0d",
    color: "var(--white)",
    tagColor: "var(--electric)",
  },
  {
    id: 5,
    label: "Design Systems",
    sub: "Scalable from day one",
    tag: "CAPABILITY",
    bg: "#1a1a2e",
    color: "var(--white)",
    tagColor: "var(--acid)",
  },
  {
    id: 6,
    label: "Global Reach",
    sub: "Remote-first studio",
    tag: "STUDIO",
    bg: "#0a1a0a",
    color: "var(--white)",
    tagColor: "var(--acid)",
  },
];

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const cards = track.querySelectorAll<HTMLDivElement>(".bento-card");

      // Start: all cards off-screen to the right
      gsap.set(cards, { x: "120%", opacity: 0 });

      const totalScroll = track.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(section).paddingLeft) * 2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll + window.innerHeight * cards.length * 0.6}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Slide cards in one by one from right
      cards.forEach((card, i) => {
        tl.to(
          card,
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          i * 0.5
        );
      });

      // After all cards are visible, scroll the track left
      tl.to(
        track,
        {
          x: () => -(track.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(section).paddingLeft) * 2),
          ease: "none",
          duration: cards.length * 0.5,
        },
        (cards.length - 1) * 0.5 + 0.6
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#fff",
        overflow: "hidden",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          marginBottom: "2.5rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 500,
              fontSize: "0.75rem",
              color: "var(--electric)",
              letterSpacing: "0.2em",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            WHY OUTR BUZZ
          </span>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--black)",
              letterSpacing: "-0.02em",
            }}
          >
            Built different.
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 500,
            fontSize: "0.8rem",
            color: "var(--muted)",
            letterSpacing: "0.05em",
          }}
        >
          scroll to explore →
        </span>
      </div>

      {/* Cards track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "1.2rem",
          paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
          paddingRight: "clamp(1.5rem, 5vw, 4rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          width: "max-content",
          willChange: "transform",
          alignItems: "stretch",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="bento-card"
            style={{
              width: "clamp(300px, 32vw, 420px)",
              minHeight: "clamp(340px, 45vw, 480px)",
              flexShrink: 0,
              borderRadius: "20px",
              backgroundColor: card.bg,
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background decoration */}
            <span
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "9rem",
                color: card.tagColor,
                opacity: 0.07,
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              ✦
            </span>

            {/* Tag */}
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: "0.65rem",
                color: card.tagColor,
                letterSpacing: "0.22em",
                marginBottom: "2rem",
                display: "block",
              }}
            >
              {card.tag}
            </span>

            {/* Main label */}
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: card.color,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                display: "block",
                marginBottom: "1rem",
              }}
            >
              {card.label}
            </span>

            {/* Sub */}
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                fontSize: "0.95rem",
                color: card.color,
                opacity: 0.6,
                lineHeight: 1.6,
                maxWidth: "260px",
              }}
            >
              {card.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
