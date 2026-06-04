import { contactInfo } from "@/config/contact";

export const siteConfig = {
  name: "CheapoWeb",
  legalName: "CheapoWeb",
  tagline: "Digital Agency New York Base",
  description:
    "CheapoWeb is a New York web design company and digital marketing agency trusted by brands since 2020.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  author: "CheapoWeb",
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
