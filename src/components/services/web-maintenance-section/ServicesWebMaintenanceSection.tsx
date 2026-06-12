import { Button } from "@/components/ui";
import styles from "./ServicesWebMaintenanceSection.module.css";

const CONTENT = {
  title: "WEB MAINTENANCE",
  subtitle: "Website Wellness Ensures Peak Performance and Security",
  description:
    "As your digital guardian, our website maintenance services are the cornerstone of a thriving online presence. We provide comprehensive care for your website, ensuring it's not only running smoothly but also secure and up to date. Our vigilant maintenance and proactive improvements keep your digital platform at its best, driving consistent performance and user satisfaction.",
  cta: "LEARN MORE",
  ctaHref: "/contact",
  imageSrc: "/assets/images/digitial-marketing-service.png",
  imageAlt: "Web maintenance services illustration with support and security icons",
} as const;

export function ServicesWebMaintenanceSection() {
  return (
    <section
      id="web-maintenance"
      className={styles.section}
      aria-labelledby="services-web-maintenance-heading"
    >
      <div className={styles.box}>
        <div className={styles.split}>
          <div className={styles.contentCol}>
            <h2 id="services-web-maintenance-heading" className={styles.title}>
              {CONTENT.title}
            </h2>
            <p className={styles.subtitle}>{CONTENT.subtitle}</p>
            <p className={styles.description}>{CONTENT.description}</p>
            <Button href={CONTENT.ctaHref} className={styles.cta}>
              {CONTENT.cta}
            </Button>
          </div>

          <div className={styles.mediaCol}>
            <img
              src={CONTENT.imageSrc}
              alt={CONTENT.imageAlt}
              className={styles.mediaImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
