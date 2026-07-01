import type { Metadata } from "next";
import { Oswald, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCta } from "@/components/floating-cta";
import { site } from "@/lib/site";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700", "900"],
  display: "swap",
});

const body = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "井上組｜京都の鳶・足場工事 | 株式会社井上組",
    template: "%s｜株式会社井上組",
  },
  description:
    "京都市右京区の鳶・足場工事専門会社、株式会社井上組。くさび式足場・単管足場・ビケ足場から高所作業まで、一級とび技能士が確かな技術で現場の安全を足元から支えます。京都府全域対応。",
  keywords: [
    "足場工事",
    "鳶",
    "とび",
    "くさび式足場",
    "単管足場",
    "ビケ足場",
    "京都",
    "右京区",
    "井上組",
  ],
  authors: [{ name: site.companyName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: site.url,
    siteName: site.companyName,
    title: "井上組｜京都の鳶・足場工事",
    description:
      "確かな技術で現場の安全を足元から支える、京都の鳶・足場工事専門会社。",
    images: [{ url: "/images/hero-scaffold.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "井上組｜京都の鳶・足場工事",
    description:
      "確かな技術で現場の安全を足元から支える、京都の鳶・足場工事専門会社。",
    images: ["/images/hero-scaffold.png"],
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#organization`,
  name: site.companyName,
  alternateName: "井上組",
  url: site.url,
  telephone: site.tel,
  email: site.email,
  image: `${site.url}/images/hero-scaffold.png`,
  description:
    "京都の鳶・足場工事専門会社。くさび式足場・単管足場・ビケ足場・高所作業に対応。",
  address: {
    "@type": "PostalAddress",
    postalCode: site.postalCode,
    addressRegion: site.addressRegion,
    addressLocality: site.addressLocality,
    streetAddress: site.addressStreet,
    addressCountry: "JP",
  },
  areaServed: { "@type": "AdministrativeArea", name: "京都府" },
  founder: { "@type": "Person", name: site.representative },
  knowsAbout: ["足場工事", "鳶工事", "くさび式足場", "単管足場", "高所作業"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body
        className={`${display.variable} ${serif.variable} ${body.variable}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
        >
          本文へスキップ
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingCta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
