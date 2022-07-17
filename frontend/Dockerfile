FROM node:14-alpine as build

ARG REACT_APP_BASE_API_URL

ENV REACT_APP_BASE_API_URL ${REACT_APP_BASE_API_URL}
ENV NODE_ENV "production"

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build

# production environment
FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]