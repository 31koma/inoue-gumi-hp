#!/bin/zsh

echo "井上組 公式サイト テスト停止"
echo "--------------------------------"

SCRIPT_DIR="${0:A:h}"
if [ -f "${SCRIPT_DIR}/package.json" ]; then
  PROJECT_DIR="${SCRIPT_DIR}"
else
  PROJECT_DIR="/Users/ks/Documents/井上組"
fi
PID_FILE="${PROJECT_DIR}/dev-server.pid"
PORT="3001"

if [ -f "${PID_FILE}" ]; then
  SERVER_PID="$(cat "${PID_FILE}")"
  if kill -0 "${SERVER_PID}" >/dev/null 2>&1; then
    kill "${SERVER_PID}" >/dev/null 2>&1
    echo "起動中のサーバーを停止しました。"
  fi
  rm -f "${PID_FILE}" 2>/dev/null
fi

# ポートを使っている残りプロセスも停止
PORT_PIDS="$(lsof -ti tcp:${PORT} 2>/dev/null || true)"
if [ -n "${PORT_PIDS}" ]; then
  for PORT_PID in ${(f)PORT_PIDS}; do
    kill "${PORT_PID}" >/dev/null 2>&1
  done
  echo "${PORT}番ポートの残りプロセスも停止しました。"
fi

echo "停止コマンドを実行しました。"
echo "ブラウザのページは手動で閉じてください。"
if [ -t 0 ]; then
  read -r "?Enterキーで閉じます..."
fi
