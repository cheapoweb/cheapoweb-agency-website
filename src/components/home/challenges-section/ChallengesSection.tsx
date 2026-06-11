"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import styles from "./ChallengesSection.module.css";

const CONTENT = {
  title: "FREQUENTLY ASKED QUESTIONS",
  cta: "GET MY CUSTOM QUOTE",
  items: [
    {
      question: "How often should a website be updated?",
      answer:
        "We recommend reviewing and updating your website regularly to maintain security, improve performance, and ensure content remains relevant for users and search engines.",
      bullets: [] as string[],
      link: "CONTACT US",
    },
    {
      question: "What is included in website maintenance services?",
      answer:
        "Our maintenance services include security updates, performance monitoring, backups, software updates, bug fixes, content updates, and technical support.",
      bullets: [] as string[],
      link: "CONTACT US",
    },
    {
      question: "Can a website redesign improve conversions?",
      answer:
        "Yes. A strategic website redesign can improve user experience, site speed, navigation, mobile responsiveness, and conversion rates.",
      bullets: [] as string[],
      link: "CONTACT US",
    },
    {
      question: "Why is SEO important for business growth?",
      answer:
        "SEO helps your business appear in search results when potential customers are actively looking for your products or services, increasing qualified traffic and lead generation.",
      bullets: [] as string[],
      link: "CONTACT US",
    },
    {
      question: "Do you work with businesses outside New York?",
      answer:
        "Yes. While we're a New York-based digital agency, we provide web development, website maintenance, SEO, and digital marketing services for businesses nationwide.",
      bullets: [] as string[],
      link: "CONTACT US",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with law firms, healthcare providers, contractors, eCommerce businesses, startups, professional service firms, and many other industries.",
      bullets: [] as string[],
      link: "CONTACT US",
    },
  ],
} as const;

export function ChallengesSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <h2>{CONTENT.title}</h2>
            <Button href="#contact" variant="outline" className={styles.ctaButton}>
              {CONTENT.cta}
            </Button>
          </div>
          <div className={styles.accordion}>
            {CONTENT.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className={styles.item}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
                      <svg viewBox="0 0 10.375 17.031" aria-hidden>
                        <path d="M435.647,369.528a0.861,0.861,0,0,0,0-1.328l-7.578-7.578a0.942,0.942,0,0,0-1.328,0l-0.859.859a0.974,0.974,0,0,0-.293.664,0.838,0.838,0,0,0,.254.664l6.054,6.055-6.054,6.055a0.837,0.837,0,0,0-.254.664,0.976,0.976,0,0,0,.293.664l0.859,0.859a0.944,0.944,0,0,0,1.328,0Z" transform="translate(-425.594 -360.344)"></path>
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.panel}>
                      <p>{item.answer}</p>
                      {item.bullets.length > 0 && (
                        <ul>
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      <a href="#contact" className={styles.link}>
                        {item.link}
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
