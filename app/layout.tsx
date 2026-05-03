import type { Metadata } from "next";
import { Oswald, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const body = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "井上組 | 足場工事",
  description: "単管足場、くさび式足場部材を扱う足場職人集団、井上組の公式サイト。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
