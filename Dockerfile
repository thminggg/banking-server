FROM node:18-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 9000

CMD [ "yarn", "dev" ]
