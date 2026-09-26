# Courses API (NestJS)

REST API for managing courses, built while learning NestJS.

## Endpoints

| Method | Route | What it does |
| --- | --- | --- |
| `GET` | `/courses` | List courses |
| `GET` | `/courses/:id` | Get one course |
| `POST` | `/courses` | Create a course |
| `PUT` | `/courses/:id` | Update a course |
| `DELETE` | `/courses/:id` | Delete a course |

A course has a `name`, a `description` and a list of `tags`.

## What I practiced

- Modules, controllers and services
- DTOs validated with `class-validator`
- **TypeORM** entities on **PostgreSQL**
- A custom interceptor that validates route IDs
- Unit and e2e tests with Jest
- Postgres in Docker Compose

## Running

```bash
docker compose up -d   # Postgres on port 5432
pnpm install
pnpm start:dev
```

Tests: `pnpm test` and `pnpm test:e2e`.
