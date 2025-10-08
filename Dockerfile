# --- Build stage ---
    FROM node:18-alpine AS builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build
    
    # --- Production stage ---
    FROM nginx:alpine
    RUN apk add --no-cache nodejs
    COPY --from=builder /app /app
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    WORKDIR /app
    EXPOSE 80
    CMD sh -c "node server.js & nginx -g 'daemon off;'"
    