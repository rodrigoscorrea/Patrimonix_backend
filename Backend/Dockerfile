FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN apk add --no-cache openssl

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["npm", "run", "start:prod"]

EXPOSE 4466
