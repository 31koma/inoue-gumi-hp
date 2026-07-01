import type { Metadata } from "next";
import { Phone, Smartphone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { InquiryForm } from "@/components/inquiry-form";
import { site, telHref, mobileHref, mailHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社井上組へのお問い合わせ。足場・鳶工事のお見積り、協力会社のご相談、採用についてなど、お電話・メール・フォームよりお気軽にご連絡ください。京都府全域対応。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        titleEn="Contact"
        lead="お見積り・ご相談・採用のことまで、お気軽にご連絡ください。"
        image="/images/final-cta.png"
      />
      <Breadcrumbs items={[{ label: "お問い合わせ" }]} />

      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* 連絡先 */}
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="お電話でも、メールでも。"
              lead="お急ぎの場合はお電話が確実です。受付時間外はフォーム・メールをご利用ください。"
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-4">
                <ContactRow icon={Phone} label="電話 / FAX" value={site.tel} href={telHref} />
                <ContactRow icon={Smartphone} label="携帯" value={site.mobile} href={mobileHref} />
                <ContactRow icon={Mail} label="メール" value={site.email} href={mailHref} />
                <ContactRow
                  icon={Clock}
                  label="受付時間"
                  value={`${site.businessHours}（${site.closedDays}）`}
                />
                <ContactRow
                  icon={MapPin}
                  label="所在地"
                  value={`〒${site.postalCode} ${site.address}`}
                />
              </ul>
            </Reveal>
          </div>

          {/* フォーム */}
          <Reveal delay={0.1}>
            <div className="border border-white/10 bg-charcoal p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-white">
                お問い合わせフォーム
              </h2>
              <p className="mt-2 text-sm text-white/60">
                <span className="text-brass">*</span> は必須項目です。
              </p>
              <div className="mt-8">
                <InquiryForm variant="contact" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 border border-white/10 bg-charcoal p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-brass/40 text-brass">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-brass">{label}</p>
        <p className="mt-1 break-words font-bold text-white">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block transition hover:opacity-90">
        {inner}
      </a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}
