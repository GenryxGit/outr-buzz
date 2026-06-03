import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects, type Project } from "@/lib/data/projects";
import styles from "./CaseStudyPage.module.css";

export default function CaseStudyPage({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className={styles.page}>

        {/* ── Hero ── */}
        <section className={styles.hero} style={{ backgroundColor: project.color }}>
          <video autoPlay muted loop playsInline className={styles.heroVideo}>
            <source src={project.video} type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.heroBreadcrumb}>
              <Link href="/work" className={styles.breadcrumbLink}>Work</Link>
              <span className={styles.breadcrumbSep}>→</span>
              <span>{project.title}</span>
            </div>
            <div className={styles.heroTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.heroTag} style={{ color: project.accent }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <p className={styles.heroDesc}>{project.description}</p>
          </div>
        </section>

        {/* ── Meta bar ── */}
        <section className={styles.meta}>
          <div className={styles.metaContainer}>
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Role", value: project.role },
            ].map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Services</span>
              <span className={styles.metaValue}>{project.services.join(", ")}</span>
            </div>
          </div>
        </section>

        {/* ── Cover image ── */}
        <div className={styles.coverWrap}>
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            className={styles.coverImg}
            sizes="100vw"
            priority
          />
        </div>

        {/* ── Challenge ── */}
        <section className={styles.sectionLight}>
          <div className={styles.splitContainer}>
            <div className={styles.splitLabel}>
              <span className={styles.eyebrow}>The Challenge</span>
            </div>
            <div className={styles.splitBody}>
              <h2 className={styles.sectionHeading}>
                What we were solving.
              </h2>
              <p className={styles.bodyText}>{project.challenge}</p>
            </div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className={styles.sectionDark}>
          <div className={styles.splitContainer}>
            <div className={styles.splitLabel}>
              <span className={`${styles.eyebrow} ${styles.eyebrowDark}`}>The Solution</span>
            </div>
            <div className={styles.splitBody}>
              <h2 className={`${styles.sectionHeading} ${styles.headingDark}`}>
                How we approached it.
              </h2>
              <p className={`${styles.bodyText} ${styles.bodyDark}`}>{project.solution}</p>
            </div>
          </div>
        </section>

        {/* ── Outcomes ── */}
        <section className={styles.sectionLight}>
          <div className={styles.outcomesContainer}>
            <span className={styles.eyebrow}>Outcomes</span>
            <h2 className={styles.sectionHeading} style={{ marginBottom: "3rem" }}>
              What the work delivered.
            </h2>
            <div className={styles.outcomesGrid}>
              {project.outcomes.map((o) => (
                <article key={o.value} className={styles.outcomeCard}>
                  <p className={styles.outcomeValue}>{o.value}</p>
                  <p className={styles.outcomeLabel}>{o.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Next project ── */}
        <section className={styles.nextSection} style={{ backgroundColor: next.color }}>
          <video autoPlay muted loop playsInline className={styles.nextVideo}>
            <source src={next.video} type="video/mp4" />
          </video>
          <div className={styles.nextOverlay} />
          <Link href={`/work/${next.slug}`} className={styles.nextLink}>
            <span className={styles.nextEyebrow}>Next Project</span>
            <h2 className={styles.nextTitle}>{next.title}</h2>
            <span className={styles.nextArrow}>→</span>
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
