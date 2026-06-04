"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import styles from "./ChallengesSection.module.css";

const CONTENT = {
  title:
    "CHEAPOWEB SOLVES YOUR WEB DESIGN, DEVELOPMENT AND DIGITAL MARKETING CHALLENGES",
  cta: "GET MY CUSTOM QUOTE",
  items: [
    {
      question: "Would a website redesign bring more traffic?",
      answer:
        "Without consistent site traffic, you are leaving money on the table. Our web design and development company is expert at customizing your website design, improving overall UI/UX design, and providing SEO solutions that will boost your company's presence in search engines and attract more visitors to your site.",
      bullets: [
        "Boost website presence on search engines",
        "Capture targeted site traffic",
        "Turn site visitors into leads and customers",
      ],
      link: "EXPLORE WEB DESIGN SERVICES",
    },
    {
      question: "My website isn't generating enough leads.",
      answer:
        "As a seasoned website design company, CheapoWeb knows you have to understand where you are and how you got there, so we offer a free website audit that will give you an idea of where you are losing leads and not capturing visitors.",
      bullets: [
        "Free Website Audit to discover possible improvements",
        "Optimized web design services",
        "Content strategy design to enhance lead generation",
      ],
      link: "EXPLORE OUR AUDIT SERVICES",
    },
    {
      question: "My ecommerce website is continuously losing sales.",
      answer:
        "At CheapoWeb, our Brandtenders understand ecommerce web design and draw in customers with intriguing shopping experiences using state-of-the-art applications like 3D configurators that allow your customers to self-design products or envision colors and sizes.",
      bullets: [
        "Websites specifically designed for buyers",
        "Custom shopping experiences",
        "SEO optimized web design",
      ],
      link: "EXPLORE ECOMMERCE WEB DESIGN",
    },
    {
      question:
        "I want to improve ROI on Digital Marketing, but staying up to speed on trends is a full-time job.",
      answer:
        "At CheapoWeb, we are a web design and digital marketing agency that stays current with trends and has proven success in digital marketing. Let us help you define your strategy with predictive analytics and leverage automation technology that takes your digital efforts to the next level.",
      bullets: [
        "Set future focused goals using the latest technology",
        "Strategically map channels that make the most sense",
        "Frequently realign efforts to reflect changes and trends in marketplace",
      ],
      link: "EXPLORE DIGITAL MARKETING",
    },
    {
      question: "Managing a digital campaign takes too much time.",
      answer:
        "When you work with CheapoWeb, a web design + digital agency, you have a dedicated team of Marketing Mixologists that understand digital marketing top to bottom. They will use the latest strategies and technologies to ensure you get top results for your digital strategy.",
      bullets: [
        "Your time is valuable; bring in the experts",
        "Get access to top-tier digital marketing",
        "Every effort is designed to bring in customers",
      ],
      link: "EXPLORE DIGITAL CAMPAIGN SERVICES",
    },
    {
      question: "How often should a website be updated or upgraded?",
      answer:
        "This varies depending on the website—you can change your material as frequently as you feel is appropriate for your brand and mission. You only need to decide how frequently you will update your material. But keep in mind—customers love new, original content (and Google rewards it).",
      bullets: [] as string[],
      link: "Request a Proposal",
    },
  ],
} as const;

export function ChallengesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <SectionContainer>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <h2>{CONTENT.title}</h2>
            <Button href="#contact">{CONTENT.cta}</Button>
          </div>
          <div className={styles.accordion}>
            {CONTENT.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className={styles.item}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.panel}>
                      <p>{item.answer}</p>
                      {item.bullets.length > 0 && (
                        <ul>
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      <a href="#services" className={styles.link}>
                        {item.link}
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
