"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./TestimonialsSection.module.css";

const CONTENT = {
  title: "WHAT OUR CLIENTS SAY",
  image: "/assets/images/testimonials-record.png",
  imageAlt: "cheapoweb focuses on results, communication, and long-term success",
  items: [
    {
      quote: "cheapoweb focuses on results, communication, and long-term success.",
      body: "Businesses trust cheapoweb because we focus on results, communication, and long-term success. Our clients consistently highlight our responsiveness, technical expertise, creative problem-solving, and ability to deliver projects that exceed expectations.",
      name: "Byron L. Perkins",
      role: "CEO | NuLife Nation",
    },
    {
      quote: "Their team delivers technical expertise and creative problem-solving.",
      body: "Our clients consistently highlight our responsiveness, technical expertise, creative problem-solving, and ability to deliver projects that exceed expectations. Whether launching a new website or redesigning an existing platform, cheapoweb remains committed to helping clients grow.",
      name: "Dr. Edward Ritvo",
      role: "Founder | Medical Research Mobile App",
    },
    {
      quote: "We had a fantastic experience from start to finish.",
      body: "Whether launching a new website, redesigning an existing platform, or managing ongoing marketing campaigns, we remain committed to helping our clients grow. cheapoweb combines strategic web development with dependable ongoing support.",
      name: "Andrew Hart",
      role: "Social Media Manager | Icreon",
    },
  ],
} as const;

type TestimonialItem = (typeof CONTENT.items)[number];

const SLIDE_MS = 350;

function Stars() {
  return (
    <div className={styles.stars} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialSlide({ slide }: { slide: TestimonialItem }) {
  return (
    <>
      <p className={styles.quote}>&ldquo;{slide.quote}&rdquo;</p>
      <p className={styles.body}>{slide.body}</p>
      <Stars />
      <div className={styles.attribution}>
        <strong className={styles.authorName}>{slide.name}</strong>
        <span className={styles.authorRole}>{slide.role}</span>
      </div>
    </>
  );
}

export function TestimonialsSection() {
  const items = CONTENT.items;
  const loopSlides = useMemo(
    () => [items[items.length - 1], ...items, items[0]],
    [items],
  );

  const viewportRef = useRef<HTMLDivElement>(null);
  const [trackIndex, setTrackIndex] = useState(1);
  const [slideTransition, setSlideTransition] = useState(true);
  const [slideOffset, setSlideOffset] = useState(0);

  const activeIndex =
    trackIndex === 0
      ? items.length - 1
      : trackIndex === loopSlides.length - 1
        ? 0
        : trackIndex - 1;

  const syncSlideOffset = useCallback(() => {
    const width = viewportRef.current?.clientWidth ?? 0;
    setSlideOffset(trackIndex * width);
  }, [trackIndex]);

  useEffect(() => {
    syncSlideOffset();

    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(syncSlideOffset);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [syncSlideOffset]);

  const goNext = useCallback(() => {
    setSlideTransition(true);
    setTrackIndex((current) => current + 1);
  }, []);

  const goPrev = useCallback(() => {
    setSlideTransition(true);
    setTrackIndex((current) => current - 1);
  }, []);

  const goTo = useCallback((index: number) => {
    setSlideTransition(true);
    setTrackIndex(index + 1);
  }, []);

  useEffect(() => {
    if (trackIndex !== loopSlides.length - 1 && trackIndex !== 0) return;

    const timeoutId = window.setTimeout(() => {
      setSlideTransition(false);
      setTrackIndex(trackIndex === 0 ? loopSlides.length - 2 : 1);
    }, SLIDE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [trackIndex, loopSlides.length]);

  useEffect(() => {
    if (slideTransition) return;

    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSlideTransition(true));
    });

    return () => cancelAnimationFrame(frameId);
  }, [slideTransition, trackIndex]);

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={styles.visualCol}>
          <img
            src={CONTENT.image}
            alt={CONTENT.imageAlt}
            className={styles.visualImage}
            loading="lazy"
          />
        </div>

        <div className={styles.contentCol}>
          <h2 id="testimonials-title" className={styles.title}>
            {CONTENT.title}
          </h2>

          <div className={styles.carousel}>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              aria-label="Previous testimonial"
              onClick={goPrev}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div
              ref={viewportRef}
              className={styles.trackViewport}
              aria-live="polite"
            >
              <div
                className={`${styles.track} ${
                  slideTransition ? "" : styles.trackInstant
                }`.trim()}
                style={{ transform: `translate3d(-${slideOffset}px, 0, 0)` }}
              >
                {loopSlides.map((slide, slideIndex) => (
                  <div
                    key={`${slide.name}-${slideIndex}`}
                    className={styles.slide}
                    aria-hidden={
                      slideIndex !== trackIndex ? true : undefined
                    }
                  >
                    <TestimonialSlide slide={slide} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              aria-label="Next testimonial"
              onClick={goNext}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className={styles.dots}>
            {items.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                className={`${styles.dot} ${
                  dotIndex === activeIndex ? styles.dotActive : ""
                }`.trim()}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === activeIndex ? "true" : undefined}
                onClick={() => goTo(dotIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
