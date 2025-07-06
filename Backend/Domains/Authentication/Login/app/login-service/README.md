# 🔐 Login Microservice

This microservice is part of the **GreenCommerce** distributed system, focused on user authentication. It allows users to log in to the platform using **Spring Boot**, verifying credentials against a **MySQL** database (AWS RDS), and is managed through **Docker Compose**.

---

## 🚀 Technologies Used

- ☕️ Java 17  
- 🌱 Spring Boot 3.5.0  
- 🐬 MySQL (RDS AWS)
- 🐳 Docker & Docker Compose  
- 💾 Hibernate JPA  
- 🔐 Spring Security  
- ⚙️ JWT (JSON Web Token)  

---

## 🛠️ Software Architecture

The structure follows a **layered architecture**, which is a classic and widely used approach in enterprise applications:

- **Presentation Layer:** Controllers, which manage user requests.
- **Business Logic Layer:** Services, which manage the application's internal logic.
- **Persistence Layer:** Repositories, which handle interaction with the database.
- **Security Layer:** Which implements authentication and authorization measures.
- **Model Layer:** Where domain entities are defined.
- **Data Transfer Protocol:** To pass data between layers.
- **Util:** Handles the creation and validation of JSON Web Tokens (JWT)

---

## 📂 Folder Structure

The folder structure follows layered architectural principles, facilitating the separation of responsibilities within the project. Spring Boot ensures that each layer fulfills a specific function. This approach not only organizes the project in a modular manner but also improves maintainability and scalability. The clear separation of responsibilities makes the code more understandable and easier to maintain in the long run, as each part of the system is isolated and well-defined, allowing developers to work more efficiently and with a clearer focus on specific tasks.

```
└── 📁login-service
    └── 📁.mvn
    └── 📁src
        └── 📁main
            └── 📁java
                └── 📁com
                    └── 📁greencommerce
                        └── 📁login_service
                            └── 📁controller
                                ├── LoginController.java
                            └── 📁dto
                                ├── LoginRequest.java
                            └── 📁model
                                ├── User.java
                            └── 📁repository
                                ├── UserRepository.java
                            └── 📁security
                                ├── SecurityConfig.java
                            └── 📁service
                                ├── LoginService.java
                            └── 📁util
                                ├── JwtUtil.java
                            ├── LoginServiceApplication.java
            └── 📁resources
                └── 📁static
                └── 📁templates
                ├── application.properties
        └── 📁test
    └── 📁target
        ├── login-service-0.0.1-SNAPSHOT.jar
        ├── login-service-0.0.1-SNAPSHOT.jar.original
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

## 💋​ Design pattern - KISS (Keep It Simple, Stupid)

The code clearly follows the KISS (Keep It Simple, Stupid) principle, as it maintains simple, clear logic without unnecessary complexity.

The login endpoint has a single responsibility: authenticating a user and issuing a token. It doesn't mix in validation logic, database queries, or token generation directly—these are delegated to specialized components like LoginService, UserRepository, and JwtUtil.

Each class performs a well-defined task in a linear, easy-to-follow flow: receive credentials → validate them → return a token. There is no overengineering, inheritance hierarchy, or complex configuration, making the code readable, maintainable, and straightforward to extend.

---

## ✅ Unit Test

1. User valid with correct password and returns token
- Simulates a correct user.
- Compare the password.
- Returns a Token Jwt.

2. User does not exist → Returns Null
- It simulates that the user is not in the database.
- It does not try to authenticate it.
- Answer: Null.

3. Incorrect password → returns null
- It simulates that the user exists.
- But your password is incorrect.
- Answer: Null.

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

### 1. Clean up previous containers and images

```bash
docker ps -a
docker rm id_docker
docker images
docker rmi id_image
```

### 2. Build the image  

```bash
docker build -t duvard/login-service:lastest .
```
### 3. Run the container:

```bash
docker run --env-file .env -p 8082:8082 duvard/login-service:lastest
```

📍 The service will be available at: http://localhost:8082/auth/login


### 🧪 Request Example

```json
{
  "email": "admin@email.com",
  "password": "admin"
}
```

### ✅ Example of successful response

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

## 🔍 How to Test the `/auth/login` Endpoint in Swagger

### 1. Run the application using:

```bash
mvn spring-boot:run
```

### 2. Open your browser and go to:

```bash
http://localhost:8082/swagger-ui.html
```

### 3. Locate the POST /auth/login endpoint.

### 4. Click on `Try it out`, then enter the login credentials in JSON format:

```json
{
  "email": "admin@email.com",
  "password": "admin"
}
```

### 5. Click `Execute` to test the endpoint.

### 6. If successful, a JWT token will be returned in the response body.

```json
{
  "token": "eyJhbGciOiJIUzI1N9..."
}
```
---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara.