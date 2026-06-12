import { Button } from "@/components/ui";
import styles from "./ServicesWebDesignSection.module.css";

const CONTENT = {
  title: "WEB DESIGN",
  subtitle: "Crafting Digital Masterpieces Through Top-Tier Web Design",
  description:
    "Create a custom online presence that speaks directly to the people you want to reach. Our web design services blend aesthetics with functionality, creating stunning, responsive websites that captivate and engage. Our team focuses on UI/UX, ensuring your site not only looks exceptional but also performs flawlessly. Let us transform your digital footprint into a work of art that drives results.",
  cta: "GET MY CUSTOM QUOTE",
  ctaHref: "/contact",
  imageSrc: "/assets/images/web-design-service.png",
  imageAlt: "Web design services illustration with development tools and technology icons",
} as const;

export function ServicesWebDesignSection() {
  return (
    <section
      id="web-design"
      className={styles.section}
      aria-labelledby="services-web-design-heading"
    >
      <div className={styles.box}>
        <div className={styles.split}>
          <div className={styles.contentCol}>
            <h2 id="services-web-design-heading" className={styles.title}>
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
