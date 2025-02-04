# Todo List App Backend

A simple backend for a **Todo List App**, built with **Express, TypeScript, Prisma, and PostgreSQL**. Provides authentication, task management, and CRUD operations.

## Authentication

Uses **Auth0** or any preferred out-of-the-box authentication platform for user access. Supports user signup, login, and secure access with JWT.

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

## API Endpoints

- `POST /auth/signup` - Register
- `POST /auth/login` - Login
- `POST /tasks` - Create task
- `GET /tasks` - Get tasks
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task (TODO only)
- `PATCH /tasks/:id/status` - Change task status

## License

MIT License
