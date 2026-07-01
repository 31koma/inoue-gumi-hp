/**
 * 施工実績データ。実績を追加する場合はこの配列に1件追加するだけでOK。
 * images は複数枚掲載可能（1枚目がサムネイル）。実写真に差し替えてください。
 * category は worksCategories のいずれかを指定。
 */

export const worksCategories = [
  { key: "all", label: "すべて" },
  { key: "kusabi", label: "くさび式足場" },
  { key: "tankan", label: "単管足場" },
  { key: "bike", label: "ビケ足場" },
  { key: "tobi", label: "鳶・高所作業" },
] as const;

export type WorkCategory = (typeof worksCategories)[number]["key"];

export type Work = {
  slug: string;
  title: string;
  category: Exclude<WorkCategory, "all">;
  categoryLabel: string;
  location: string;
  date: string; // 施工年月
  scope: string; // 施工内容
  comment: string;
  images: { src: string; alt: string }[];
};

export const works: Work[] = [
  {
    slug: "ukyo-residence",
    title: "戸建て改修工事 外部足場",
    category: "kusabi",
    categoryLabel: "くさび式足場",
    location: "京都市右京区",
    date: "2026年5月",
    scope: "くさび式足場 架設・解体／メッシュシート設置",
    comment:
      "[要差し替え] 塗装工事に合わせた外部足場。狭い前面道路に配慮し、早朝の搬入と近隣挨拶を徹底しました。",
    images: [
      { src: "/images/look-site.png", alt: "京都市右京区の戸建て改修足場 全景" },
      { src: "/images/dark-structure.png", alt: "くさび式足場のディテール" },
    ],
  },
  {
    slug: "nakagyo-building",
    title: "中層ビル 外装改修足場",
    category: "kusabi",
    categoryLabel: "くさび式足場",
    location: "京都市中京区",
    date: "2026年3月",
    scope: "くさび式足場 5層／養生・安全手すり",
    comment:
      "[要差し替え] 商業エリアの中層ビル。歩行者動線を確保しながら、夜間を中心に安全に架設しました。",
    images: [
      { src: "/images/dark-structure.png", alt: "中京区の中層ビル足場" },
      { src: "/images/look-site.png", alt: "ビル足場の養生状況" },
    ],
  },
  {
    slug: "narrow-site",
    title: "狭小地 単管足場",
    category: "tankan",
    categoryLabel: "単管足場",
    location: "京都市上京区",
    date: "2026年2月",
    scope: "単管足場 特殊架設／部分補修対応",
    comment:
      "[要差し替え] 規格足場が入らない狭小地。単管を自在に組み、職人が安全に動ける動線を確保しました。",
    images: [
      { src: "/images/look-hands.png", alt: "狭小地の単管足場 クランプ締め付け" },
      { src: "/images/dark-structure.png", alt: "単管足場のディテール" },
    ],
  },
  {
    slug: "house-paint",
    title: "住宅塗装 ビケ足場",
    category: "bike",
    categoryLabel: "ビケ足場",
    location: "京都市西京区",
    date: "2025年12月",
    scope: "ビケ足場 架設・解体／塗装業者連携",
    comment:
      "[要差し替え] 塗装職人が作業しやすい足場を意識。後工程との連携で工期短縮に貢献しました。",
    images: [
      { src: "/images/look-hands.png", alt: "西京区の住宅塗装ビケ足場" },
      { src: "/images/look-site.png", alt: "住宅外装のビケ足場全景" },
    ],
  },
  {
    slug: "highwork",
    title: "高所作業・揚重段取り",
    category: "tobi",
    categoryLabel: "鳶・高所作業",
    location: "京都市南区",
    date: "2025年11月",
    scope: "鳶工事／重量物揚重／安全管理",
    comment:
      "[要差し替え] 元請会社と連携した高所作業。安全第一で、現場全体の進行を足元から支えました。",
    images: [
      { src: "/images/look-site.png", alt: "南区の高所作業" },
      { src: "/images/dark-structure.png", alt: "揚重段取りの現場" },
    ],
  },
  {
    slug: "renovation",
    title: "マンション改修 外部足場",
    category: "kusabi",
    categoryLabel: "くさび式足場",
    location: "京都市伏見区",
    date: "2025年9月",
    scope: "くさび式足場 全面架設／長期工事対応",
    comment:
      "[要差し替え] 居住者がいる中での改修足場。生活動線と安全を両立し、長期工事を無事故で完了しました。",
    images: [
      { src: "/images/look-site.png", alt: "伏見区のマンション改修足場" },
      { src: "/images/dark-structure.png", alt: "マンション足場のディテール" },
    ],
  },
];
