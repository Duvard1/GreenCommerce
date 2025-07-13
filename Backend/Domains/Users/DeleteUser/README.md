# 🗑️ DeleteUser Microservice

This microservice is part of the **GreenCommerce** ecosystem, a distributed e-commerce platform for selling lightweight construction materials. The purpose of `DeleteUser` is to allow an authenticated user to delete their own account from the system using their JWT token.

---

## ⚙️ Functionality

This microservice exposes a DELETE /delete-user endpoint. When accessed by an **authenticated** user (via JWT token), it removes the corresponding user from the MySQL database based on their **email**, which is extracted from the token.
The token must include the user's email or sub claim. Access is protected using JWT (HS256), and the secret must be stored as an environment variable (JWT_SECRET).

---

### 🚀 Technologies Used

- 🐍 Python 3.11
- ⚡ FastAPI
- 🐬 MySQL (RDS AWS)
- 🐳 Docker
- 🔒 JWT

---

## 🛠️ Software Architecture

This microservice follows a RESTful architecture combined with the MVC (Model-View-Controller) pattern.

- `models/:` Contains logic for connecting and operating on the MySQL database
- `views/:` Defines the route exposed by the API
- `controllers/:` Coordinates the request handling and deletion logic
- `utils.py:` Contains token decoding and logging utilities

The architecture is designed using KISS and YAGNI principles: it is simple, concise, and avoids unnecessary complexity.

---

## 📂 Folder Structure

```
└── 📁DeleteUser
    └── 📁controllers
        ├── __init__.py
        ├── delete_user_controller.py
    └── 📁models
        ├── __init__.py
        ├── user_model.py
    └── 📁views
        ├── __init__.py
        ├── delete_user_route.py
    ├── .env
    ├── app.py
    ├── Dockerfile
    ├── main.py
    ├── requirements.txt
    └── utils.py
```

---

## 🧼​ Design pattern - YAGNI
“Don’t implement functionalities until you actually need them.”

- Does not implement advanced validations or session control that are unnecessary for its purpose: deleting a user.
- Does not include logic to search for users, update data, or handle multiple roles, because its only responsibility is to delete the authenticated user.
- Avoids unnecessary infrastructure such as external services, event queues, or separate repositories, as they are not justified for a simple operation.
- Does not include multiple layers (like DAO, Service Layer, etc.), because direct logic is sufficient and clearer.

---

## 🐳 Run locally the Microservice with Docker

### Prerequisites

- Docker
- `env` file with:

```env
DB_HOST = greencommerce-mysql...rds.amazonaws.com
DB_PORT = 3306
DB_NAME = greencommerce_users_db
DB_USER = admin
DB_PASSWORD = **********
JWT_SECRET = secretkey...
```

### Build the image:

```bash
docker build -t name_user_docker/delete-user-service:lastest .
```

### Push to Docker Hub:

```bash
docker push name_user_docker/delete-user-service:lastest
```

### Run the container:

```bash
docker run -p 8003:8003 --env-file .env name_user_docker/delete-user-service
```

### Test endpoint:

```
DELETE http://localhost:8003/delete-user
Headers:
Authorization: Bearer <JWT_TOKEN>
```

### Stop container:

```bash
docker stop delete-user-service
```

### Remove container:

```bash
docker rm delete-user-service
```

### Remove image:

```bash
docker rmi name_user_docker/delete-user-service:lastest
```

---

## 📦 Download and run image from another machine

```bash
docker pull duvard/delete-user-service:lastest
```

### Create .env and run:

```bash
DB_HOST = ...
DB_PORT = 3306
DB_NAME = greencommerce_users_db
DB_USER = ...
DB_PASSWORD = ...
JWT_SECRET = ...
```

### Run the container:

```bash
docker run -d --env-file .env -p 8003:8003 --name delete-user duvard/delete-user-service:lastest
```

---

## 🧪 Exposed Endpoint


DELETE /delete-user

Deletes the user associated with the JWT token.

Header:

```bash
Authorization: Bearer <jwt_token>
```

### Response example:

```json
{
  "message": "User deleted successfully"
}

```

### Error:

```json
{
  "detail": "Invalid token: user_id missing"
}
```

---

## 🔍 Swagger Test Guide

1. Run the container.

2. Go to:

```bash
http://localhost:8003/docs
```

3. Click 🔐 Authorize, paste your JWT.

4. Execute DELETE /delete-user.

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara