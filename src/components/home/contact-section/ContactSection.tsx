"use client";

import styles from "./ContactSection.module.css";

const CONTENT = {
  eyebrow: "GET STARTED",
  title: "READY TO GROW YOUR BUSINESS ONLINE?",
  fields: [
    "First Name",
    "Last Name",
    "Job Title",
    "Company",
    "Email",
    "Phone",
    "What are your business goals?",
  ],
  submit: "SUBMIT",
} as const;

export function ContactSection() {
  return (
    <section className={styles.section} id="proposal-form">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.visualSpacer} aria-hidden="true" />

        <div className={styles.formWrap}>
          <p className={styles.eyebrow}>{CONTENT.eyebrow}</p>
          <h2 className={styles.title}>{CONTENT.title}</h2>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder={`${CONTENT.fields[0]} *`}
                required
              />
              <input
                type="text"
                placeholder={`${CONTENT.fields[1]} *`}
                required
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                placeholder={`${CONTENT.fields[2]} *`}
                required
              />
              <input
                type="text"
                placeholder={`${CONTENT.fields[3]} *`}
                required
              />
            </div>
            <div className={styles.row}>
              <input
                type="email"
                placeholder={`${CONTENT.fields[4]} *`}
                required
              />
              <input
                type="tel"
                placeholder={`${CONTENT.fields[5]} *`}
                required
              />
            </div>
            <textarea
              placeholder={`${CONTENT.fields[6]} *`}
              rows={5}
              required
            />
            <button type="submit" className={styles.submit}>
              {CONTENT.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
