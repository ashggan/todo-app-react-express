# Todo List Application

## Overview
This is a full-stack **Todo List Application** with a **React frontend**, **Node.js backend**, and **PostgreSQL database**, all containerized using Docker and managed with **Docker Compose**.

---


## 🚀 Running the Application
### 1️⃣ Clone the Repository
```sh
git clone git@github.com:ashggan/todo-app-react-express.git
cd <todo-app-react-express>
```

### 2️⃣ Build and Start the Containers
Run the following command to build and start the application:
```sh
docker-compose up --build -d
```
This will:
- Start the **PostgreSQL** database
- Build and start the **backend** (Express.js API)
- Build and serve the **frontend** (React application)

 
```

You should see:
- `todo_frontend` (React app)
- `todo_backend` (Node.js backend)
- `postgres_db` (PostgreSQL database)

---

## 📌 Accessing the Application
- **Frontend (React App):** [http://localhost:5173](http://localhost:5173)
- **Backend (API Server):** [http://localhost:8000](http://localhost:8000)
 
 







