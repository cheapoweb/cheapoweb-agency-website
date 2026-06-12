"use client";

import { useRouter } from "next/router";
import { Header } from "../header/Header";

const OVERLAY_HEADER_PATHS = ["/"];

export function SiteHeader() {
  const router = useRouter();
  const overlay = OVERLAY_HEADER_PATHS.includes(router.pathname);

  return <Header overlay={overlay} />;
}
