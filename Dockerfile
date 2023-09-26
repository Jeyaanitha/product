FROM node:slim
WORKDIR /test 
COPY . /test
RUN npm install 
EXPOSE 3003
CMD ["node", "server.js"]
