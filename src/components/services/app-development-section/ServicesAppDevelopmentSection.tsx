import { Button } from "@/components/ui";
import styles from "./ServicesAppDevelopmentSection.module.css";

const CONTENT = {
  title: "APP DEVELOPMENT",
  subtitle: "App Evolution—Innovating Your Ideas into Interactive Experiences",
  description:
    "We spin digital dreams through our experienced app development services. Embark on a journey of digital transformation with our app development services. We specialize in turning imaginative ideas into captivating applications. From concept to launch, our expertise in innovative technology and user-centric design ensures your app stands out in the bustling digital marketplace.",
  cta: "SEE APPETIZERS",
  ctaHref: "/contact",
  imageSrc: "/assets/images/digitial-marketing-service.png",
  imageAlt: "App development services illustration with mobile platform icons",
} as const;

export function ServicesAppDevelopmentSection() {
  return (
    <section
      id="app-development"
      className={styles.section}
      aria-labelledby="services-app-development-heading"
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
            <h2 id="services-app-development-heading" className={styles.title}>
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
