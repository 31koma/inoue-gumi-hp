import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-bold text-brass">404</p>
      <h1 className="mt-6 font-serif text-2xl font-bold text-white">
        ページが見つかりませんでした
      </h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
        お探しのページは移動または削除された可能性があります。
        お手数ですが、トップページからお探しください。
      </p>
      <Link
        href="/"
        className="mt-8 bg-brass px-8 py-4 text-sm font-black text-ink transition hover:bg-brass-light"
      >
        トップページへ戻る
      </Link>
    </section>
  );
}
