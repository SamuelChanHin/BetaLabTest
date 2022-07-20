# Prerequisite

1. **docker**
2. **docker-compose**

# Run the application in three steps

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

```bash
docker-compose up -d
```

3. Done
   Browse http://localhost:3000

# DrawSQL

https://drawsql.app/personaldevelopment/diagrams/betalab-testing

# Docker Common Command

```bash
docker rm -f $(docker ps -a -q)
docker images
docker ps -a
docker logs -f <CONTAINER_ID>
docker-compose up -d
```
