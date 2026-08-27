FROM node:20-alpine
WORKDIR /app

COPY package.json ./
COPY node_modules ./node_modules
COPY dist ./dist

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/server.cjs"]
