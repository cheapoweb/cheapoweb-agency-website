export type ServicesTabbedSectionTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
};

export type ServicesTabbedSectionContent = {
  id: string;
  tabs: readonly ServicesTabbedSectionTab[];
};

export const servicesOverviewTabs: ServicesTabbedSectionContent = {
  id: "services-overview",
  tabs: [
    {
      id: "brand-strategy",
      label: "BRAND STRATEGY",
      title: "YOUR STRATEGIC BRAND SETS THE ULTIMATE TONE",
      description:
        "Unleash your brand's potential with our expert brand strategy services. We delve deep into your brand ethos, crafting a roadmap that aligns with your vision and resonates with your audience.",
      cta: "LET'S TALK BRAND STRATEGY",
      ctaHref: "/contact",
    },
    {
      id: "web-design",
      label: "WEB DESIGN",
      title: "DESIGN WITH MORE THAN A SPLASH OF CREATIVITY",
      description:
        "Transform your online presence with our brand-guided web design services. Our designs are not just visually stunning but also user-friendly, ensuring a seamless experience that captivates and converts visitors to your business.",
      cta: "LET'S TALK WEB DESIGN",
      ctaHref: "/contact",
    },
    {
      id: "seo-services",
      label: "SEO SERVICES",
      title: "SEARCH VISIBILITY THAT DRIVES QUALIFIED TRAFFIC",
      description:
        "Improve rankings, attract the right audience, and grow organic visibility with SEO strategies built around your business goals. From technical optimization to content and local search, we help you get found by customers ready to convert.",
      cta: "LET'S TALK SEO",
      ctaHref: "/contact",
    },
    {
      id: "digital-marketing",
      label: "DIGITAL MARKETING",
      title: "CAMPAIGNS BUILT TO GENERATE LEADS AND REVENUE",
      description:
        "Reach your audience across search, social, and paid channels with digital marketing campaigns designed for measurable growth. We combine strategy, creative, and performance tracking to turn attention into action.",
      cta: "LET'S TALK DIGITAL MARKETING",
      ctaHref: "/contact",
    },
    {
      id: "content-marketing",
      label: "CONTENT MARKETING",
      title: "CONTENT THAT BUILDS TRUST AND MOVES PEOPLE TO ACT",
      description:
        "Engage your audience with content that educates, inspires, and supports every stage of the buyer journey. From blogs and landing pages to email and social content, we help your brand stay visible and relevant.",
      cta: "LET'S TALK CONTENT MARKETING",
      ctaHref: "/contact",
    },
  ],
} as const;

export const webDesignTabs: ServicesTabbedSectionContent = {
  id: "web-design",
  tabs: [
    {
      id: "custom-wordpress-design",
      label: "CUSTOM WORDPRESS DESIGN",
      title: "WORDPRESS WEBSITES TAILORED TO PERFECTION",
      description:
        "Experience the magic of a custom WordPress design that's both beautiful and easy to maintain. Our team will create a unique, user-friendly WordPress site customized to mirror your brand's essence and cater to your specific needs.",
      cta: "LET'S TALK CUSTOM WORDPRESS",
      ctaHref: "/contact",
    },
    {
      id: "responsive-website-design",
      label: "RESPONSIVE WEBSITE DESIGN",
      title: "WEBSITES THAT LOOK EXCEPTIONAL ON EVERY DEVICE",
      description:
        "Reach customers wherever they browse with responsive website design built for mobile, tablet, and desktop. We craft flexible layouts and performance-focused experiences that keep your brand polished and easy to use on every screen.",
      cta: "LET'S TALK RESPONSIVE DESIGN",
      ctaHref: "/contact",
    },
    {
      id: "ui-ux-web-design",
      label: "UI/UX WEB DESIGN",
      title: "DESIGN EXPERIENCES THAT GUIDE USERS AND DRIVE ACTION",
      description:
        "Turn visitors into leads with intuitive UI/UX web design rooted in research, clear navigation, and conversion-focused layouts. We design digital journeys that feel effortless while supporting your business goals.",
      cta: "LET'S TALK UI/UX DESIGN",
      ctaHref: "/contact",
    },
    {
      id: "shopify-web-design",
      label: "SHOPIFY WEB DESIGN",
      title: "SHOPIFY STORES DESIGNED TO SELL AND SCALE",
      description:
        "Launch a Shopify store that looks premium and performs under pressure. From custom storefront design to optimized product pages, we help eCommerce brands create shopping experiences that build trust and increase sales.",
      cta: "LET'S TALK SHOPIFY DESIGN",
      ctaHref: "/contact",
    },
    {
      id: "magento-web-design",
      label: "MAGENTO WEB DESIGN",
      title: "MAGENTO EXPERIENCES BUILT FOR COMPLEX COMMERCE",
      description:
        "Power advanced eCommerce with Magento web design tailored to your catalog, customers, and growth plans. We combine strong visuals with scalable architecture to support high-performing online stores.",
      cta: "LET'S TALK MAGENTO DESIGN",
      ctaHref: "/contact",
    },
  ],
} as const;

