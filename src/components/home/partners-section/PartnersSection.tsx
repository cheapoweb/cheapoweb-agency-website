import { Button } from "@/components/ui/Button";
import styles from "./PartnersSection.module.css";

const CONTENT = {
  title: "OUR PARTNERS",
  subtitle:
    "CheapoWeb establishes and nurtures web design and digital marketing partnerships to keep the party going!",
  description:
    "As a digital marketing and web design company, we cultivate exceptional partnerships and collaborations with leaders in technology, ecommerce, social media, and more, to deliver effective advertising and web design services to our clients. These highly beneficial partnerships provide us with powerful tools, training, resources, and support, which enable us to deliver the highest quality products for every project. Talk with us about how these collaborative relationships can benefit your company.",
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
