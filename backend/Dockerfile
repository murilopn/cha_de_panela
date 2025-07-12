# ESTÁGIO 1: Build da Aplicação
# Usamos uma imagem node completa para instalar dependências e compilar o projeto
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de gerenciamento de pacotes
COPY package*.json ./

# Instala todas as dependências (incluindo as de desenvolvimento)
RUN npm install

# Copia todo o resto do código fonte
COPY . .

# Executa o script de build que gera a pasta /dist
RUN npm run build

# ESTÁGIO 2: Imagem de Produção
# Usamos uma imagem limpa e mais leve do Node para a versão final
FROM node:20-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache postgresql-client

# Copia os arquivos de gerenciamento de pacotes novamente
COPY package*.json ./

# Instala APENAS as dependências de produção
RUN npm install --omit=dev

# Copia a pasta /dist (código compilado) do estágio 'builder'
COPY --from=builder /usr/src/app/dist ./dist

# A LINHA QUE RESOLVE O PROBLEMA DAS IMAGENS:
# Copia a pasta 'public' (com as imagens) para a imagem final.
COPY public ./public

# Expõe a porta em que a aplicação NestJS roda (padrão é 3000)
EXPOSE 3000

# Comando para iniciar a aplicação em produção
CMD ["node", "dist/main.js"]
