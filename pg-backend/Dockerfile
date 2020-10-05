FROM node
WORKDIR /pg-backend
COPY package.json /pg-backend
RUN npm install
COPY . /pg-backend
CMD ["npm", "start"]