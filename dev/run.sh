#!/bin/bash
docker stop openfight
docker rm openfight
docker run --name openfight \
          -v $(pwd):/var/www/html \
          -v $(pwd)/dev/nginx.conf:/etc/nginx/nginx.conf:ro \
           -p 80:80 -d ashtreecc/ubuntu-nginx
docker ps
