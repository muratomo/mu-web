#/bin/bash

set -o pipefail

DEBIAN_NAME=stretch

# setting nginx
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
cat <<EOF > /etc/apt/sources.list.d/nginx.list
deb http://nginx.org/packages/debian/ ${DEBIAN_NAME} nginx
deb-src http://nginx.org/packages/debian/ ${DEBIAN_NAME} nginx
EOF

apt update
apt remove -y nginx && apt install -y nginx

cp ./files/mu-web.conf /etc/nginx/conf.d/mu-web.conf

/usr/sbin/nginx -t
