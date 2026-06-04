"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

export function SiteHeader() {
  const pathname = usePathname();
  const overlay = pathname === "/";

  return <Header overlay={overlay} />;
}
