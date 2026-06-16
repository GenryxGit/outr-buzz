"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_DROPDOWN = [
  {
    heading: "Development",
    href: "/services/development",
    items: [
      { label: "Website Development", href: "/services/development/website-development" },
      { label: "Mobile App Development", href: "/services/development/mobile-app-development" },
      { label: "Ecommerce Development", href: "/services/development/ecommerce-development" },
      { label: "Product Development", href: "/services/development/product-development" },
      { label: "Software Development", href: "/services/development/software-development" },
      { label: "Quality Assurance", href: "/services/development/quality-assurance" },
    ],
  },
  {
    heading: "Design",
    href: "/services/design",
    items: [
      { label: "Brand Identity", href: "/services/design/brand-identity" },
      { label: "UI/UX Design", href: "/services/design/ui-ux-design" },
      { label: "Motion Graphics", href: "/services/design/motion-graphics" },
      { label: "Print Design", href: "/services/design/print-design" },
    ],
  },
  {
    heading: "Digital Marketing",
    href: "/services/digital-marketing",
    items: [
      { label: "SEO / SEM", href: "/services/digital-marketing/seo-sem" },
      { label: "Social Media", href: "/services/digital-marketing/social-media" },
      { label: "PPC Ads", href: "/services/digital-marketing/ppc-ads" },
      { label: "Content Strategy", href: "/services/digital-marketing/content-strategy" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/outerbuzz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/outerbuzz/" },
];

/* Small chevron that rotates when its section is open */
function Chevron({ open, size = 16 }: { open: boolean; size?: number }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 12 12" fill="none"
      style={{ transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
    >
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Mobile menu shared styles ── */
const mobileLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
  fontSize: "clamp(1.7rem, 7vw, 2.4rem)", letterSpacing: "-0.02em",
  color: "var(--black)", textDecoration: "none",
  padding: "0.9rem 0", borderTop: "1px solid rgba(10,10,10,0.08)",
};
const mobileCategoryStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
  fontSize: "1.05rem", letterSpacing: "0.01em", color: "var(--black)",
  textDecoration: "none", padding: "0.9rem 0", display: "block",
};
const mobileSubStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)", fontSize: "0.92rem",
  color: "rgba(10,10,10,0.6)", textDecoration: "none",
  padding: "0.45rem 0 0.45rem 1rem",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);          // desktop hover dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOpenCat, setMobileOpenCat] = useState<string | null>(null);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Overlay slide is driven by an inline CSS transform + transition (below).
  // This effect locks body scroll and resets the accordions when closed.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) {
      setMobileServicesOpen(false);
      setMobileOpenCat(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMagnet = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(e.currentTarget, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: "power2.out" });
  };

  const handleMagnetLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  };

  const openServices = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="site-navbar"
        style={{
          position: "fixed",
          top: "1.2rem",
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          pointerEvents: "none",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ pointerEvents: "auto", display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="Outr Buzz" width={54} height={54} style={{ display: "block" }} />
        </Link>

        {/* Pill — center */}
        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            alignItems: "center",
            gap: "0.15rem",
            backgroundColor: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderRadius: "100px",
            padding: "0.5rem 0.75rem",
            boxShadow: "0 4px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1px solid rgba(10,10,10,0.18)",
            pointerEvents: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {/* Regular links */}
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onMouseMove={handleMagnet}
              onMouseLeave={(e) => { handleMagnetLeave(e); e.currentTarget.style.backgroundColor = "transparent"; }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)")}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 500,
                fontSize: "0.85rem",
                color: "#0A0A0A",
                textDecoration: "none",
                letterSpacing: "0.01em",
                padding: "0.45rem 1rem",
                borderRadius: "100px",
                display: "inline-block",
                transition: "background-color 0.2s",
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Services with dropdown */}
          <div
            style={{ position: "static" }}
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            {/* Non-navigating trigger — hover opens the dropdown, click does nothing */}
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 500,
                fontSize: "0.85rem",
                color: "#0A0A0A",
                border: "none",
                letterSpacing: "0.01em",
                padding: "0.45rem 1rem",
                borderRadius: "100px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                transition: "background-color 0.2s",
                backgroundColor: servicesOpen ? "rgba(0,0,0,0.05)" : "transparent",
              }}
            >
              Services
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 0.75rem)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#0A0A0A",
                  borderRadius: "20px",
                  padding: "2rem",
                  width: "640px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "2rem",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.28)",
                  zIndex: 200,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {SERVICES_DROPDOWN.map((col) => (
                  <div key={col.heading}>
                    <Link href={col.href} style={{ textDecoration: "none" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        color: "var(--white)",
                        display: "block",
                        marginBottom: "1rem",
                      }}
                    >
                      {col.heading}
                    </span>
                    </Link>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                      {col.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "0.82rem",
                            color: "rgba(250,250,248,0.55)",
                            textDecoration: "none",
                            transition: "color 0.15s",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(250,250,248,1)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,248,0.55)")}
                        >
                          <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--acid)", flexShrink: 0 }} />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            )}
          </div>
        </div>

        {/* Right — CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", pointerEvents: "auto" }}>
          <Link
            href="/contact"
            className="hidden md:inline-block"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 600,
              fontSize: "0.85rem",
              color: "#FAFAF8",
              backgroundColor: "#0A0A0A",
              padding: "0.6rem 1.4rem",
              borderRadius: "100px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0A0A0A")}
          >
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-2 p-2"
            style={{ background: "none", border: "none" }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block h-0.5 w-7 bg-black transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span className="block h-0.5 w-7 bg-black transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-0.5 w-7 bg-black transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu — white, left-aligned, Services accordion */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          backgroundColor: "var(--cream)",
          transform: menuOpen ? "translateY(0%)" : "translateY(-100%)",
          transition: "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "6rem 1.75rem 2.5rem",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", marginTop: "0.5rem" }}>
          {/* Plain links */}
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} onClick={closeMenu} style={mobileLinkStyle}>
              {item.label}
            </Link>
          ))}

          {/* Services accordion header — click only toggles, never navigates */}
          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
            style={{
              ...mobileLinkStyle,
              background: "none", border: "none", borderTop: "1px solid rgba(10,10,10,0.08)",
              cursor: "pointer", width: "100%", textAlign: "left",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}
          >
            Services
            <Chevron open={mobileServicesOpen} size={20} />
          </button>

          {/* Categories list */}
          <div style={{ maxHeight: mobileServicesOpen ? 2000 : 0, overflow: "hidden", transition: "max-height 0.45s ease" }}>
            {SERVICES_DROPDOWN.map((cat) => (
              <div key={cat.heading} style={{ borderTop: "1px solid rgba(10,10,10,0.06)", paddingLeft: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {/* Text → category page */}
                  <Link href={cat.href} onClick={closeMenu} style={{ ...mobileCategoryStyle, flex: 1 }}>
                    {cat.heading}
                  </Link>
                  {/* Arrow → toggle sub-services */}
                  <button
                    type="button"
                    aria-label={`Toggle ${cat.heading} services`}
                    aria-expanded={mobileOpenCat === cat.heading}
                    onClick={() => setMobileOpenCat((c) => (c === cat.heading ? null : cat.heading))}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "0.9rem 0 0.9rem 1.2rem", color: "var(--black)" }}
                  >
                    <Chevron open={mobileOpenCat === cat.heading} size={16} />
                  </button>
                </div>

                {/* Sub-services */}
                <div style={{ maxHeight: mobileOpenCat === cat.heading ? 1000 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                  <div style={{ display: "flex", flexDirection: "column", paddingBottom: "0.8rem" }}>
                    {cat.items.map((sub) => (
                      <Link key={sub.href} href={sub.href} onClick={closeMenu} style={mobileSubStyle}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Social links — pinned to the bottom */}
        <div style={{ marginTop: "auto", paddingTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-space-grotesk)", fontWeight: 600,
                fontSize: "0.8rem", letterSpacing: "0.04em",
                color: "rgba(10,10,10,0.6)", textDecoration: "none",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
