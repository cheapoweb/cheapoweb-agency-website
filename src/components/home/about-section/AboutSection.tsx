"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { ShowreelModal } from "./ShowreelModal";
import styles from "./AboutSection.module.css";

const CONTENT = {
  showreelLabel: "VIEW OUR",
  showreelTitle: "AGENCY SHOWREEL",
  backgroundVideoSrc: "/assets/videos/about-cheapoweb.mp4",
  showreelVideoSrc:
    "https://player.vimeo.com/external/340728058.hd.mp4?s=1de0a9e44eabaf4806b563e374163793eb52e1e3&profile_id=174",
  modalCloseLabel: "CLOSE",
  eyebrow: "ABOUT US",
  title: "New York Digital Growth & Web Development Experts Since 2020",
  description:
    "cheapoweb is a New York-based digital agency offering web development, website maintenance, and digital marketing services that help businesses build stronger online brands and generate measurable growth. Since 2020, we've partnered with startups, local businesses, eCommerce brands, law firms, healthcare providers, and growing enterprises to create custom digital solutions that drive results. From custom website design and marketplace development to SEO, social media marketing, and ongoing website maintenance, our team delivers strategies focused on increasing visibility, engagement, and revenue. Our approach combines modern design, scalable development, search optimization, and data-driven marketing to help businesses attract qualified traffic, convert more leads, and maintain a competitive advantage online.",
  cta: "SCHEDULE A STRATEGY CALL",
} as const;

export function AboutSection() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      <section className={styles.section} id="about">
        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src={CONTENT.backgroundVideoSrc} type="video/mp4" />
        </video>
        <div className={styles.overlay} aria-hidden />

        <div className={styles.grid}>
          <div className={styles.mediaCol}>
            <button
              type="button"
              className={styles.showreelTrigger}
              onClick={() => setShowreelOpen(true)}
              aria-label={`${CONTENT.showreelLabel} ${CONTENT.showreelTitle}`}
            >
              <span className={styles.playCircle} aria-hidden>
                <span className={styles.playIcon} />
              </span>
              <span className={styles.showreelText}>
                <span className={styles.showreelLabel}>{CONTENT.showreelLabel}</span>
                <span className={styles.showreelTitle}>{CONTENT.showreelTitle}</span>
              </span>
            </button>
          </div>

          <div className={styles.contentCol}>
            <div className={styles.contentInner}>
              <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
              <h2 className={styles.title}>{CONTENT.title}</h2>
              <p className={styles.description}>{CONTENT.description}</p>
              <Button href="#contact" variant="outline" className={styles.cta}>
                {CONTENT.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        videoSrc={CONTENT.showreelVideoSrc}
        closeLabel={CONTENT.modalCloseLabel}
      />
    </>
  );
}
