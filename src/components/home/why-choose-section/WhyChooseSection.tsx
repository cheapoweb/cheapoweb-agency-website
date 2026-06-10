import { Button } from "@/components/ui/Button";
import styles from "./WhyChooseSection.module.css";

const CONTENT = {
  eyebrow: "OUR WEB DESIGN SERVICES",
  title: "WHY CHOOSE US AS YOUR WEB DESIGN COMPANY?",
  cta: "GET MY CUSTOM QUOTE",
  items: [
    {
      title: "FULL SERVICE EXPERIENCE",
      description:
        "Why choose CheapoWeb web design and development services? Because we serve a potent mix of web design & development, brand strategy, and digital marketing.",
    },
    {
      title: "MOBILE RESPONSIVE WEB DESIGN",
      description:
        "Each of our websites is designed and developed to be mobile responsive first and foremost to provide the best user experience—no matter the type of device.",
    },
    {
      title: "WORLD-CLASS VALUE IN WEB DESIGN",
      description:
        "Our clients choose us because CheapoWeb web design company offers the best value + long-term satisfaction and increased sales.",
    },
    {
      title: "CLIENT-CENTERED PROCESS",
      description:
        "Our dedicated web design team works directly with clients from developing design, content, SEO, development, testing, and launch.",
    },
    {
      title: "TOP-LEVEL PROJECT MANAGEMENT",
      description:
        "Our experienced, proven project managers ensure our clients' website design projects are hyper-organized, well managed, and meet clear expectations on time.",
    },
    {
      title: "WEB DESIGN PROFESSIONALS",
      description:
        "As a long-time web design and development company, CheapoWeb offers award-winning design services through a team of leading professionals.",
    },
  ],
} as const;

export function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.split}>
        <div className={styles.leftArt} aria-hidden>
          <img
            src="/assets/images/whychooseus.png"
            alt=""
            className={styles.leftArtImage}
            aria-hidden="true"
          />
          <div className={styles.cta}>
              <Button href="#contact" className={styles.ctaButton}>{CONTENT.cta}</Button>
            </div>
        </div>

        <div className={styles.right}>
            <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
            <h2 className={styles.title}>{CONTENT.title}</h2>

            <div className={styles.grid}>
              {CONTENT.items.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
