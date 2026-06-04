import { Button } from "@/components/ui/Button";
import styles from "./StatsSection.module.css";

const CONTENT = {
  eyebrow: "CHECK IT OUT!",
  title: "OUR WEB DESIGN COMPANY BRINGS IN THE NUMBERS",
  description:
    "As a top-tier web design and development agency, we get results! Check out the numbers we have gotten for our clients after designing and launching their new websites.",
  cta: "VIEW CASE STUDIES",
  items: [
    { value: "200+%", label: "INCREASE IN SALES LEADS" },
    { value: "95+%", label: "INCREASE IN ENGAGEMENT RATES" },
    { value: "90+%", label: "INCREASE IN SOCIAL MEDIA FOLLOWERS" },
    { value: "1,000+%", label: "WEBSITE TRAFFIC" },
    { value: "22M", label: "GOOGLE AD IMPRESSIONS" },
  ],
} as const;

export function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionBg} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.split}>
          <div className={styles.copyCol}>
            <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
            <h2 className={styles.title}>{CONTENT.title}</h2>
            <p className={styles.description}>{CONTENT.description}</p>
            <Button href="#case-studies" variant="outline" className={styles.cta}>
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
