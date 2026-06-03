"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });

    tl.fromTo(
      lettersRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.6, ease: "power3.out" }
    );

    const obj = { val: 0 };
    tl.to(
      obj,
      {
        val: 100,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => {
          setCount(Math.round(obj.val));
        },
      },
      "<0.2"
    );

    tl.to({}, { duration: 0.3 });
  }, [onComplete]);

  const letters = "OUTRBUZZ".split("");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="flex items-end gap-1">
        {letters.map((letter, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lettersRef.current[i] = el;
            }}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "clamp(4rem, 12vw, 10rem)",
              color: "#FAFAF8",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              display: "inline-block",
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: "2rem",
          fontFamily: "var(--font-space-grotesk)",
          fontWeight: 500,
          fontSize: "0.9rem",
          color: "#8A8A8A",
          letterSpacing: "0.15em",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span ref={counterRef} style={{ color: "#FF3D00", fontWeight: 700 }}>
          {count}
        </span>
        <span>%</span>
      </div>
    </div>
  );
}
