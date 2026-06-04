import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./FeaturedWorkSection.module.css";

const CONTENT = {
  title: "FEATURED WORK",
  description:
    "Our passion is to provide innovative, responsive, highly functional, visually appealing, and feature-rich website designs and digital marketing campaigns that drive business growth.",
  items: [
    {
      title: "Colorado Rafting",
      description:
        "AVA Colorado has grown into a significant force in outdoor recreation, maintaining a steadfast commitment to high-quality guest experiences and environmental stewardship.",
    },
    {
      title: "Night of Mystery",
      description:
        "Night of Mystery is a leading creator of downloadable murder mystery party kits that turn any gathering—whether at home or the office—into an unforgettable whodunit.",
    },
    {
      title: "Evolve Bank & Trust",
      description:
        "Founded in 1925, Evolve Bank & Trust has spent the past century at the intersection of tradition and innovation.",
    },
    {
      title: "Imagine Software",
      description:
        "ImagineSoftware™ is the leading provider of revenue cycle management technology, including medical billing software, workflow automation, and an Artificial Intelligence-driven RCM platform.",
    },
    {
      title: "LAI Speakers",
      description:
        "Leading Authorities, Inc. (LAI) is a premier speakers bureau and one of the most recognizable names in the industry.",
    },
    {
      title: "Lantech",
      description:
        "Lantech, a global leader in packaging equipment, specializes in stretch wrapping, case handling, and shrink-wrapping machines.",
    },
  ],
} as const;

export function FeaturedWorkSection() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        <h2 className={styles.title}>{CONTENT.title}</h2>
        <p className={styles.description}>{CONTENT.description}</p>
        <div className={styles.grid}>
          {CONTENT.items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.monitor}>
                <div className={styles.screen} />
              </div>
              <div className={styles.body}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.links}>
                  <a href="#">View Website</a>
                  <a href="#">View Case Study</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
