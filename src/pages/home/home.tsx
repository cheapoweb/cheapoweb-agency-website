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
import styles from "./home.module.css";

export default function Home() {
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
