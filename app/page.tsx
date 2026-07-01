import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, ShieldCheck, Award, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { services } from "@/lib/services";
import { works } from "@/lib/works";
import { site } from "@/lib/site";

const stats = [
  { label: "対応エリア", value: 1, suffix: "京都府全域", isText: true },
  { label: "施工実績", value: 1200, suffix: "件以上", isText: false },
  { label: "無事故記録", value: 100, suffix: "%安全第一", isText: false },
  { label: "保有資格", value: 1, suffix: "一級とび技能士", isText: true },
];

export default function Home() {
  return (
    <>
      {/* ① ② ヒーロー + 新キャッチコピー */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <Image
          src="/images/hero-scaffold.png"
          alt="京都の建設現場に組まれた井上組の足場"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "grayscale(0.35) brightness(0.55)" }}
        />
        <div className="absolute inset-0 media-scrim" aria-hidden="true" />
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-content px-5 pt-24 sm:px-8 lg:px-12">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-widest2 text-brass sm:text-sm">
              Tobi &amp; Scaffolding · Kyoto
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-[2.7rem] font-bold leading-[1.15] text-white sm:text-6xl lg:text-7xl">
              確かな足場で、
              <br />
              未来を支える。
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              京都を拠点とする鳶・足場工事の専門会社、株式会社井上組。
              一級とび技能士の技術と、最後まで気を抜かない仕事で、
              現場の安全と品質を足元から支えます。
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group flex items-center justify-center gap-2 bg-brass px-8 py-4 text-sm font-black text-ink transition hover:bg-brass-light"
              >
                事業内容を見る
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/recruit"
                className="flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-sm font-black text-white transition hover:border-brass hover:text-brass"
              >
                採用情報を見る
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-widest2 text-white/50">
          Scroll
        </div>
      </section>

      {/* ③ 井上組について */}
      <section className="relative overflow-hidden bg-ink px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="京都で信頼され、選ばれる足場会社へ。"
              lead="「足場は、すべての工事の土台です。」目立たない仕事だからこそ、私たちは段取り・安全・美しさにこだわります。井上組は若く勢いのあるチームでありながら、一級とび技能士の確かな技術で、元請会社・協力会社の皆さまから「任せて安心」と言っていただける仕事を積み重ねてきました。"
            />
            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brass transition hover:gap-3"
              >
                会社概要を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-white/10 bg-charcoal/60 p-6"
                >
                  <p className="font-display text-3xl font-bold text-brass sm:text-4xl">
                    {s.isText ? (
                      <span className="text-xl sm:text-2xl">{s.suffix}</span>
                    ) : (
                      <CountUp end={s.value} suffix={s.suffix} />
                    )}
                  </p>
                  <p className="mt-3 text-sm text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ④ 事業内容 */}
      <section className="border-t border-white/10 bg-charcoal px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Services"
            title="事業内容"
            lead="戸建てから中低層ビルまで、あらゆる現場に対応する足場・鳶工事。"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-white/10 bg-ink/40 transition hover:border-brass/60"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(0.3) brightness(0.7)" }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-[0.65rem] uppercase tracking-widest2 text-brass">
                      {s.titleEn}
                    </p>
                    <h3 className="mt-2 flex items-center justify-between font-serif text-xl font-bold text-white">
                      {s.title}
                      <ArrowUpRight className="h-5 w-5 text-brass transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{s.lead}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ 施工実績 */}
      <section className="bg-ink px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Works"
              title="施工実績"
              lead="京都府全域で手がけた足場・鳶工事の一部をご紹介します。"
            />
            <Reveal>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 text-sm font-bold text-brass transition hover:gap-3"
              >
                実績一覧を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {works.slice(0, 3).map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.06}>
                <Link
                  href={`/works#${w.slug}`}
                  className="group block overflow-hidden border border-white/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={w.images[0].src}
                      alt={w.images[0].alt}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(0.2)" }}
                    />
                    <span className="absolute left-4 top-4 bg-brass px-3 py-1 text-[0.7rem] font-black text-ink">
                      {w.categoryLabel}
                    </span>
                  </div>
                  <div className="bg-charcoal p-5">
                    <h3 className="font-serif text-lg font-bold text-white">
                      {w.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
                      <MapPin className="h-4 w-4 text-brass" />
                      {w.location} ／ {w.date}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ 代表メッセージ */}
      <section className="relative overflow-hidden border-y border-white/10 bg-charcoal px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <PhotoPlaceholder label="代表写真 準備中" monogram="井上" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Message"
              title="一つひとつの現場に、誠実に。"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-9 text-white/75">
                足場は、完成すれば隠れてしまう仕事です。それでも私たちは、見えない部分にこそ会社の姿勢が表れると信じています。安全で、美しく、次の職人が働きやすい足場を組むこと。それが井上組の誇りです。
              </p>
              <p className="mt-6 text-sm text-white/60">
                代表取締役　{site.representative}
              </p>
              <Link
                href="/message"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brass transition hover:gap-3"
              >
                代表挨拶を読む
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ⑦ 採用情報 */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Image
          src="/images/look-site.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "grayscale(0.5) brightness(0.35)" }}
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-content">
          <SectionHeading
            eyebrow="Recruit"
            title="京都で、街を支える仲間を。"
            lead="未経験から一級とび技能士へ。頑張りをきちんと評価する環境で、手に職をつけませんか。井上組は若く勢いのあるチームで、新しい仲間を歓迎します。"
          />
          <Reveal delay={0.1}>
            <Link
              href="/recruit"
              className="mt-8 inline-flex items-center gap-2 bg-brass px-8 py-4 text-sm font-black text-ink transition hover:bg-brass-light"
            >
              採用情報を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ⑧ 会社概要（要約） */}
      <section className="bg-ink px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Company" title="会社概要" />
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-5">
                <Feature icon={Award} title="一級とび技能士在籍" text="確かな国家資格と技術。" />
                <Feature icon={ShieldCheck} title={site.license} text="京都府知事許可。安心の有資格施工。" />
                <Feature icon={Clock} title={`営業時間 ${site.businessHours}`} text={`対応エリア：${site.serviceArea}`} />
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brass transition hover:gap-3"
              >
                詳しい会社概要を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-white/10 border border-white/10">
              <Row label="会社名" value={site.companyName} />
              <Row label="代表者" value={`${site.representativeRole}　${site.representative}`} />
              <Row label="所在地" value={`〒${site.postalCode}　${site.address}`} />
              <Row label="電話" value={`${site.tel}（TEL/FAX）`} />
              <Row label="事業内容" value={site.tagline} />
              <Row label="許可番号" value={site.license} />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ⑨ お問い合わせ */}
      <CtaSection />
    </>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-brass/40 text-brass">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/60">{text}</p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-4 text-sm sm:grid-cols-[9rem_1fr]">
      <dt className="font-bold text-brass">{label}</dt>
      <dd className="text-white/80">{value}</dd>
    </div>
  );
}
