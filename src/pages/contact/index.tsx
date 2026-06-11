import Head from "next/head";
import Contact from "@/pages/contact/contact";
import { getPageHead } from "@/lib/metadata";

const meta = getPageHead({
  title: "Contact",
  description: "Contact cheapoweb — request a web design and marketing proposal.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{meta.pageTitle}</title>
        <meta name="description" content={meta.pageDescription} />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      <Contact />
    </>
  );
}
