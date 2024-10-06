FROM node

WORKDIR /app

COPY ./package-lock.json ./package-lock.json

COPY ./package.json ./package.json

RUN npm install

COPY ./prisma ./prisma

RUN npm run generate

COPY ./src ./src

COPY ./tsconfig.json ./tsconfig.json

RUN npm run build

CMD ["npm", "run", "start:prod"]