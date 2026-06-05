"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Recalculate every pinned ScrollTrigger once the layout is truly stable.
    // Web fonts (next/font) and the home-page preloader settle the layout late;
    // without this, pin start/end offsets are cached against a stale height and
    // pinned sections (CTA, BentoGrid, About) appear broken — especially at
    // ≤1366px where the 80% root font-size changes total document height.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    const refreshFallback = setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      clearTimeout(refreshFallback);
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
