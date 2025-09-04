# Use official Node.js image
FROM node:22

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port 3001
EXPOSE 3001

# Start service
CMD ["node", "server.js"]
