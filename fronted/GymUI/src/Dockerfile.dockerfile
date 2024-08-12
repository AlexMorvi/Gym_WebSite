# Usa una imagen base de Node.js para construir la aplicación
FROM node:18 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la etapa de construcción al directorio de Nginx
COPY --from=build /app/dist/tu-nombre-de-aplicacion /usr/share/nginx/html

# Exponer el puerto en el que Nginx está sirviendo la aplicación
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]