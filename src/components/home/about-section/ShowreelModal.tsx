"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./ShowreelModal.module.css";

type ShowreelModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  closeLabel: string;
};

export function ShowreelModal({
  isOpen,
  onClose,
  videoSrc,
  closeLabel,
}: ShowreelModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    videoRef.current?.pause();
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      void videoRef.current.play();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      role="presentation"
      onClick={handleClose}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Agency showreel video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
        >
          {closeLabel} <span aria-hidden>×</span>
        </button>
        <div className={styles.videoFrame}>
          <video
            ref={videoRef}
            className={styles.video}
            src={videoSrc}
            controls
            playsInline
          >
            <track kind="captions" />
          </video>
        </div>
      </div>
    </div>
  );
}
