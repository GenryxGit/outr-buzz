import { serviceCategories } from "@/lib/data/serviceCategories";

// Derive the same shape the grid needs from the canonical data source
const services = serviceCategories.map((cat) => ({
  title: cat.title,
  icon: cat.icon,
  items: cat.items.map((item) => item.label),
}));

export default function ServicesGrid() {
  return (
    <section id="services" style={{ backgroundColor: "var(--black)", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)" }}>
      {/* Intro */}
      <div style={{ maxWidth: "800px", marginBottom: "4rem" }}>
        <span style={{
          fontFamily: "var(--font-space-grotesk)", fontWeight: 500,
          fontSize: "0.75rem", color: "var(--electric)", letterSpacing: "0.2em",
          display: "block", marginBottom: "1rem",
        }}>
          WHAT WE DO
        </span>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
          fontSize: "clamp(2rem, 4.5vw, 4rem)", color: "var(--white)",
          letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.2rem",
        }}>
          A digital & creative studio making brands people remember.
        </h2>
        <p style={{
          fontFamily: "var(--font-dm-sans)", fontWeight: 400,
          fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.7,
        }}>
          Big ideas. Loud design. Real results.
        </p>
      </div>

      {/* 5-column services */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1px",
        backgroundColor: "rgba(255,255,255,0.06)",
        borderRadius: "16px",
        overflow: "hidden",
      }}>
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card"
            style={{
              padding: "2rem 1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "1.1rem", color: "var(--acid)" }}>
                {service.icon}
              </span>
              <span style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                fontSize: "0.95rem", color: "var(--white)", letterSpacing: "0.02em",
              }}>
                {service.title}
              </span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {service.items.map((item) => (
                <li key={item} style={{
                  fontFamily: "var(--font-dm-sans)", fontWeight: 400,
                  fontSize: "0.85rem", color: "var(--muted)",
                  paddingLeft: "0.8rem",
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
