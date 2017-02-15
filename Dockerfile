
FROM risingstack/alpine:3.3-v4.2.6-1.1.3

ENV NODE_ENV=production

RUN apk update \
&& apk upgrade \
&& apk add -q vim \
&& apk add -q nano;

RUN mkdir -p /usr/local/ops

WORKDIR /usr/local/ops
COPY package.json package.json
RUN npm install

COPY ./src/server ./src/server
COPY ./public ./public
COPY ./scripts/start.sh ./scripts/start.sh
COPY ./package.json ./package.json

EXPOSE 3000
ENTRYPOINT ["/usr/bin/npm", "start"]
