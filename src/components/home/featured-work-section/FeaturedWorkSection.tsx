"use client";

import { useEffect, useState } from "react";
import styles from "./FeaturedWorkSection.module.css";

const CONTENT = {
  title: "FEATURED WORK",
  description:
    "Our passion is to provide innovative, responsive, highly functional, visually appealing, and feature-rich website designs and digital marketing campaigns that drive business growth.",
  items: [
    {
      title: "Ahmed Law Firm",
      description:
        "Axium Packaging provides next-generation packaging products that combine engineering expertise, sustainable practices, and deep industry knowledge to deliver plastic bottle packaging solutions.",
      image: "/assets/images/ahmedlawfirmportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Mamoojan.com Inc.",
      description:
        "Axium Packaging provides next-generation packaging products that combine engineering expertise, sustainable practices, and deep industry knowledge to deliver plastic bottle packaging solutions.",
      image: "/assets/images/mamoojanportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "POWER Organization",
      description:
        "AVA Colorado has grown into a significant force in outdoor recreation, maintaining a steadfast commitment to high-quality guest experiences and environmental stewardship.",
      image: "/assets/images/powernyportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Pakistani American Republican Club",
      description:
        "Night of Mystery is a leading creator of downloadable murder mystery party kits that turn any gathering, whether at home or the office, into an unforgettable whodunit.",
      image: "/assets/images/parcusaportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Naveed Carter Inc.",
      description:
        "Night of Mystery is a leading creator of downloadable murder mystery party kits that turn any gathering, whether at home or the office, into an unforgettable whodunit.",
      image: "/assets/images/naveedcarterportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Emmson Impex LLC",
      description:
        "Night of Mystery is a leading creator of downloadable murder mystery party kits that turn any gathering, whether at home or the office, into an unforgettable whodunit.",
      image: "/assets/images/emmsonimpexportfolio.png",
      cta: "VIEW WEBSITE",
      caseStudy: "VIEW CASE STUDY",
    },
    {
      title: "Trillion Inc.",
      description:
        "Night of Mystery is a leading creator of downloadable murder mystery party kits that turn any gathering, whether at home or the office, into an unforgettable whodunit.",
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
