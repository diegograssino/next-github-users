import { Poppins, Roboto } from "next/font/google";

export const primaryFont = Roboto({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const secondaryFont = Poppins({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700"],
});