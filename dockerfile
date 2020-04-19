FROM node:13-alpine AS builder
WORKDIR /working
COPY . .
RUN npm ci
RUN npm run minify

FROM nginx:alpine
COPY --from=builder /working/index.min.html /usr/share/nginx/html/index.html
