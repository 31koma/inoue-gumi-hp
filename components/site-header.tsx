"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site, telHref } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ遷移でメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex flex-col leading-none"
          aria-label={`${site.companyName} ホーム`}
        >
          <span className="font-serif text-2xl font-bold tracking-wide text-white">
            井上組
          </span>
          <span className="mt-1 font-display text-[0.6rem] uppercase tracking-widest2 text-brass">
            Inoue-gumi · Kyoto
          </span>
        </Link>

        {/* PCナビ */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="メインナビゲーション">
          {nav.slice(0, 6).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[0.8rem] font-bold tracking-wide transition ${
                  active ? "text-brass" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={telHref}
            className="ml-2 flex items-center gap-2 text-sm font-bold text-white/80 transition hover:text-brass"
          >
            <Phone className="h-4 w-4 text-brass" />
            {site.tel}
          </a>
          <Link
            href="/contact"
            className="ml-3 bg-brass px-5 py-3 text-[0.8rem] font-black tracking-wide text-ink transition hover:bg-brass-light"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* モバイル開閉 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-ink/98 px-5 pb-8 pt-2 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col" aria-label="モバイルナビゲーション">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-white/8 py-4 text-base font-bold ${
                    active ? "text-brass" : "text-white/85"
                  }`}
                >
                  {item.label}
                  <span className="font-display text-[0.6rem] uppercase tracking-widest2 text-stone">
                    {item.labelEn}
                  </span>
                </Link>
              );
            })}
          </nav>
          <a
            href={telHref}
            className="mt-6 flex items-center justify-center gap-2 border border-white/20 py-4 text-base font-bold text-white"
          >
            <Phone className="h-5 w-5 text-brass" />
            {site.tel}
          </a>
        </div>
      )}
    </header>
  );
}
