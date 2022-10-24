# Base stage
FROM node:18

RUN npm install vite@3.0.0 -g

WORKDIR /app
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ADD . .
RUN yarn install --frozen-lockfile
ENV PORT=3000
ENTRYPOINT ["/entrypoint.sh"]

RUN yarn build

CMD ["yarn", "dev"]
