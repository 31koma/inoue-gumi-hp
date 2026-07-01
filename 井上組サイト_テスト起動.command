#!/bin/zsh

set -u

# === プロジェクトの場所を自動判別 ===
# 1) このファイルと同じフォルダに package.json があれば、そこをプロジェクトとみなす
# 2) なければ、既知の場所（/Users/ks/Documents/井上組）を使う
SCRIPT_DIR="${0:A:h}"
if [ -f "${SCRIPT_DIR}/package.json" ]; then
  PROJECT_DIR="${SCRIPT_DIR}"
else
  PROJECT_DIR="/Users/ks/Documents/井上組"
fi

PORT="3001"
URL="http://localhost:${PORT}"
# 以前のロックされたファイル名を避け、新しい名前で記録します。
LOG_FILE="${PROJECT_DIR}/dev-server.log"
PID_FILE="${PROJECT_DIR}/dev-server.pid"

echo "井上組 公式サイト テスト起動"
echo "--------------------------------"
echo "プロジェクト: ${PROJECT_DIR}"
echo "URL: ${URL}"
echo ""

cd "${PROJECT_DIR}" || {
  echo "プロジェクトフォルダが見つかりません: ${PROJECT_DIR}"
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

# すでに起動中ならブラウザを開くだけ
if curl -fsS "${URL}" >/dev/null 2>&1; then
  echo "既に ${URL} で起動しています。ブラウザを開きます。"
  open "${URL}"
  if [ -t 0 ]; then
    read -r "?Enterキーで閉じます..."
  fi
  exit 0
fi

echo "Next.js 開発サーバーを起動します。"
echo "ブラウザはサーバー準備後に自動で開きます。"
echo ""

# ポートを使っている古いプロセスがあれば停止
PORT_PIDS="$(lsof -ti tcp:${PORT} 2>/dev/null || true)"
if [ -n "${PORT_PIDS}" ]; then
  echo "${PORT}番ポートの古いプロセスを停止します。"
  for PORT_PID in ${(f)PORT_PIDS}; do
    kill "${PORT_PID}" >/dev/null 2>&1
  done
  sleep 1
fi

# 新しいビルド用フォルダを掃除（ロックされた古い .next は触りません）
rm -rf "${PROJECT_DIR}/.next-dev" 2>/dev/null

npm run dev -- --hostname 127.0.0.1 --port "${PORT}" > "${LOG_FILE}" 2>&1 &
SERVER_PID="$!"
echo "${SERVER_PID}" > "${PID_FILE}" 2>/dev/null

echo "起動待機中...（初回は十数秒かかることがあります）"
for i in {1..60}; do
  if curl -fsS "${URL}" >/dev/null 2>&1; then
    echo "起動しました: ${URL}"
    open "${URL}"
    echo ""
    echo "テスト中はこのウィンドウを開いたままにしてください。"
    echo "停止するときは「井上組サイト_停止.command」を使ってください。"
    echo ""
    wait "${SERVER_PID}"
    rm -f "${PID_FILE}" 2>/dev/null
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
tail -80 "${LOG_FILE}" 2>/dev/null
echo "--------------------------------"
if [ -t 0 ]; then
  read -r "?Enterキーで閉じます..."
fi
exit 1
