import Head from "next/head";
import Services from "@/pages/services/services";
import { getPageHead } from "@/lib/metadata";

const meta = getPageHead({
  title: "Services",
  description:
    "Branding, web design, web development, and digital marketing services from cheapoweb — built to drive traffic, leads, and revenue.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{meta.pageTitle}</title>
        <meta name="description" content={meta.pageDescription} />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      <Services />
    </>
  );
}
