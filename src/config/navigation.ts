export const headerNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Industries", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  webDesign: [
    "Custom Website Design",
    "Website Redesign Services",
    "Responsive Website Design",
    "UI UX Web Design",
    "Shopify Web Design",
    "Magento Web Design",
  ],
  webDevelopment: [
    "E-Commerce Website Development",
    "WordPress Development",
    "Shopify Development",
    "Magento Development",
    "Laravel Development",
    "Contentful Development",
  ],
  seo: [
    "Answer Engine Optimization (AEO)",
    "SEO Audit Services",
    "Page Speed Optimization",
    "Content Marketing",
    "Product Optimization Services",
    "Google Analytics 4 Setup Services",
  ],
  digitalMarketing: [
    "Marketing and Sales Automation",
    "Pay-Per-Click Advertising (PPC)",
    "Social Media Marketing",
    "Email Marketing Services",
    "Brand Strategy Services",
    "Conversion Rate Optimization",
  ],
} as const;
