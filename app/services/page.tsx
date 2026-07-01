import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "株式会社井上組の事業内容。くさび式足場・単管足場・ビケ足場・鳶工事・足場設計・解体撤去まで、京都の現場を足元から支える各種足場工事を写真付きでご紹介します。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="事業内容"
        titleEn="Services"
        lead="戸建てから中低層ビルまで。あらゆる現場に、最適な足場を。"
        image="/images/look-site.png"
      />
      <Breadcrumbs items={[{ label: "事業内容" }]} />

      {/* イントロ + 目次 */}
      <section className="bg-ink px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="What we do"
            title="足場は、すべての工事の土台です。"
            lead="塗装・防水・解体・新築——どんな工事も、安全な足場がなければ始まりません。井上組は、現場ごとに最適な工法を選び、後工程の職人が働きやすい足場を組むことを使命としています。"
          />
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="inline-block border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-brass hover:text-brass"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 各事業の詳細 */}
      <div className="bg-ink">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12"
          >
            <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <figure className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ filter: "grayscale(0.25) brightness(0.8)" }}
                  />
                </figure>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="font-display text-xs uppercase tracking-widest2 text-brass">
                    {String(i + 1).padStart(2, "0")} · {s.titleEn}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-bold text-white">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg font-bold text-brass-light">{s.lead}</p>
                  <p className="mt-5 text-base leading-9 text-white/75">{s.body}</p>
                  <ul className="mt-7 grid grid-cols-2 gap-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 shrink-0 text-brass" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaSection />
    </>
  );
}
