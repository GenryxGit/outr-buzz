"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/data/projects";
import WorkCard from "./WorkCard";

const ALL_TABS = ["All", "Website", "Branding", "Social Media"];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--cream)", minHeight: "100dvh" }}>

        {/* ── Hero row ── */}
        <section
          style={{
            padding: "clamp(8rem, 14vw, 11rem) clamp(1.5rem, 5vw, 4rem) clamp(2.5rem, 4vw, 3rem)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "var(--electric)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              SELECTED WORK
            </span>
            <h1
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "var(--black)",
                margin: 0,
              }}
            >
              We&apos;re moving<br />brands to action.
            </h1>
          </div>

          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: "360px",
              margin: 0,
            }}
          >
            Every engagement is a focused collaboration — strategy, design, and delivery as one. No pitch decks. No handoff theatre.
          </p>
        </section>

        {/* ── Filter tabs ── */}
        <div
          style={{
            padding: "0 clamp(1.5rem, 5vw, 4rem)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            borderBottom: "1px solid rgba(10,10,10,0.1)",
            paddingBottom: "1.5rem",
          }}
        >
          {ALL_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: active === tab ? 700 : 500,
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                color: active === tab ? "var(--white)" : "var(--black)",
                backgroundColor: active === tab ? "var(--black)" : "transparent",
                border: "1px solid",
                borderColor: active === tab ? "var(--black)" : "rgba(10,10,10,0.18)",
                borderRadius: "100px",
                padding: "0.5rem 1.2rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab}
            </button>
          ))}
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.8rem",
              color: "var(--muted)",
              marginLeft: "auto",
              alignSelf: "center",
            }}
          >
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── Cards grid (2 → 1 column ≤768 via .work-grid) ── */}
        <div
          className="work-grid"
          style={{
            padding: "0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 8rem)",
            display: "grid",
            gap: "1.25rem",
          }}
        >
          {filtered.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
