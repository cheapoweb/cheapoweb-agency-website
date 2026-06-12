import { SERVICES_PATH, serviceLinks } from "@/config/service-links";

export type NavLink = {
  label: string;
  href?: string;
  children?: readonly NavLink[];
};

export type FooterNavItem = {
  label: string;
  href: string;
};

export const headerNav: readonly NavLink[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: SERVICES_PATH,
    children: [
      { label: "Website Maintenance", href: serviceLinks.webMaintenance },
      {
        label: "Web Development",
        href: serviceLinks.webDevelopment,
        children: [
          { label: "Laravel Developers", href: serviceLinks.laravelDevelopment },
          { label: "Shopify Developers", href: serviceLinks.shopifyDevelopment },
          {
            label: "E-Commerce Website Development",
            href: serviceLinks.ecommerceWebDevelopment,
          },
          { label: "Contentful Developers", href: serviceLinks.webDevelopment },
          {
            label: "Page Speed Optimization",
            href: serviceLinks.pageSpeedOptimization,
          },
          {
            label: "Custom 3D Product Configurators",
            href: serviceLinks.custom3dConfigurators,
          },
          { label: "Magento Development", href: serviceLinks.magentoDevelopment },
          {
            label: "WordPress Development",
            href: serviceLinks.wordpressDevelopment,
          },
          {
            label: "AMP Web Design (Accelerated Mobile Pages)",
            href: serviceLinks.ampWebDevelopment,
          },
        ],
      },
      {
        label: "Digital Marketing",
        href: serviceLinks.digitalMarketing,
        children: [
          {
            label: "Conversion Rate Optimization",
            href: serviceLinks.conversionRateOptimization,
          },
          { label: "Content Marketing", href: serviceLinks.contentMarketing },
          {
            label: "Pay-Per-Click (PPC) Management Services",
            href: serviceLinks.payPerClick,
          },
          {
            label: "Answer Engine Optimization (AEO)",
            href: serviceLinks.overviewSeo,
          },
          {
            label: "Google Analytics 4 Setup Services",
            href: serviceLinks.googleAnalytics4,
          },
          {
            label: "Social Media Management",
            href: serviceLinks.socialMediaMarketing,
          },
          {
            label: "Email Marketing Management Services",
            href: serviceLinks.emailMarketing,
          },
          {
            label: "Search Engine Optimization (SEO)",
            href: serviceLinks.seo,
          },
          { label: "SEO Audit Services", href: serviceLinks.maintenanceSeo },
          { label: "Influencer Marketing", href: serviceLinks.influencerMarketing },
          {
            label: "Amazon SEO And Product Optimization Services",
            href: serviceLinks.digitalMarketing,
          },
          {
            label: "Marketing And Sales Automation",
            href: serviceLinks.digitalMarketing,
          },
        ],
      },
      { label: "App Development", href: serviceLinks.appDevelopment },
      {
        label: "Web Design",
        href: serviceLinks.webDesign,
        children: [
          { label: "UI UX Web Design", href: serviceLinks.uiUxWebDesign },
          { label: "Shopify Web Design", href: serviceLinks.shopifyWebDesign },
          {
            label: "Custom WordPress Website Design",
            href: serviceLinks.customWordpressDesign,
          },
          { label: "Content Management Systems", href: serviceLinks.webDesign },
          { label: "Website Redesign Services", href: serviceLinks.webDesign },
          { label: "Corporate Blog Design Services", href: serviceLinks.webDesign },
          {
            label: "UI UX Analysis (User Experience Analysis)",
            href: serviceLinks.uiUxWebDesign,
          },
          {
            label: "Responsive Website Design & Development",
            href: serviceLinks.responsiveWebsiteDesign,
          },
          {
            label: "Magento Web Design And Development Services",
            href: serviceLinks.magentoWebDesign,
          },
        ],
      },
      { label: "Branding", href: serviceLinks.branding },
    ],
  },
  { label: "Work", href: "/#featured-work" },
  { label: "Case Studies", href: "/#results" },
  { label: "Industries", href: SERVICES_PATH },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  webDesign: [
    { label: "Custom Website Design", href: serviceLinks.webDesign },
    { label: "Website Redesign Services", href: serviceLinks.webDesign },
    {
      label: "Responsive Website Design",
      href: serviceLinks.responsiveWebsiteDesign,
    },
    { label: "UI UX Web Design", href: serviceLinks.uiUxWebDesign },
    { label: "Shopify Web Design", href: serviceLinks.shopifyWebDesign },
    { label: "Magento Web Design", href: serviceLinks.magentoWebDesign },
  ],
  webDevelopment: [
    {
      label: "E-Commerce Website Development",
      href: serviceLinks.ecommerceWebDevelopment,
    },
    { label: "WordPress Development", href: serviceLinks.wordpressDevelopment },
    { label: "Shopify Development", href: serviceLinks.shopifyDevelopment },
    { label: "Magento Development", href: serviceLinks.magentoDevelopment },
    { label: "Laravel Development", href: serviceLinks.laravelDevelopment },
    { label: "Contentful Development", href: serviceLinks.webDevelopment },
  ],
  seo: [
    { label: "Answer Engine Optimization (AEO)", href: serviceLinks.overviewSeo },
    { label: "SEO Audit Services", href: serviceLinks.maintenanceSeo },
    { label: "Page Speed Optimization", href: serviceLinks.pageSpeedOptimization },
    { label: "Content Marketing", href: serviceLinks.contentMarketing },
    {
      label: "Product Optimization Services",
      href: serviceLinks.digitalMarketing,
    },
    { label: "Google Analytics 4 Setup Services", href: serviceLinks.googleAnalytics4 },
  ],
  digitalMarketing: [
    {
      label: "Marketing and Sales Automation",
      href: serviceLinks.digitalMarketing,
    },
    {
      label: "Pay-Per-Click Advertising (PPC)",
      href: serviceLinks.payPerClick,
    },
    { label: "Social Media Marketing", href: serviceLinks.socialMediaMarketing },
    { label: "Email Marketing Services", href: serviceLinks.emailMarketing },
    { label: "Brand Strategy Services", href: serviceLinks.branding },
    {
      label: "Conversion Rate Optimization",
      href: serviceLinks.conversionRateOptimization,
    },
  ],
} as const satisfies Record<string, readonly FooterNavItem[]>;
