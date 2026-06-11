import { contactInfo } from "@/config/contact";

export const siteConfig = {
  name: "cheapoweb",
  legalName: "cheapoweb",
  tagline: "New York-Based Digital Agency",
  description:
    "cheapoweb is a New York-based digital agency specializing in web design, development, and digital marketing trusted by brands since 2020.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  author: "cheapoweb",
  since: 2020,
  links: {
    email: contactInfo.email,
    phone: contactInfo.phone,
    zelle: contactInfo.zelle,
  },
  locations: {
    primary: {
      label: contactInfo.label,
      lines: [contactInfo.address],
    },
  },
} as const;
