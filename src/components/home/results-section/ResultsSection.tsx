import { ResultsCarousel } from "./ResultsCarousel";
import styles from "./ResultsSection.module.css";

const CONTENT = {
  title: "OUR RESULTS-DRIVEN WEB DESIGN AND MARKETING CAMPAIGNS",
  sideImage: "/assets/images/our-results.png",
  autoPlayMs: 5000,
  cta: "SEE ALL OUR WORK",
  items: [
    {
      stat: "+67%",
      label: "INCREASE IN CLICKS",
      client: "Pimberly",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "200%",
      label: "INCREASE IN SALES LEADS",
      client: "viLogics",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "1,200+%",
      label: "INCREASE IN WEBSITE VISITS",
      client: "Website Closers",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "90+%",
      label: "INCREASE IN ENGAGEMENT RATE",
      client: "MIND GAMES",
      image:
        "https://images.unsplash.com/photo-1592945405224-be312337f16c?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      stat: "51%",
      label: "INCREASE IN ORGANIC TRAFFIC",
      client: "WOW Media",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f182?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "90%",
      label: "SOLD-OUT SHOWS ON TICKETMASTER",
      client: "VOSS Events",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    },
    {
      stat: "396%",
      label: "RETURN ON AD SPEND",
      client: "Peter MAX",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    },
  ],
} as const;

export function ResultsSection() {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${CONTENT.sideImage})` }}
    >
      <div className={styles.overlay} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>{CONTENT.title}</h2>

          <ResultsCarousel
            items={CONTENT.items}
            autoPlayMs={CONTENT.autoPlayMs}
            ctaLabel={CONTENT.cta}
            ctaHref="#contact"
          />
        </div>
        <div className={styles.spacer} aria-hidden />
      </div>
    </section>
  );
}
