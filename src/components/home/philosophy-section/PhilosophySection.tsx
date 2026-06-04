import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./PhilosophySection.module.css";

const CONTENT = {
  title: "CHEAPOWEB PHILOSOPHY",
  paragraphs: [
    "At CheapoWeb, our passion is to provide innovative, responsive, highly functional, visually appealing, and feature-rich website designs and mobile applications, as well as digital marketing campaigns that drive business growth.",
    "Whether you and your business are focused on ecommerce website development, Amazon advertising management, Instagram influencer marketing, PPC management services, or full-scale omnichannel digital marketing across multiple platforms, our full service web agency has the expertise and creative juice needed to ensure your expectations are exceeded every step of the way.",
    "As one of the top web design companies in the USA, we hold ourselves to the highest standards of creative and technical excellence.",
    "Every client, regardless of size or project scope, can expect nothing less than the absolute best designs, customer service, and professionalism from our experienced, dedicated, and marketing savvy professionals. Visit our Brandtenders and Marketing Mixologists online or in one of our lounges in New York, Long Island, Washington DC, Nashville, Miami, Richmond, Los Angeles, or Charleston, to learn more. We hope to talk with you soon.",
  ],
  cta: "Get My Custom Quote",
} as const;

export function PhilosophySection() {
  return (
    <section className={styles.section}>
      <SectionContainer narrow>
        <h2 className={styles.title}>{CONTENT.title}</h2>
        {CONTENT.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <div className={styles.cta}>
          <Button href="#contact">{CONTENT.cta}</Button>
        </div>
      </SectionContainer>
    </section>
  );
}
