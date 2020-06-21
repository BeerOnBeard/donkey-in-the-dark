FROM node:13-alpine AS builder
WORKDIR /working
COPY . .
RUN npm ci
RUN npm run prod:build

FROM nginx:alpine
COPY --from=builder /working/dist /usr/share/nginx/html/
