FROM node:10
WORKDIR /
COPY package.json ./
RUN npm i -g yarn 
RUN yarn install 
COPY . ./ 
CMD ["yarn", "start"]