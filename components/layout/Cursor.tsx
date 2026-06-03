"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only mount on real pointer (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.5, ease: "power3.out" });
    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "none" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "none" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const expand = (label?: string) => {
      gsap.to(cursor, { scale: label ? 3 : 2.5, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 0, duration: 0.2 });
      if (labelRef.current) labelRef.current.textContent = label ?? "";
    };

    const contract = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.2 });
      if (labelRef.current) labelRef.current.textContent = "";
    };

    // Event delegation — catches all links/buttons including those added after mount
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) { expand(cursorEl.dataset.cursor); return; }
      if (target.closest("a, button")) { expand(); return; }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor]")) return;
      contract();
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "#FAFAF8",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontSize: "9px",
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "#0A0A0A",
            mixBlendMode: "normal",
          }}
        />
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#FF3D00",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
