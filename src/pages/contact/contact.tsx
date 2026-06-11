"use client";

import { contactInfo } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/ui";
import styles from "./contact.module.css";

const CONTENT = {
  title: "RULE THE WEB!",
  subtitle: "Request a Web Design and Marketing Proposal.",
  fields: [
    "First Name",
    "Last Name",
    "Job Title",
    "Company",
    "Email",
    "Phone",
    "What are your business goals?",
  ],
} as const;

export default function Contact() {
  const { primary } = siteConfig.locations;

  return (
    <div className={styles.page}>
      <SectionContainer>
        <p className={styles.rule}>{CONTENT.title}</p>
        <h1>{CONTENT.subtitle}</h1>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <input type="text" placeholder={`${CONTENT.fields[0]} *`} required />
              <input type="text" placeholder={`${CONTENT.fields[1]} *`} required />
            </div>
            <div className={styles.row}>
              <input type="text" placeholder={`${CONTENT.fields[2]} *`} required />
              <input type="text" placeholder={`${CONTENT.fields[3]} *`} required />
            </div>
            <div className={styles.row}>
              <input type="email" placeholder={`${CONTENT.fields[4]} *`} required />
              <input type="tel" placeholder={`${CONTENT.fields[5]} *`} required />
            </div>
            <textarea
              placeholder={`${CONTENT.fields[6]} *`}
              rows={5}
              required
              className={styles.textarea}
            />
            <button type="submit" className={styles.submit}>
              Submit Proposal
            </button>
          </form>
          <div className={styles.info}>
            <h2>{primary.label}</h2>
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
            <p className={styles.zelle}>Zelle — {contactInfo.zelle}</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
