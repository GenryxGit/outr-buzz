"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import Preloader from "@/components/sections/Preloader";

export default function HomeHero() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <Hero ready={preloaderDone} />
    </>
  );
}
