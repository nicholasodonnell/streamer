FROM node:14-alpine AS base

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

FROM base as build

COPY .babelrc .babelrc
COPY .eslintrc .eslintrc
COPY public/favicon.ico public/favicon.ico
COPY webpack.config.js webpack.config.js
COPY src src

RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/public /usr/share/nginx/html
