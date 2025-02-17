FROM node:20 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps && npm cache clean --force

COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-stage /app/dist/Frontend-master /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
