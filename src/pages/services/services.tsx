import {
  ServicesHeroSection,
  ServicesTabbedSection,
  ServicesWebDesignSection,
  ServicesDigitalMarketingSection,
  ServicesWebDevelopmentSection,
  ServicesAppDevelopmentSection,
  ServicesWebMaintenanceSection,
} from "@/components/services";
import { FeaturedWorkSection } from "@/components/home/featured-work-section/FeaturedWorkSection";
import { StatsSection } from "@/components/home/stats-section/StatsSection";
import { TestimonialsSection } from "@/components/home/testimonials-section/TestimonialsSection";
import { ContactSection } from "@/components/home/contact-section/ContactSection";
import { NewsletterSection } from "@/components/home/newsletter-section/NewsletterSection";
import { servicesOverviewTabs, webDesignTabs, digitalMarketingTabs, webDevelopmentTabs, appDevelopmentTabs, webMaintenanceTabs } from "@/config/services-tabbed-sections";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.page}>
      <ServicesHeroSection />
      <FeaturedWorkSection />
      <ServicesTabbedSection content={servicesOverviewTabs} />
      <ServicesWebDesignSection />
      <ServicesTabbedSection content={webDesignTabs} />
      <ServicesDigitalMarketingSection />
      <ServicesTabbedSection content={digitalMarketingTabs} />
      <ServicesWebDevelopmentSection />
      <ServicesTabbedSection content={webDevelopmentTabs} />
      <ServicesAppDevelopmentSection />
      <ServicesTabbedSection content={appDevelopmentTabs} />
      <ServicesWebMaintenanceSection />
      <ServicesTabbedSection content={webMaintenanceTabs} />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
