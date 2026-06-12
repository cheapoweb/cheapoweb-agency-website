import { Button } from "@/components/ui";
import styles from "./ServicesWebDevelopmentSection.module.css";

const CONTENT = {
  title: "WEB DEVELOPMENT",
  subtitle: "Crafting the Future of Your Online Presence with Web Development",
  description:
    "Elevate your digital footprint with our bespoke web development services. Focused on creating stunning, user-friendly, and functionally robust websites, our team blends cutting-edge technology with creative design to bring your vision to life. From custom builds to scalable platforms, we deliver web experiences built to perform and grow with your business.",
  cta: "VIEW PROCESS",
  ctaHref: "/contact",
  imageSrc: "/assets/images/digitial-marketing-service.png",
  imageAlt: "Web development services illustration with platform and technology icons",
} as const;

export function ServicesWebDevelopmentSection() {
  return (
    <section
      id="web-development"
      className={styles.section}
      aria-labelledby="services-web-development-heading"
    >
      <div className={styles.box}>
        <div className={styles.split}>
          <div className={styles.contentCol}>
            <h2 id="services-web-development-heading" className={styles.title}>
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