export const digitalMarketingTabs: ServicesTabbedSectionContent = {
  id: "digital-marketing",
  tabs: [
    {
      id: "seo",
      label: "SEO",
      title: "CLIMB THE CHARTS WITH SEO",
      description:
        "Maximize your online presence with our Search Engine Optimization (SEO) services. By enhancing your website's visibility in search results, we help attract more organic traffic, improving your site's ranking and reach. Let's make your brand the first choice for your target audience.",
      cta: "LET'S TALK SEO",
      ctaHref: "/contact",
    },
    {
      id: "social-media-marketing",
      label: "SOCIAL MEDIA MARKETING",
      title: "BUILD COMMUNITY AND DRIVE ENGAGEMENT ON SOCIAL",
      description:
        "Connect with your audience where they spend their time with social media marketing built around your brand voice and goals. From content planning to paid social campaigns, we help you grow followers, spark conversations, and turn engagement into measurable business results.",
      cta: "LET'S TALK SOCIAL MEDIA",
      ctaHref: "/contact",
    },
    {
      id: "pay-per-click-management",
      label: "PAY-PER-CLICK MANAGEMENT",
      title: "PAID SEARCH THAT DELIVERS QUALIFIED LEADS FAST",
      description:
        "Get in front of high-intent customers with pay-per-click management across Google, Bing, and other platforms. We optimize bids, ad copy, and landing pages to maximize ROI and keep your campaigns driving consistent, trackable growth.",
      cta: "LET'S TALK PPC",
      ctaHref: "/contact",
    },
    {
      id: "email-marketing-management",
      label: "EMAIL MARKETING MANAGEMENT",
      title: "EMAIL CAMPAIGNS THAT NURTURE AND CONVERT",
      description:
        "Stay top of mind with email marketing that delivers the right message at the right time. From newsletters and automations to promotional campaigns, we help you build stronger customer relationships and turn subscribers into loyal buyers.",
      cta: "LET'S TALK EMAIL MARKETING",
      ctaHref: "/contact",
    },
    {
      id: "influencer-marketing",
      label: "INFLUENCER MARKETING",
      title: "AMPLIFY YOUR BRAND THROUGH TRUSTED VOICES",
      description:
        "Reach new audiences through influencer marketing partnerships that align with your brand values and target market. We identify creators, manage collaborations, and track performance to expand awareness and drive authentic engagement.",
      cta: "LET'S TALK INFLUENCER MARKETING",
      ctaHref: "/contact",
    },
    {
      id: "conversion-rate-optimization",
      label: "CONVERSION RATE OPTIMIZATION",
      title: "TURN MORE VISITORS INTO CUSTOMERS",
      description:
        "Improve results from the traffic you already have with conversion rate optimization. We analyze user behavior, test layouts and messaging, and refine key touchpoints so more visitors take action and your marketing spend works harder.",
      cta: "LET'S TALK CRO",
      ctaHref: "/contact",
    },
  ],
} as const;

