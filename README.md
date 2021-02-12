# mu-web

[![CircleCI](
https://img.shields.io/circleci/build/gh/muratomo/mu-web?style=flat-square)](https://circleci.com/gh/muratomo/mu-web)


web service

## Web development

```bash
$ cd app
$ npm run dev
```

## run Docker

```bash
$ rm -f ./app/node_modules
$ docker build -t mu-web .
$ docker images

# if exists docker-container
$ docker ps -a
$ docker rm <CONTAINER ID>

$ docker run -d -p 80:80 --name mu-web-container mu-web
```
