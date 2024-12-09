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
ENV NEXT_TELEMETRY_DISABLED 1

# #Injecting ENV
# ARG BASE_URL
# ARG BASE_API_URL
# ARG BASE_API_VERSION
# ARG EXPIRES_TOKEN
# ARG X_TOKEN
# ARG GAID
# ARG IMAGE_QUALITY
# ARG IMAGE_UNOPTIMIZED
# ARG SOSMED_WHATSAPP
# ARG SOSMED_WHATSAPP_2
# ARG SOSMED_TIKTOK
# ARG SOSMED_INSTAGRAM
# ARG SOSMED_INSTAGRAM_2

# RUN echo "BASE_URL=${BASE_URL}" >> .env.local
# RUN echo "BASE_API_URL=${BASE_API_URL}" >> .env.local
# RUN echo "BASE_API_VERSION=${BASE_API_VERSION}" >> .env.local
# RUN echo "EXPIRES_TOKEN=${EXPIRES_TOKEN}" >> .env.local
# RUN echo "X_TOKEN=${X_TOKEN}" >> .env.local
# RUN echo "GAID=${GAID}" >> .env.local
# RUN echo "IMAGE_QUALITY=${IMAGE_QUALITY}" >> .env.local
# RUN echo "IMAGE_UNOPTIMIZED=${IMAGE_UNOPTIMIZED}" >> .env.local
# RUN echo "SOSMED_WHATSAPP=${SOSMED_WHATSAPP}" >> .env.local
# RUN echo "SOSMED_WHATSAPP_2=${SOSMED_WHATSAPP_2}" >> .env.local
# RUN echo "SOSMED_TIKTOK=${SOSMED_TIKTOK}" >> .env.local
# RUN echo "SOSMED_INSTAGRAM=${SOSMED_INSTAGRAM}" >> .env.local
# RUN echo "SOSMED_INSTAGRAM_2=${SOSMED_INSTAGRAM_2}" >> .env.local

RUN npm run build
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]