export const webDevelopmentTabs: ServicesTabbedSectionContent = {
  id: "web-development",
  tabs: [
    {
      id: "wordpress-development",
      label: "WORDPRESS DEVELOPMENT",
      title: "YOUR WEBSITE, YOUR WAY – WORDPRESS",
      description:
        "Our WordPress development services offer tailor-made solutions for your website needs. We focus on creating user-friendly, scalable, and SEO-optimized WordPress sites, ensuring a seamless and impactful online presence for your brand.",
      cta: "LET'S TALK WORDPRESS",
      ctaHref: "/contact",
    },
    {
      id: "amp-web-development",
      label: "AMP WEB DEVELOPMENT",
      title: "LIGHTNING-FAST MOBILE EXPERIENCES WITH AMP",
      description:
        "Deliver near-instant load times on mobile with AMP web development built for speed, usability, and search performance. We create streamlined pages that keep users engaged while supporting your broader SEO and conversion goals.",
      cta: "LET'S TALK AMP DEVELOPMENT",
      ctaHref: "/contact",
    },
    {
      id: "custom-3d-product-configurators",
      label: "CUSTOM 3D PRODUCT CONFIGURATORS",
      title: "INTERACTIVE 3D CONFIGURATORS THAT SELL",
      description:
        "Bring products to life with custom 3D product configurators that let customers explore options in real time. We build immersive, high-performance experiences that boost engagement, reduce returns, and increase online sales.",
      cta: "LET'S TALK 3D CONFIGURATORS",
      ctaHref: "/contact",
    },
    {
      id: "ecommerce-web-development",
      label: "E-COMMERCE WEB DEVELOPMENT",
      title: "E-COMMERCE STORES BUILT TO CONVERT AND SCALE",
      description:
        "Launch and grow online stores with e-commerce web development tailored to your products, customers, and operations. From custom storefronts to secure checkout flows, we build platforms designed for performance and long-term growth.",
      cta: "LET'S TALK E-COMMERCE",
      ctaHref: "/contact",
    },
    {
      id: "shopify-development",
      label: "SHOPIFY DEVELOPMENT",
      title: "SHOPIFY BUILDS CUSTOMIZED FOR YOUR BRAND",
      description:
        "Get more from Shopify with custom theme development, app integrations, and performance optimization. We help brands create polished storefronts and smooth shopping experiences that stand out and drive revenue.",
      cta: "LET'S TALK SHOPIFY",
      ctaHref: "/contact",
    },
    {
      id: "magento-development",
      label: "MAGENTO DEVELOPMENT",
      title: "MAGENTO SOLUTIONS FOR COMPLEX COMMERCE NEEDS",
      description:
        "Power enterprise-level e-commerce with Magento development built for flexibility and scale. We customize catalogs, checkout, integrations, and workflows to support high-volume stores and demanding business requirements.",
      cta: "LET'S TALK MAGENTO",
      ctaHref: "/contact",
    },
    {
      id: "laravel-development",
      label: "LARAVEL DEVELOPMENT",
      title: "ROBUST WEB APPLICATIONS POWERED BY LARAVEL",
      description:
        "Build secure, scalable web applications with Laravel development tailored to your business logic and growth plans. Our team delivers clean architecture, custom features, and reliable performance for modern digital products.",
      cta: "LET'S TALK LARAVEL",
      ctaHref: "/contact",
    },
  ],
} as const;

