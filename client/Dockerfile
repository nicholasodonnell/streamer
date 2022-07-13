FROM node:14-alpine AS base

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

FROM base AS development

COPY .eslintrc .eslintrc
COPY public/favicon.ico public/favicon.ico
COPY webpack.config.js webpack.config.js
COPY src src

RUN yarn build

FROM nginx:alpine AS production

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=development /app/public /usr/share/nginx/html
