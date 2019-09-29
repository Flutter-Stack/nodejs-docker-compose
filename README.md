# nodejs-docker-compose

================================================================================================================


1. To get plain instance (without any preinstalled packages)

$ git clone https://github.com/Flutter-Stack/nodejs-docker-compose.git


2. To get graphql nodejs server 

$ git clone -b graphql https://github.com/Flutter-Stack/nodejs-docker-compose.git


3. To get graphql nodejs server and mongodb and adminer

$ git clone -b graphql-mongodb-adminer https://github.com/Flutter-Stack/nodejs-docker-compose.git


4. To get reactjs, graphql nodejs server and mongodb

$ git clone -b react-graphql-mongodb https://github.com/Flutter-Stack/nodejs-docker-compose.git

5. To get next.js 

$ git clone -b nextjs https://github.com/Flutter-Stack/nodejs-docker-compose.git

==================================================================================================================


$ cd nodejs-docker-compose
$ docker-compose up -d 

if you want to install any packages access container by below command and you can start installing the packages.
if you want to write any code then access node-backend directory in any IDE, your changes will be reflected
in container automatically.

$  docker exec -it node-backend /bin/sh
