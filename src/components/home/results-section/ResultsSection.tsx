import { ResultsCarousel } from "./ResultsCarousel";
import styles from "./ResultsSection.module.css";

const CONTENT = {
  title: "REAL RESULTS. REAL BUSINESS GROWTH.",
  sideImage: "/assets/images/our-results.png",
  autoPlayMs: 5000,
  cta: "VIEW SUCCESS STORIES",
  items: [
    {
      stat: "200%+",
      label: "INCREASE IN SALES LEADS",
      client: "Sales Growth",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "95%+",
      label: "INCREASE IN CUSTOMER ENGAGEMENT",
      client: "Customer Engagement",
      image:
        "https://images.unsplash.com/photo-1592945405224-be312337f16c?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      stat: "90%+",
      label: "INCREASE IN SOCIAL MEDIA GROWTH",
      client: "Social Media Growth",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "1,000%+",
      label: "INCREASE IN WEBSITE TRAFFIC",
      client: "Website Traffic",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "22M+",
      label: "GOOGLE AD IMPRESSIONS",
      client: "Google Ads",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    },
  ],
} as const;

export function ResultsSection() {
  return (
    <section
      id="results"
      className={styles.section}
      style={{ backgroundImage: `url(${CONTENT.sideImage})` }}
    >
      <div className={styles.overlay} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>{CONTENT.title}</h2>

          <ResultsCarousel
            items={CONTENT.items}
            autoPlayMs={CONTENT.autoPlayMs}
            ctaLabel={CONTENT.cta}
            ctaHref="#featured-work"
          />
        </div>
        <div className={styles.spacer} aria-hidden />
      </div>
    </section>
  );
}