export const appDevelopmentTabs: ServicesTabbedSectionContent = {
  id: "app-development",
  tabs: [
    {
      id: "mobile-app-development",
      label: "MOBILE APP DEVELOPMENT",
      title: "IMAGINE YOUR UNIQUE VISION IN EVERY HAND",
      description:
        "Our mobile app development services are dedicated to placing your vision in the hands of users worldwide. We develop seamless, responsive, and high-performing apps that deliver exceptional user experiences across all mobile devices.",
      cta: "LET'S TALK MOBILE APPS",
      ctaHref: "/contact",
    },
    {
      id: "custom-app-design",
      label: "CUSTOM APP DESIGN",
      title: "APP DESIGN TAILORED TO YOUR BRAND AND USERS",
      description:
        "Stand out in the app marketplace with custom app design that reflects your brand and delights your audience. We craft intuitive interfaces, polished visuals, and cohesive experiences that make every interaction feel purposeful.",
      cta: "LET'S TALK APP DESIGN",
      ctaHref: "/contact",
    },
    {
      id: "ios-android-development",
      label: "IOS & ANDROID DEVELOPMENT",
      title: "NATIVE APPS BUILT FOR BOTH MAJOR PLATFORMS",
      description:
        "Reach users on iOS and Android with native development that maximizes performance, security, and platform capabilities. We build reliable apps optimized for each ecosystem while keeping your product vision consistent.",
      cta: "LET'S TALK IOS & ANDROID",
      ctaHref: "/contact",
    },
    {
      id: "entertainment-gaming-apps",
      label: "ENTERTAINMENT & GAMING APPS",
      title: "ENGAGING APPS THAT CAPTIVATE AND RETAIN USERS",
      description:
        "Launch entertainment and gaming apps designed to hook users from the first tap. From immersive gameplay to interactive media experiences, we combine creative design with solid development to keep audiences coming back.",
      cta: "LET'S TALK GAMING APPS",
      ctaHref: "/contact",
    },
    {
      id: "ui-ux-design",
      label: "UI/UX DESIGN",
      title: "USER-CENTERED DESIGN FOR APPS THAT FEEL EFFORTLESS",
      description:
        "Improve adoption and retention with UI/UX design rooted in research, clear navigation, and thoughtful interaction patterns. We map user journeys and refine every screen so your app is intuitive, accessible, and enjoyable to use.",
      cta: "LET'S TALK UI/UX",
      ctaHref: "/contact",
    },
  ],
} as const;

export const webMaintenanceTabs: ServicesTabbedSectionContent = {
  id: "web-maintenance",
  tabs: [
    {
      id: "page-speed-optimization",
      label: "PAGE SPEED OPTIMIZATION",
      title: "PAGE SPEED OPTIMIZATION PROMISES LIGHTNING-FAST LOAD TIMES",
      description:
        "Accelerate your success with our Page Speed Optimization services. We fine-tune your website to ensure lightning-fast load times, enhancing user experience and improving search engine rankings. A faster site means happier users and better business outcomes.",
      cta: "LET'S TALK PAGE SPEEDS",
      ctaHref: "/contact",
    },
    {
      id: "seo-services",
      label: "SEO SERVICES",
      title: "KEEP YOUR SITE HEALTHY AND SEARCH-READY",
      description:
        "Protect your rankings with ongoing SEO maintenance that keeps your site optimized as algorithms and content evolve. We monitor performance, fix issues, and apply updates so your website stays visible, competitive, and aligned with best practices.",
      cta: "LET'S TALK SEO MAINTENANCE",
      ctaHref: "/contact",
    },
    {
      id: "google-analytics-4-setup",
      label: "GOOGLE ANALYTICS 4 SETUP SERVICES",
      title: "MEASURE WHAT MATTERS WITH GA4 DONE RIGHT",
      description:
        "Track performance with confidence through Google Analytics 4 setup tailored to your business goals. We configure events, conversions, and reporting so you gain clear insights into user behavior and can make smarter marketing decisions.",
      cta: "LET'S TALK GA4 SETUP",
      ctaHref: "/contact",
    },
    {
      id: "hosting-support",
      label: "HOSTING & SUPPORT",
      title: "RELIABLE HOSTING WITH RESPONSIVE SUPPORT WHEN YOU NEED IT",
      description:
        "Keep your website online and performing with hosting and support services built for peace of mind. From uptime monitoring to technical assistance, we help resolve issues quickly and keep your digital platform running smoothly.",
      cta: "LET'S TALK HOSTING & SUPPORT",
      ctaHref: "/contact",
    },
    {
      id: "ecommerce-site-maintenance",
      label: "E-COMMERCE SITE MAINTENANCE",
      title: "E-COMMERCE MAINTENANCE THAT PROTECTS SALES AND TRUST",
      description:
        "Safeguard your online store with e-commerce site maintenance focused on security, checkout reliability, and product performance. We handle updates, integrations, and fixes so customers enjoy a seamless shopping experience every visit.",
      cta: "LET'S TALK E-COMMERCE MAINTENANCE",
      ctaHref: "/contact",
    },
  ],
} as const;
