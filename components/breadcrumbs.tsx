import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export type Crumb = { label: string; href?: string };

/**
 * パンくずリスト + BreadcrumbList 構造化データを同時出力。
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "ホーム", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="パンくずリスト" className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
      <ol className="flex flex-wrap items-center gap-1 py-4 text-xs text-stone">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="transition hover:text-brass">
                {c.label}
              </Link>
            ) : (
              <span className="text-white/80">{c.label}</span>
            )}
            {i < all.length - 1 && (
              <ChevronRight className="h-3 w-3 text-stone/60" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
