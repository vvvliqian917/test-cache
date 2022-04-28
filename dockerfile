FROM node:12.22.11-alpine3.15
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn || yarn || yarn && yarn cache clean
COPY server.js .
COPY ./static/index.html .
EXPOSE 6152
CMD [ "node", "server.js" ]

