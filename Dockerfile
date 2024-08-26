FROM node:20-slim
WORKDIR /app
COPY package.json .
RUN npm install
RUN apt-get update -y && apt-get install -y openssl build-essential libpq-dev
COPY . .
RUN npx prisma generate
EXPOSE 8083
CMD [ "npx", "prisma", "db", "push", "&&", "npx prisma migrate dev"]
ENTRYPOINT ["node", "index.js"]