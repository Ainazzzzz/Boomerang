FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Copy .env file
COPY .env ./

CMD ["npm", "run", "start:dev"]

