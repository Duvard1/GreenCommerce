# 📄 ListUser Microservice — GreenCommerce

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

This microservice applies the KISS principle to keep the code clean, direct and without envelope. The creation of unnecessary classes, abstract interfaces or excessively generalized logic is avoided, its only function is to return the information of the authenticated user. The use of pure functions, simple modules and known structures allows any developer to understand and maintain the code easily.

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
docker build -t name_user_docker/list-user-service:latest .
```

### Upload the image to Docker Hub

```bash
docker push name_user_docker/list-user-service:latest
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

### Stop the container

```bash
docker stop list-user-test
```

### Delete the stopped container

```bash
docker rmi list-user-test
```

### Delete the image

```bash
docker rmi list-user-service
```

---

## 🐳 Download and run the image on another machine

### Download the image from Docker Hub

```bash
docker pull duvard/list-user-service:latest
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
docker run -d --env-file .env -p 8081:8081 --name list-user duvard/list-user-service:latest
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

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara