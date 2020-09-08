# build and tag image
docker build -t jigglybytez/kubert:latest -t jigglybytez/kubert:$SHA -f ./server/Dockerfile ./server

# push tagged images to docker hub
docker push jigglybytez/kubert:latest
docker push jigglybytez/kubert:$SHA

# apply all configs in the k8s dir
kubectl apply -f k8s

# imperatively set latest image on each deployment
kubectl set image deployments/server-deployment server=jigglybytez/kubert:$SHA