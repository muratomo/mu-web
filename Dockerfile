FROM node:14.17.6-buster

# install nginx
RUN curl -fsSL https://nginx.org/keys/nginx_signing.key | apt-key add -
RUN echo 'deb http://nginx.org/packages/debian/ stretch nginx\n\
deb-src http://nginx.org/packages/debian/ stretch nginx' > /etc/apt/sources.list.d/nginx.list
RUN apt update && apt remove -y nginx && apt install -y nginx openssl certbot && apt clean

COPY ./file/mu-web.conf /etc/nginx/conf.d/

# start next
# ENV NODE_ENV=production
WORKDIR /var/www
COPY ./app app/
RUN cd app && npm install && npm run export

EXPOSE 80

COPY run.sh /etc/nginx/run.sh
RUN chmod +x /etc/nginx/run.sh
CMD /etc/nginx/run.sh
