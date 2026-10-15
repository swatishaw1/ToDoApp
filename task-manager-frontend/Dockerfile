
# Stage 1: Build the Vite + React application
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first for better Docker caching
COPY package*.json ./
RUN npm ci

# Copy source code and create production build
COPY . .
RUN npm run build

# Stage 2: Serve the production build using Nginx
FROM nginx:alpine AS production

# Copy Vite's generated static files into Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx listens on port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
