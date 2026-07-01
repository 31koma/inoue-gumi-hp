/**
 * 写真が未用意の枠に使う、ブランド調の「準備中」プレースホルダー。
 * 親要素を relative にして、その中に絶対配置で全面を埋めます。
 * 実写真が用意できたら、この呼び出しを <Image> に差し替えてください。
 */
export function PhotoPlaceholder({
  label = "写真準備中",
  monogram = "井",
}: {
  label?: string;
  monogram?: string;
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-charcoal to-ink"
      role="img"
      aria-label={label}
    >
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <span className="relative font-serif text-5xl font-bold text-brass/70 sm:text-6xl">
        {monogram}
      </span>
      <span className="relative mt-3 font-display text-[0.6rem] uppercase tracking-widest2 text-stone">
        {label}
      </span>
    </div>
  );
}
