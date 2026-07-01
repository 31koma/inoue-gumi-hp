import Image from "next/image";

/**
 * 下層ページ共通のヒーロー。タイトル・英字・背景画像を渡して使い回す。
 */
export function PageHero({
  title,
  titleEn,
  lead,
  image = "/images/dark-structure.png",
}: {
  title: string;
  titleEn: string;
  lead?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden pb-12 pt-32 sm:min-h-[52vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ filter: "grayscale(0.4) brightness(0.5)" }}
      />
      <div className="absolute inset-0 media-scrim" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8 lg:px-12">
        <p className="font-display text-xs uppercase tracking-widest2 text-brass">
          {titleEn}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">{lead}</p>
        )}
      </div>
    </section>
  );
}
