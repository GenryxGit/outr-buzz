"use client";

/**
 * ScrollRevealText
 *
 * A paragraph whose words fill from a faint grey to a solid colour as the user
 * scrolls the element through the viewport — no pinning, tied directly to scroll
 * progress (`scrub`). Used on the alternating image/text rows of the service pages.
 *
 * Only the paragraph text animates; headings and other text are unaffected.
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  style?: React.CSSProperties;
  /** Colour of words not yet scrolled past */
  fromColor?: string;
  /** Colour words fill to as you scroll */
  toColor?: string;
};

export default function ScrollRevealText({
  text,
  style,
  fromColor = "rgba(10,10,10,0.22)",
  toColor = "var(--black)",
}: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll<HTMLElement>("[data-word]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: fromColor },
        {
          color: toColor,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [text, fromColor, toColor]);

  return (
    <p ref={ref} style={style}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          data-word
          style={{ display: "inline-block", marginRight: "0.28em", color: fromColor }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
