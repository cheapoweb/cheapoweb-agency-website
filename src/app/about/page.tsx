import { AboutPage } from "@/views/about/AboutPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about CheapoWeb — award-winning web design and digital marketing agency.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
