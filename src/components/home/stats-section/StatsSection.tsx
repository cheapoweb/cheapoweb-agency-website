import { Button } from "@/components/ui";
import styles from "./StatsSection.module.css";

const CONTENT = {
  eyebrow: "PERFORMANCE METRICS",
  title: "REAL RESULTS. REAL BUSINESS GROWTH.",
  description:
    "Our mission is simple: help businesses generate more traffic, more leads, and more revenue through strategic web development and digital marketing. From local businesses to growing enterprises, our campaigns and websites are built to deliver measurable business outcomes.",
  cta: "VIEW SUCCESS STORIES",
  items: [
    { value: "200%+", label: "INCREASE IN SALES LEADS" },
    { value: "95%+", label: "INCREASE IN CUSTOMER ENGAGEMENT" },
    { value: "90%+", label: "INCREASE IN SOCIAL MEDIA GROWTH" },
    { value: "1,000%+", label: "INCREASE IN WEBSITE TRAFFIC" },
    { value: "22M+", label: "GOOGLE AD IMPRESSIONS" },
  ],
} as const;

export function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionBg} aria-hidden> 
        <div className={styles.sectionBgInner} />
      </div>

      <div className={styles.inner}>
        <div className={styles.split}>
          <div className={styles.copyCol}>
            <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
            <h2 className={styles.title}>{CONTENT.title}</h2>
            <p className={styles.description}>{CONTENT.description}</p>
            <Button href="#featured-work" variant="outline" className={styles.cta}>
              {CONTENT.cta}
            </Button>
          </div>

          <div className={styles.statsCol}>
            <div className={styles.statsGrid}>
              {CONTENT.items.map((item, index) => (
                <div
                  key={item.label}
                  className={`${styles.stat} ${styles[`stat${index + 1}`]}`}
                >
                  <span className={styles.value}>{item.value}</span>
                  <span className={styles.label}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
