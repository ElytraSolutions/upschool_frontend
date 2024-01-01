# Use an official Node runtime as a parent image
FROM node:18-alpine as builder

# Set the working directory to /app
WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

# Install all dependencies
RUN npm install --force

# Copy required files
COPY public/ /app/public
COPY src/ /app/src
COPY .env.production /app/
COPY .eslintrc.cjs /app/
COPY index.html /app/
COPY postcss.config.js /app/
COPY tailwind.config.js /app/
COPY tsconfig.json /app/
COPY tsconfig.node.json /app/
COPY vite.config.ts /app/

# Build the React app
RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:latest

# Copy the build output from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
