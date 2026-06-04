import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./CaseStudiesSection.module.css";

const CONTENT = {
  title: "Case Studies",
  cta: "See All Case Studies",
  items: [
    {
      title: "McLaren Golf",
      categories: "B2C, E-Commerce, Luxury, Sports",
      description:
        "McLaren is more than a name; it's a 60-year legacy of winning. By blending its iconic racing, automotive, and vintage heritage, McLaren expands its premium performance identity into the golf category.",
    },
    {
      title: "Colorado Rafting",
      categories: "B2C, Sports, Tourism",
      description:
        "AVA Colorado has grown into a significant force in outdoor recreation, maintaining a steadfast commitment to high-quality guest experiences and environmental stewardship.",
    },
    {
      title: "LAI Speakers",
      categories: "B2B, Entertainment, Events, Film",
      description:
        "Leading Authorities, Inc. (LAI) is a premier speakers bureau and one of the most recognizable names in the industry.",
    },
    {
      title: "Night of Mystery",
      categories: "B2C, Entertainment, Gaming",
      description:
        "Night of Mystery is a leading creator of downloadable murder mystery party kits that turn any gathering—whether at home or the office—into an unforgettable whodunit.",
    },
    {
      title: "Lantech",
      categories: "B2B, Manufacturing, Technology",
      description:
        "Lantech, a global leader in packaging equipment, specializes in stretch wrapping, case handling, and shrink-wrapping machines.",
    },
    {
      title: "Imagine Software",
      categories: "B2B, Medical / Healthcare, Professional Services, SaaS, Technology",
      description:
        "Imagine Software is a healthcare technology company that delivers a comprehensive automation platform for revenue cycle management (RCM).",
    },
  ],
} as const;

export function CaseStudiesSection() {
  return (
    <section className={styles.section} id="case-studies">
      <SectionContainer>
        <div className={styles.header}>
          <h2>{CONTENT.title}</h2>
          <div className={styles.filters}>
            <span>Filter by:</span>
            <button type="button" className={styles.filterActive}>
              Services
            </button>
            <button type="button">Industries</button>
          </div>
        </div>
        <div className={styles.grid}>
          {CONTENT.items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.thumb} aria-hidden />
              <div className={styles.body}>
                <p className={styles.categories}>{item.categories}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.links}>
                  <a href="#">Visit Website</a>
                  <a href="#">View Case Study</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.cta}>
          <Button href="#case-studies" variant="outline">
            {CONTENT.cta}
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
