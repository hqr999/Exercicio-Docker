
# imagem base leve
FROM node:alpine

# pasta de trabalho dentro do container
WORKDIR /app

# copiar arquivos da aplicação
COPY package*.json ./
COPY app.js ./

# instalar dependências (não temos, mas é o fluxo correto)
RUN npm install

# porta exposta
EXPOSE 3000

# comando para rodar o app
CMD ["npm", "start"]
