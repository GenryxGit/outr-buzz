"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleEnter = (i: number) => {
    gsap.to(overlayRefs.current[i], { opacity: 0.3, duration: 0.4, ease: "power2.out" });
    gsap.to(cardRefs.current[i], { scale: 1.01, duration: 0.5, ease: "power2.out" });
  };

  const handleLeave = (i: number) => {
    gsap.to(overlayRefs.current[i], { opacity: 0.35, duration: 0.4, ease: "power2.out" });
    gsap.to(cardRefs.current[i], { scale: 1, duration: 0.5, ease: "power2.out" });
  };

  return (
    <section
      id="work"
      style={{
        backgroundColor: "var(--cream)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "2rem",
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
            SELECTED WORK
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
            Case Studies
          </h2>
        </div>
        <Link
          href="/contact"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 600,
            fontSize: "0.85rem",
            color: "var(--black)",
            textDecoration: "none",
            borderBottom: "1.5px solid var(--black)",
            paddingBottom: "2px",
          }}
        >
          Start a Project →
        </Link>
      </div>

      {/* 12-column grid (stacks to 1 column ≤768 via .home-projects-grid) */}
      <div className="home-projects-grid">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href="/contact"
            className="project-card"
            ref={(el) => { cardRefs.current[i] = el as HTMLDivElement | null; }}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            data-cursor="START"
            style={{
              gridColumn: `span ${project.cols}`,
              height: project.cols === 12 ? "clamp(340px, 50vw, 600px)" : "clamp(320px, 45vw, 520px)",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              cursor: "none",
              backgroundColor: project.color,
              textDecoration: "none",
              display: "block",
            }}
          >
            {/* Autoplay video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src={project.video} type="video/mp4" />
            </video>

            {/* Dark overlay (dimmed by default, lifts on hover) */}
            <div
              ref={(el) => { overlayRefs.current[i] = el; }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#000",
                opacity: 0.35,
                transition: "opacity 0.4s",
              }}
            />

            {/* View label (center, shows on hover) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <span
                className="project-card-overlay"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--white)",
                  letterSpacing: "0.2em",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: "0.6rem 1.6rem",
                  borderRadius: "100px",
                }}
              >
START YOUR PROJECT →
              </span>
            </div>

            {/* Bottom info */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  flexWrap: "wrap",
                  marginBottom: "0.7rem",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      color: project.accent,
                      backgroundColor: "rgba(255,255,255,0.08)",
                      padding: "0.25rem 0.8rem",
                      borderRadius: "100px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: project.cols === 12
                      ? "clamp(1.8rem, 4vw, 3rem)"
                      : "clamp(1.3rem, 2.5vw, 2rem)",
                    color: "var(--white)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.id}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
