# 🔐 Login Microservice - GreenCommerce

This microservice is part of the **GreenCommerce** distributed system, focused on user authentication. It allows users to log in to the platform using **Spring Boot**, verifying credentials against a **MySQL** database (AWS RDS), and is managed through **Docker Compose**.


---

## 🚀 Technologies Used

- Java 17  
- Spring Boot 3.5.0  
- MySQL (RDS AWS)
- Docker & Docker Compose  
- Hibernate JPA  
- Spring Security  
- JWT (JSON Web Token)  

---

## ⚙️ Database Configuration

This microservice connects to a **MySQL** database hosted on **AWS RDS**. The configuration is done using the following credentials:

- **User**: `your rds user`
- **Password**: `your rds password`
- **Database**: `greencommerce_users_db`
- **Host**: `(provided by AWS RDS)`

Access from this microservice is made using the RDS host URL and the credentials specified in the `application.properties` file.

---

## 🐳 How to Set Up Locally with Docker Compose

### 1. Clean up previous containers and volumes

```bash
docker-compose down -v
```

### 2. Build and start the services

```bash
docker-compose up --build
```

The service will be available at:
📍 http://localhost:8082/auth/login


### 🧪 Request Example

```bash
{
  "email": "juan.perez@email.com",
  "password": "secreta123"
}
```

### ✅ Ejemplo de respuesta exitosa

```bash
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

### 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE