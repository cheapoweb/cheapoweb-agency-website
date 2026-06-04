import { Button } from "@/components/ui/Button";
import { HeroVideo } from "./HeroVideo";
import styles from "./HeroSection.module.css";

const CONTENT = {
  displayTitle: "DIGITAL AGENCY NEW YORK BASE",
  title:
    "NEW YORK WEB DESIGN COMPANY & DIGITAL MARKETING AGENCY SINCE 2020",
  description:
    "Build a high performance website with CheapoWeb, an award winning New York web design company and digital marketing agency trusted by brands since 2020. Our website design and development services combine strategic UX, brand storytelling, SEO, AEO, and conversion driven technology to create websites that captivate users, generate leads, and accelerate growth. From custom website development to data driven digital marketing, we engineer online experiences that turn traffic into revenue",
  cta: "REQUEST GROWTH STRATEGY",
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
