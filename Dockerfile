# 1. Escolhe a imagem base do Node.js
FROM node:20-alpine

# 2. Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# 3. Copia os arquivos de dependência
COPY package*.json ./

# 4. Instala dependências
RUN npm install

# 5. Copia todo o código para o container
COPY . .

# 6. Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# 7. Comando para iniciar o servidor
CMD ["node", "server.js"]