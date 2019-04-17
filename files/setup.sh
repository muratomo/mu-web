#/bin/bash

set -o pipefail

# setting nginx
cat <<EOF > /etc/yum.repos.d/nginx.repo
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
EOF

yum install -y nginx

cp ./files/mu-web.conf /etc/nginx/conf.d/mu-web.conf

/usr/sbin/nginx -t -c /etc/nginx/conf.d/mu-web.conf
