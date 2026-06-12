export const SERVICES_PATH = "/services";

export function serviceSectionHref(sectionId: string) {
  return `${SERVICES_PATH}#${sectionId}`;
}

export function serviceTabHref(sectionId: string, tabId: string) {
  return `${SERVICES_PATH}#${sectionId}-tabs--${tabId}`;
}

export const serviceSections = {
  overview: "services-overview",
  webDesign: "web-design",
  digitalMarketing: "digital-marketing",
  webDevelopment: "web-development",
  appDevelopment: "app-development",
  webMaintenance: "web-maintenance",
} as const;

export const serviceLinks = {
  overview: serviceSectionHref(serviceSections.overview),
  webDesign: serviceSectionHref(serviceSections.webDesign),
  digitalMarketing: serviceSectionHref(serviceSections.digitalMarketing),
  webDevelopment: serviceSectionHref(serviceSections.webDevelopment),
  appDevelopment: serviceSectionHref(serviceSections.appDevelopment),
  webMaintenance: serviceSectionHref(serviceSections.webMaintenance),
  branding: serviceTabHref(serviceSections.overview, "brand-strategy"),
  contentMarketing: serviceTabHref(serviceSections.overview, "content-marketing"),
  overviewSeo: serviceTabHref(serviceSections.overview, "seo-services"),
  overviewWebDesign: serviceTabHref(serviceSections.overview, "web-design"),
  overviewDigitalMarketing: serviceTabHref(
    serviceSections.overview,
    "digital-marketing"
  ),
  customWordpressDesign: serviceTabHref(
    serviceSections.webDesign,
    "custom-wordpress-design"
  ),
  responsiveWebsiteDesign: serviceTabHref(
    serviceSections.webDesign,
    "responsive-website-design"
  ),
  uiUxWebDesign: serviceTabHref(serviceSections.webDesign, "ui-ux-web-design"),
  shopifyWebDesign: serviceTabHref(serviceSections.webDesign, "shopify-web-design"),
  magentoWebDesign: serviceTabHref(serviceSections.webDesign, "magento-web-design"),
  seo: serviceTabHref(serviceSections.digitalMarketing, "seo"),
  socialMediaMarketing: serviceTabHref(
    serviceSections.digitalMarketing,
    "social-media-marketing"
  ),
  payPerClick: serviceTabHref(
    serviceSections.digitalMarketing,
    "pay-per-click-management"
  ),
  emailMarketing: serviceTabHref(
    serviceSections.digitalMarketing,
    "email-marketing-management"
  ),
  influencerMarketing: serviceTabHref(
    serviceSections.digitalMarketing,
    "influencer-marketing"
  ),
  conversionRateOptimization: serviceTabHref(
    serviceSections.digitalMarketing,
    "conversion-rate-optimization"
  ),
  wordpressDevelopment: serviceTabHref(
    serviceSections.webDevelopment,
    "wordpress-development"
  ),
  ampWebDevelopment: serviceTabHref(
    serviceSections.webDevelopment,
    "amp-web-development"
  ),
  custom3dConfigurators: serviceTabHref(
    serviceSections.webDevelopment,
    "custom-3d-product-configurators"
  ),
  ecommerceWebDevelopment: serviceTabHref(
    serviceSections.webDevelopment,
    "ecommerce-web-development"
  ),
  shopifyDevelopment: serviceTabHref(
    serviceSections.webDevelopment,
    "shopify-development"
  ),
  magentoDevelopment: serviceTabHref(
    serviceSections.webDevelopment,
    "magento-development"
  ),
  laravelDevelopment: serviceTabHref(
    serviceSections.webDevelopment,
    "laravel-development"
  ),
  mobileAppDevelopment: serviceTabHref(
    serviceSections.appDevelopment,
    "mobile-app-development"
  ),
  pageSpeedOptimization: serviceTabHref(
    serviceSections.webMaintenance,
    "page-speed-optimization"
  ),
  maintenanceSeo: serviceTabHref(serviceSections.webMaintenance, "seo-services"),
  googleAnalytics4: serviceTabHref(
    serviceSections.webMaintenance,
    "google-analytics-4-setup"
  ),
  hostingSupport: serviceTabHref(serviceSections.webMaintenance, "hosting-support"),
  ecommerceMaintenance: serviceTabHref(
    serviceSections.webMaintenance,
    "ecommerce-site-maintenance"
  ),
} as const;
