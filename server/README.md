# Quick Reference Handbooks

- [Quick Reference Handbooks](#quick-reference-handbooks)
  - [QRH: General](#qrh-general)
  - [QRH: KubeCTL](#qrh-kubectl)
  - [QRH: Docker](#qrh-docker)

## QRH: General

General commands and procedures for working with the `backend API Server`.

```
npm run start
# in browser, visit http://localhost:3000
# to STOP, Ctrl+C in Terminal
```

---

## QRH: KubeCTL

Commands specific to `kubectl` and interacting with Kubernetes.

```
# Deploy/RUN application to K8s
kubectl run myapp --image <myRepo>:<myTag> --replicas 3
# in browser, visit http://localhost:3000

# GET/DESCRIBE
# GET to list all DEPLOYMENTS, REPLICASETS, PODS
kubectl get <arg>
kubectl describe <arg>

# Flag Options
# -o yaml/json
# output in yaml/json format

# Labels
# --show-labels CLI arg
kubectl get pods --show-labels
# assigning a label
kubectl label deployment myApp labelx=backend

# DELETE
kubectl delete pods -l labelx=backend
```

---

## QRH: Docker

Commands specific to Docker, essential to minimal interactions within this project workspace.

```
# To build and tag the server:
docker build -t <myRepo>:<myTag> .

# Push image to Docker Hub:
docker push <myRepo>:<myTag>

# Pull an image:
docker pull <myRepo>:<myTag>
```
