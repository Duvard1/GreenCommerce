# 📄 ListUser Microservice — GreenCommerce

This microservice is part of the **GreenCommerce** ecosystem, a distributed e-commerce platform for selling lightweight construction materials. The purpose of `ListUser` is to expose an endpoint that allows an authenticated user to retrieve their personal information from a MySQL database.

## 📌 Functionality

Allows querying the authenticated user's information through a JWT token sent in the `Authorization` header. It returns a JSON object with the user's data.

## 🚀 How to Run the Microservice

### ✅ Prerequisites

- Docker
- `.env` file with the following variables:

```env
DB_HOST=greencommerce-mysql...rds.amazonaws.com
DB_PORT=3...
DB_NAME=greencommerce_users_db
DB_USER= your user of rds
DB_PASSWORD= **********
JWT_SECRET=secretkey...
```

🐳 Run with Docker
Build the image:

```bash
docker build -t list-user-service .
```

### Run the container:
```bash
docker run -p 8081:8081 --env-file .env list-user-service
```

### Visit the endpoint:
```bash
GET http://localhost:8081/user/info
Headers: Authorization: Bearer <JWT_TOKEN>
```

---

## 🧪 Exposed Endpoint
This endpoint returns the authenticated user's personal information.

```bash
Authorization: Bearer <jwt_token>

```

### Example Response
```json
{
  "name": "Juan",
  "lastName": "Pérez",
  "dayBirth": 15,
  "monthBirth": 5,
  "yearBirth": 1990,
  "gender": "Hombre",
  "phoneNumber": "0999999999",
  "email": "juan.perez@example.com",
  "profileImage": "https://bucket.s3.amazonaws.com/profile.jpg"
}

```
---

### 🔐 Security
This microservice uses JWT (HS256) to protect access. The secret should be stored as an environment variable (JWT_SECRET). The token must include the email or sub to identify the user.

### 🧰 Technologies Used

🐍 Python 3.11

⚡ FastAPI

🐬 MySQL

🐳 Docker

🔒 JWT

### 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE