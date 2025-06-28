# 🧾 Register Microervice

This microservice is part of the **GreenCommerce** distributed system, focused on user management. It allows the registration of new users on the platform, connecting to a **MySQL** database (AWS RDS) using **Spring Boot**, and is managed through **Docker Compose**.

---

## 🚀 Technologies Used

- ☕️ Java 17  
- 🌱 Spring Boot 3.5.0  
- 🐬 MySQL (RDS AWS)
- 🐳 Docker & Docker Compose  
- 💾 Hibernate JPA  
- 🔐 Spring Security  
- 🛠️ JPA / Hibernate  

---

## Software Architecture

The structure follows a **layered architecture**, which is a classic and widely used approach in enterprise applications:

- **Presentation Layer:** Controllers, which manage user requests.
- **Business Logic Layer:** Services, which manage the application's internal logic.
- **Persistence Layer:** Repositories, which handle interaction with the database.
- **Security Layer:** which implements authentication and authorization measures.
- **Model Layer:** where domain entities are defined.

---

## Folder Structure

The folder structure follows layered architectural principles, facilitating the separation of responsibilities within the project. Spring Boot ensures that each layer fulfills a specific function. This approach not only organizes the project in a modular manner but also improves maintainability and scalability. The clear separation of responsibilities makes the code more understandable and easier to maintain in the long run, as each part of the system is isolated and well-defined, allowing developers to work more efficiently and with a clearer focus on specific tasks.

```
└── 📁register-service
    └── 📁.mvn
    └── 📁src
        └── 📁main
            └── 📁java
                └── 📁com
                    └── 📁greencommerce
                        └── 📁register_service
                            └── 📁controller
                                ├── RegisterController.java
                            └── 📁model
                                ├── User.java
                            └── 📁repository
                                ├── UserRepository.java
                            └── 📁security
                                ├── PasswordEncoderConfig.java
                                ├── SecurityConfig.java
                            └── 📁service
                                ├── RegisterService.java
                            ├── RegisterServiceApplication.java
            └── 📁resources
                └── 📁static
                └── 📁templates
                ├── application.properties
        └── 📁test
    └── 📁target
        ├── register-service-0.0.1-SNAPSHOT.jar
        ├── register-service-0.0.1-SNAPSHOT.jar.original
    ├── .gitattributes
    ├── .gitignore
    ├── Dockerfile
    ├── HELP.md
    ├── mvnw
    ├── mvnw.cmd
    ├── pom.xml
    └── README.md
```

---

## ⚙️ Database Configuration

This microservice connects to a **MySQL** database hosted on **AWS RDS**. The configuration is done using the following credentials:

- **User**: `Your RDS user`
- **Password**: `Your RDS password`
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

📍 The service will be available at: http://localhost:8081/auth/register

### 🧪 Request Example

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


### ✅ Example of successful response

```bash
User registered successfully!
```

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara