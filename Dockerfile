# Stage 1: install dependencies
FROM node:20-bookworm-slim AS deps
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
RUN npm install

# Stage 2: build
FROM node:20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: run
FROM node:20-alpine
WORKDIR /app
# Copia todo el contenido del build, sin asumir una estructura específica
COPY --from=builder /app/. ./

# Exponer el puerto en el que escucha la aplicación
EXPOSE 3000

# Crear usuario no-root para ejecutar la aplicación
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 -G nodejs
USER nextjs

# Healthcheck para verificar que la aplicación está funcionando
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["npm", "run", "start"]