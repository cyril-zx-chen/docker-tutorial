FROM node:latest
ADD . /app
WORKDIR /app

#command to install dependencies
RUN npm install 

CMD ["node", "hello-world.js"]

# docker build -t test:v1 .    // build image
# docker run --rm -p 9091:8080 --name hello-test-no-mount test:v1 // run container
# docker run --rm -p 9090:8080 --name hello-test -v "$(pwd)":/app  -d test:v1 // bind mount

# docker network create test-net
# docker run --rm -d --name test-redis --network test-net --network-alias redis-alias redis:latest
# docker run --rm -p 9090:8080 --name hello-test -v "$(pwd)":/app -d --network test-net test:v1