import { Reveal } from "./reveal";

/**
 * セクション見出し（英字エルボウ + 和文H2）。トーン統一のため全ページで使用。
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center" : ""}>
        <p className="font-display text-xs uppercase tracking-widest2 text-brass">
          {eyebrow}
        </p>
        <h2
          className={`mt-4 font-serif text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl ${
            light ? "text-ink" : "text-white"
          }`}
        >
          {title}
        </h2>
        {lead && (
          <p
            className={`mt-5 text-base leading-8 ${
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
            } ${light ? "text-ink/70" : "text-white/70"}`}
          >
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}
