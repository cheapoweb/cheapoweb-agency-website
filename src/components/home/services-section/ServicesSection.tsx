"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./ServicesSection.module.css";

const CONTENT = {
  visualSrc: "/assets/videos/service-section.gif",
  eyebrow: "OUR SERVICES",
  title: "OUR WEB DESIGN, DEVELOPMENT, AND MARKETING SERVICES DRIVE REVENUE!",
  subtitle:
    "Looking for a web design and development company or digital marketing agency to drive growth?",
  groups: [
    {
      title: "BRANDING",
      items: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity Design",
        "Brand Guidelines & Style Systems",
        "Messaging & Tone of Voice",
        "Rebranding & Brand Refresh",
      ],
    },
    {
      title: "CUSTOM WEBSITE DESIGN",
      items: [
        "Custom WordPress Website Design",
        "Responsive Website Design & Development",
        "UI/UX Website Design",
        "Content Strategy & Management",
        "Landing Page Design",
      ],
    },
    {
      title: "WEBSITE REDESIGN SERVICES",
      items: [
        "Full Website Redesign",
        "Rebrand Existing Websites",
        "Corporate Blog Design Services",
        "Conversion-Focused Layout Updates",
        "Mobile-First Redesign",
      ],
    },
    {
      title: "ECOMMERCE WEBSITE DEVELOPMENT",
      items: [
        "Shopify Web Design",
        "Magento Web Design",
        "Amazon SEO Optimization Services",
        "Custom Ecommerce UX",
        "Checkout & Cart Optimization",
      ],
    },
    {
      title: "DIGITAL MARKETING",
      items: [
        "Lead Generation Campaigns",
        "SEO Optimization",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
      ],
    },
    {
      title: "WEBSITE MAINTENANCE",
      items: [
        "Security Updates & Monitoring",
        "Performance & Speed Optimization",
        "Plugin & CMS Updates",
        "Backup & Disaster Recovery",
        "Ongoing Content Updates",
      ],
    },
  ],
  cta: "REQUEST PROPOSAL",
} as const;

const DESKTOP_QUERY = "(min-width: 992px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function ServicesSection() {
  const pinRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const section = sectionRef.current;
    const contentCol = contentColRef.current;
    const contentInner = contentInnerRef.current;

    if (!pin || !section || !contentCol || !contentInner) {
      return;
    }

    let frameId = 0;

    const clearSectionStyles = () => {
      section.style.position = "";
      section.style.top = "";
      section.style.left = "";
      section.style.width = "";
      section.style.height = "";
      section.style.zIndex = "";
    };

    const resetPin = () => {
      pin.style.height = "";
      clearSectionStyles();
      contentInner.style.transform = "";
    };

    const getSectionHeight = () => window.innerHeight;

    const getScrollMetrics = () => {
      const columnStyles = window.getComputedStyle(contentCol);
      const paddingY =
        parseFloat(columnStyles.paddingTop) + parseFloat(columnStyles.paddingBottom);
      const scrollViewport = contentCol.clientHeight - paddingY;
      const overflow = Math.max(
        0,
        Math.ceil(contentInner.scrollHeight - scrollViewport)
      );

      return { overflow, scrollViewport, sectionHeight: getSectionHeight() };
    };

    const updateScrollPin = () => {
      frameId = 0;

      const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
      const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

      if (!isDesktop || prefersReducedMotion) {
        resetPin();
        return;
      }

      clearSectionStyles();

      const { overflow, scrollViewport, sectionHeight } = getScrollMetrics();

      if (overflow <= 0 || scrollViewport <= 0) {
        pin.style.height = "";
        contentInner.style.transform = "";
        return;
      }

      pin.style.height = `${sectionHeight + overflow}px`;

      const pinTop = pin.getBoundingClientRect().top;
      const scrolledIntoPin = Math.max(0, -pinTop);
      const progress = Math.min(scrolledIntoPin / overflow, 1);

      contentInner.style.transform = `translate3d(0, ${-progress * overflow}px, 0)`;

      if (pinTop <= 0 && scrolledIntoPin < overflow) {
        section.style.position = "fixed";
        section.style.top = "0";
        section.style.left = "0";
        section.style.width = "100%";
        section.style.height = `${sectionHeight}px`;
        section.style.zIndex = "2";
      } else if (scrolledIntoPin >= overflow) {
        section.style.position = "absolute";
        section.style.top = `${overflow}px`;
        section.style.left = "0";
        section.style.width = "100%";
        section.style.height = `${sectionHeight}px`;
      }
    };

    const scheduleUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateScrollPin);
      }
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);

    resizeObserver.observe(section);
    resizeObserver.observe(contentInner);
    resizeObserver.observe(contentCol);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    scheduleUpdate();
    window.requestAnimationFrame(scheduleUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resetPin();
    };
  }, []);

  return (
    <div ref={pinRef} className={styles.scrollPin} id="services">
      <section ref={sectionRef} className={styles.section}>
        <div className={styles.layout}>
          <aside className={styles.visualCol} aria-hidden>
            <img
              src={CONTENT.visualSrc}
              alt=""
              className={styles.visualMedia}
            />
          </aside>

          <div ref={contentColRef} className={styles.contentCol}>
            <div ref={contentInnerRef} className={styles.contentInner}>
              <header className={styles.intro}>
                <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
                <h2 className={styles.title}>{CONTENT.title}</h2>
                <p className={styles.subtitle}>{CONTENT.subtitle}</p>
              </header>

              <div className={styles.serviceGrid}>
                {CONTENT.groups.map((group, index) => (
                  <article key={group.title} className={styles.serviceBlock}>
                    <span className={styles.index}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.serviceTitle}>{group.title}</h3>
                    <ul className={styles.tagList}>
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className={styles.tag}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className={styles.ctaWrap}>
                <Button href="#contact" variant="outline" className={styles.cta}>
                  {CONTENT.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
