"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import type { ServicesTabbedSectionContent } from "@/config/services-tabbed-sections";
import styles from "./ServicesTabbedSection.module.css";

type ServicesTabbedSectionProps = {
  content: ServicesTabbedSectionContent;
};

function getTabIdFromHash(sectionId: string, hash: string) {
  const tabPrefix = `${sectionId}-tabs--`;
  if (!hash.startsWith(tabPrefix)) {
    return null;
  }

  return hash.slice(tabPrefix.length);
}

export function ServicesTabbedSection({ content }: ServicesTabbedSectionProps) {
  const [activeTabId, setActiveTabId] = useState(content.tabs[0]?.id ?? "");
  const activeTab =
    content.tabs.find((tab) => tab.id === activeTabId) ?? content.tabs[0];
  const sectionAnchorId = `${content.id}-tabs`;

  useEffect(() => {
    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash) {
        return;
      }

      const tabId = getTabIdFromHash(content.id, hash);
      if (tabId && content.tabs.some((tab) => tab.id === tabId)) {
        setActiveTabId(tabId);
      }

      if (hash === sectionAnchorId || tabId) {
        document.getElementById(sectionAnchorId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [content, sectionAnchorId]);

  if (!activeTab) {
    return null;
  }

  const sectionLabel = `services-tabbed-${content.id}`;

  return (
    <section
      id={sectionAnchorId}
      className={styles.section}
      aria-label="Service categories"
      data-section-id={content.id}
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div
            className={styles.tabList}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Service tabs"
          >
            {content.tabs.map((tab) => {
              const isActive = tab.id === activeTab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  id={`${sectionLabel}-tab-${tab.id}`}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${sectionLabel}-panel-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            id={`${sectionLabel}-panel-${activeTab.id}`}
            className={styles.panel}
            role="tabpanel"
            aria-labelledby={`${sectionLabel}-tab-${activeTab.id}`}
          >
            <h2 className={styles.panelTitle}>{activeTab.title}</h2>
            <p className={styles.panelDescription}>{activeTab.description}</p>
            <Button href={activeTab.ctaHref} className={styles.cta}>
              {activeTab.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
