"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import type { ServicesTabbedSectionContent } from "@/config/services-tabbed-sections";
import styles from "./ServicesTabbedSection.module.css";

type ServicesTabbedSectionProps = {
  content: ServicesTabbedSectionContent;
};

export function ServicesTabbedSection({ content }: ServicesTabbedSectionProps) {
  const [activeTabId, setActiveTabId] = useState(content.tabs[0]?.id ?? "");
  const activeTab =
    content.tabs.find((tab) => tab.id === activeTabId) ?? content.tabs[0];

  if (!activeTab) {
    return null;
  }

  const sectionLabel = `services-tabbed-${content.id}`;

  return (
    <section
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
