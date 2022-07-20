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

# Server API

| METHOD | ROUTE                 | Auth Strategy |
| ------ | --------------------- | ------------- |
| POST   | /token/validate       | No            |
| POST   | /login                | Local         |
| GET    | /user/:user_id        | JWT           |
| GET    | /user/:user_id/friend | JWT           |
| POST   | /user                 | JWT           |
| POST   | /user/:user_id/friend | JWT           |
