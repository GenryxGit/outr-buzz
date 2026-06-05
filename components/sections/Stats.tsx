"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data/stats";

gsap.registerPlugin(ScrollTrigger);

const IMG_1 = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80";
const IMG_2 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80";

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([null, null, null, null]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // stats order: [0]=3x  [1]=100%  [2]=93%  [3]=50+
      stats.forEach((stat, i) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 1.8,
          ease: "power2.out",
          snap: { val: 1 },
          onUpdate: () => {
            if (countRefs.current[i]) {
              countRefs.current[i]!.textContent = Math.round(obj.val).toString();
            }
          },
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const ROW = "clamp(200px, 24vw, 280px)";
  const ROW_SM = "clamp(150px, 18vw, 220px)";

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "var(--cream)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <span style={{
          fontFamily: "var(--font-space-grotesk)", fontWeight: 500,
          fontSize: "0.75rem", color: "var(--electric)", letterSpacing: "0.2em",
          display: "block", marginBottom: "0.5rem",
        }}>
          THE NUMBERS
        </span>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
          fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--black)",
          letterSpacing: "-0.02em",
        }}>
          Results that speak.
        </h2>
      </div>

      {/* Bento grid — 12 cols (cards stack full-width ≤768 via .bento-grid) */}
      <div className="bento-grid">

        {/* A — tall statement (col 1–3, rows 1–2) */}
        <div className="bento-stats-card" style={{
          gridColumn: "1 / span 3", gridRow: "1 / span 2",
          backgroundColor: "var(--black)", borderRadius: "16px",
          padding: "2rem", display: "flex", flexDirection: "column",
          justifyContent: "space-between",
          minHeight: `calc(${ROW} * 2 + 0.75rem)`,
        }}>
          <span style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
            fontSize: "0.6rem", color: "var(--electric)", letterSpacing: "0.22em",
          }}>
            OUR APPROACH
          </span>
          <div>
            <p style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
              fontSize: "clamp(1.2rem, 2vw, 1.75rem)", color: "var(--white)",
              letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1rem",
            }}>
              We build interfaces clients actually use — and return to.
            </p>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem",
              color: "rgba(250,250,248,0.42)", lineHeight: 1.7,
            }}>
              Not just screenshots that impress. Real products, real engagement, real retention.
            </p>
          </div>
          <span style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
            fontSize: "0.65rem", color: "rgba(255,255,255,0.1)", letterSpacing: "0.14em",
          }}>
            OUTR BUZZ ✦
          </span>
        </div>

        {/* B — 3x stat (col 4–7, row 1) */}
        <div className="bento-stats-card" style={{
          gridColumn: "4 / span 4", gridRow: "1",
          border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px",
          backgroundColor: "#fff", padding: "2rem",
          minHeight: ROW, display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <span style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
            fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.2em",
          }}>
            ENGAGEMENT
          </span>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.05rem", lineHeight: 1, marginBottom: "0.6rem" }}>
              <span ref={(el) => { countRefs.current[0] = el; }} style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                fontSize: "clamp(3.5rem, 7vw, 6rem)", color: "var(--black)", letterSpacing: "-0.05em",
              }}>0</span>
              <span style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--electric)", letterSpacing: "-0.03em",
              }}>{stats[0].suffix}</span>
            </div>
            <p style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
              fontSize: "0.82rem", color: "var(--black)", marginBottom: "0.3rem",
            }}>{stats[0].label}</p>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "0.77rem",
              color: "var(--muted)", lineHeight: 1.6,
            }}>{stats[0].desc}</p>
          </div>
        </div>

        {/* C — image card (col 8–12, row 1) */}
        <div className="bento-stats-card" style={{
          gridColumn: "8 / span 5", gridRow: "1",
          borderRadius: "16px", overflow: "hidden",
          position: "relative", minHeight: ROW,
        }}>
          <Image
            src={IMG_1}
            alt="Design work"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>

        {/* D — quote card (col 4–7, row 2) */}
        <div className="bento-stats-card" style={{
          gridColumn: "4 / span 4", gridRow: "2",
          backgroundColor: "var(--acid)", borderRadius: "16px",
          padding: "2rem", minHeight: ROW,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
        }}>
          <p style={{
            fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
            fontSize: "clamp(1.1rem, 1.9vw, 1.6rem)", color: "var(--black)",
            letterSpacing: "-0.03em", lineHeight: 1.15,
          }}>
            Zero templates. Every pixel is intentional and purpose-built.
          </p>
        </div>

        {/* E — 50+ with image bg (col 8–12, row 2) */}
        <div className="bento-stats-card" style={{
          gridColumn: "8 / span 5", gridRow: "2",
          borderRadius: "16px", overflow: "hidden",
          position: "relative", minHeight: ROW,
        }}>
          <Image
            src={IMG_2}
            alt="Projects shipped"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div style={{
            position: "absolute", inset: 0, backgroundColor: "rgba(10,10,10,0.6)",
            padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <span style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
              fontSize: "0.6rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.2em",
            }}>
              ON TIME DELIVERY
            </span>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.05rem", lineHeight: 1, marginBottom: "0.6rem" }}>
                <span ref={(el) => { countRefs.current[3] = el; }} style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                  fontSize: "clamp(3.5rem, 7vw, 6rem)", color: "var(--white)", letterSpacing: "-0.05em",
                }}>0</span>
                <span style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--acid)", letterSpacing: "-0.03em",
                }}>{stats[3].suffix}</span>
              </div>
              <p style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
                fontSize: "0.82rem", color: "var(--white)", marginBottom: "0.3rem",
              }}>{stats[3].label}</p>
              <p style={{
                fontFamily: "var(--font-dm-sans)", fontSize: "0.77rem",
                color: "rgba(250,250,248,0.45)", lineHeight: 1.6,
              }}>{stats[3].desc}</p>
            </div>
          </div>
        </div>

        {/* F — 100% (col 1–6, row 3) */}
        <div className="bento-stats-card" style={{
          gridColumn: "1 / span 6", gridRow: "3",
          border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px",
          backgroundColor: "#fff", padding: "2rem",
          minHeight: ROW_SM, display: "flex", alignItems: "center", gap: "2.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.05rem", flexShrink: 0 }}>
            <span ref={(el) => { countRefs.current[1] = el; }} style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)", color: "var(--black)", letterSpacing: "-0.04em",
            }}>0</span>
            <span style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
              fontSize: "clamp(1.6rem, 3.2vw, 3rem)", color: "var(--acid)", letterSpacing: "-0.03em",
            }}>{stats[1].suffix}</span>
          </div>
          <div>
            <p style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
              fontSize: "0.85rem", color: "var(--black)", marginBottom: "0.3rem",
            }}>{stats[1].label}</p>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "0.78rem",
              color: "var(--muted)", lineHeight: 1.6,
            }}>{stats[1].desc}</p>
          </div>
        </div>

        {/* G — 93% (col 7–12, row 3) */}
        <div className="bento-stats-card" style={{
          gridColumn: "7 / span 6", gridRow: "3",
          backgroundColor: "var(--black)", borderRadius: "16px",
          padding: "2rem", minHeight: ROW_SM,
          display: "flex", alignItems: "center", gap: "2.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.05rem", flexShrink: 0 }}>
            <span ref={(el) => { countRefs.current[2] = el; }} style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)", color: "var(--white)", letterSpacing: "-0.04em",
            }}>0</span>
            <span style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
              fontSize: "clamp(1.6rem, 3.2vw, 3rem)", color: "var(--electric)", letterSpacing: "-0.03em",
            }}>{stats[2].suffix}</span>
          </div>
          <div>
            <p style={{
              fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
              fontSize: "0.85rem", color: "var(--white)", marginBottom: "0.3rem",
            }}>{stats[2].label}</p>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "0.78rem",
              color: "rgba(250,250,248,0.42)", lineHeight: 1.6,
            }}>{stats[2].desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
