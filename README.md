# Ensuria API — Local Development Guide

This repository is a NestJS + TypeORM service packaged for local development with Docker and PostgreSQL.

The steps below cover:
1. Creating your `.env` from `.env.example`
2. Building Docker containers
3. Starting the docker-compose infrastructure
4. Setting up debugging (Node.js inspector)
5. Checking code format and linting before committing

## 1) Create `.env` from `.env.example`

```bash
cp .env.example .env
```

Adjust values if needed:
- `PORT` — API port exposed on your host (default: `3000`).
- `DB_EXTERNAL_PORT` — Postgres port exposed on your host. Ensure it’s free. Example: `5432` or `5439`.

## 2) Build Docker containers

```bash
docker compose build
```

This uses `docker/api/Dockerfile` and prepares the `api` image.

## 3) Start the infrastructure

```bash
docker compose up -d
```

What you get:
- `db` — PostgreSQL
- `api` — NestJS api service

## 4) Debugging the API (Node.js inspector)

The API starts with `npm run start:debug`, exposing the Node inspector on `0.0.0.0:9229` and forwarding it to your host via docker-compose.

- Inspector port: `9229` (mapped by `docker-compose.yml`).
- Application port: `${PORT}` from `.env` (default: `3000`).

## 5) Check formatting and linting before committing

From project root (either on your host Node or inside the `api` container):

- Auto-fix and write changes:
```bash
npm run format
npm run lint
```

## Extra commands

- Run tests:
```bash
npm run test
npm run test:e2e
npm run test:cov
```

- Start locally without Docker (optional, requires Node 22+ and Postgres available):
```bash
npm install
npm run start:debug
```
Ensure your `.env` points to a reachable database.

## 6) TypeORM migrations

TypeORM CLI is wired via `package.json` and uses the compiled config at `dist/config/typeorm.js`. That means you should build before running or generating migrations.

Commands:
- Run pending migrations:
```bash
npm run migration:run
```
- Revert last migration:
```bash
npm run migration:revert
```
- Generate a new migration (files go to `src/database/migrations`):
```bash
npm run migration:generate --name=AddSomething
```

