# Construction a partir d'une image existante
FROM node:18-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du projet dans le répertoire de travail
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Serveur Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape de construction
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour le trafic HTTP
EXPOSE 9065

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]