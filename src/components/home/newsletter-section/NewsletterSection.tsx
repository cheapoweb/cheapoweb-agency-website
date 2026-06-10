"use client";

import { useState } from "react";
import styles from "./NewsletterSection.module.css";

const MAX_NAME_LENGTH = 60;

const CONTENT = {
  title: "NEWSLETTER SIGN UP",
  requiredNote: "* indicates required fields",
  fields: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email *",
  },
  submit: "SUBMIT",
} as const;

export function NewsletterSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <section className={styles.section} aria-labelledby="newsletter-title">
      <div className={styles.inner}>
        <h2 id="newsletter-title" className={styles.title}>
          {CONTENT.title}
        </h2>
        <p className={styles.requiredNote}>{CONTENT.requiredNote}</p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGrid}>
            <div className={styles.fieldCell}>
              <input
                type="text"
                className={styles.input}
                placeholder={CONTENT.fields.firstName}
                maxLength={MAX_NAME_LENGTH}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span className={styles.charCount}>
                {firstName.length} of {MAX_NAME_LENGTH} max characters
              </span>
            </div>

            <div className={styles.fieldCell}>
              <input
                type="text"
                className={styles.input}
                placeholder={CONTENT.fields.lastName}
                maxLength={MAX_NAME_LENGTH}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span className={styles.charCount}>
                {lastName.length} of {MAX_NAME_LENGTH} max characters
              </span>
            </div>

            <div className={styles.fieldCell}>
              <input
                type="email"
                className={styles.input}
                placeholder={CONTENT.fields.email}
                required
              />
              <span className={styles.charCount} aria-hidden="true">
                &nbsp;
              </span>
            </div>

            <button type="submit" className={styles.submit}>
              {CONTENT.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
