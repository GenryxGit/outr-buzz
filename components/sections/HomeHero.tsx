"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/sections/Hero";
import Preloader from "@/components/sections/Preloader";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // The preloader reveals the page late; once it's done the layout is final,
  // so recalculate all pinned ScrollTriggers (CTA, BentoGrid) against it.
  useEffect(() => {
    if (!preloaderDone) return;
    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(t);
  }, [preloaderDone]);

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <Hero ready={preloaderDone} />
    </>
  );
}
