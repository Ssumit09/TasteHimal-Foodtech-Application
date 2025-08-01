# Using Node.js 16 as the base image
FROM node:16

# Setting up the working directory
WORKDIR /app

# Copying the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Installation of npm dependency
RUN npm install

# Copy the application code
COPY . .

# Building the React app
RUN npm run build

# Expose port 3000 to access app from browser
EXPOSE 3000

# Start your Node.js server
CMD ["npm", "start"]
