# Use the node 10 alpine image from dockerhub
FROM node:10-alpine

# Tag the image
LABEL application="Mini_ingredients"

# set variables to use
ENV TERM=xterm-256color NODE_ENV=$NODE_ENV

# Create the usr/app directory incase it doesn't exist
# and set it as the working directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Run these commands and copy files into the usr/app directory
RUN npm install -g yarn@1.12.x && rm -rf package-lock.json
COPY package.json yarn.lock dist/src /usr/app/

# run this command
RUN yarn install
