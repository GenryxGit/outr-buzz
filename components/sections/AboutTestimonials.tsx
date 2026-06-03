"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/data/testimonials";

gsap.registerPlugin(ScrollTrigger);

const text = "We don't just design — we think, test, iterate, and ship products that actually matter.";

const track1 = [...testimonials, ...testimonials, ...testimonials];
const track2 = [...[...testimonials].reverse(), ...[...testimonials].reverse(), ...[...testimonials].reverse()];

function TestimonialCard({ quote, name, role, company }: { quote: string; name: string; role: string; company: string }) {
  return (
    <div style={{
      width: "380px",
      flexShrink: 0,
      backgroundColor: "#111",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "18px",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    }}>
      <span style={{
        fontFamily: "var(--font-space-grotesk)",
        fontSize: "3.5rem",
        lineHeight: 0.8,
        color: "var(--acid)",
        fontWeight: 700,
        display: "block",
      }}>
        &ldquo;
      </span>
      <p style={{
        fontFamily: "var(--font-dm-sans)",
        fontWeight: 400,
        fontSize: "0.95rem",
        color: "rgba(250,250,248,0.85)",
        lineHeight: 1.7,
        flex: 1,
      }}>
        {quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          backgroundColor: "var(--acid)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.85rem", color: "var(--black)" }}>
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.85rem", color: "var(--white)", display: "block" }}>
            {name}
          </span>
          <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", color: "var(--muted)" }}>
            {role} · {company}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AboutTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ position: "relative", zIndex: 1, overflow: "hidden", backgroundColor: "var(--black)" }}
    >
      {/* Background video — grayscale, dimmed */}
      <video
        src="/video/review.mp4"
        autoPlay muted loop playsInline aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "grayscale(1)" }}
      />
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,10,10,0.55)" }} />
      {/* All content above the video/overlay */}
      <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Word-by-word reveal ── */}
      <div style={{ padding: "clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 7rem)" }}>
        <div style={{ maxWidth: "1100px" }}>
          <p style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4.5vw, 4rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => { if (el) wordsRef.current[i] = el; }}
                style={{ display: "inline-block", color: "var(--white)", marginRight: "0.35em", opacity: 0.12 }}
              >
                {word}
              </span>
            ))}
          </p>

          <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 500, fontSize: "0.8rem", color: "var(--muted)", letterSpacing: "0.2em" }}>
              EST. 2024 · REMOTE-FIRST · GLOBALLY THINKING
            </span>
            <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.8rem", color: "var(--acid)", letterSpacing: "0.15em" }}>
              ✦ OUTR BUZZ
            </span>
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div style={{ paddingBottom: "clamp(5rem, 10vw, 8rem)" }}>
        <div style={{ padding: "0 clamp(1.5rem, 5vw, 4rem)", marginBottom: "3.5rem" }}>
          <span style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 500,
            fontSize: "0.75rem", color: "var(--electric)", letterSpacing: "0.2em",
            display: "block", marginBottom: "0.8rem",
          }}>
            WHAT CLIENTS SAY
          </span>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--white)", letterSpacing: "-0.02em",
          }}>
            Don&apos;t take our word for it.
          </h2>
        </div>

        <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
          <div className="marquee-track-left" style={{ display: "flex", gap: "1rem", width: "max-content", alignItems: "stretch" }}>
            {track1.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track-right" style={{ display: "flex", gap: "1rem", width: "max-content", alignItems: "stretch" }}>
            {track2.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
      </div>

      </div> {/* end zIndex:1 wrapper */}
    </section>
  );
}
