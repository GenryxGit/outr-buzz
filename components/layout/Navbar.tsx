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

export default function Navbar() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { yPercent: 0, duration: 0.6, ease: "power4.inOut" });
      gsap.fromTo(
        menuLinksRef.current.filter(Boolean),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.3 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, { yPercent: -100, duration: 0.5, ease: "power4.inOut" });
    }
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

  const allMobileLinks = [...NAV_LINKS, { label: "Services", href: "/services" }];

  return (
    <>
      <nav
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
            style={{ position: "relative" }}
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <Link
              href="/services"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 500,
                fontSize: "0.85rem",
                color: "#0A0A0A",
                textDecoration: "none",
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
            </Link>

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

                {/* Explore all */}
                <div style={{ gridColumn: "1 / -1", paddingTop: "1.2rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "flex-end" }}>
                  <Link
                    href="/services"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: "var(--white)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.3)",
                      paddingBottom: "1px",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--acid)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.3)")}
                  >
                    Explore All Services →
                  </Link>
                </div>
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
            className="md:hidden flex flex-col gap-1.5 p-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "100px",
              boxShadow: "0 4px 28px rgba(0,0,0,0.10)",
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block h-px w-5 bg-black transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }} />
            <span className="block h-px w-5 bg-black transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-px w-5 bg-black transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[99] flex flex-col items-center justify-center md:hidden"
        style={{ backgroundColor: "#0A0A0A", transform: "translateY(-100%)" }}
      >
        <div className="flex flex-col items-center gap-8">
          {allMobileLinks.map((item, i) => (
            <Link
              key={item.label}
              ref={(el) => { menuLinksRef.current[i] = el; }}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                color: "#FAFAF8",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                display: "inline-block",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
