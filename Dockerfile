FROM node:16.14-alpine

RUN mkdir -p /node/app

WORKDIR /node/app

COPY . /node/app

RUN npm install pm2 -g

RUN npm install

RUN npx sequelize-cli db:migrate

EXPOSE 3000

CMD ["pm2-runtime", "--env", "production", "ecosystem.config.js"]
