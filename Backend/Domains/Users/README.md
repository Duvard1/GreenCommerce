# 👥 Users Domain

The Users domain is part of the **GreenCommerce** distributed e-commerce platform. It is responsible for managing user profiles, allowing authenticated users to retrieve, update, and delete their own information. This domain follows REST architecture and JWT-based authentication.

---

## ⚙️ Technologies

- 🐍 Python 3.11
- ⚡ FastAPI
- 🐬 MySQL (AWS RDS)
- 🐳 Docker & Docker Compose
- 🔒 JWT

---

📁 Project Structure

```
└── 📁Users
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
        ├── utils.py
    └── 📁ListUser
        └── 📁app
            └── 📁api
                ├── routes.py
            └── 📁application
                ├── user_usecase.py
            └── 📁config
                ├── settings.py
            └── 📁models
                ├── user_model.py
            └── 📁repository
                ├── user_repository.py
            └── 📁utils
                ├── jwt_utils.py
                ├── logger.py
            ├── main.py
        └── 📁tests
            ├── test_endpoint.py
        ├── .env
        ├── Dockerfile
        ├── requirements.txt
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
                ├── jwt_utils.py
                ├── logger.py
            ├── main.py
        └── 📁tests
            ├── test_update_user.py
        ├── .env
        ├── Dockerfile
        ├── pytest.ini
        ├── requirements.txt
```

---

## 📦 Microservices

| **Microservice** |                            **Description**                            | **Programming Language** |   **Sofware Architecture**  | **Design Pattern** |
|:----------------:|:---------------------------------------------------------------------:|:------------------------:|:---------------------------:|:------------------:|
|     ListUser     | Allows authenticated users to fetch their own user profile from MySQL |     Python (FastAPI)     | Layered Architecture + REST |       💋 KISS       |
|    DeleteUser    | Authenticated users can delete their own account securely via JWT     |     Python (FastAPI)     |          REST + MVC         |       🧼 YAGNI      |
|    UpdateUser    | Updates the authenticated user's information in MySQL.                |     Python (FastAPI)     | Layered Architecture + REST |       📐 SOLID      |

---

## 📘 Swagger Documentation

Each service provides Swagger UI for testing endpoints:
- **ListUser:** `http://localhost:8081/docs`
- **DeleteUser:** `http://localhost:8003/docs`
- **UpdateUser:** `http://localhost:8082/docs`

Steps:

1. Open URL in browser.
2. Click Authorize and enter your JWT.
3. Use Try it out to interact with the endpoint.

---

## 🐳 Run with Docker

1. Clean up old containers and images (optional)

```bash
docker ps -a
docker rm <container_id>
docker images
docker rmi <image_id>
```

### 🧠 ListUser Microservice

```bash
docker build -t your_user/list-user-service:lastest 
docker run --env-file .env -p 8081:8081 your_user/list-user-service:lastest
```

#### Endpoint:

```bash
GET http://localhost:8081/user/info
Headers: Authorization: Bearer <JWT_TOKEN>
```

### 🗑️ DeleteUser Microservice

```bash
docker build -t your_user/delete-user-service:lastest
docker run --env-file .env -p 8003:8003 your_user/delete-user-service:lastest
```

#### Endpoint:

```bash
DELETE http://localhost:8003/delete-user
Headers: Authorization: Bearer <JWT_TOKEN>
```

### 🖼️ UpdateUser Microservice

```bash
docker build -t your_user_docker/update-user-service:lastest .
docker run -d --env-file .env -p 8082:8082 --name update-user user_name_docker/update-user-service:lastest
```

#### Endpoint:

```bash
PUT /user/update
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara