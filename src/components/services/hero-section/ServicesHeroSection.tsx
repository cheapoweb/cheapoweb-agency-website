import { Button } from "@/components/ui";
import styles from "./ServicesHeroSection.module.css";

const CONTENT = {
  eyebrow: "SERVICES",
  title: "BRANDING, WEB DESIGN & DIGITAL MARKETING SERVICES",
  description:
    "From custom website design and web development to SEO, PPC, and ongoing website maintenance, cheapoweb delivers full-service digital solutions built to increase visibility, engagement, and revenue for businesses across New York and nationwide.",
  cta: "VIEW ALL CASE STUDIES",
  ctaHref: "/#results",
  imageSrc: "/assets/images/servicespage-hero.png",
  imageAlt: "cheapoweb services hero showcasing digital design and marketing",
} as const;

export function ServicesHeroSection() {
  return (
    <section className={styles.section} aria-labelledby="services-hero-heading">
      <div className={styles.split}>
        <div className={styles.contentPanel}>
          <div className={styles.contentInner}>
            <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
            <h1 id="services-hero-heading" className={styles.title}>
              {CONTENT.title}
            </h1>
            <p className={styles.description}>{CONTENT.description}</p>
            <Button href={CONTENT.ctaHref} className={styles.cta}>
              {CONTENT.cta}
            </Button>
          </div>
        </div>

        <div className={styles.visualPanel}>
          <img
            src={CONTENT.imageSrc}
            alt={CONTENT.imageAlt}
            className={styles.visualImage}
          />
        </div>
      </div>
    </section>
  );
}
