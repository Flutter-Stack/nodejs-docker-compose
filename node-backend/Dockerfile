FROM node:lts-alpine
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/public/files
RUN apk update && apk upgrade && apk add --no-cache bash git openssh
# RUN mkdir -p /usr/src/app/public/uploads/pan-back
# RUN mkdir -p /usr/src/app/public/uploads/dl-front
# RUN mkdir -p /usr/src/app/public/uploads/dl-back
# RUN mkdir -p /usr/src/app/public/uploads/files/temp
WORKDIR /usr/src/app
# RUN npm install
RUN npm install -g nodemon

EXPOSE 3000
EXPOSE 3001
