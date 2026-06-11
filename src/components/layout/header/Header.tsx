"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { headerNav, type NavLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Header.module.css";

type HeaderProps = {
  overlay?: boolean;
};

type NavHandlers = {
  onNavigate?: () => void;
  onAccordionToggle?: () => void;
};

type DropdownLinkProps = {
  item: NavLink;
  openSubmenu?: string | null;
  setOpenSubmenu?: (label: string | null) => void;
} & NavHandlers;

function DropdownLink({
  item,
  onNavigate,
  onAccordionToggle,
  openSubmenu,
  setOpenSubmenu,
}: DropdownLinkProps) {
  const hasChildren = Boolean(item.children?.length);
  const usesSharedSubmenu = setOpenSubmenu !== undefined;
  const subOpen = usesSharedSubmenu
    ? openSubmenu === item.label
    : false;

  const toggleSub = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onAccordionToggle?.();

    if (usesSharedSubmenu) {
      setOpenSubmenu(subOpen ? null : item.label);
    }
  };

  if (!hasChildren) {
    return (
      <li className={styles.dropdownItem}>
        <Link
          href={item.href ?? "#"}
          className={styles.dropdownLink}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className={`${styles.dropdownItem} ${styles.hasSubmenu} ${subOpen ? styles.hasSubmenuOpen : ""}`}
    >
      <button
        type="button"
        className={styles.submenuTrigger}
        aria-expanded={subOpen}
        onClick={toggleSub}
      >
        {item.label}
      </button>
      <ul
        className={`${styles.subDropdown} ${subOpen ? styles.subDropdownOpen : ""}`}
      >
        {item.children!.map((child) => (
          <DropdownLink
            key={child.label}
            item={child}
            onNavigate={onNavigate}
            onAccordionToggle={onAccordionToggle}
          />
        ))}
      </ul>
    </li>
  );
}

function NavItem({
  item,
  onNavigate,
  onAccordionToggle,
}: { item: NavLink } & NavHandlers) {
  const hasChildren = Boolean(item.children?.length);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [allowHover, setAllowHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 992px)");
    const syncHover = () => setAllowHover(media.matches);

    syncHover();
    media.addEventListener("change", syncHover);

    return () => media.removeEventListener("change", syncHover);
  }, []);

  useEffect(() => {
    if (!open) {
      setOpenSubmenu(null);
    }
  }, [open]);

  const toggleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onAccordionToggle?.();
    setOpen((value) => !value);
  };

  if (!hasChildren) {
    return (
      <li className={styles.navItem}>
        <Link href={item.href ?? "#"} className={styles.navLink} onClick={onNavigate}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className={`${styles.navItem} ${styles.hasDropdown}`}
      onMouseEnter={() => allowHover && setOpen(true)}
      onMouseLeave={() => allowHover && setOpen(false)}
    >
      <button
        type="button"
        className={styles.navTrigger}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={toggleOpen}
      >
        {item.label}
      </button>
      <ul className={`${styles.dropdown} ${open ? styles.dropdownOpen : ""}`}>
        {item.children!.map((child) => (
          <DropdownLink
            key={child.label}
            item={child}
            onNavigate={onNavigate}
            onAccordionToggle={onAccordionToggle}
            openSubmenu={openSubmenu}
            setOpenSubmenu={setOpenSubmenu}
          />
        ))}
      </ul>
    </li>
  );
}

export function Header({ overlay = false }: HeaderProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const scrollLockY = useRef(0);
  const isScrollLocked = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 991px)");
    const syncMobileNav = () => setIsMobileNav(media.matches);

    syncMobileNav();
    media.addEventListener("change", syncMobileNav);

    return () => media.removeEventListener("change", syncMobileNav);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    const unlockScroll = () => {
      if (!isScrollLocked.current) {
        return;
      }

      document.documentElement.removeAttribute("data-nav-open");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollLockY.current);
      isScrollLocked.current = false;
    };

    if (!menuOpen || !isMobileNav) {
      unlockScroll();
      return;
    }

    scrollLockY.current = window.scrollY;
    isScrollLocked.current = true;

    document.documentElement.setAttribute("data-nav-open", "true");
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollLockY.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return unlockScroll;
  }, [menuOpen, isMobileNav]);

  const closeMenu = () => setMenuOpen(false);

  const preserveMenuScroll = () => {
    const panel = menuPanelRef.current;
    if (!panel) {
      return;
    }

    const scrollTop = panel.scrollTop;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (menuPanelRef.current) {
          menuPanelRef.current.scrollTop = scrollTop;
        }
      });
    });
  };

  const mobileNavigation = (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.navList}>
        {headerNav.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            onNavigate={closeMenu}
            onAccordionToggle={preserveMenuScroll}
          />
        ))}
      </ul>
    </nav>
  );

  const mobileMenuPortal =
    isMounted && isMobileNav && menuOpen
      ? createPortal(
          <div
            id="site-navigation"
            ref={menuPanelRef}
            className={`${styles.rightPanel} ${styles.rightPanelOpen} ${styles.mobileMenuPortal}`}
          >
            {mobileNavigation}
          </div>,
          document.body
        )
      : null;

  return (
    <header
      className={`${styles.header} ${overlay ? styles.headerOverlay : styles.headerDefault} ${menuOpen && isMobileNav ? styles.headerNavOpen : ""}`}
    >
      <div className={styles.shell}>
        <div className={styles.leftPanel}>
          <Link href="/" className={styles.logo}>
            {siteConfig.name}
          </Link>
          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
        <div
          id={isMobileNav ? undefined : "site-navigation"}
          className={`${styles.rightPanel} ${!isMobileNav && menuOpen ? styles.rightPanelOpen : ""} ${isMobileNav ? styles.rightPanelMobileHost : ""}`}
          aria-hidden={isMobileNav ? true : undefined}
        >
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
          {!isMobileNav ? mobileNavigation : null}
        </div>
      </div>
      {mobileMenuPortal}
    </header>
  );
}
