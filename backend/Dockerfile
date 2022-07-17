FROM node:14-alpine as build

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build
# RUN yarn knex migrate:latest

# production environment
FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3030

CMD node dist/main.js

