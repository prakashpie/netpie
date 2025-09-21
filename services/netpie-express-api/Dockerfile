# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# The app binds to port 4000, so we'll expose it
EXPOSE 4000

# Define the command to run your app
CMD [ "npm", "run", "dev" ]