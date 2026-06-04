import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./AwardsSection.module.css";

const CONTENT = {
  title: "CHEAPOWEB AWARDS",
  subtitle: "THOUGHT LEADERSHIP IN WEB DESIGN AND MARKETING SINCE 2020",
  forbes: {
    title: "WE WRITE FOR FORBES",
    topics: [
      "Website Design",
      "Ecommerce",
      "User Experience",
      "Digital Marketing",
      "Technology Trends",
    ],
    cta: "READ OUR BLOG ARTICLES",
  },
  webby: {
    title: "WE JUDGE THE BEST OF THE BEST",
    subtitle: "Ken Braun Judges the WEBBY Awards",
    topics: ["Website Design", "Brand Identity", "User Experience", "Digital Marketing"],
    note: "Ken judges the best of the best and shares his findings across the entire staff of CheapoWeb so the agency can produce the highest level of work for our clients.",
  },
} as const;

export function AwardsSection() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <h2 className={styles.mainTitle}>{CONTENT.title}</h2>
        <p className={styles.subtitle}>{CONTENT.subtitle}</p>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>{CONTENT.forbes.title}</h3>
            <ul>
              {CONTENT.forbes.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <Button href="#blog" variant="outline">
              {CONTENT.forbes.cta}
            </Button>
          </article>
          <article className={styles.card}>
            <h3>{CONTENT.webby.title}</h3>
            <h4>{CONTENT.webby.subtitle}</h4>
            <ul>
              {CONTENT.webby.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <p className={styles.note}>{CONTENT.webby.note}</p>
          </article>
        </div>
        <div className={styles.badges}>
          {["Best in Class", "Agency of the Year", "Top Design Firm", "Webby Judge"].map(
            (badge) => (
              <div key={badge} className={styles.badge}>
                {badge}
              </div>
            ),
          )}
        </div>
      </SectionContainer>
    </section>
  );
}
