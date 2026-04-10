FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 6. Uruchomienie skryptu
CMD ["node", "app.js"]