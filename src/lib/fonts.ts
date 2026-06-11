import { Bebas_Neue, Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-raleway",
});

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export const fontClassNames = `${raleway.variable} ${bebasNeue.variable}`;
