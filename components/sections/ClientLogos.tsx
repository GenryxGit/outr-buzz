const logos = [
  "BRAND IDENTITY", "WEB DEVELOPMENT", "UI/UX DESIGN", "MOTION GRAPHICS", "SEO & MARKETING",
  "PRODUCT STRATEGY", "ECOMMERCE", "CONTENT STRATEGY", "MOBILE APPS", "DESIGN SYSTEMS",
];

const track = [...logos, ...logos];

export default function ClientLogos() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "2.5rem 0", overflow: "hidden", borderTop: "1px solid rgba(10,10,10,0.18)", borderBottom: "1px solid rgba(10,10,10,0.18)" }}>
      <div style={{ overflow: "hidden" }}>
        <div
          className="marquee-track-left"
          style={{ display: "flex", gap: "3rem", width: "max-content", alignItems: "center" }}
        >
          {[...track, ...track].map((logo, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                color: i % 5 === 0 ? "var(--black)" : "var(--muted)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                opacity: i % 5 === 0 ? 1 : 0.45,
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
