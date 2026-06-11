import { Head, Html, Main, NextScript } from "next/document";
import { fontClassNames } from "@/lib/fonts";

export default function Document() {
  return (
    <Html lang="en" className={`${fontClassNames} h-full antialiased`}>
      <Head />
      <body
        id="top"
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
