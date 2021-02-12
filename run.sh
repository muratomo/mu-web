#!/bin/bash

DOMAIN="mu-elma.net"
CERT_DIR="/etc/letsencrypt/live"

if [ ! -d "${CERT_DIR}/${DOMAIN}" ]; then
  mkdir -p "${CERT_DIR}/${DOMAIN}"
  openssl req -new -newkey rsa:2048 -sha256 -x509 -nodes \
    -set_serial 1 \
    -subj "/C=JP/ST=Tokyo/L=null/O=null/OU=null/CN=${DOMAIN}" \
    -out "${CERT_DIR}/${DOMAIN}/fullchain.pem" \
    -keyout "${CERT_DIR}/${DOMAIN}/privkey.pem"
  chmod 400 "${CERT_DIR}/${DOMAIN}/privkey.pem"
fi
nginx

if [ ${RUN_ENV} = "production" ]; then
  rm -rf "${CERT_DIR}/${DOMAIN}"
  certbot certonly -n --keep-until-expiring --agree-tos \
    --webroot --webroot-path /var/www/app \
    -m ${MAIL_ADDRESS} -d ${DOMAIN}
  nginx -s reload
fi

while true
do
    sleep 10
done
