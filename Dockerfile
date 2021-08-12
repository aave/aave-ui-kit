FROM node:13

WORKDIR /app

ADD package.json package-lock.json /app/
RUN npm ci
