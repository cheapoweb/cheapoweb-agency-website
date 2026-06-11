"use client";

import { useRouter } from "next/router";
import { Header } from "../header/Header";

export function SiteHeader() {
  const router = useRouter();
  const overlay = router.pathname === "/";

  return <Header overlay={overlay} />;
}
