FROM node:18-buster

WORKDIR /app

RUN npm install -g npm

EXPOSE ${APPLICATION_PORT}

USER 1000:1000

CMD npm run start:dev
