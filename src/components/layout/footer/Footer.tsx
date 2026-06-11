import Link from "next/link";
import { BackToTopButton } from "../back-to-top-button/BackToTopButton";
import { contactInfo } from "@/config/contact";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

const CONTENT = {
  headline: "LET'S GROW YOUR BRAND",
  worldwide: "cheapoweb worldwide",
  backToTop: "BACK TO TOP",
  followUs: "Follow Us",
  copyright: `All Rights Reserved © 2020-${String(new Date().getFullYear()).slice(-2)} cheapoweb worldwide is a web design company since ${siteConfig.since}.`,
  legal: [
    "Privacy Policy",
    "Terms of Use",
    "Press",
    "Careers",
    "Scam Alert",
    "Scholarship",
    "Sitemap",
  ],
  serviceColumns: [
    { title: "WEB DESIGN", items: footerNav.webDesign },
    { title: "WEB DEVELOPMENT", items: footerNav.webDevelopment },
    { title: "SEO", items: footerNav.seo },
    { title: "DIGITAL MARKETING", items: footerNav.digitalMarketing },
  ],
  social: [
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
} as const;

function PinIcon() {
  return (
    <svg className={styles.pinIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#1877F2"
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#ffffff"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#0A66C2"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="footerInstagram" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FD5949" />
              <stop offset="50%" stopColor="#D6249F" />
              <stop offset="100%" stopColor="#285AEB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#footerInstagram)"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <Link href="/" className={styles.logoBadge} aria-label="cheapoweb home">
            <span className={styles.logoText}>{siteConfig.name}</span>
          </Link>

          <h2 className={styles.headline}>{CONTENT.headline}</h2>

          <div className={styles.worldwideHead}>
            <PinIcon />
            <span>{CONTENT.worldwide}</span>
          </div>

          <BackToTopButton label={CONTENT.backToTop} />
        </div>

        <div className={styles.middleRow}>
          <div className={styles.servicesGrid}>
            {CONTENT.serviceColumns.map((column) => (
              <div key={column.title} className={styles.linkCol}>
                <h3 className={styles.colTitle}>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>
                      <Link href="#services">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.locationsBlock}>
            <div className={styles.locationsGrid}>
              <div className={styles.locationCol}>
                <strong className={styles.locationCity}>WEST HEMPSTEAD</strong>
                <p>{contactInfo.address}</p>
                <p>
                  <a href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}>
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
                <div className={styles.zelleRow}>
                  <img
                    src="/assets/images/zelle.png"
                    alt="Zelle"
                    className={styles.zelleLogo}
                    loading="lazy"
                  />
                  <a href={`mailto:${contactInfo.zelle}`}>{contactInfo.zelle}</a>
                </div>
                <img
                  src="/assets/images/QR-Code.jpeg"
                  alt="cheapoweb contact QR code"
                  className={styles.qrCode}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.socialBlock}>
            <span className={styles.followLabel}>{CONTENT.followUs}</span>
            <ul className={styles.socialList}>
              {CONTENT.social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} aria-label={item.label}>
                    <SocialIcon label={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.copyright}>{CONTENT.copyright}</p>

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
