import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaSection } from "@/components/cta-section";
import { newsPosts } from "@/lib/news";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return { title: "お知らせ" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.companyName },
    publisher: { "@type": "Organization", name: site.companyName },
    description: post.excerpt,
    mainEntityOfPage: `${site.url}/news/${post.slug}`,
  };

  return (
    <>
      <div className="pt-20" />
      <Breadcrumbs
        items={[{ label: "お知らせ", href: "/news" }, { label: post.title }]}
      />

      <article className="bg-ink px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <time className="font-display text-sm text-stone">
              {post.date.replace(/-/g, ".")}
            </time>
            <span className="border border-brass/40 px-3 py-1 text-[0.7rem] font-bold text-brass">
              {post.category}
            </span>
          </div>
          <h1 className="mt-5 font-serif text-3xl font-bold leading-snug text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 h-px brass-rule" />

          <div className="prose-jp mt-10 text-base leading-9">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <Link
            href="/news"
            className="mt-14 inline-flex items-center gap-2 text-sm font-bold text-brass transition hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            お知らせ一覧へ戻る
          </Link>
        </div>
      </article>

      <CtaSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
