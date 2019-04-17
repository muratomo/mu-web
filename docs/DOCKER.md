# Dcokerイメージのビルド
docker build -t nginx ./ --no-cache

# Dockerイメージからコンテナ起動
docker run -p 8080:80 -d nginx --name nginx_container

# Docker プロセス(-aでall)
docker ps -a

# Docker コンテナ削除
docker rm コンテナ名/ID

# Dcoker イメージ一覧
docker images

# Dcoker イメージ削除
docker rmi ID
