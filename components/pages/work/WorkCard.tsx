"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { type Project } from "@/lib/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) video.play().catch(() => {}); else video.pause(); },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: project.color,
        height: "clamp(380px, 48vw, 560px)",
        cursor: "none",
      }}
      data-cursor="VIEW"
    >
      {/* ── Background video ── */}
      <video
        ref={videoRef}
        muted loop playsInline preload="none"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%", objectFit: "cover",
          transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          zIndex: 0,
        }}
      >
        <source src={project.video} type="video/mp4" />
      </video>

      {/* ── Cover image (shown before video loads) ── */}
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={project.id === "01"}
        style={{
          objectFit: "cover", zIndex: 0,
          transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />

      {/* ── Base gradient ── */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.72) 100%)",
          transition: "opacity 0.5s ease",
        }}
      />

      {/* ── Hover overlay — adds tint ── */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          backgroundColor: "rgba(0,0,0,0.22)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* ── Top: category tags ── */}
      <div
        style={{
          position: "absolute", top: "1.5rem", left: "1.5rem",
          display: "flex", gap: "0.4rem", flexWrap: "wrap", zIndex: 3,
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 600, fontSize: "0.6rem", letterSpacing: "0.1em",
              color: project.accent,
              backgroundColor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
              padding: "0.28rem 0.75rem",
              borderRadius: "100px",
              border: `1px solid ${project.accent}44`,
            }}
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* ── Top right: year ── */}
      <span
        style={{
          position: "absolute", top: "1.5rem", right: "1.5rem", zIndex: 3,
          fontFamily: "var(--font-space-grotesk)",
          fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.35)",
          transition: "opacity 0.4s ease",
          opacity: hovered ? 0 : 1,
        }}
      >
        {project.year}
      </span>

      {/* ── Bottom left: client + title — always visible ── */}
      <div style={{ position: "absolute", bottom: "2rem", left: "2rem", zIndex: 3 }}>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 0.25rem",
            letterSpacing: "0.05em",
          }}
        >
          {project.client}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            letterSpacing: "-0.03em",
            color: "var(--white)",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h2>
      </div>

      {/* ── Bottom right: description + tags — slides up on hover ── */}
      <div
        style={{
          position: "absolute", bottom: "2rem", right: "2rem",
          zIndex: 3, maxWidth: "380px", textAlign: "right",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            maxHeight: hovered ? "180px" : "0",
            transition: "max-height 0.55s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            style={{
              transform: hovered ? "translateY(0)" : "translateY(110%)",
              transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
              paddingBottom: "0.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.65)",
                margin: "0 0 1rem",
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {project.services.slice(0, 2).map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: "0.62rem",
                    letterSpacing: "0.06em",
                    color: "var(--black)",
                    backgroundColor: project.accent,
                    padding: "0.32rem 0.85rem",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
