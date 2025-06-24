# 🧾 Register Microervice - GreenCommerce

This microservice is part of the **GreenCommerce** distributed system, focused on user management. It allows the registration of new users on the platform, connecting to a **MySQL** database using **Spring Boot**, and is managed through **Docker Compose**.

---

## 🚀 Technologies Used

- Java 17  
- Spring Boot 3.5.0  
- MySQL 8  
- Docker & Docker Compose  
- Hibernate JPA  
- Spring Security  
- JPA / Hibernate  

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
📍 http://localhost:8081/auth/register

### Request Example

{
  "name": "Juan",
  "lastName": "Pérez",
  "dayBirth": 12,
  "monthBirth": 5,
  "yearBirth": 1995,
  "gender": "Hombre",
  "phoneNumber": "0999999999",
  "email": "juan.perez@email.com",
  "password": "secreta123"
}

---

### 🧑‍💻 Author
Developed by: Duvard Cisneros

Project: GreenCommerce – Distributed Programming, UCE