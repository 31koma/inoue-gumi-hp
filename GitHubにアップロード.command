#!/bin/zsh

set -u

# === プロジェクトの場所を自動判別 ===
SCRIPT_DIR="${0:A:h}"
if [ -f "${SCRIPT_DIR}/package.json" ]; then
  PROJECT_DIR="${SCRIPT_DIR}"
else
  PROJECT_DIR="/Users/ks/Documents/井上組"
fi

echo "GitHub にアップロード"
echo "--------------------------------"
echo "プロジェクト: ${PROJECT_DIR}"
echo ""

cd "${PROJECT_DIR}" || {
  echo "プロジェクトフォルダが見つかりません: ${PROJECT_DIR}"
  read -r "?Enterキーで閉じます..."
  exit 1
}

# git リポジトリか確認
if [ ! -d ".git" ]; then
  echo "このフォルダは Git リポジトリではありません。"
  read -r "?Enterキーで閉じます..."
  exit 1
fi

# 古いロックファイルが残っていれば削除
rm -f .git/index.lock 2>/dev/null

# 保存先（リモート）はSSH形式（SSHキー設定済み）
git remote set-url origin "git@github.com:31koma/inoue-gumi-hp.git" 2>/dev/null \
  || git remote add origin "git@github.com:31koma/inoue-gumi-hp.git" 2>/dev/null

# Git のユーザー情報が未設定なら設定（コミットに必要）
if [ -z "$(git config user.email 2>/dev/null)" ]; then
  git config user.email "komatobi3@gmail.com"
  git config user.name "31koma"
  echo "Git のユーザー情報を設定しました。"
fi

# ビルド生成物・ログなどを追跡対象から外す（初回のみ効果あり／既に外れていれば無視）
git rm -r --cached --quiet .next 2>/dev/null
git rm -r --cached --quiet .next-dev 2>/dev/null
git rm --cached --quiet dev-server.log dev-server.pid 2>/dev/null
git rm --cached --quiet inoue-gumi-site.log inoue-gumi-site.pid 2>/dev/null

echo "変更をまとめています..."
git add -A

# コミット（変更が無い場合はスキップ）
if git diff --cached --quiet; then
  echo "新しい変更はありませんでした。"
else
  COMMIT_MSG="ホームページ全面リニューアル（デザイン・SEO・全ページ刷新）"
  git commit -m "${COMMIT_MSG}"
  echo "コミットしました: ${COMMIT_MSG}"
fi

echo ""
echo "GitHub へアップロード（push）します..."
echo "--------------------------------"
CURRENT_BRANCH="$(git branch --show-current)"
if git push origin "${CURRENT_BRANCH}"; then
  echo "--------------------------------"
  echo "✅ アップロード完了しました。"
  echo "https://github.com/31koma/inoue-gumi-hp で確認できます。"
else
  echo "--------------------------------"
  echo "⚠️ アップロードに失敗しました。"
  echo "上のエラー文をそのままコピーして教えてください。"
  echo "（GitHub への接続キー（SSH）の設定が必要な場合があります）"
fi

echo ""
read -r "?Enterキーで閉じます..."
