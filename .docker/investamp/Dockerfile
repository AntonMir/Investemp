FROM node:18-alpine AS builder

WORKDIR /app

RUN npm i -g npm

COPY package*.json ./
RUN npm ci --foreground-scripts=true --ignore-scripts=false --force && npm cache clean --force

COPY tsconfig*.json ./
COPY .eslintrc.js ./
COPY .prettierrc ./
COPY nest-cli.json ./
COPY .sequelizerc ./
COPY db ./db
COPY src ./src

RUN npm run lint
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.sequelizerc ./
COPY --from=builder /app/db ./db
COPY --from=builder /app/dist ./dist

CMD npm run migrate && npm run start:prod
