import type { Metadata } from "next";
import { Heart, TrendingUp, Users, Shield, Clock, Sun, Sunset, Coffee } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { InquiryForm } from "@/components/inquiry-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "株式会社井上組の採用情報。京都で鳶・足場職人を募集中。未経験歓迎、一級とび技能士を目指せる教育体制、福利厚生、先輩社員の声、募集要項、応募フォームをご案内します。",
  alternates: { canonical: "/recruit" },
};

const persona = [
  "体を動かす仕事が好きな方",
  "手に職をつけて長く働きたい方",
  "チームで協力するのが好きな方",
  "未経験でも前向きに学べる方",
];

const merits = [
  { icon: TrendingUp, title: "頑張りを正当に評価", text: "[要差し替え] 資格取得支援と、努力がしっかり給与に反映される仕組み。" },
  { icon: Heart, title: "未経験から一人前へ", text: "先輩が一から指導。一級とび技能士を目指せる教育体制があります。" },
  { icon: Users, title: "若く風通しの良いチーム", text: "年齢の近い仲間が多く、相談しやすい雰囲気。上下関係もフラット。" },
  { icon: Shield, title: "安全最優先の現場", text: "毎朝のKY活動と装備の徹底で、無事故・無災害を継続中。" },
];

const schedule = [
  { icon: Sun, time: "7:30", title: "集合・出発", text: "事務所に集合。工具・部材を積み込み、現場へ向かいます。" },
  { icon: Clock, time: "8:00", title: "朝礼・KY活動", text: "その日の作業と危険ポイントを全員で確認。安全第一でスタート。" },
  { icon: Coffee, time: "12:00", title: "昼休憩", text: "現場でしっかり休憩。午後に備えて英気を養います。" },
  { icon: Sunset, time: "17:00", title: "片付け・帰社", text: "現場を整え、安全に撤収。翌日の段取りを確認して終了。" },
];

const benefits = [
  "各種社会保険完備", "資格取得支援制度", "交通費支給", "作業着・装備支給",
  "昇給・賞与あり", "皆勤・現場手当", "車通勤可", "社員旅行・懇親会",
];

const requirements: { label: string; value: string }[] = [
  { label: "募集職種", value: "鳶・足場職人（未経験者／経験者）" },
  { label: "雇用形態", value: "正社員（試用期間あり）" },
  { label: "給与", value: "[要差し替え] 日給 月給制／経験・能力により優遇" },
  { label: "勤務時間", value: `${site.businessHours}（現場により変動）` },
  { label: "休日", value: `[要差し替え] ${site.closedDays}` },
  { label: "勤務地", value: `京都市右京区（本社）および各現場／${site.serviceArea}` },
  { label: "応募資格", value: "学歴・経験不問／要普通自動車免許（AT可）歓迎" },
];

const voices = [
  {
    name: "[要差し替え] 先輩A（20代・入社3年）",
    role: "未経験入社",
    quote:
      "最初は不安でしたが、先輩が丁寧に教えてくれて今では一通り任せてもらえます。組み上がった足場を見たときの達成感は格別です。",
  },
  {
    name: "[要差し替え] 先輩B（30代・入社5年）",
    role: "一級とび技能士",
    quote:
      "資格取得を会社が後押ししてくれました。技術が給与に反映されるので、頑張る理由がはっきりしています。",
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        title="採用情報"
        titleEn="Recruit"
        lead="京都で、街を支える仲間を募集しています。"
        image="/images/look-site.png"
      />
      <Breadcrumbs items={[{ label: "採用情報" }]} />

      {/* 求める人物像 */}
      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Who we want"
            title="求める人物像"
            lead="経験よりも、やる気と素直さを大切にしています。一つでも当てはまれば、ぜひご応募ください。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {persona.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <div className="flex h-full items-center gap-3 border border-white/10 bg-charcoal p-5">
                  <span className="font-display text-2xl font-bold text-brass">
                    0{i + 1}
                  </span>
                  <p className="text-sm font-bold text-white/90">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 働く魅力 */}
      <section className="border-t border-white/10 bg-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Why Inoue-gumi" title="働く魅力" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {merits.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 border border-white/10 bg-ink/40 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass/40 text-brass">
                    <m.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">{m.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 一日の流れ */}
      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="A day" title="一日の流れ" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {schedule.map((s, i) => (
              <Reveal key={s.time} delay={i * 0.06}>
                <div className="h-full border border-white/10 bg-charcoal p-6">
                  <s.icon className="h-7 w-7 text-brass" />
                  <p className="mt-4 font-display text-2xl font-bold text-white">{s.time}</p>
                  <p className="mt-1 font-bold text-brass-light">{s.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 福利厚生 */}
      <section className="border-t border-white/10 bg-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Benefits" title="福利厚生" />
          <div className="mt-12 flex flex-wrap gap-3">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.03}>
                <span className="inline-block border border-brass/30 bg-ink/40 px-5 py-3 text-sm font-bold text-white/85">
                  {b}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 先輩社員の声 */}
      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Voice" title="先輩社員の声" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {voices.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-5 border border-white/10 bg-charcoal p-6 sm:flex-row">
                  <div className="relative aspect-square w-full shrink-0 overflow-hidden border border-white/10 sm:w-32">
                    <PhotoPlaceholder label="準備中" monogram="社員" />
                  </div>
                  <div>
                    <p className="font-display text-xs uppercase tracking-widest2 text-brass">
                      {v.role}
                    </p>
                    <p className="mt-1 font-bold text-white">{v.name}</p>
                    <p className="mt-3 text-sm leading-7 text-white/75">「{v.quote}」</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="border-t border-white/10 bg-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <SectionHeading eyebrow="Requirements" title="募集要項" />
          <Reveal delay={0.1}>
            <dl className="mt-12 divide-y divide-white/10 border border-white/10">
              {requirements.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                >
                  <dt className="font-bold text-brass">{r.label}</dt>
                  <dd className="text-white/85">{r.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 応募フォーム */}
      <section id="apply" className="scroll-mt-24 bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Apply"
            title="応募フォーム"
            lead={`まずはお気軽にご応募ください。ご質問だけでも歓迎です。お電話（${site.tel}）でも受け付けています。`}
          />
          <Reveal delay={0.1}>
            <div className="mt-10">
              <InquiryForm variant="recruit" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
