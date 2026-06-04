"use client";

import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./ContactSection.module.css";

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

export function ContactSection() {
  return (
    <section className={styles.section} id="proposal-form">
      <div className={styles.media} aria-hidden />
      <div className={styles.formCol}>
        <SectionContainer>
          <p className={styles.rule}>{CONTENT.title}</p>
          <h2>{CONTENT.subtitle}</h2>
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
              rows={4}
              required
            />
            <label className={styles.checkbox}>
              <input type="checkbox" /> Newsletter Sign Up
            </label>
            <p className={styles.required}>&quot;*&quot; indicates required fields</p>
            <button type="submit" className={styles.submit}>
              Submit Proposal
            </button>
          </form>
        </SectionContainer>
      </div>
    </section>
  );
}
