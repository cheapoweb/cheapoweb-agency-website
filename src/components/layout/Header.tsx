import Link from "next/link";
import { headerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Header.module.css";

type HeaderProps = {
  overlay?: boolean;
};

export function Header({ overlay = false }: HeaderProps) {
  return (
    <header
      className={`${styles.header} ${overlay ? styles.headerOverlay : styles.headerDefault}`}
    >
      <div className={styles.shell}>
        <div className={styles.leftPanel}>
          <Link href="/" className={styles.logo}>
            {siteConfig.name}
          </Link>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.topBar}>
            <a href={`tel:${siteConfig.links.phone.replace(/\D/g, "")}`} className={styles.topLink}>
              <span className={styles.icon} aria-hidden>
                ☎
              </span>
              {siteConfig.links.phone}
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className={styles.topLink}
            >
              <span className={styles.icon} aria-hidden>
                ✉
              </span>
              {siteConfig.links.email}
            </a>
          </div>
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {headerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
