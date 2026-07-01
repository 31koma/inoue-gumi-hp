import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { newsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description:
    "株式会社井上組からのお知らせ・現場ブログ。施工事例、採用情報、会社からのお知らせを随時更新しています。",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const posts = [...newsPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        title="お知らせ"
        titleEn="News"
        lead="井上組からのお知らせと、現場の様子をお届けします。"
        image="/images/dark-structure.png"
      />
      <Breadcrumbs items={[{ label: "お知らせ" }]} />

      <section className="bg-ink px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Reveal delay={(i % 4) * 0.05}>
                  <Link
                    href={`/news/${post.slug}`}
                    className="group flex flex-col gap-3 py-7 transition sm:flex-row sm:items-center sm:gap-6"
                  >
                    <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                      <time className="font-display text-sm text-stone">
                        {post.date.replace(/-/g, ".")}
                      </time>
                      <span className="border border-brass/40 px-3 py-1 text-[0.7rem] font-bold text-brass">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-4">
                      <div>
                        <h2 className="font-bold text-white transition group-hover:text-brass">
                          {post.title}
                        </h2>
                        <p className="mt-1 text-sm text-white/60">{post.excerpt}</p>
                      </div>
                      <ArrowRight className="hidden h-5 w-5 shrink-0 text-brass transition group-hover:translate-x-1 sm:block" />
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-stone">
            ※ 記事は <code className="text-brass">lib/news.ts</code> に追記するだけで増やせます（将来的なCMS連携も想定した構成です）。
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
