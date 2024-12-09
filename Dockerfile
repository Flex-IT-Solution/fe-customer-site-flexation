FROM node:lts-alpine3.18 as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /home/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --ignore-scripts

FROM node:lts-alpine3.18
WORKDIR /home/app
COPY --from=dependencies /home/app/node_modules ./node_modules
COPY . .

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
