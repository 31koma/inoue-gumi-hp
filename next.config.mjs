/** @type {import('next').NextConfig} */
const nextConfig = {
  // ローカルで「テスト起動」中は .next がロックされるため、
  // 開発時(next dev)だけ別フォルダ ".next-dev" を使います。
  // 本番ビルド(next build / Vercel)は既定の ".next" を使うようにし、
  // Vercelが routes-manifest.json を見つけられるようにします。
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
