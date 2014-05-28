# DOCKER-VERSION 0.11.1

FROM ubuntu:14.04

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:chris-lea/node.js 
RUN apt-get update
RUN apt-get install -y nodejs
RUN node -v

ADD src/ /

RUN npm install

CMD ["node", "index.js"]
EXPOSE 7000
