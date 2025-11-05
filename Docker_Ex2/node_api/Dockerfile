
# imagem base leve
FROM node:alpine

# pasta de trabalho dentro do container
WORKDIR /app

# copiar arquivos da aplicação
COPY package*.json ./
COPY app.js ./

# instalar dependências (não temos, mas é o fluxo correto)
RUN npm install

# comando para rodar o app
CMD ["npm", "start"]
