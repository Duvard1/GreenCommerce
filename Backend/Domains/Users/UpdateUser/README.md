# 📄 UpdateUser Microservice — GreenCommerce

This microservice is part of the **GreenCommerce** ecosystem, a distributed e-commerce platform for selling lightweight construction materials. The purpose of `UpdateUser` is to expose an endpoint that allows an authenticated user to update their personal information in a MySQL database hosted on AWS RDS.

---

## ⚙️ Functionality

Allows updating the authenticated user's information through a JWT token sent in the `Authorization` header. The user submits their new profile data in the body of the request. This microservice validates the token, verifies identity, and then updates the information in the database.

This microservice uses JWT (HS256) to protect access. The secret must be stored as an environment variable (`JWT_SECRET`). The token must include the **email** (or `sub`) to identify the user.

---

### 🚀 Technologies Used

- 🐍 Python 3.11
- ⚡ FastAPI
- 🐬 MySQL (AWS RDS)
- 🐳 Docker
- 🔒 JWT

---

## 🛠️ Software Architecture

This `UpdateUser` microservice implements a **REST-based architecture** and a modular design inspired by the **SOLID** principles and layered architecture:

- REST is used to expose an HTTP PUT endpoint (`/user/update`) to modify an authenticated user's profile.
- Code is organized into layers: API (controller), Application (use case), Domain (DTOs), Infrastructure (DB access), Config and Utils (JWT, logging).
- The architecture maintains **Single Responsibility**, **Open/Closed**, and **Dependency Inversion** principles.

---

## 📂 Folder Structure

```
└── 📁UpdateUser
    └── 📁app
        └── 📁api
            ├── routes.py
        └── 📁application
            ├── update_user_usecase.py
        └── 📁config
            ├── settings.py
        └── 📁domain
            ├── dto.py
        └── 📁repository
            ├── user_repository.py
        └── 📁utils
            ├── main.py
    └── 📁tests
    ├── .dockerignore
    ├── .gitignore
    ├── Dockerfile
    ├── main.py
```

---

## 📐 Design Pattern – SOLID

This microservice applies **SOLID principles**:

- **S**: Each class/function has a clear single responsibility.
- **O**: Easy to extend repository or services without modifying the main logic.
- **L**: Interfaces and DTOs enforce contract-driven design.
- **I**: No function requires unnecessary data.
- **D**: Application logic depends on abstraction (DTO) not on infrastructure (SQL).

This makes the code **scalable**, **maintainable**, and **secure**.

---

## ✅ Functional Test

The update endpoint should be tested with:

1. A valid JWT token in the Authorization header.
2. A payload with user data.
3. A user that exists in the database (identified by email in the token).

Expected behavior:

- ✅ Status 200 and message on success.
- ❌ Status 401 if token and payload email mismatch.
- ❌ Status 404 if user not found.
- ❌ Status 500 on internal DB error.

---

## 🐳 Run locally the Microservice with Docker

### Prerequisites

- Docker
- `.env` file with the following variables:

```env
DB_HOST = greencommerce-mysql...rds.amazonaws.com
DB_PORT = 3306
DB_NAME = greencommerce_users_db
DB_USER = your_user_of_rds
DB_PASSWORD = **********
JWT_SECRET = your_jwt_secret_key
```


### Build the image:

```bash
docker build -t your_user_docker/update-user-service:lastest .
```

### Push to Docker Hub:

```bash
docker push your_user_docker/update-user-service:lastest
```

### Run the container:

```bash
docker run -d --env-file .env -p 8082:8082 --name update-user user_name_docker/update-user-service:lastest
```

### Visit the endpoint:

```bash
PUT /user/update
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

### Stop the container

```bash
docker stop update-user-service
```

### Delete the stopped container

```bash
docker rm update-user-service
```

### Delete the image

```bash
docker rmi user_name_docker/update-user-service:lastest
```

---

## 🐳 Download and run the image on another machine

### Download the image from Docker Hub

```bash
docker pull duvard/update-user-service:lastest
```

### Create a .env file with your credentials:

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
docker run -d --env-file .env -p 8081:8081 --name update-user duvard/update-user-service:lastest
```

---

## 🌐 Exposed Endpoint

This endpoint updates the authenticated user's data.

```bash
PUT /user/update
Authorization: Bearer <jwt_token>
Content-Type: application/json

```

### Example Request

```json
{
  "name": "admin",
  "lastName": "admin",
  "dayBirth": 1,
  "monthBirth": 1,
  "yearBirth": 2001,
  "gender": "Hombre",
  "phoneNumber": "0999999999",
  "email": "admin@email.com",
  "password": "admin"
}
```

### Example Response:

```json
{
  "message": "User updated successfully"
}
```

## 📚 Swagger UI Guide

1. Run the app.

2. Open:

```bash
http://localhost:8082/docs
```

3. Click the "Authorize" button and enter a valid JWT token.

4. Click on /user/update, “Try it out”, edit the body, and execute.

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara


