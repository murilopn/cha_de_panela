# ESTÁGIO 1: Build da Aplicação Frontend
# Usa uma imagem Node para instalar dependências e "buildar" o site.
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ESTÁGIO 2: Servidor de Produção com Nginx
# Usa uma imagem Nginx, que é um servidor web leve e eficiente.
FROM nginx:stable-alpine

# Copia os arquivos estáticos (HTML, CSS, JS) gerados pelo build 
# para a pasta padrão que o Nginx usa para servir conteúdo.
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o nosso arquivo de configuração customizado do Nginx.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80, que é a porta padrão do Nginx.
EXPOSE 80

# Comando para iniciar o Nginx e mantê-lo rodando.
CMD ["nginx", "-g", "daemon off;"]
