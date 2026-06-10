export type NavLink = {
  label: string;
  href?: string;
  children?: readonly NavLink[];
};

export const headerNav: readonly NavLink[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Website Maintenance", href: "#services" },
      {
        label: "Web Development",
        href: "#services",
        children: [
          { label: "Laravel Developers", href: "#services" },
          { label: "Shopify Developers", href: "#services" },
          { label: "E-Commerce Website Development", href: "#services" },
          { label: "Contentful Developers", href: "#services" },
          { label: "Page Speed Optimization", href: "#services" },
          { label: "Custom 3D Product Configurators", href: "#services" },
          { label: "Magento Development", href: "#services" },
          { label: "WordPress Development", href: "#services" },
          { label: "AMP Web Design (Accelerated Mobile Pages)", href: "#services" },
        ],
      },
      {
        label: "Digital Marketing",
        href: "#services",
        children: [
          { label: "Conversion Rate Optimization", href: "#services" },
          { label: "Content Marketing", href: "#services" },
          { label: "Pay-Per-Click (PPC) Management Services", href: "#services" },
          { label: "Answer Engine Optimization (AEO)", href: "#services" },
          { label: "Google Analytics 4 Setup Services", href: "#services" },
          { label: "Social Media Management", href: "#services" },
          { label: "Email Marketing Management Services", href: "#services" },
          { label: "Search Engine Optimization (SEO)", href: "#services" },
          { label: "SEO Audit Services", href: "#services" },
          { label: "Influencer Marketing", href: "#services" },
          { label: "Amazon SEO And Product Optimization Services", href: "#services" },
          { label: "Marketing And Sales Automation", href: "#services" },
        ],
      },
      { label: "App Development", href: "#services" },
      {
        label: "Web Design",
        href: "#services",
        children: [
          { label: "UI UX Web Design", href: "#services" },
          { label: "Shopify Web Design", href: "#services" },
          { label: "Custom WordPress Website Design", href: "#services" },
          { label: "Content Management Systems", href: "#services" },
          { label: "Website Redesign Services", href: "#services" },
          { label: "Corporate Blog Design Services", href: "#services" },
          { label: "UI UX Analysis (User Experience Analysis)", href: "#services" },
          { label: "Responsive Website Design & Development", href: "#services" },
          { label: "Magento Web Design And Development Services", href: "#services" },
        ],
      },
      { label: "Branding", href: "#services" },
    ],
  },
  { label: "Work", href: "#featured-work" },
  { label: "Case Studies", href: "#results" },
  { label: "Industries", href: "#services" },
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
