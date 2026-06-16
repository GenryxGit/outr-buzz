"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const taglines = [
  "UI/UX Design Agency",
  "Product Studio",
  "Dev-First Creative",
  "Brand Experience Lab",
];

// 9 images — 3-col, 3 rows. Reduced from 15 to cut LCP/bandwidth cost.
const floatingImages = [
  // Row 1
  { src: "/images/homepage/hero-1.png", w: 390, h: 365, top: "4%",  left: "2%" },
  { src: "/images/homepage/hero-2.png", w: 355, h: 415, top: "3%",  left: "36%" },
  { src: "/images/homepage/hero-3.png", w: 375, h: 350, top: "5%",  left: "69%" },
  // Row 2
  { src: "/images/homepage/hero-4.png", w: 365, h: 395, top: "36%", left: "19%" },
  { src: "/images/homepage/hero-5.png", w: 410, h: 360, top: "34%", left: "52%" },
  { src: "/images/homepage/hero-6.png", w: 360, h: 390, top: "37%", right: "1%" },
  // Row 3
  { src: "/images/homepage/hero-7.png", w: 385, h: 370, top: "68%", left: "3%" },
  { src: "/images/homepage/hero-8.png", w: 350, h: 420, top: "66%", left: "37%" },
  { src: "/images/homepage/hero-9.png", w: 400, h: 355, top: "69%", left: "70%" },
];

export default function Hero({ ready }: { ready: boolean }) {
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [tagIndex, setTagIndex] = useState(0);
  const tagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const layer = imageLayerRef.current;
    if (!layer) return;
    const xTo = gsap.quickTo(layer, "x", { duration: 1.4, ease: "power3.out" });
    const yTo = gsap.quickTo(layer, "y", { duration: 1.4, ease: "power3.out" });
    const onMove = (e: MouseEvent) => {
      xTo((0.5 - e.clientX / window.innerWidth) * window.innerWidth * 1.5);
      yTo((0.5 - e.clientY / window.innerHeight) * window.innerHeight * 1.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo([line1Ref.current, line2Ref.current], { yPercent: 110 }, { yPercent: 0, stagger: 0.15, duration: 1, ease: "power4.out" })
      .fromTo(subtextRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .fromTo(tagsRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
  }, [ready]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!tagRef.current) return;
      gsap.to(tagRef.current, {
        opacity: 0, y: -10, duration: 0.3, ease: "power2.in",
        onComplete: () => {
          setTagIndex((prev) => (prev + 1) % taglines.length);
          gsap.fromTo(tagRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        },
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>

      <div
        ref={imageLayerRef}
        aria-hidden="true"
        className={styles.imageLayer}
      >
        {floatingImages.map((img, i) => (
          <div
            key={i}
            className={styles.imageCard}
            style={{ top: img.top, left: img.left, right: img.right }}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.5, ease: "power3.out" })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.6, ease: "power3.out" })}
          >
            <Image
              src={img.src}
              alt=""
              width={img.w}
              height={img.h}
              style={{ objectFit: "cover", display: "block" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className={styles.contentCard}>
        <div ref={tagsRef} className={styles.tagsRow} style={{ opacity: 0 }}>
          <span className={styles.tagPill}>
            <span className={styles.tagDot} />
            <span ref={tagRef}>{taglines[tagIndex]}</span>
          </span>
        </div>

        <div className="line-mask">
          <span ref={line1Ref} className={styles.headlineLine}>We Design.</span>
        </div>
        <div className="line-mask">
          <span ref={line2Ref} className={styles.headlineLine}>
            We Build. <span className={styles.headlineAccent}>We Buzz. ✦</span>
          </span>
        </div>

        <div className={styles.bottomStack}>
          <p ref={subtextRef} className={styles.subtext} style={{ opacity: 0 }}>
            A studio for brands that demand attention. Big ideas, loud design, real results.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/#work" className={styles.ctaPrimary}>See Our Work</Link>
            <Link href="/contact" className={styles.ctaSecondary}>Let&apos;s Talk</Link>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLabel}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>

    </section>
  );
}
