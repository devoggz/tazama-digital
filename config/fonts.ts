import { Roboto as FontMono, Roboto } from "next/font/google";

export const fontSans = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });
