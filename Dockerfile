FROM node:16-alpine

EXPOSE 9022

WORKDIR /src

COPY package.json package-lock*.json ./

COPY . .

RUN npm install i npm@latest -g

RUN npm install

CMD ["node", "app/index.js"]