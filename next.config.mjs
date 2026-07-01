/** @type {import('next').NextConfig} */
const nextConfig = {
  // 以前のアプリ側起動で作られた ".next" がロックされて書き換えできないため、
  // 新しいビルド用フォルダ ".next-dev" を使うように変更しています。
  distDir: ".next-dev",
};

export default nextConfig;
