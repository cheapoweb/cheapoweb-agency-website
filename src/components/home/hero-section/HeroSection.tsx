import { Button } from "@/components/ui";
import { HeroVideo } from "./HeroVideo";
import styles from "./HeroSection.module.css";

const CONTENT = {
  displayTitle: "NEW YORK-BASED DIGITAL AGENCY",
  title:
    "New York Digital Agency for Web Development & Website Maintenance That Builds Revenue-Generating Websites",
  description:
    "Looking for a trusted digital agency that delivers more than just a beautiful website? cheapoweb helps businesses across New York and nationwide grow online with custom website design, web development, marketplace development, website maintenance, SEO, and digital marketing solutions built to increase traffic, leads, and revenue. Since 2020, we've partnered with startups, local businesses, eCommerce brands, law firms, healthcare providers, and growing enterprises to create high-performing digital experiences that turn visitors into customers.",
  cta: "GET A FREE PROPOSAL",
  videoSrc: "/assets/videos/hero-section.mp4",
} as const;

export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.split}>
        <div className={styles.contentPanel}>
          <div className={styles.pattern} aria-hidden />
          <div className={styles.contentInner}>
            <div className={styles.copy}>
              <p className={styles.displayTitle}>{CONTENT.displayTitle}</p>
              <h1 className={styles.title}>{CONTENT.title}</h1>
              <p className={styles.description}>{CONTENT.description}</p>
              <Button href="#contact" variant="outline" className={styles.cta}>
                {CONTENT.cta}
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.mediaPanel}>
          <HeroVideo src={CONTENT.videoSrc} />
        </div>
      </div>
    </section>
  );
}
