"use client";

import Link from "next/link";
import { Mail, Users } from "lucide-react";

/**
 * スマホ下部固定のCTA（お問い合わせ・採用）。
 * 親指の届く位置に常時表示し、機会損失を防ぐ。PCでは右下に控えめに表示。
 */
export function FloatingCta() {
  return (
    <>
      {/* モバイル：画面下部に2分割固定 */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 lg:hidden">
        <Link
          href="/recruit"
          className="flex items-center justify-center gap-2 bg-charcoal py-4 text-sm font-black text-white"
        >
          <Users className="h-5 w-5 text-brass" />
          採用情報
        </Link>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-brass py-4 text-sm font-black text-ink"
        >
          <Mail className="h-5 w-5" />
          お問い合わせ
        </Link>
      </div>

      {/* PC：右下に縦並びで固定 */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <Link
          href="/recruit"
          className="group flex items-center gap-3 border border-white/15 bg-charcoal/90 px-5 py-4 text-sm font-black text-white shadow-soft backdrop-blur-md transition hover:border-brass"
        >
          <Users className="h-5 w-5 text-brass" />
          採用情報
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-3 bg-brass px-5 py-4 text-sm font-black text-ink shadow-soft transition hover:bg-brass-light"
        >
          <Mail className="h-5 w-5" />
          お問い合わせ
        </Link>
      </div>
    </>
  );
}
