import Link from "next/link";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";
import { nav, site, telHref, mobileHref, mailHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* 会社 */}
          <div>
            <p className="font-serif text-2xl font-bold text-white">井上組</p>
            <p className="mt-1 font-display text-[0.6rem] uppercase tracking-widest2 text-brass">
              Inoue-gumi · Kyoto
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-stone">
              {site.tagline}。京都を拠点に、確かな技術で現場の安全を足元から支える鳶・足場工事の専門会社です。
            </p>
            <p className="mt-5 text-xs text-stone">{site.license}</p>
          </div>

          {/* サイトマップ */}
          <nav aria-label="フッターナビゲーション">
            <p className="font-display text-xs uppercase tracking-widest2 text-brass">
              Sitemap
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-white/80">
              <li>
                <Link href="/" className="transition hover:text-brass">
                  ホーム
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-brass">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 連絡先 */}
          <div>
            <p className="font-display text-xs uppercase tracking-widest2 text-brass">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brass" />
                <span>
                  〒{site.postalCode}
                  <br />
                  {site.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brass" />
                <a href={telHref} className="transition hover:text-brass">
                  {site.tel}（TEL/FAX）
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="h-4 w-4 shrink-0 text-brass" />
                <a href={mobileHref} className="transition hover:text-brass">
                  {site.mobile}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brass" />
                <a href={mailHref} className="break-all transition hover:text-brass">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-stone sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.companyName}. All rights reserved.
          </p>
          <p className="font-display uppercase tracking-widest2">
            Tobi &amp; Scaffolding · Kyoto
          </p>
        </div>
      </div>
    </footer>
  );
}
