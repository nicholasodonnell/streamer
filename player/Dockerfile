FROM nginx:alpine

ARG PLAYER_SOURCE_URL

COPY favicon.ico /usr/share/nginx/html/favicon.ico
COPY index.html /usr/share/nginx/html/index.html

RUN echo "window.PLAYER_SOURCE_URL='$PLAYER_SOURCE_URL'" > /usr/share/nginx/html/vars.js
