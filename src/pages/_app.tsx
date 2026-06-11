import type { AppProps } from "next/app";
import { Footer, SiteHeader } from "@/components/layout";
import "@/lib/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />
      <main className="relative flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
