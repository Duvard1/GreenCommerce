# 🔐 GreenCommerce – Authentication Domain

This domain handles all authentication operations in the **GreenCommerce** distributed e-commerce platform. It consists of two Spring Boot microservices for user registration and login, using **JWT** for secure authentication and **MySQL (AWS RDS)** for persistent storage.

---

## ⚙️ Technologies

- ☕ Java 17
- 🌱 Spring Boot 3.5.0
- 🐬 MySQL (RDS on AWS)
- 🐳 Docker & Docker Compose
- 🔐 Spring Security + JWT
- 🛠 Hibernate JPA

---

## 📁 Project Structure

```
└── 📁Authentication
    └── 📁Login
    └── 📁Register
    ├── greencommerce_users_db.sql
```

---

## 📦 Microservices
| Microservice |                                        Description                                        |  Programming Language | Software Architecture | Design Pattern |
|:------------:|:-----------------------------------------------------------------------------------------:|:---------------------:|:---------------------:|----------------|
|     Login    |      Enables user authentication by verifying credentials and generating JWT tokens.      | Java 17 (Spring Boot) |  Layered Architecture | 💋 KISS         |
|   Register   | Handles user registration in the MySQL database with validations and password encryption. | Java 17 (Spring Boot) |  Layered Architecture | 🔥 DRY          |


---

## 🧪 Swagger Documentation

- **Login Swagger**: `http://localhost:8082/swagger-ui.html`
- **Register Swagger**: `http://localhost:8081/swagger-ui.html`

You can test endpoints using the "Try it out" feature.

---

## 🐳 Run with Docker

### 1. Clean existing containers/images (if needed):

```bash
docker ps -a
docker rm <container_id>
docker images
docker rmi <image_id>
```

### 2. Build and Run Register Service:

```bash
docker build -t your_user/register-service:latest .
docker run --env-file .env -p 8081:8081 your_user/register-service:latest
```

### 3. Build and Run Login Service:
```bash
docker build -t your_user/login-service:latest .
docker run --env-file .env -p 8082:8082 your_user/login-service:latest
```

---

## 🧪 Sample Requests

### Register

- POST `http://localhost:8081/auth/register`

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

### Login

- POST http://localhost:8082/auth/login

```json
{
  "email": "admin@email.com",
  "password": "admin"
}
```

### Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---