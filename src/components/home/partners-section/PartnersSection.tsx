import { Button } from "@/components/ui/Button";
import styles from "./PartnersSection.module.css";

const CONTENT = {
  title: "TRUSTED BY GROWING BUSINESSES ACROSS MULTIPLE INDUSTRIES",
  subtitle:
    "Over the years, CheapoWeb has partnered with businesses across legal, healthcare, construction, retail, eCommerce, professional services, transportation, and nonprofit sectors.",
  description:
    "We take pride in building long-term relationships that help our clients adapt, grow, and succeed in an increasingly competitive digital landscape.",
  cta: "REQUEST PARTNERSHIP",
} as const;

export function PartnersSection() {
  return (
    <section className={styles.section} aria-labelledby="partners-title">
      <div className={styles.contentZone}>
        <div className={styles.content}>
          <h2 id="partners-title" className={styles.title}>
            {CONTENT.title}
          </h2>
          <p className={styles.subtitle}>{CONTENT.subtitle}</p>
          <p className={styles.description}>{CONTENT.description}</p>
          {/* <Button href="#contact" className={styles.cta}>
            {CONTENT.cta}
          </Button> */}
        </div>
      </div>
      <div className={styles.logoZone} aria-hidden="true" />
    </section>
  );
}
