import {
  AboutSection,
  AwardsSection,
  BlogSection,
  CaseStudiesSection,
  ChallengesSection,
  ClientsSection,
  ContactSection,
  FeaturedWorkSection,
  HeroSection,
  PartnersSection,
  PhilosophySection,
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
      <CaseStudiesSection />
      <ChallengesSection />
      <PartnersSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <AwardsSection />
      <PhilosophySection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
