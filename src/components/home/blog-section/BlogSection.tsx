import styles from "./BlogSection.module.css";

const CONTENT = {
  title: "BLOG",
  description:
    "Check back every week for inspiring articles on website design and digital marketing to help build and expand your digital presence.",
  posts: [
    {
      date: "03-02-2026",
      title: "Top 10 Best Financial Website Designs [March 2026 Update]",
      excerpt:
        "Key Takeaways The best financial website designs use an intuitive flow and a stellar UI/UX experience to capture site visitors' business. Digital payments reached $6.6 trillion [...]",
      image: "/assets/images/ahmedlawfirmportfolio.png",
      href: "#",
    },
    {
      date: "03-02-2026",
      title: "Best Web Design Companies in 2026 [March 2026 Update]",
      excerpt:
        "Whether you're building a new website or revamping an existing one, partnering with a top web design company is crucial to ensuring a site that is [...]",
      image: "/assets/images/feature-work.webp",
      href: "#",
    },
    {
      date: "03-02-2026",
      title: "TOP Web Development Companies in 2026 [March 2026 Update]",
      excerpt:
        "To ensure a fair and objective evaluation, we analyzed numerous web design agencies based on several criteria. These include their portfolio of work, client testimonials, industry [...]",
      image: "/assets/images/mamoojanportfolio.png",
      href: "#",
    },
  ],
} as const;

export function BlogSection() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>{CONTENT.title}</h2>
          <p className={styles.description}>{CONTENT.description}</p>
        </header>

        <div className={styles.grid}>
          {CONTENT.posts.map((post) => (
            <article key={post.title} className={styles.card}>
              <a href={post.href} className={styles.cardLink}>
                <div className={styles.mediaWrap}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.body}>
                  <time className={styles.date} dateTime="2026-03-02">
                    {post.date}
                  </time>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
