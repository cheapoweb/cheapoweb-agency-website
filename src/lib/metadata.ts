import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadata = {
  title?: string;
  description?: string;
  path?: string;
};

export function getPageHead({
  title,
  description,
  path = "",
}: PageMetadata = {}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    pageTitle,
    pageDescription,
    canonical,
  };
}

/** @deprecated App Router only — use getPageHead with next/head in Pages Router */
export function createMetadata({
  title,
  description,
  path = "",
}: PageMetadata = {}): Metadata {
  const { pageTitle, pageDescription, canonical } = getPageHead({
    title,
    description,
    path,
  });

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
