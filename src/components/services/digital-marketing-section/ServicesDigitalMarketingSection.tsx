import { Button } from "@/components/ui";
import styles from "./ServicesDigitalMarketingSection.module.css";

const CONTENT = {
  title: "DIGITAL MARKETING",
  subtitle: "Take Your Brand to the Next Level with Digital Marketing Mastery",
  description:
    "Unlock the full potential of your business with our comprehensive digital marketing services. Tailored to meet your unique business needs, our strategies encompass a range of effective tools and techniques, ensuring maximum online visibility and engagement. Boost your business and drive substantial growth with our expert solutions.",
  cta: "GET MY CUSTOM QUOTE",
  ctaHref: "/contact",
  imageSrc: "/assets/images/digitial-marketing-service.png",
  imageAlt: "Digital marketing services illustration with social media and campaign icons",
} as const;

export function ServicesDigitalMarketingSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-digital-marketing-heading"
    >
      <div className={styles.box}>
        <div className={styles.split}>
          <div className={styles.mediaCol}>
            <img
              src={CONTENT.imageSrc}
              alt={CONTENT.imageAlt}
              className={styles.mediaImage}
            />
          </div>

          <div className={styles.contentCol}>
            <h2 id="services-digital-marketing-heading" className={styles.title}>
              {CONTENT.title}
            </h2>
            <p className={styles.subtitle}>{CONTENT.subtitle}</p>
            <p className={styles.description}>{CONTENT.description}</p>
            <Button href={CONTENT.ctaHref} className={styles.cta}>
              {CONTENT.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
