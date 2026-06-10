"use client";

import { useEffect, useState } from "react";
import styles from "./FeaturedWorkSection.module.css";

const CONTENT = {
  title: "WEBSITES BUILT TO PERFORM",
  description:
    "Our portfolio showcases custom website design, marketplace development, and digital marketing projects developed to help businesses increase visibility, generate leads, and drive revenue. Every project is tailored to meet specific business goals while delivering exceptional user experiences across desktop and mobile devices.",
  items: [
    {
      title: "Ahmed Law Firm",
      description:
        "A professional law firm website designed to build trust, showcase practice areas, and help potential clients request consultations through a clean, mobile-responsive experience.",
      image: "/assets/images/ahmedlawfirmportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Mamoojan.com Inc.",
      description:
        "A custom business website for Mamoojan.com Inc. focused on strong brand presentation, intuitive navigation, and a polished layout built to support online visibility and customer engagement.",
      image: "/assets/images/mamoojanportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "POWER Organization",
      description:
        "A modern nonprofit website for POWER Organization that highlights its mission, programs, and community impact while making key information easy to explore on any device.",
      image: "/assets/images/powernyportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Pakistani American Republican Club",
      description:
        "A community-focused website for the Pakistani American Republican Club built to share news, events, and organization details with members, supporters, and the broader community.",
      image: "/assets/images/parcusaportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Naveed Carter Inc.",
      description:
        "A conversion-focused corporate website for Naveed Carter Inc. featuring professional branding, clear service messaging, and responsive design tailored for business growth.",
      image: "/assets/images/naveedcarterportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Emmson Impex LLC",
      description:
        "A streamlined B2B website for Emmson Impex LLC designed to present import and export services clearly and help the company connect with new partners and customers online.",
      image: "/assets/images/emmsonimpexportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Trillion Inc.",
      description:
        "A scalable business website for Trillion Inc. with a strong brand presence, structured content, and mobile-first design built to improve visibility and lead generation.",
      image: "/assets/images/trillionsusaportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
  ],
} as const;

export function FeaturedWorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideTransition, setSlideTransition] = useState(true);

  const goTo = (index: number) => {
    setCurrentIndex((current) => {
      if (index === current) return current;

      const wraps =
        (index === 0 && current === CONTENT.items.length - 1) ||
        (index === CONTENT.items.length - 1 && current === 0);

      if (wraps) setSlideTransition(false);
      return index;
    });
  };

  const handleNext = () => {
    setCurrentIndex((current) => {
      const next = (current + 1) % CONTENT.items.length;
      if (next === 0 && CONTENT.items.length > 1) setSlideTransition(false);
      return next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((current) => {
      const previous = (current - 1 + CONTENT.items.length) % CONTENT.items.length;
      if (previous === CONTENT.items.length - 1 && CONTENT.items.length > 1) {
        setSlideTransition(false);
      }
      return previous;
    });
  };

  useEffect(() => {
    if (slideTransition) return;

    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSlideTransition(true));
    });

    return () => cancelAnimationFrame(frameId);
  }, [currentIndex, slideTransition]);

  return (
    <section className={styles.section} id="featured-work">
      <div className={styles.layout}>
        <div className={styles.header}>
          <h2>{CONTENT.title}</h2>
          <p className={styles.mainDescription}>{CONTENT.description}</p>
        </div>

        <div className={styles.sliderShell}>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            onClick={handlePrev}
            aria-label="Previous featured project"
          >
            <span className={styles.chevron} aria-hidden />
          </button>

          <div className={styles.viewport} aria-live="polite">
            <div
              className={`${styles.track} ${slideTransition ? "" : styles.trackInstant}`}
              style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
            >
              {CONTENT.items.map((item, index) => {
                const isActive = index === currentIndex;

                return (
                  <article
                    key={`${item.title}-${index}`}
                    className={styles.slide}
                    aria-hidden={!isActive}
                  >
                    <div className={styles.left}>
                      <div className={styles.itemDescription}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>

                    <div className={styles.right}>
                      <div className={styles.carousel}>
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={handleNext}
            aria-label="Next featured project"
          >
            <span className={styles.chevron} aria-hidden />
          </button>

          <div className={styles.controls}>
            <div className={styles.dots} role="tablist" aria-label="Featured project slides">
              {CONTENT.items.map((item, idx) => (
                <button
                  key={`${item.title}-dot`}
                  type="button"
                  role="tab"
                  aria-selected={idx === currentIndex}
                  className={`${styles.dot} ${idx === currentIndex ? styles.active : ""}`}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to featured project ${idx + 1}: ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
