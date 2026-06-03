"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactHero.module.css";

gsap.registerPlugin(ScrollTrigger);

type FormState = { status: "idle" | "success" | "error"; errors: Record<string, string> };

const initial: FormState = { status: "idle", errors: {} };

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);

  const [state, setState]       = useState<FormState>(initial);
  const [pending, setPending]   = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const firstName = (fd.get("firstName") as string).trim();
    const lastName  = (fd.get("lastName")  as string).trim();
    const email     = (fd.get("email")     as string).trim();
    const subject   = (fd.get("subject")   as string).trim();
    const message   = (fd.get("message")   as string).trim();

    const errors: Record<string, string> = {};
    if (!firstName) errors.firstName = "Required";
    if (!lastName)  errors.lastName  = "Required";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Valid email required";
    if (!message || message.length < 10)
      errors.message = "Please add a bit more detail";

    if (Object.keys(errors).length > 0) {
      setState({ status: "error", errors });
      return;
    }

    setPending(true);
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      subject ? `Subject: ${subject}` : "",
      "",
      message,
    ].filter(Boolean).join("\n");

    const href = `mailto:hello@outrbuzz.com?subject=${encodeURIComponent(
      subject || `Message from ${firstName} ${lastName}`
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    setState({ status: "success", errors: {} });
    setPending(false);
  }

  return (
    <section ref={sectionRef} className={styles.hero}>

      {/* ── Parallax background image ── */}
      <div ref={bgRef} className={styles.bgWrap} aria-hidden="true">
        <Image
          src="/images/contact/wrap-1-bg.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "top center" }}
          sizes="100vw"
        />
      </div>

      <div className={styles.layout}>

        {/* ── Left ── */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            get in<br />touch
          </h1>
          <div className={styles.info}>
            <a href="mailto:hello@outrbuzz.com" className={styles.infoItem}>
              hello@outrbuzz.com
            </a>
            <a href="tel:+923000000000" className={styles.infoItem}>
              +92 300 0000000
            </a>
            <span className={styles.infoItem}>
              DHA Phase 6, Lahore, Pakistan
            </span>
          </div>
        </div>

        {/* ── Right — form panel ── */}
        <div className={styles.panel}>
          {state.status === "success" ? (
            <div className={styles.success}>
              <p className={styles.successHeading}>Message ready!</p>
              <p className={styles.successBody}>
                Your email draft is pre-filled. Open it below and hit send.
              </p>
              <a href={mailtoHref} className={styles.successBtn}>
                Open Email Draft →
              </a>
            </div>
          ) : (
            <>
              <h2 className={styles.panelHeading}>
                reach out and<br />let&apos;s talk!
              </h2>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="firstName">
                      first name<span className={styles.req}>*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="first name"
                      autoComplete="given-name"
                      className={styles.input}
                    />
                    {state.errors.firstName && (
                      <span className={styles.error}>{state.errors.firstName}</span>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="lastName">
                      last name<span className={styles.req}>*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="last name"
                      autoComplete="family-name"
                      className={styles.input}
                    />
                    {state.errors.lastName && (
                      <span className={styles.error}>{state.errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="heroEmail">
                    email address<span className={styles.req}>*</span>
                  </label>
                  <input
                    id="heroEmail"
                    name="email"
                    type="email"
                    placeholder="email address"
                    autoComplete="email"
                    className={styles.input}
                  />
                  {state.errors.email && (
                    <span className={styles.error}>{state.errors.email}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">
                    subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. brand identity project"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">
                    message<span className={styles.req}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="type here..."
                    className={styles.textarea}
                  />
                  {state.errors.message && (
                    <span className={styles.error}>{state.errors.message}</span>
                  )}
                </div>

                {state.status === "error" && Object.keys(state.errors).length === 0 && (
                  <p className={styles.error}>Something went wrong. Please try again.</p>
                )}

                <button type="submit" className={styles.submit} disabled={pending}>
                  {pending ? "preparing…" : "submit"}
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
