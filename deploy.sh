#!/bin/bash
set -e

# ==========================================
# 观音灵签 · AWS 一键本地/手动部署脚本
# ==========================================
# 用法: GEMINI_API_KEY="xxx" ./deploy.sh
# ==========================================

SERVER="${SERVER:-43.198.108.91}"
USER="${USER_NAME:-ubuntu}"
PORT="${PORT:-22}"
PEM_KEY="${PEM_KEY:-$HOME/Downloads/tau.pem}"
SSH_OPTS="-o StrictHostKeyChecking=no -p ${PORT} -i ${PEM_KEY}"
REMOTE_DIR="/home/${USER}/apps/guanyin-fortune"

# 读取本地 .env 或环境变量中的 GEMINI_API_KEY
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

GEMINI_API_KEY="${GEMINI_API_KEY:-}"

# 确保在项目根目录
cd "$(dirname "$0")"

# 优先查找本地 Node 环境
export PATH="$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node 2>/dev/null | tail -1)/bin:$PATH:/usr/local/bin:/opt/homebrew/bin"

echo "======================================"
echo "  🔮 观音灵签 AWS 一键部署"
echo "======================================"

echo ""
echo "1️⃣  测试 ${PORT} 端口 SSH 连接..."
ssh ${SSH_OPTS} ${USER}@${SERVER} "echo '✅ SSH 连接成功'" || {
    echo "❌ SSH 连接失败，请检查密钥与网络连通性"
    exit 1
}

echo ""
echo "2️⃣  本地编译构建前端与服务端产物..."
npm run build

echo ""
echo "3️⃣  确保远程部署目录存在..."
ssh ${SSH_OPTS} ${USER}@${SERVER} "mkdir -p ${REMOTE_DIR}/dist"

echo ""
echo "4️⃣  同步编译产物及配置文件到服务器..."
rsync -avz --delete \
  -e "ssh ${SSH_OPTS}" \
  dist/ ${USER}@${SERVER}:${REMOTE_DIR}/dist/

rsync -avz \
  -e "ssh ${SSH_OPTS}" \
  Dockerfile \
  docker-compose.yml \
  package.json \
  .dockerignore \
  ${USER}@${SERVER}:${REMOTE_DIR}/

echo ""
echo "5️⃣  服务器构建镜像并启动容器..."
ssh ${SSH_OPTS} ${USER}@${SERVER} << REMOTE_SCRIPT
set -e
cd ${REMOTE_DIR}

# 写入环境变量 (若有提供)
if [ -n "${GEMINI_API_KEY}" ]; then
cat > .env << 'ENVEOF'
GEMINI_API_KEY=${GEMINI_API_KEY}
ENVEOF
fi

# 构建并启动服务
sudo docker compose --project-name guanyin build
sudo docker compose --project-name guanyin up -d

echo ""
echo "📋 容器状态:"
sudo docker ps --filter name=guanyin-fortune --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "🩺 服务健康检查:"
sleep 2
curl -s http://localhost:3002/api/health || echo "请求完成"
REMOTE_SCRIPT

echo ""
echo "======================================"
echo "  ✅ 部署完成！"
echo "  🌐 访问地址: http://${SERVER}:3002"
echo "======================================"
