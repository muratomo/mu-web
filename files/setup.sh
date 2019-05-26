#/bin/bash

set -o pipefail

DEBIAN_NAME=stretch

# setting nginx
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
sudo cat <<EOF > /etc/apt/sources.list.d/nginx.list
deb http://nginx.org/packages/debian/ ${DEBIAN_NAME} nginx
deb-src http://nginx.org/packages/debian/ ${DEBIAN_NAME} nginx
EOF

sudo apt update
sudo apt remove -y nginx && sudo apt install -y nginx

sudo cp ./files/mu-web.conf /etc/nginx/conf.d/mu-web.conf

sudo /usr/sbin/nginx -t
