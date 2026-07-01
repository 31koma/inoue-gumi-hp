"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

/**
 * お問い合わせ／応募フォーム。
 * バックエンド未接続のため、送信時はメールクライアントを起動する方式（mailto）。
 * 本番ではフォーム送信サービス（Formspree / SSGformなど）や
 * APIルートに置き換えてください（action先を変えるだけで対応可能な構成です）。
 */
export function InquiryForm({ variant = "contact" }: { variant?: "contact" | "recruit" }) {
  const isRecruit = variant === "recruit";
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines = [
      `お名前：${data.get("name") ?? ""}`,
      `フリガナ：${data.get("kana") ?? ""}`,
      `電話番号：${data.get("tel") ?? ""}`,
      `メール：${data.get("email") ?? ""}`,
      isRecruit ? `経験：${data.get("experience") ?? ""}` : `ご用件：${data.get("subject") ?? ""}`,
      "",
      `${isRecruit ? "自己PR・ご質問" : "お問い合わせ内容"}：`,
      `${data.get("message") ?? ""}`,
    ];
    const subject = isRecruit
      ? "【採用応募】井上組ホームページより"
      : "【お問い合わせ】井上組ホームページより";
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setDone(true);
  };

  if (done) {
    return (
      <div className="border border-brass/40 bg-charcoal p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brass" />
        <p className="mt-4 font-serif text-xl font-bold text-white">
          メールアプリを起動しました
        </p>
        <p className="mt-3 text-sm leading-7 text-white/70">
          内容をご確認のうえ送信してください。うまく起動しない場合は、
          <a href={`mailto:${site.email}`} className="text-brass underline">
            {site.email}
          </a>
          、またはお電話（{site.tel}）までご連絡ください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Field label="お名前" name="name" required placeholder="井上 太郎" />
      <Field label="フリガナ" name="kana" placeholder="イノウエ タロウ" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="電話番号" name="tel" type="tel" required placeholder="090-0000-0000" />
        <Field label="メールアドレス" name="email" type="email" required placeholder="example@mail.com" />
      </div>

      {isRecruit ? (
        <Select
          label="経験"
          name="experience"
          options={["未経験", "経験あり（1年未満）", "経験あり（1〜3年）", "経験あり（3年以上）"]}
        />
      ) : (
        <Select
          label="ご用件"
          name="subject"
          options={["お見積り・工事のご相談", "協力会社のご相談", "採用について", "その他"]}
        />
      )}

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-white/90">
          {isRecruit ? "自己PR・ご質問" : "お問い合わせ内容"}
          <span className="ml-1 text-brass">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-white/15 bg-ink/60 px-4 py-3 text-white placeholder:text-stone/60 focus:border-brass"
          placeholder={
            isRecruit
              ? "志望動機やご質問など、お気軽にご記入ください。"
              : "工事内容・ご希望・現場の場所などをご記入ください。"
          }
        />
      </div>

      <p className="text-xs leading-6 text-stone">
        ご入力いただいた個人情報は、お問い合わせ・採用対応の目的のみに使用します。
      </p>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 bg-brass px-8 py-4 text-sm font-black text-ink transition hover:bg-brass-light"
      >
        {isRecruit ? "応募する" : "送信する"}
        <Send className="h-4 w-4 transition group-hover:translate-x-1" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-white/90">
        {label}
        {required && <span className="ml-1 text-brass">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-white/15 bg-ink/60 px-4 py-3 text-white placeholder:text-stone/60 focus:border-brass"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-white/90">
        {label}
        <span className="ml-1 text-brass">*</span>
      </label>
      <select
        id={name}
        name={name}
        required
        className="w-full border border-white/15 bg-ink/60 px-4 py-3 text-white focus:border-brass"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
