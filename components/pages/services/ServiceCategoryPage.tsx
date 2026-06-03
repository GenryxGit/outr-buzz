"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import CTA from "@/components/sections/CTA";
import type { ServiceCategory, FAQ } from "@/lib/data/serviceCategories";

gsap.registerPlugin(ScrollTrigger);


/* ── FAQ Accordion Item ── */
function FAQItem({ faq, index, open, onToggle }: { faq: FAQ; index: number; open: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!bodyRef.current) return;
    if (open) {
      const h = bodyRef.current.scrollHeight;
      gsap.to(bodyRef.current, { height: h, opacity: 1, duration: 0.35, ease: "power2.out" });
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.28, ease: "power2.in" });
    }
  }, [open]);

  return (
    <div style={{ borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "clamp(1.5rem, 3vw, 2rem) 0",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(1.5rem, 4vw, 3rem)" }}>
          <span style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.04em",
            color: open ? "var(--electric)" : "rgba(10,10,10,0.14)", lineHeight: 1, flexShrink: 0,
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
            fontSize: "clamp(0.95rem, 2vw, 1.25rem)", letterSpacing: "-0.02em", color: "var(--black)",
          }}>
            {faq.q}
          </span>
        </div>
        <span style={{
          fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
          fontSize: "1.6rem", color: "var(--black)", flexShrink: 0,
          display: "inline-block",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.28s ease",
        }}>
          +
        </span>
      </button>
      <div
        ref={bodyRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <p style={{
          fontFamily: "var(--font-dm-sans)", fontSize: "1rem", lineHeight: 1.8,
          color: "var(--muted)", paddingBottom: "clamp(1.5rem, 3vw, 2rem)",
          maxWidth: "700px", margin: 0,
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function ServiceCategoryPage({ cat }: { cat: ServiceCategory }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const imgSectionRef = useRef<HTMLElement>(null);
  const imgInnerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  /* ── Parallax on full-width image ── */
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

  /* ── Service cards stagger entrance ── */
  useEffect(() => {
    if (!cardsRef.current) return;
    const ctx = gsap.context(() => {
      const cards = cardsRef.current!.querySelectorAll<HTMLElement>(".svc-row");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 75%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  /* ── Service image parallax ── */
  useEffect(() => {
    const outers = document.querySelectorAll<HTMLElement>(".svc-img-outer");
    const inners = document.querySelectorAll<HTMLElement>(".svc-img-inner");
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

  /* ── FAQs stagger entrance ── */
  useEffect(() => {
    if (!faqsRef.current) return;
    const ctx = gsap.context(() => {
      const items = faqsRef.current!.querySelectorAll<HTMLElement>(".faq-row");
      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: faqsRef.current, start: "top 72%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const bgImg = cat.image;

  return (
    <>
      <Navbar />
      <main>

        {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "var(--cream)",
            padding: "clamp(8rem, 14vw, 11rem) clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 7rem)",
            position: "relative", overflow: "hidden",
          }}
        >
          {/* subtle grid overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, opacity: 0.06,
              backgroundImage:
                "linear-gradient(rgba(10,10,10,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(10,10,10,0.12) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "1.6rem", color: cat.accent, filter: "brightness(0.7)" }}>
                {cat.icon}
              </span>
              <span style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.72rem",
                letterSpacing: "0.22em", color: "var(--electric)",
              }}>
                {cat.title.toUpperCase()}
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
              fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em",
              lineHeight: 0.93, color: "var(--black)", margin: "0 0 2.5rem", maxWidth: "820px",
            }}>
              {cat.tagline}
            </h1>

            <div style={{
              display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              flexWrap: "wrap", gap: "2rem",
            }}>
              <p style={{
                fontFamily: "var(--font-dm-sans)", fontSize: "1.05rem", lineHeight: 1.75,
                color: "var(--muted)", maxWidth: "540px", margin: 0,
              }}>
                {cat.description}
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.6rem",
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.88rem",
                  color: "var(--black)", backgroundColor: "var(--electric)",
                  padding: "1rem 2.2rem", borderRadius: "100px", textDecoration: "none",
                  letterSpacing: "0.02em", flexShrink: 0,
                }}
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FULL-WIDTH IMAGE
        ════════════════════════════════ */}
        <section
          ref={imgSectionRef}
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
              src={bgImg}
              alt={`${cat.title} work`}
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100vw"
            />
          </div>

          {/* left gradient using category colour */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to right, ${cat.color}e0 0%, ${cat.color}80 40%, transparent 75%)`,
          }} />

          {/* bottom-left stat */}
          <div style={{
            position: "absolute",
            bottom: "clamp(2rem, 5vw, 4rem)",
            left: "clamp(1.5rem, 5vw, 4rem)",
          }}>
            <span style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
              fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "-0.05em",
              color: cat.accent, lineHeight: 1, display: "block",
            }}>
              {cat.items.length}+
            </span>
            <span style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
              fontSize: "0.72rem", letterSpacing: "0.22em",
              color: "rgba(250,250,248,0.7)", display: "block", marginTop: "0.3rem",
            }}>
              {cat.title.toUpperCase()} SERVICES
            </span>
          </div>

          {/* bottom-right tagline */}
          <div style={{
            position: "absolute",
            bottom: "clamp(2rem, 5vw, 4rem)",
            right: "clamp(1.5rem, 5vw, 4rem)",
            textAlign: "right",
          }}>
            <span style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
              fontSize: "0.7rem", letterSpacing: "0.18em",
              color: "rgba(250,250,248,0.45)", display: "block",
            }}>
              OUTR BUZZ · {cat.title.toUpperCase()}
            </span>
          </div>
        </section>

        {/* ════════════════════════════════
            SERVICES LIST
        ════════════════════════════════ */}
        <section style={{
          backgroundColor: "var(--cream)",
          padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
        }}>

          {/* section header */}
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            flexWrap: "wrap", gap: "2rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            paddingBottom: "clamp(2rem, 4vw, 3rem)",
            borderBottom: "1px solid rgba(10,10,10,0.1)",
          }}>
            <div>
              <span style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.72rem",
                letterSpacing: "0.22em", color: "var(--electric)", display: "block", marginBottom: "1.2rem",
              }}>
                WHAT WE OFFER
              </span>
              <h2 style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.03em",
                lineHeight: 1.05, color: "var(--black)", margin: 0, maxWidth: "520px",
              }}>
                {cat.title} services<br />built to perform.
              </h2>
            </div>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "1rem", lineHeight: 1.8,
              color: "var(--muted)", maxWidth: "380px", margin: 0,
            }}>
              Every service is scoped, staffed, and delivered with the same level of care — from a single landing page to a full product launch.
            </p>
          </div>

          {/* alternating rows */}
          <div ref={cardsRef}>
            {cat.items.map((service, i) => {
              const textLeft = i % 2 === 0;
              const imgSrc = service.image;

              return (
                <div
                  key={service.slug}
                  className="svc-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(2rem, 5vw, 5rem)",
                    alignItems: "center",
                    padding: "clamp(3.5rem, 7vw, 6rem) 0",
                    borderBottom: i < cat.items.length - 1 ? "1px solid rgba(10,10,10,0.07)" : "none",
                    opacity: 0,
                  }}
                >
                  {/* ── Text side ── */}
                  <div style={{ order: textLeft ? 0 : 1 }}>
                    <span style={{
                      fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                      fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.05em",
                      color: "rgba(10,10,10,0.07)", lineHeight: 1, display: "block",
                      marginBottom: "1.5rem",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 style={{
                      fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                      fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.03em",
                      lineHeight: 1.05, color: "var(--black)", margin: "0 0 1rem",
                    }}>
                      {service.label}
                    </h3>

                    <p style={{
                      fontFamily: "var(--font-dm-sans)", fontSize: "1rem", lineHeight: 1.8,
                      color: "var(--muted)", margin: "0 0 1.8rem", maxWidth: "420px",
                    }}>
                      {service.description}
                    </p>

                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                      {service.deliverables.map((d) => (
                        <span key={d.name} style={{
                          fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.65rem",
                          letterSpacing: "0.08em", color: "var(--black)",
                          border: "1px solid rgba(10,10,10,0.15)",
                          padding: "0.35rem 0.85rem", borderRadius: "100px",
                        }}>
                          {d.name}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${cat.slug}/${service.slug}`}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.88rem",
                        color: "var(--white)", backgroundColor: "var(--black)",
                        padding: "0.85rem 1.8rem", borderRadius: "100px", textDecoration: "none",
                        letterSpacing: "0.02em",
                      }}
                    >
                      View Service →
                    </Link>
                  </div>

                  {/* ── Image side ── */}
                  <div style={{ order: textLeft ? 1 : 0 }}>
                    <div
                      className="svc-img-outer"
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "4 / 3",
                        borderRadius: "30px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="svc-img-inner"
                        style={{ position: "absolute", inset: "-14%", height: "128%" }}
                      >
                        <Image
                          src={imgSrc}
                          alt={service.label}
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

        {/* ════════════════════════════════
            REVIEWS / TESTIMONIALS
        ════════════════════════════════ */}
        <AboutTestimonials />

        {/* ════════════════════════════════
            FAQs
        ════════════════════════════════ */}
        <section style={{
          backgroundColor: "var(--white)",
          padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
        }}>

          {/* section header */}
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            flexWrap: "wrap", gap: "2rem",
            marginBottom: "clamp(3rem, 6vw, 4.5rem)",
            paddingBottom: "clamp(2rem, 4vw, 3rem)",
            borderBottom: "1px solid rgba(10,10,10,0.1)",
          }}>
            <div>
              <span style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "0.72rem",
                letterSpacing: "0.22em", color: "var(--electric)", display: "block", marginBottom: "1.2rem",
              }}>
                FREQUENTLY ASKED
              </span>
              <h2 style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.03em",
                lineHeight: 1.05, color: "var(--black)", margin: 0,
              }}>
                Got questions?<br />We have answers.
              </h2>
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "0.85rem",
                color: "var(--white)", backgroundColor: "var(--black)",
                padding: "0.9rem 2rem", borderRadius: "100px", textDecoration: "none",
              }}
            >
              Ask a question →
            </Link>
          </div>

          {/* accordion */}
          <div ref={faqsRef}>
            {cat.faqs.map((faq, i) => (
              <div key={i} className="faq-row" style={{ opacity: 0 }}>
                <FAQItem
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
