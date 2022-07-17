# Start the application

1. create .env at root

```
NODE_ENV=production
POSTGRES_HOST=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=testing
POSTGRES_PORT=5432
PORT=3030
```

2. Run application by creating docker container for app,server and database
   docker-compose up -d

3. Done
   Browse http://localhost:3000

# DrawSQL

https://drawsql.app/personaldevelopment/diagrams/betalab-testing

# Docker Command

docker rm -f $(docker ps -a -q)
docker images
docker ps -a
docker logs -f <CONTAINER_ID>
docker-compose up -d
