FROM node

MAINTAINER Glenn Dayton

WORKDIR /src

COPY . /src
# VOLUME

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "start"]