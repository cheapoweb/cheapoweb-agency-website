import styles from "./OwnerSection.module.css";

const CONTENT = {
  badge: "Owner Section",
  name: "Syed H Wasti",
  role: "Founder & CEO, cheapoweb",
  imageSrc: "/assets/images/syedhwasti.webp",
  imageAlt: "Syed H Wasti, Founder and CEO of cheapoweb",
  imageCaptionTitle: "Leading cheapoweb since 2020",
  imageCaptionText: "Strategy, design, and digital growth.",
  bio: "Syed H Wasti founded cheapoweb with a focus on helping businesses build revenue-generating websites and scalable digital platforms. With hands-on experience across web development, SEO, and digital marketing, he leads the agency's vision, client partnerships, and delivery standards—ensuring every project blends creative design with measurable performance.",
  highlights: [
    {
      value: "2020",
      label: "Founded cheapoweb in New York",
    },
    {
      value: "100+",
      label: "Websites & digital projects delivered",
    },
    {
      value: "Growth",
      label: "Focused on traffic, leads, and revenue",
    },
  ],
  quote:
    "Great digital work should do more than look polished—it should help businesses attract the right audience, convert more leads, and grow with confidence.",
  activitiesEyebrow: "Industry Activity",
  activitiesTitle: "Events, Exhibitions & Conferences",
  activities: [
    {
      year: "2024",
      title: "SMX East",
      type: "Conference",
      detail: "Search marketing and SEO trends for growing brands.",
    },
    {
      year: "2024",
      title: "NYC Web & Digital Summit",
      type: "Conference",
      detail: "Web development, UX, and conversion strategy sessions.",
    },
    {
      year: "2023",
      title: "Local Business Growth Expo",
      type: "Exhibition",
      detail: "Showcased affordable web solutions for New York businesses.",
    },
    {
      year: "2023",
      title: "eCommerce & Marketplace Forum",
      type: "Industry Event",
      detail: "Marketplace development and online sales optimization.",
    },
    {
      year: "2022",
      title: "Digital Marketing Leaders Meetup",
      type: "Networking",
      detail: "Agency leadership, client growth, and campaign performance.",
    },
  ],
} as const;

export function OwnerSection() {
  return (
    <section className={styles.section} aria-labelledby="about-owner-heading">
      <div className={styles.sectionBg} aria-hidden>
        <div className={styles.sectionBgInner} />
      </div>

      <div className={styles.wrap}>
        <article className={styles.card}>
          <div className={styles.mainGrid}>
            <div className={styles.mediaCol}>
              <div className={styles.photoFrame}>
                <img
                  src={CONTENT.imageSrc}
                  alt={CONTENT.imageAlt}
                  className={styles.photo}
                />
              </div>
              <div className={styles.photoCaption}>
                <p className={styles.photoCaptionTitle}>{CONTENT.imageCaptionTitle}</p>
                <p className={styles.photoCaptionText}>{CONTENT.imageCaptionText}</p>
              </div>
            </div>

            <div className={styles.contentCol}>
              <p className={styles.badge}>{CONTENT.badge}</p>
              <h2 id="about-owner-heading" className={styles.name}>
                {CONTENT.name}
              </h2>
              <p className={styles.role}>{CONTENT.role}</p>
              <p className={styles.bio}>{CONTENT.bio}</p>

              <div className={styles.highlights}>
                {CONTENT.highlights.map((item) => (
                  <div key={item.label} className={styles.highlightCard}>
                    <span className={styles.highlightValue}>{item.value}</span>
                    <span className={styles.highlightLabel}>{item.label}</span>
                  </div>
                ))}
              </div>

              <blockquote className={styles.quote}>
                <p>{CONTENT.quote}</p>
              </blockquote>
            </div>
          </div>

          <div className={styles.activities}>
            <div className={styles.activitiesHeader}>
              <p className={styles.activitiesEyebrow}>{CONTENT.activitiesEyebrow}</p>
              <h3 className={styles.activitiesTitle}>{CONTENT.activitiesTitle}</h3>
            </div>

            <ul className={styles.activityList}>
              {CONTENT.activities.map((activity) => (
                <li key={`${activity.year}-${activity.title}`} className={styles.activityItem}>
                  <div className={styles.activityMeta}>
                    <span className={styles.activityYear}>{activity.year}</span>
                    <span className={styles.activityType}>{activity.type}</span>
                  </div>
                  <div className={styles.activityBody}>
                    <h4 className={styles.activityTitle}>{activity.title}</h4>
                    <p className={styles.activityDetail}>{activity.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
