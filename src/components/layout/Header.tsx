"use client";

import Link from "next/link";
import { useState } from "react";
import { headerNav, type NavLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Header.module.css";

type HeaderProps = {
  overlay?: boolean;
};

function DropdownLink({ item }: { item: NavLink }) {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <li className={styles.dropdownItem}>
        <Link href={item.href ?? "#"} className={styles.dropdownLink}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className={`${styles.dropdownItem} ${styles.hasSubmenu}`}>
      <Link href={item.href ?? "#"} className={styles.dropdownLink}>
        <span>{item.label}</span>
        <span className={styles.subChevron} aria-hidden="true">
          ›
        </span>
      </Link>
      <ul className={styles.subDropdown}>
        {item.children!.map((child) => (
          <li key={child.label} className={styles.dropdownItem}>
            <Link href={child.href ?? "#"} className={styles.dropdownLink}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function NavItem({ item }: { item: NavLink }) {
  const hasChildren = Boolean(item.children?.length);
  const [open, setOpen] = useState(false);

  if (!hasChildren) {
    return (
      <li className={styles.navItem}>
        <Link href={item.href ?? "#"} className={styles.navLink}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className={`${styles.navItem} ${styles.hasDropdown}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={styles.navTrigger}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
      </button>
      <ul className={`${styles.dropdown} ${open ? styles.dropdownOpen : ""}`}>
        {item.children!.map((child) => (
          <DropdownLink key={child.label} item={child} />
        ))}
      </ul>
    </li>
  );
}

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
            <a
              href={`tel:${siteConfig.links.phone.replace(/\D/g, "")}`}
              className={styles.topLink}
            >
              <span className={styles.icon} aria-hidden>
                ☎
              </span>
              {siteConfig.links.phone}
            </a>
            <a href={`mailto:${siteConfig.links.email}`} className={styles.topLink}>
              <span className={styles.icon} aria-hidden>
                ✉
              </span>
              {siteConfig.links.email}
            </a>
          </div>
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {headerNav.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
