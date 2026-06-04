import type { ReactNode } from "react";
import styles from "./SectionContainer.module.css";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function SectionContainer({
  children,
  className = "",
  narrow = false,
}: SectionContainerProps) {
  return (
    <div
      className={`${styles.container} ${narrow ? styles.narrow : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
