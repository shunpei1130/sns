# SNS Demo

This repository contains a minimal skeleton for a location-based DM service.

## API

- Node.js 20 + Fastify
- Prisma + PostgreSQL

### Run tests

```bash
cd api
npm test
```

### Development

```bash
cd api
npm install
npm run dev
```

## Docker

A simple docker-compose configuration is provided under `docker/`.

```bash
cd docker
docker compose up --build
```
