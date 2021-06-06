# FROM node:alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# CMD node app.js
# EXPOSE 500


FROM node:13-slim AS base

WORKDIR /app

ADD package.json .
RUN npm install

COPY index.js .

EXPOSE 5000

CMD npm start
