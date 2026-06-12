import { AboutIntroSection, OwnerSection } from "@/components/about";
import { ServicesSection } from "@/components/home/services-section/ServicesSection";
import { PartnersSection } from "@/components/home/partners-section/PartnersSection";
import { ContactSection } from "@/components/home/contact-section/ContactSection";
import { NewsletterSection } from "@/components/home/newsletter-section/NewsletterSection";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <AboutIntroSection />
      <OwnerSection />
      <ServicesSection />
      <PartnersSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
