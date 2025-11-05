
#==BUILD DESENEVOLVIMENTO==
# Base
FROM node:18-alpine AS base

# Estágio de desenvolvimento
WORKDIR /app
COPY package*.json ./
COPY app.js ./
RUN npm install
CMD ["npm", "start"]

#==BUILD PRODUÇÃO==
FROM base AS build 
RUN npm ci --omit=dev
COPY .. /app/

#== IMAGEM PRODUCAO==
FROM node:18-alpine AS prod 
WORKDIR /app 
COPY --from=build /app ./ 
CMD ["npm","start"]
