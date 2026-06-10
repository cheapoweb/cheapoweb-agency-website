import styles from "./BlogSection.module.css";

const CONTENT = {
  title: "INSIGHTS ON WEB DEVELOPMENT, SEO & DIGITAL MARKETING",
  description:
    "Stay informed with expert insights, industry trends, website optimization strategies, SEO best practices, digital marketing techniques, and web development resources designed to help your business succeed online. Our blog provides actionable guidance for business owners looking to improve visibility, generate leads, and maximize digital performance.",
  posts: [
    {
      date: "29-05-2026",
      title:
        "Why Website Maintenance Services Are Essential for Business Growth in 2026",
      excerpt:
        "Many businesses invest thousands of dollars into building a website but overlook one of the most important factors in long-term success: website maintenance. A website is not a one-time project—it requires continuous updates, monitoring, optimization, and security management to perform effectively.",
      image: "/assets/images/website-maintenance-blog1.png",
      href: "#",
    },
    {
      date: "08-02-2026",
      title:
        "Website Redesign vs. Building a New Website: Which Option Is Right for Your Business?",
      excerpt:
        "As businesses grow, their websites often struggle to keep pace with changing customer expectations, modern technology, and evolving search engine requirements. Learn when a redesign makes sense and when starting fresh delivers greater long-term value.",
      image: "/assets/images/website-redesign-blog2.png",
      href: "#",
    },
    {
      date: "18-04-2026",
      title:
        "How Custom Web Development Helps Businesses Generate More Leads and Revenue",
      excerpt:
        "Your website is often the first interaction potential customers have with your business. Custom web development allows you to build unique digital experiences designed specifically around your goals, customers, and operational requirements.",
      image: "/assets/images/custom-web-development-blog3.png",
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
                  <time
                    className={styles.date}
                    dateTime={`${post.date.slice(6, 10)}-${post.date.slice(0, 2)}-${post.date.slice(3, 5)}`}
                  >
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
