#!/bin/bash
# Compile ts to js
yarn run compile

# Copy necessary dependencie
cp -r node_modules ./dist/node_modules
cp .env ./dist/.env

# Zip for upload
cd ./dist
zip -r ../dist.zip . *
