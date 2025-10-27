import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Days_One as FontDaysOne,
  Inter as FontInter,
  Lalezar as FontLalezar,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontDaysOne = FontDaysOne({
  subsets: ["latin"],
  variable: "--font-days-one",
  weight: "400",
});

export const fontInter = FontInter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const fontLalezar = FontLalezar({
  subsets: ["latin"],
  variable: "--font-lalezar",
  weight: "400",
});
