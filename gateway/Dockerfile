FROM nginx:alpine AS base

COPY nginx.conf /etc/nginx/nginx.conf
COPY restreamer.conf /etc/nginx/conf.d/restreamer.conf

FROM base AS development

COPY client.development.conf /etc/nginx/conf.d/client.conf

FROM development AS production

COPY client.conf /etc/nginx/conf.d/client.conf
