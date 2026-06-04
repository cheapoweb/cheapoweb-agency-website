import Link from "next/link";
import { contactInfo } from "@/config/contact";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import styles from "./Footer.module.css";

const CONTENT = {
  tagline: "Let's Grow Your Brand",
  worldwide: "CheapoWeb worldwide",
  copyright: `All Rights Reserved © 2018-${new Date().getFullYear()} CheapoWeb is a Web Design Company since 2020.`,
  legal: [
    "Privacy Policy",
    "Terms of Use",
    "Press",
    "Careers",
    "Scam Alert",
    "Scholarship",
    "Sitemap",
  ],
  ctaTitle: "Ready to Create Something Extraordinary?",
  ctaSubtitle: "Request a free consultation",
} as const;

export function Footer() {
  const { primary } = siteConfig.locations;

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.ctaBand}>
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaTitle}>{CONTENT.ctaTitle}</h2>
            <p className={styles.ctaSubtitle}>{CONTENT.ctaSubtitle}</p>
          </div>
          <Button href="#proposal-form">Request a Proposal</Button>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              {siteConfig.name}
            </Link>
            <p className={styles.tagline}>{CONTENT.tagline}</p>
            <p className={styles.worldwide}>{CONTENT.worldwide}</p>
            <div className={styles.location}>
              <strong>{primary.label}</strong>
              <p>
                <a href={`tel:${siteConfig.links.phone.replace(/\D/g, "")}`}>
                  {contactInfo.phone}
                </a>
              </p>
              {primary.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
              <p>Zelle — {contactInfo.zelle}</p>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Web Design</h3>
            <ul>
              {footerNav.webDesign.map((item) => (
                <li key={item}>
                  <Link href="#services">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Web Development</h3>
            <ul>
              {footerNav.webDevelopment.map((item) => (
                <li key={item}>
                  <Link href="#services">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>SEO</h3>
            <ul>
              {footerNav.seo.map((item) => (
                <li key={item}>
                  <Link href="#services">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Digital Marketing</h3>
            <ul>
              {footerNav.digitalMarketing.map((item) => (
                <li key={item}>
                  <Link href="#services">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{CONTENT.copyright}</p>
          <ul className={styles.legal}>
            {CONTENT.legal.map((item) => (
              <li key={item}>
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
