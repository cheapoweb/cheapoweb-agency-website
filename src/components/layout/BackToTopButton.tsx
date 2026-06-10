"use client";

import { useCallback } from "react";
import styles from "./Footer.module.css";

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5l-6 6h4v8h4v-8h4z" />
    </svg>
  );
}

type BackToTopButtonProps = {
  label: string;
};

export function BackToTopButton({ label }: BackToTopButtonProps) {
  const handleClick = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <button
      type="button"
      className={styles.backToTop}
      onClick={handleClick}
      aria-label={label}
    >
      <span className={styles.backToTopIcon}>
        <ArrowUpIcon />
      </span>
      <span className={styles.backToTopLabel}>{label}</span>
    </button>
  );
}
