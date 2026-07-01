/**
 * サイト全体で使う会社情報の「単一ソース」。
 * 値を変えればヘッダー・フッター・会社概要・構造化データまで一括で反映されます。
 * （※ [要差し替え] は実情報が決まり次第ここを書き換えてください）
 */

export const site = {
  // 基本情報（名刺より）
  companyName: "株式会社井上組",
  companyNameEn: "INOUE-GUMI Co., Ltd.",
  companyNameKana: "カブシキガイシャイノウエグミ",
  tagline: "鳶・足場工事一式",
  representative: "井上 寿樹",
  representativeEn: "Toshiki Inoue",
  representativeRole: "代表取締役",

  // 連絡先（名刺より）
  postalCode: "616-8134",
  address: "京都府京都市右京区太秦唐渡町19-2",
  addressRegion: "京都府",
  addressLocality: "京都市右京区",
  addressStreet: "太秦唐渡町19-2",
  tel: "075-756-4059",
  fax: "075-756-4059",
  mobile: "080-6127-1779",
  email: "toshiki19780830@yahoo.co.jp",

  // 許可・資格（名刺より）
  license: "京都府知事許可（般-8）第43083号",
  qualifications: [
    "一級とび技能士",
    "足場の組立て等作業主任者",
    "職長・安全衛生責任者",
  ],

  // 事業・営業情報（[要差し替え] 実情報で更新してください）
  established: "[要差し替え：創業年]",
  businessHours: "8:00〜18:00",
  closedDays: "日曜・年末年始（現場により変動）",
  serviceArea: "京都府全域（滋賀・大阪一部対応）",
  employees: "[要差し替え：従業員数]",

  // ドメイン（[要差し替え] 公開ドメインに変更してください）
  url: "https://www.inoue-gumi.example.jp",

  // Googleマップ（住所から自動生成。正確なピンに調整する場合は埋め込みURLを差し替え）
  mapEmbedQuery: "京都府京都市右京区太秦唐渡町19-2",
} as const;

export const nav = [
  { label: "井上組について", labelEn: "About", href: "/about" },
  { label: "代表挨拶", labelEn: "Message", href: "/message" },
  { label: "事業内容", labelEn: "Services", href: "/services" },
  { label: "施工実績", labelEn: "Works", href: "/works" },
  { label: "採用情報", labelEn: "Recruit", href: "/recruit" },
  { label: "お知らせ", labelEn: "News", href: "/news" },
  { label: "お問い合わせ", labelEn: "Contact", href: "/contact" },
] as const;

export const telHref = `tel:${site.tel.replace(/-/g, "")}`;
export const mobileHref = `tel:${site.mobile.replace(/-/g, "")}`;
export const mailHref = `mailto:${site.email}`;
export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.mapEmbedQuery
)}&output=embed`;
export const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapEmbedQuery
)}`;
