FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html

CMD [ "nginx","-g","daemon off;" ]