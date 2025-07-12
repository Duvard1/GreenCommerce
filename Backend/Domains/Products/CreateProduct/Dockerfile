# stage 1: Build
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2: production image
FROM node:18
WORKDIR /app
COPY --from=builder /app /app
RUN npm install --omit=dev

# Variables
ENV NODE_ENV=production

CMD ["node", "dist/app.js"]
