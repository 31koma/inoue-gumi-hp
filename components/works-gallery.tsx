"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Wrench } from "lucide-react";
import { works, worksCategories, type WorkCategory } from "@/lib/works";
import { Reveal } from "./reveal";

export function WorksGallery() {
  const [active, setActive] = useState<WorkCategory>("all");

  const filtered =
    active === "all" ? works : works.filter((w) => w.category === active);

  return (
    <div>
      {/* カテゴリーフィルター */}
      <div className="flex flex-wrap gap-3">
        {worksCategories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            aria-pressed={active === c.key}
            className={`border px-4 py-2 text-sm font-bold transition ${
              active === c.key
                ? "border-brass bg-brass text-ink"
                : "border-white/15 text-white/75 hover:border-brass hover:text-brass"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* グリッド */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w, i) => (
          <Reveal key={w.slug} delay={(i % 3) * 0.06}>
            <article
              id={w.slug}
              className="scroll-mt-24 overflow-hidden border border-white/10 bg-charcoal"
            >
              {/* メイン写真 */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={w.images[0].src}
                  alt={w.images[0].alt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-700 hover:scale-105"
                  style={{ filter: "grayscale(0.15)" }}
                />
                <span className="absolute left-3 top-3 bg-brass px-3 py-1 text-[0.7rem] font-black text-ink">
                  {w.categoryLabel}
                </span>
              </div>

              {/* サブ写真 */}
              {w.images.length > 1 && (
                <div className="grid grid-cols-3 gap-1 p-1">
                  {w.images.slice(1, 4).map((img) => (
                    <div key={img.src} className="relative aspect-square overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="20vw"
                        className="object-cover"
                        style={{ filter: "grayscale(0.2)" }}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-5">
                <h2 className="font-serif text-lg font-bold text-white">{w.title}</h2>
                <dl className="mt-4 space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-brass" />
                    <dt className="sr-only">施工場所</dt>
                    <dd>{w.location}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-brass" />
                    <dt className="sr-only">施工年月</dt>
                    <dd>{w.date}</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    <dt className="sr-only">施工内容</dt>
                    <dd>{w.scope}</dd>
                  </div>
                </dl>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-white/65">
                  {w.comment}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
