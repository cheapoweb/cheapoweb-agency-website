"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ResultsSection.module.css";

export type ResultSlide = {
  stat: string;
  label: string;
  client: string;
  image: string;
};

type ResultsCarouselProps = {
  items: readonly ResultSlide[];
  autoPlayMs: number;
  ctaLabel: string;
  ctaHref: string;
};

export function ResultsCarousel({
  items,
  autoPlayMs,
  ctaLabel,
  ctaHref,
}: ResultsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideTransition, setSlideTransition] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((current) => {
        if (index === current) return current;

        const wraps =
          (index === 0 && current === items.length - 1) ||
          (index === items.length - 1 && current === 0);

        if (wraps) setSlideTransition(false);
        return index;
      });
    },
    [items.length],
  );

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      const next = (current + 1) % items.length;
      if (next === 0 && items.length > 1) setSlideTransition(false);
      return next;
    });
  }, [items.length]);

  useEffect(() => {
    if (slideTransition) return;

    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSlideTransition(true));
    });

    return () => cancelAnimationFrame(frameId);
  }, [activeIndex, slideTransition]);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const intervalId = window.setInterval(goNext, autoPlayMs);
    return () => window.clearInterval(intervalId);
  }, [autoPlayMs, goNext, isPaused, items.length]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setIsPaused(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (items.length === 0) return null;

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.track} aria-live="polite">
        <div
          className={`${styles.trackInner} ${slideTransition ? "" : styles.trackInnerInstant}`}
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={`${item.client}-${index}`}
                className={styles.slide}
                aria-hidden={!isActive}
              >
                <div className={styles.pill}>
                  <div className={styles.pillPattern} aria-hidden />
                  <div className={styles.pillGrain} aria-hidden />
                  <div className={styles.pillStat}>
                    <span className={styles.stat}>{item.stat}</span>
                    <span className={styles.label}>{item.label}</span>
                  </div>
                  <div className={styles.pillMedia}>
                    <div
                      className={styles.clientCircle}
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <span className={styles.clientCircleOverlay} aria-hidden />
                      <span className={styles.clientName}>{item.client}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.carouselFooter}>
        <div className={styles.dots} role="tablist" aria-label="Result slides">
          {items.map((item, index) => (
            <button
              key={`dot-${item.client}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Slide ${index + 1}: ${item.client}`}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <Link href={ctaHref} className={styles.ctaLink}>
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
