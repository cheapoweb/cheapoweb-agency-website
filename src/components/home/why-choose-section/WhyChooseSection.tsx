import { Button } from "@/components/ui/Button";
import styles from "./WhyChooseSection.module.css";

const CONTENT = {
  eyebrow: "WHY CHOOSE CHEAPOWEB",
  title: "WHY BUSINESSES CHOOSE CHEAPOWEB",
  cta: "GET MY CUSTOM QUOTE",
  items: [
    {
      title: "FULL-SERVICE EXPERTISE",
      description:
        "One team for website design, web development, maintenance, SEO, and digital marketing.",
    },
    {
      title: "NEW YORK-BASED DIGITAL TEAM",
      description:
        "Work directly with experienced digital professionals who understand your business goals and the New York market.",
    },
    {
      title: "FAST TURNAROUND TIMES",
      description:
        "Efficient project management ensures your website launches on time without sacrificing quality.",
    },
    {
      title: "DEDICATED PROJECT MANAGERS",
      description:
        "Enjoy clear communication, transparency, and a single point of contact throughout your project.",
    },
    {
      title: "AFFORDABLE SOLUTIONS",
      description:
        "High-quality web development and marketing services designed to provide exceptional value.",
    },
    {
      title: "ONGOING WEBSITE SUPPORT",
      description:
        "Our partnership continues long after launch with maintenance, updates, monitoring, and optimization.",
    },
    {
      title: "CONVERSION-FOCUSED APPROACH",
      description:
        "Every website and campaign is built with one goal in mind: generating measurable business growth.",
    },
  ],
} as const;

export function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.split}>
        <div className={styles.leftArt} aria-hidden>
          <img
            src="/assets/images/whychooseus.png"
            alt=""
            className={styles.leftArtImage}
            aria-hidden="true"
          />
          <div className={styles.cta}>
              <Button href="#contact" className={styles.ctaButton}>{CONTENT.cta}</Button>
            </div>
        </div>

        <div className={styles.right}>
            <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
            <h2 className={styles.title}>{CONTENT.title}</h2>

            <div className={styles.grid}>
              {CONTENT.items.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
