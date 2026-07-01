/**
 * 事業内容データ。事業を追加・編集する場合はここを変更します。
 * image は public/images 配下のパス（実写真に差し替え推奨）。
 */

export type Service = {
  slug: string;
  title: string;
  titleEn: string;
  lead: string;
  body: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "kusabi",
    title: "くさび式足場",
    titleEn: "Wedge Scaffolding",
    lead: "戸建てから中低層ビルまで、最も汎用性の高い足場工法。",
    body: "ハンマー一本で組み立てられるくさび緊結式足場は、施工スピードと安全性を両立する現代の主流工法です。井上組では現場形状を読み取り、職人が安心して作業できる動線と、近隣に配慮した美しい架け方を徹底しています。",
    features: ["戸建て・改修工事", "中低層ビル", "短工期・高精度", "メッシュシート完備"],
    image: "/images/look-site.png",
    imageAlt: "くさび式足場が組まれた建設現場",
  },
  {
    slug: "tankan",
    title: "単管足場",
    titleEn: "Single-Pipe Scaffolding",
    lead: "狭小地・変形地でも、自在に組み上げる職人技。",
    body: "単管パイプとクランプを自在に組み合わせる単管足場は、複雑な地形や限られたスペースでも対応できる柔軟性が魅力です。一級とび技能士の確かな技術で、規格化された足場では届かない現場の「ここをなんとかしたい」に応えます。",
    features: ["狭小地・変形地", "特殊形状に対応", "補修・部分施工", "臨機応変な設計"],
    image: "/images/look-hands.png",
    imageAlt: "単管足場のクランプを締める作業",
  },
  {
    slug: "bike",
    title: "ビケ足場",
    titleEn: "Bike Scaffolding",
    lead: "住宅塗装・外装工事に最適な、組立精度の高い足場。",
    body: "ビケ足場は部材の規格が統一され、組立・解体が速く安全性も高い住宅工事向けの足場です。塗装・防水・板金など後工程の職人が働きやすい足場を提供することも、私たちの大切な仕事だと考えています。",
    features: ["住宅塗装・防水", "後工程への配慮", "整然とした美観", "安全手すり標準"],
    image: "/images/final-cta.png",
    imageAlt: "住宅外装に組まれたビケ足場",
  },
  {
    slug: "tobi",
    title: "鳶・とび工事",
    titleEn: "Tobi Works",
    lead: "高所を制する、建設現場の最前線。",
    body: "「鳶が現場の華」と言われるように、足場の組立解体から重量物の揚重、躯体まわりの段取りまで、高所作業の要を担うのが鳶の仕事です。一級とび技能士を擁する井上組が、現場全体の安全と進行を足元から支えます。",
    features: ["足場の組立・解体", "高所作業全般", "揚重・段取り", "安全管理"],
    image: "/images/look-site.png",
    imageAlt: "高所の足場で作業する鳶職人",
  },
  {
    slug: "plan",
    title: "足場設計・施工計画",
    titleEn: "Planning",
    lead: "図面と現場を読み、最適な一手を設計する。",
    body: "ただ組むだけが足場ではありません。工程・安全・コスト・近隣環境のすべてを踏まえ、現場ごとに最適な架設計画を立てます。元請会社・協力会社の皆さまが安心して任せられる、段取りの良さが井上組の強みです。",
    features: ["架設計画の立案", "工程・安全管理", "近隣・行政対応", "コスト最適化"],
    image: "/images/dark-structure.png",
    imageAlt: "足場の施工計画図と現場",
  },
  {
    slug: "support",
    title: "解体・撤去・メンテナンス",
    titleEn: "Dismantling",
    lead: "最後まで、現場品質。撤去まで美しく。",
    body: "工事は足場を撤去して初めて完了します。安全な解体・撤去はもちろん、資材の管理、清掃、近隣への最終配慮まで丁寧に行います。「最後まで気持ちよく仕事ができた」と言っていただけることが、次の信頼につながると考えています。",
    features: ["安全な解体・撤去", "資材管理", "現場清掃", "リピート対応"],
    image: "/images/final-cta.png",
    imageAlt: "足場の解体・撤去作業",
  },
];
