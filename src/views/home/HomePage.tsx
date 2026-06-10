import {
  AboutSection,
  BlogSection,
  ChallengesSection,
  ContactSection,
  FeaturedWorkSection,
  HeroSection,
  NewsletterSection,
  PartnersSection,
  ResultsSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  WhyChooseSection,
} from "@/components/home";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseSection />
      <ChallengesSection />
      <PartnersSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
