"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ex/ey: fraction of viewport from center (negative = left/up)
const IMGS = [
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80", w: 265, h: 335, sr: -16, ex: -0.35, ey: -0.22, er: -7 },
  { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", w: 180, h: 180, sr:  20, ex: -0.04, ey: -0.36, er:  5 },
  { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", w: 250, h: 295, sr:  -5, ex:  0.33, ey: -0.26, er: 11 },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80", w: 310, h: 215, sr:   9, ex: -0.40, ey:  0.20, er: -6 },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80", w: 225, h: 295, sr: -11, ex:  0.15, ey:  0.27, er:  7 },
  { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80", w: 285, h: 215, sr:  13, ex:  0.39, ey:  0.16, er: -9 },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>(new Array(IMGS.length).fill(null));
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const W = window.innerWidth;
      const H = window.innerHeight;

      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { xPercent: -50, yPercent: -50, x: 0, y: 0, rotation: IMGS[i].sr });
      });

      gsap.set(textRef.current, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.93 });

      // pin:true instead of CSS sticky — CSS sticky breaks under Lenis transforms
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120vh",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1,
        },
      });

      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.to(el, {
          x: IMGS[i].ex * W,
          y: IMGS[i].ey * H,
          rotation: IMGS[i].er,
          ease: "power2.inOut",
          duration: 1,
        }, 0);
      });

      tl.to(textRef.current, {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        duration: 0.7,
      }, 0.35);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{ position: "relative", height: "100vh", overflow: "hidden", backgroundColor: "var(--cream)" }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        {IMGS.map((img, i) => (
          <div
            key={i}
            ref={(el) => { imgRefs.current[i] = el; }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: img.w,
              height: img.h,
              borderRadius: "16px",
              overflow: "hidden",
              willChange: "transform",
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="350px"
            />
          </div>
        ))}

        <div
          ref={textRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <span style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 500,
            fontSize: "0.72rem",
            color: "var(--electric)",
            letterSpacing: "0.22em",
            display: "block",
            marginBottom: "0.8rem",
          }}>
            GET IN TOUCH
          </span>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            color: "var(--black)",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "2rem",
          }}>
            Ready to start<br />your project?
          </h2>
          <a
            href="mailto:hello@outrbuzz.com"
            style={{
              display: "inline-block",
              backgroundColor: "var(--black)",
              color: "var(--white)",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              padding: "0.9rem 2.5rem",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
