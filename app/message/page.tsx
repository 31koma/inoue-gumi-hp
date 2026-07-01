import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "代表挨拶",
  description: `${site.companyName} 代表取締役 ${site.representative}からのご挨拶。経営理念、創業の想い、仕事へのこだわり、社員とお客様への想い、今後のビジョンをお伝えします。`,
  alternates: { canonical: "/message" },
};

const values: { title: string; body: string }[] = [
  {
    title: "経営理念",
    body: "「確かな足場で、未来を支える。」私たちは、目立たないけれど欠かせない足場という仕事を通じて、京都の街づくりと、そこで働くすべての職人の安全を支えます。",
  },
  {
    title: "創業の想い",
    body: "[要差し替え] 一人の鳶職人として現場に立ち続けるなかで、「安全で、美しく、信頼される足場をつくる会社をつくりたい」という想いから井上組を立ち上げました。技術を正しく評価し、若い世代が誇りを持って働ける場所をつくることが原点です。",
  },
  {
    title: "仕事へのこだわり",
    body: "足場は段取りで決まります。図面と現場を丁寧に読み、工程・安全・近隣環境まで考え抜いた一手を打つ。締め付けの一つ、声掛けの一つに、会社の姿勢が表れると考えています。",
  },
  {
    title: "品質への考え方",
    body: "私たちにとっての品質とは、「次の職人が働きやすいこと」「事故が起きないこと」「お客様が安心できること」。見えなくなる仕事だからこそ、見えない部分にこそ手を抜きません。",
  },
  {
    title: "社員への想い",
    body: "[要差し替え] 社員は会社の財産です。未経験からでも一級とび技能士を目指せる教育と、頑張りをきちんと評価する仕組みを整え、長く安心して働ける環境づくりに力を注いでいます。",
  },
  {
    title: "お客様へのメッセージ",
    body: "元請会社・協力会社の皆さま、そして地域の皆さま。「井上組に任せてよかった」と言っていただけることが、私たちの何よりの誇りです。どんな小さな現場のご相談も、誠実にお応えします。",
  },
  {
    title: "今後のビジョン",
    body: "[要差し替え] 京都で最も信頼される足場会社を目指し、技術力と組織力を高め続けます。次世代の職人を育て、地域の建設を足元から支える存在であり続けることが、私たちのビジョンです。",
  },
];

export default function MessagePage() {
  return (
    <>
      <PageHero
        title="代表挨拶"
        titleEn="Message"
        lead="目立たない仕事にこそ、会社の姿勢が表れる。"
        image="/images/look-site.png"
      />
      <Breadcrumbs items={[{ label: "代表挨拶" }]} />

      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* 代表写真 */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <PhotoPlaceholder label="代表写真 準備中" monogram="井上" />
              </div>
              <p className="mt-5 font-display text-xs uppercase tracking-widest2 text-brass">
                Representative
              </p>
              <p className="mt-2 text-sm text-white/60">{site.representativeRole}</p>
              <p className="font-serif text-2xl font-bold text-white">
                {site.representative}
              </p>
            </div>
          </Reveal>

          {/* 本文 */}
          <div>
            <Reveal>
              <p className="font-serif text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                一つひとつの現場に、
                <br />
                誠実に向き合う。
              </p>
              <p className="mt-8 text-base leading-9 text-white/75">
                ホームページをご覧いただき、誠にありがとうございます。株式会社井上組、代表取締役の{site.representative}です。
                私たちは京都を拠点に、鳶・足場工事の専門会社として現場の最前線で仕事をしています。
              </p>
            </Reveal>

            <div className="mt-12 space-y-10">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.04}>
                  <div className="border-l-2 border-brass/60 pl-6">
                    <h2 className="font-serif text-xl font-bold text-white">
                      {v.title}
                    </h2>
                    <p className="mt-3 text-base leading-9 text-white/75">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-12 text-right text-base text-white/80">
                株式会社井上組
                <br />
                {site.representativeRole}
                <span className="font-serif text-xl font-bold text-white">
                  {site.representative}
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
