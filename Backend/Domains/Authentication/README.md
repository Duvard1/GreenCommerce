# 🔐 Authentication Domain - GreenCommerce

The **Authentication domain** is a key component of the **GreenCommerce** distributed system, responsible for managing user authentication. This domain includes two microservices: **Register Service** and **Login Service**.

- **Register Service**: Allows new users to register on the platform.
- **Login Service**: Handles user login, validating credentials and issuing JWT tokens.

Both microservices are managed through **Docker Compose** and connected to a **MySQL** database hosted on **AWS RDS** for storing user data.

---

## 🚀 Technologies Used

- Java 17
- Spring Boot 3.5.0
- MySQL 8 (AWS RDS)
- Docker & Docker Compose
- Hibernate JPA
- Spring Security
- JWT (JSON Web Token)

---

## ⚙️ Microservices

### Register Service

Handles the registration of new users by accepting user details and saving them in the database.

- 📍Available at: `http://localhost:8081/auth/register`

### Login Service

Handles user login by verifying credentials and returning a JWT token for authenticated users.

- Available at: `http://localhost:8082/auth/login`

---

## 🐳 How to Set Up the Authentication Domain Locally

### Prerequisites

- **Docker** and **Docker Compose** installed on your system.

### 1. Clone the Repository

Make sure you have the `Register` and `Login` microservices stored in their respective directories.

### 2. Build and Start the Services

Run the following command to build and start both microservices:

```bash
docker-compose up --build
```

This will build the services as defined in the docker-compose.yml file and start the containers.

- The Register Service will be available at http://localhost:8081/auth/register.

- The Login Service will be available at http://localhost:8082/auth/login.


### 3. Clean Up the Environment

If you want to stop and remove the containers, use the following command:

```bash
docker-compose down -v
```

### 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE