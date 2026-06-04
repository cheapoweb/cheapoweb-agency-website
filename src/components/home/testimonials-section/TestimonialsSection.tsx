"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./TestimonialsSection.module.css";

const CONTENT = {
  title: "WHAT OUR VALUED CLIENTS ARE SAYING ABOUT US",
  items: [
    {
      quote: "I now understand why they've received so much industry recognition.",
      body: "The logo has garnered unanimously positive feedback. Committed and easy to work with, CheapoWeb built a robust understanding of brand identity and translated it into a visual design. Their smooth collaboration and extensive industry knowledge are particularly noteworthy.",
      name: "Byron L. Perkins",
      role: "CEO | NuLife Nation",
    },
    {
      quote: "The people at CheapoWeb are very bright, very knowledgeable.",
      body: "The design phase was completed successfully. CheapoWeb did an exceptional job of answering questions and delivering high-quality work. The team earned especially high praise for their broad development knowledge and enthusiastic, cooperative approach.",
      name: "Dr. Edward Ritvo",
      role: "Founder | Medical Research Mobile App",
    },
    {
      quote: "They're great communicators, so we had a fantastic experience.",
      body: "The new site has received positive feedback from the internal team on it's look and feel and helped solidify their new branding. CheapoWeb is informative and collaborative, establishing a smooth workflow. The team goes above and beyond to meet the goals and requirements set by the client.",
      name: "Andrew Hart",
      role: "Social Media Manager | Icreon",
    },
  ],
} as const;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const item = CONTENT.items[index];

  return (
    <section className={styles.section}>
      <SectionContainer>
        <h2 className={styles.title}>{CONTENT.title}</h2>
        <div className={styles.card}>
          <blockquote>
            <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
            <p className={styles.body}>{item.body}</p>
          </blockquote>
          <footer className={styles.attribution}>
            <strong className={styles.authorName}>{item.name}</strong>
            <span className={styles.authorRole}>{item.role}</span>
          </footer>
        </div>
        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((i) => (i === 0 ? CONTENT.items.length - 1 : i - 1))
            }
          >
            ←
          </button>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Next testimonial"
            onClick={() =>
              setIndex((i) => (i === CONTENT.items.length - 1 ? 0 : i + 1))
            }
          >
            →
          </button>
        </div>
      </SectionContainer>
    </section>
  );
}
