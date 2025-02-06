# Todo List App Backend

A simple backend for a **Todo List App**, built with **Express, TypeScript, Prisma, and PostgreSQL**

## Setup

1. Clone the repo and install dependencies:
   ```sh
   git clone https://github.com/your-repo/todo-list-backend.git
   cd backend
   yarn install
   ```
2. Configure environment variables:
   ```sh
   cp .env.example .env
   ```
3. Run database migrations:
   ```sh
   npx prisma migrate dev
   ```
4. Start the Express server:
   ```sh
   yarn dev
   ```

## Run with Docker

```sh
docker-compose up --build
```
