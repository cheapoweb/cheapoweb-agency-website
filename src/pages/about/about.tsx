import { Button, SectionContainer } from "@/components/ui";
import styles from "./about.module.css";

const CONTENT = {
  eyebrow: "ABOUT US",
  title:
    "Award-Winning Web Design, Development and Digital Marketing Agency Driving Business Growth Since 2020.",
  description:
    "cheapoweb is a New York-based digital agency creating high-performance websites and scalable digital platforms for brands ready to grow and lead. Since 2020, we've partnered with companies across New York and nationwide to deliver custom design, development, and conversion-focused experiences. We blend strategic branding, UI/UX, SEO, and AI-driven search visibility to help brands stand out, attract qualified traffic, and turn engagement into measurable revenue.",
  cta: "SCHEDULE MEETING",
} as const;

export default function About() {
  return (
    <div className={styles.page}>
      <SectionContainer>
        <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
        <h1>{CONTENT.title}</h1>
        <p className={styles.text}>{CONTENT.description}</p>
        <Button href="/contact">{CONTENT.cta}</Button>
      </SectionContainer>
    </div>
  );
}
