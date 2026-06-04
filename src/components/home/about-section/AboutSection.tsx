"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
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
  title:
    "Award-Winning Web Design, Development and Digital Marketing Agency Driving Business Growth Since 2020.",
  description:
    "CheapoWeb is a full-service web design and digital marketing agency creating high-performance websites and scalable digital platforms for brands ready to grow and lead. Since 2020, we've partnered with companies across the U.S. to deliver custom design, development, and conversion-focused experiences. We blend strategic branding, UI/UX, SEO, and AI-driven search visibility to help brands stand out, attract qualified traffic, and turn engagement into measurable revenue.",
  cta: "SCHEDULE MEETING",
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
