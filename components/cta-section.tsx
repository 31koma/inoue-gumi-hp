import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { site, telHref } from "@/lib/site";
import { Reveal } from "./reveal";

/**
 * 各ページ下部に配置する共通CTA。問い合わせ・採用への導線を必ず確保する。
 */
export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/final-cta.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: "grayscale(0.5) brightness(0.4)" }}
      />
      <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
      <div className="relative mx-auto max-w-content px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-widest2 text-brass">
            Contact &amp; Recruit
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
            足場のこと、採用のこと。
            <br className="hidden sm:block" />
            まずはお気軽にご相談ください。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/75">
            お見積り・現場のご相談はもちろん、「井上組で働いてみたい」という方からのご連絡もお待ちしています。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex w-full items-center justify-center gap-2 bg-brass px-8 py-4 text-sm font-black text-ink transition hover:bg-brass-light sm:w-auto"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/recruit"
              className="flex w-full items-center justify-center gap-2 border border-white/30 px-8 py-4 text-sm font-black text-white transition hover:border-brass hover:text-brass sm:w-auto"
            >
              採用情報を見る
            </Link>
            <a
              href={telHref}
              className="flex w-full items-center justify-center gap-2 px-4 py-4 text-sm font-bold text-white/80 transition hover:text-brass sm:w-auto"
            >
              <Phone className="h-4 w-4 text-brass" />
              {site.tel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
