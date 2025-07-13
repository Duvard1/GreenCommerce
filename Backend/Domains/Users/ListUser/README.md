# 📄 ListUser Microservice

This microservice is part of the **GreenCommerce** ecosystem, a distributed e-commerce platform for selling lightweight construction materials. The purpose of `ListUser` is to expose an endpoint that allows an authenticated user to retrieve their personal information from a MySQL database.

---

## ⚙️ Functionality

Allows querying the authenticated user's information through a JWT token sent in the `Authorization` header. It returns a JSON object with the user's data.
This microservice uses JWT (HS256) to protect access. The secret should be stored as an environment variable (JWT_SECRET). The token must include the **email** or sub to identify the user.

---

### 🚀 Technologies Used

- 🐍 Python 3.11
- ⚡ FastAPI
- 🐬 MySQL (RDS AWS)
- 🐳 Docker
- 🔒 JWT

---

## 🛠️ Software Architecture

This ListUser project implements a REST-based architecture with an MVC (Model-View-Controller) structural pattern, adapted to FastAPI and Python. It uses REST because it exposes an HTTP endpoint (/user/info) that represents an identifiable resource (the authenticated user's data). This endpoint is accessed using the GET method with headers like Authorization, complying with REST principles: client-server, statelessness, and uniform resource utilization. It also organizes its code following the MVC separation of responsibilities principle:

- `api/`: acts as the controller that receives requests and coordinates responses (REST endpoints)
- `models/`: Represents data models
- `services/`: encapsulates the business logic (the view is implicit in the generated JSON response)
- `utils/`: Provides utilities such as JWT management
- `core/`: Centralizes environment settings (.env)

---

## 📂 Folder Structure

The proposed structure is based on a modular and decoupled architecture, aligned with the MVC pattern (model-surroller) and good development practices with Fastapi. This organization is considered a **semantic structure oriented to responsibilities**, where each folder fulfills a clear function:

```
└── 📁ListUser
    └── 📁app
        └── 📁api
            ├── routes.py
        └── 📁core
            ├── config.py
        └── 📁models
            ├── user_response.py
        └── 📁services
            ├── user_service.py
        └── 📁utils
            ├── jwt_utils.py
        ├── main.py
    ├── .dockerignore
    ├── .env
    ├── .gitignore
    ├── Dockerfile
    ├── README.md
    └── requirements.txt
```

---

## 💋​ Design pattern - KISS (Keep It Simple, Stupid)

The code clearly follows the KISS (Keep It Simple, Stupid) principle, as it maintains simple, clear logic without unnecessary complexity.

The endpoint has a single responsibility: retrieving information about the authenticated user. It doesn't mix in other functionalities, and the data flow is linear and easy to follow—it receives the token, decodes it, extracts the email, and delegates to the use case.

Each component performs a specific task, with no overengineering or unnecessary coupling. This makes the code readable, straightforward, and easy to maintain, fulfilling the core objectives of the KISS principle.

---

## ✅ Unit Test

This test verifies that the endpoint `/user/info` works correctly when everything is fine.
It simulates a request with a valid token and an existing user, without using a real database or a real token.
Instead, cheat the system (mock) two things:
1. The Token is interpreted as valid.
2. The user exists and returns their simulated profile.
Then, the test reviews that:
- The answer is successful (code 200),
- And that the mail returned is expected.

---

## 🐳 Run locally the Microservice with Docker

### Prerequisites

- Docker
- `.env` file with the following variables:

```env
DB_HOST = greencommerce-mysql...rds.amazonaws.com
DB_PORT = 3...
DB_NAME = greencommerce_users_db
DB_USER = your user of rds
DB_PASSWORD = **********
JWT_SECRET = secretkey...
```

### Build the image:

```bash
docker build -t name_user_docker/list-user-service:lastest .
```

### Upload the image to Docker Hub

```bash
docker push name_user_docker/list-user-service:lastest
```

### Run the container:

```bash
docker run -p 8081:8081 --env-file .env name_user_docker/list-user-service
```

### Visit the endpoint:

```bash
GET http://localhost:8081/user/info
Headers: Authorization: Bearer <JWT_TOKEN>
```

### Stop the container

```bash
docker stop list-user-service
```

### Delete the stopped container

```bash
docker rm list-user-service
```

### Delete the image

```bash
docker rmi user_name_docker/list-user-service:lastest
```

---

## 🐳 Download and run the image on another machine

### Download the image from Docker Hub

```bash
docker pull duvard/list-user-service:lastest
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
docker run -d --env-file .env -p 8081:8081 --name list-user duvard/list-user-service:lastest
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
---

## 🔍 Swagger Test Guide

1. Run the application.

2. Open your browser and go to:

```bash
http://localhost:8081/docs
```

3. Click the Authorize button and paste your JWT token

4. Click Authorize and then Close.

5. Click Try it out → Execute and you'll get the authenticated user's information.

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara
