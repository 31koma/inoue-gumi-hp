#!/bin/zsh

set -u

PROJECT_DIR="/Users/ks/井上組"
PORT="3001"
URL="http://localhost:${PORT}"
LOG_FILE="${PROJECT_DIR}/inoue-gumi-site.log"
PID_FILE="${PROJECT_DIR}/inoue-gumi-site.pid"

echo "井上組 公式サイト テスト起動"
echo "--------------------------------"
echo "プロジェクト: ${PROJECT_DIR}"
echo "URL: ${URL}"
echo ""

cd "${PROJECT_DIR}" || {
  echo "プロジェクトフォルダが見つかりません。"
  read -r "?Enterキーで閉じます..."
  exit 1
}

if [ ! -d "node_modules" ]; then
  echo "初回セットアップ中です。少し時間がかかります。"
  npm install || {
    echo "npm install に失敗しました。"
    read -r "?Enterキーで閉じます..."
    exit 1
  }
fi

if curl -fsS "${URL}" >/dev/null 2>&1; then
  echo "既に ${URL} で起動しています。ブラウザを開きます。"
  open "${URL}"
  echo ""
  echo "既に別ウィンドウでサーバーが動いています。"
  if [ -t 0 ]; then
    read -r "?Enterキーで閉じます..."
  fi
  exit 0
fi

if [ -f "${PID_FILE}" ]; then
  OLD_PID="$(cat "${PID_FILE}")"
  if kill -0 "${OLD_PID}" >/dev/null 2>&1; then
    echo "古い起動プロセスを停止しています。"
    kill "${OLD_PID}" >/dev/null 2>&1
    sleep 1
  fi
  rm -f "${PID_FILE}"
fi

echo "Next.js 開発サーバーを起動します。"
echo "ブラウザはサーバー準備後に自動で開きます。"
echo ""

rm -rf "${PROJECT_DIR}/.next"

npm run dev -- --hostname 127.0.0.1 --port "${PORT}" > "${LOG_FILE}" 2>&1 &
SERVER_PID="$!"
echo "${SERVER_PID}" > "${PID_FILE}"

echo "起動待機中..."
for i in {1..40}; do
  if curl -fsS "${URL}" >/dev/null 2>&1; then
    echo "起動しました: ${URL}"
    open "${URL}"
    echo ""
    echo "テスト中はこのウィンドウを開いたままにしてください。"
    echo "停止するときは「井上組サイト_停止.command」を使ってください。"
    echo ""
    wait "${SERVER_PID}"
    rm -f "${PID_FILE}"
    echo "サーバーが停止しました。"
    if [ -t 0 ]; then
      read -r "?Enterキーで閉じます..."
    fi
    exit 0
  fi
  sleep 1
done

echo "起動確認ができませんでした。ログを表示します。"
echo "--------------------------------"
tail -80 "${LOG_FILE}"
echo "--------------------------------"
if [ -t 0 ]; then
  read -r "?Enterキーで閉じます..."
fi
exit 1
