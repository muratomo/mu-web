FROM centos:7

# setting nginx
COPY ./files/nginx.repo /etc/yum.repos.d/
RUN yum install -y nginx
COPY ./files/server_tokens.conf /etc/nginx/conf.d/

EXPOSE 80

CMD /usr/sbin/nginx -g "daemon off;"
