import styles from "./AboutIntroSection.module.css";

const CONTENT = {
  eyebrow: "ABOUT US",
  title:
    "SINCE 2020, CHEAPOWEB HAS BLENDED CREATIVITY, STRATEGY, AND PERFORMANCE TO HELP BRANDS RISE ABOVE THE COMPETITION",
  paragraphs: [
    "cheapoweb was founded in 2020 with a simple belief: great digital work should blend creativity with purpose.",
    "What began as a focused team of web designers and digital marketers has grown into a trusted agency serving businesses across New York and nationwide—from startups and local businesses to eCommerce brands, law firms, healthcare providers, and growing enterprises.",
    "We've navigated every shift in the digital landscape—from mobile-first design to AI-driven search—and emerged sharper and more inspired each time.",
    "Along the way, our team has crafted award-winning websites, brands, and campaigns that don't just look beautiful—they perform.",
    "Since 2020, our recipe hasn't changed. We blend passion, strategy, and innovation to create digital experiences that move people and grow businesses.",
  ],
  imageSrc: "/assets/images/aboutpage-img.png",
  imageAlt: "cheapoweb team and digital agency workspace",
} as const;

export function AboutIntroSection() {
  return (
    <section className={styles.section} aria-labelledby="about-intro-heading">
      <div className={styles.split}>
        <div className={styles.mediaPanel}>
          <div className={styles.imageWrap}>
            <img
              src={CONTENT.imageSrc}
              alt={CONTENT.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.imageOverlay} aria-hidden />
        </div>

        <div className={styles.contentPanel}>
          <div className={styles.contentInner}>
            <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
            <h1 id="about-intro-heading" className={styles.title}>
              {CONTENT.title}
            </h1>
            <div className={styles.paragraphs}>
              {CONTENT.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
