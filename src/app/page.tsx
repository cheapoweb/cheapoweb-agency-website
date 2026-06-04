import { HomePage } from "@/views/home/HomePage";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Home",
  description: `${siteConfig.name} — ${siteConfig.tagline}. Award-winning New York web design and digital marketing agency since ${siteConfig.since}.`,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
