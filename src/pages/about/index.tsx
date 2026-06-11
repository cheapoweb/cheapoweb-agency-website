import Head from "next/head";
import About from "@/pages/about/about";
import { getPageHead } from "@/lib/metadata";

const meta = getPageHead({
  title: "About",
  description: "Learn about cheapoweb — award-winning web design and digital marketing agency.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{meta.pageTitle}</title>
        <meta name="description" content={meta.pageDescription} />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      <About />
    </>
  );
}
