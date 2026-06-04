import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./ClientsSection.module.css";

const CONTENT = {
  title: "OUR CLIENTS",
  subtitle: "From Boutique to Enterprise, We Drive Results",
  names: [
    "McLaren",
    "Circa",
    "Reuters",
    "Ford",
    "Pimberly",
    "viLogics",
    "WOW Media",
    "VOSS Events",
    "Peter MAX",
    "Imagine Software",
    "Lantech",
    "LAI Speakers",
  ],
} as const;

export function ClientsSection() {
  return (
    <section className={styles.section} id="clients">
      <SectionContainer>
        <h2 className={styles.title}>{CONTENT.title}</h2>
        <p className={styles.subtitle}>{CONTENT.subtitle}</p>
        <div className={styles.grid}>
          {CONTENT.names.map((name) => (
            <div key={name} className={styles.logo}>
              {name}
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
