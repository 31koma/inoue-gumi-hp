import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site, mapEmbedSrc, mapLinkHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社井上組の会社概要。京都市右京区を拠点に鳶・足場工事を行う当社の所在地・代表者・許可番号・保有資格・対応エリア・アクセスをご案内します。",
  alternates: { canonical: "/about" },
};

const overview: { label: string; value: string }[] = [
  { label: "会社名", value: site.companyName },
  { label: "代表者", value: `${site.representativeRole}　${site.representative}` },
  { label: "所在地", value: `〒${site.postalCode}　${site.address}` },
  { label: "電話 / FAX", value: site.tel },
  { label: "携帯", value: site.mobile },
  { label: "メール", value: site.email },
  { label: "事業内容", value: `${site.tagline}（くさび式足場・単管足場・ビケ足場・高所作業）` },
  { label: "許可番号", value: site.license },
  { label: "創業", value: site.established },
  { label: "営業時間", value: `${site.businessHours}（定休：${site.closedDays}）` },
  { label: "対応エリア", value: site.serviceArea },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="会社概要"
        titleEn="About / Company"
        lead="京都・右京区から、確かな足場で街を支える。井上組の基本情報をご案内します。"
        image="/images/dark-structure.png"
      />
      <Breadcrumbs items={[{ label: "会社概要" }]} />

      {/* 会社概要テーブル */}
      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Company Profile" title="会社情報" />
          <Reveal delay={0.1}>
            <dl className="mt-12 divide-y divide-white/10 border border-white/10">
              {overview.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                >
                  <dt className="font-bold text-brass">{row.label}</dt>
                  <dd className="break-words text-white/85">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 保有資格 */}
      <section className="border-t border-white/10 bg-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Qualifications"
            title="保有資格・許可"
            lead="安心して工事をお任せいただくための、確かな国家資格と許可。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[site.license, ...site.qualifications].map((q, i) => (
              <Reveal key={q} delay={i * 0.05}>
                <div className="flex h-full items-center gap-3 border border-white/10 bg-ink/40 p-5">
                  <span className="font-display text-2xl font-bold text-brass">
                    0{i + 1}
                  </span>
                  <p className="text-sm font-bold text-white/90">{q}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* アクセス・地図 */}
      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Access" title="アクセス" />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <div className="border border-white/10 bg-charcoal p-6">
                <p className="flex items-start gap-3 text-white/85">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass" />
                  <span>
                    〒{site.postalCode}
                    <br />
                    {site.address}
                  </span>
                </p>
                <a
                  href={mapLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brass transition hover:gap-3"
                >
                  Googleマップで開く
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="aspect-[16/10] w-full overflow-hidden border border-white/10">
                <iframe
                  title={`${site.companyName}の地図`}
                  src={mapEmbedSrc}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, filter: "grayscale(0.2) invert(0.04)" }}
                />
              </div>
            </Reveal>
          </div>
          <Reveal>
            <Link
              href="/message"
              className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-brass transition hover:gap-3"
            >
              代表挨拶を読む →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
