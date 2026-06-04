import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./PartnersSection.module.css";

const CONTENT = {
  title: "OUR PARTNERS",
  subtitle:
    "CheapoWeb establishes and nurtures web design and digital marketing partnerships to keep the party going!",
  description:
    "As a digital marketing and web design company, we cultivate exceptional partnerships and collaborations with leaders in technology, ecommerce, social media, and more, to deliver effective advertising and web design services to our clients. These highly beneficial partnerships provide us with powerful tools, training, resources, and support, which enable us to deliver the highest quality products for every project. Talk with us about how these collaborative relationships can benefit your company.",
  cta: "REQUEST PARTNERSHIP",
} as const;

export function PartnersSection() {
  return (
    <section className={styles.section}>
      <SectionContainer className={styles.inner}>
        <h2>{CONTENT.title}</h2>
        <h3>{CONTENT.subtitle}</h3>
        <p>{CONTENT.description}</p>
        <Button href="#contact">{CONTENT.cta}</Button>
      </SectionContainer>
    </section>
  );
}
