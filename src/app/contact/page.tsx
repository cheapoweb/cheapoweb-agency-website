import { ContactPage } from "@/views/contact/ContactPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact CheapoWeb — request a web design and marketing proposal.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
