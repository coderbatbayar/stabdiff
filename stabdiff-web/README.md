## Run

Run the development server:

```bash
npm run dev
```
## Install MongoDB

Install MongoDB via Docker:

```bash
docker pull mongodb/mongodb-community-server

docker network create mongoCluster

docker run -d --rm -p 27017:27017 --name mongo1 --network mongoCluster mongodb/mongodb-community-server:latest  mongod --replSet myReplicaSet --bind_ip localhost,mongo1

docker run -d --rm -p 27018:27017 --name mongo2 --network mongoCluster mongodb/mongodb-community-server:latest  mongod --replSet myReplicaSet --bind_ip localhost,mongo2

docker run -d --rm -p 27019:27017 --name mongo3 --network mongoCluster mongodb/mongodb-community-server:latest  mongod --replSet myReplicaSet --bind_ip localhost,mongo3

docker exec -it mongo1 mongosh --eval "rs.initiate({
 _id: \"myReplicaSet\",
 members: [
   {_id: 0, host: \"mongo1\"},
   {_id: 1, host: \"mongo2\"},
   {_id: 2, host: \"mongo3\"}
 ]
})"

docker exec -it mongo1 mongosh --port 27017
```
## Prisma ORM

Create database or model changes:
```bash
npx prisma db push
```

Model changes for prisma client:
```bash
npx prisma generate
```