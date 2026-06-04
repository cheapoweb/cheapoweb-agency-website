import styles from "./ServicesSection.module.css";

const CONTENT = {
  visualSrc: "/assets/videos/service-section.gif",
  title: "OUR WEB DESIGN, DEVELOPMENT, AND MARKETING SERVICES DRIVE REVENUE!",
  subtitle:
    "Looking for a web design and development company or digital marketing agency to drive growth?",
  groups: [
    {
      title: "BRANDING",
      items: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity Design",
        "Brand Guidelines & Style Systems",
        "Messaging & Tone of Voice",
        "Rebranding & Brand Refresh",
      ],
    },
    {
      title: "CUSTOM WEBSITE DESIGN",
      items: [
        "Custom WordPress Website Design",
        "Responsive Website Design & Development",
        "UI/UX Website Design",
        "Content Strategy & Management",
        "Landing Page Design",
      ],
    },
    {
      title: "WEBSITE REDESIGN SERVICES",
      items: [
        "Full Website Redesign",
        "Rebrand Existing Websites",
        "Corporate Blog Design Services",
        "Conversion-Focused Layout Updates",
        "Mobile-First Redesign",
      ],
    },
    {
      title: "ECOMMERCE WEBSITE DEVELOPMENT",
      items: [
        "Shopify Web Design",
        "Magento Web Design",
        "Amazon SEO Optimization Services",
        "Custom Ecommerce UX",
        "Checkout & Cart Optimization",
      ],
    },
    {
      title: "DIGITAL MARKETING",
      items: [
        "Lead Generation Campaigns",
        "SEO Optimization",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
      ],
    },
    {
      title: "WEBSITE MAINTENANCE",
      items: [
        "Security Updates & Monitoring",
        "Performance & Speed Optimization",
        "Plugin & CMS Updates",
        "Backup & Disaster Recovery",
        "Ongoing Content Updates",
      ],
    },
  ],
  cta: "REQUEST PROPOSAL",
} as const;

export function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.layout}>
        <aside className={styles.visualCol} aria-hidden>
          <div className={styles.visualInner}>
            <img
              src={CONTENT.visualSrc}
              alt=""
              className={styles.visualMedia}
            />
          </div>
        </aside>

        <div className={styles.contentCol}>
          <header className={styles.intro}>
            <h2 className={styles.title}>{CONTENT.title}</h2>
            <h3 className={styles.subtitle}>{CONTENT.subtitle}</h3>
          </header>

          <div className={styles.cardGrid}>
            {CONTENT.groups.map((group) => (
              <article key={group.title} className={styles.card}>
                <h4 className={styles.cardTitle}>
                  <span className={styles.checkIcon} aria-hidden>
                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 5.2L4.2 8.4L11 1.6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {group.title}
                </h4>
                {group.items.length > 0 && (
                  <ul className={styles.cardItems}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
