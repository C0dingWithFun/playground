FROM node
WORKDIR /pg-subscribers-count
COPY package.json /pg-subscribers-count
RUN npm install
COPY . /pg-subscribers-count
CMD ["npm", "start"]