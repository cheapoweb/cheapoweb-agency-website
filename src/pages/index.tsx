import Head from "next/head";
import Home from "@/pages/home/home";
import { getPageHead } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

const meta = getPageHead({
  title: "Home",
  description: `${siteConfig.name} — ${siteConfig.tagline}. Award-winning New York web design and digital marketing agency since ${siteConfig.since}.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{meta.pageTitle}</title>
        <meta name="description" content={meta.pageDescription} />
        <link rel="canonical" href={meta.canonical} />
        <link
          rel="preload"
          href="/assets/videos/hero-section.mp4"
          as="video"
          type="video/mp4"
        />
      </Head>
      <Home />
    </>
  );
}
