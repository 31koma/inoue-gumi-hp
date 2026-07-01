import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { WorksGallery } from "@/components/works-gallery";

export const metadata: Metadata = {
  title: "施工実績",
  description:
    "株式会社井上組の施工実績。京都府全域で手がけたくさび式足場・単管足場・ビケ足場・高所作業の現場写真を、工事名・施工場所・施工内容・施工年月とともにご紹介します。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        title="施工実績"
        titleEn="Works"
        lead="京都府全域で積み重ねてきた、確かな仕事の記録。"
        image="/images/look-site.png"
      />
      <Breadcrumbs items={[{ label: "施工実績" }]} />

      <section className="bg-ink px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Project Gallery"
            title="施工事例"
            lead="カテゴリーで絞り込んでご覧いただけます。"
          />
          <div className="mt-12">
            <WorksGallery />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
