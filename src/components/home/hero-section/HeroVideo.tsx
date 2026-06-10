"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

type HeroVideoProps = {
  src: string;
};

const INTERACTION_EVENTS = [
  "pointerdown",
  "click",
  "touchstart",
  "keydown",
] as const;

export function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let active = true;
    let audioStarted = false;

    const playWithSound = async () => {
      if (!active || audioStarted) return true;

      video.muted = false;
      video.volume = 1;

      try {
        await video.play();
        if (!video.paused && !video.muted) {
          audioStarted = true;
          removeInteractionListeners();
          return true;
        }
      } catch {
        // Blocked until enough media is buffered or user interacts.
      }

      return false;
    };

    const removeInteractionListeners = () => {
      INTERACTION_EVENTS.forEach((event) => {
        window.removeEventListener(event, onUserInteraction, true);
      });
    };

    const onUserInteraction = () => {
      void playWithSound();
    };

    const addInteractionListeners = () => {
      INTERACTION_EVENTS.forEach((event) => {
        window.addEventListener(event, onUserInteraction, {
          capture: true,
          passive: true,
        });
      });
    };

    const ensureVideoPlaying = async () => {
      if (!active || audioStarted) return;

      const playedWithSound = await playWithSound();
      if (playedWithSound || !active) return;

      if (video.paused) {
        video.muted = true;
        try {
          await video.play();
        } catch {
          // Autoplay blocked until user interaction.
        }
      }
    };

    addInteractionListeners();
    video.load();
    void ensureVideoPlaying();

    video.addEventListener("canplaythrough", ensureVideoPlaying);
    video.addEventListener("canplay", ensureVideoPlaying);

    return () => {
      active = false;
      removeInteractionListeners();
      video.removeEventListener("canplaythrough", ensureVideoPlaying);
      video.removeEventListener("canplay", ensureVideoPlaying);
    };
  }, [src]);

  return (
    <div className={styles.videoWrap}>
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        autoPlay
        loop
        playsInline
        preload="auto"
        // @ts-expect-error fetchPriority is valid on video but not yet in React types
        fetchPriority="high"
        aria-hidden
      />
      <div className={styles.videoOverlay} aria-hidden />
    </div>
  );
}
