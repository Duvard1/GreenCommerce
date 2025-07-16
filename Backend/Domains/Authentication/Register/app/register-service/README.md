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

## 🛠️ Software Architecture

The structure follows a **layered architecture**, which is a classic and widely used approach in enterprise applications:

- **Presentation Layer:** Controllers, which manage user requests.
- **Business Logic Layer:** Services, which manage the application's internal logic.
- **Persistence Layer:** Repositories, which handle interaction with the database.
- **Security Layer:** which implements authentication and authorization measures.
- **Model Layer:** where domain entities are defined.

---

## 📂 Folder Structure

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
```

---

## 🔥 Design pattern - DRY (Don't Repeat Yourself)

This `register-service` microservice applies the DRY (Don't Repeat Yourself) principle because it avoids redundancy in logic and configurations through good organizational practices:

- **Centralized logic:** All registration logic (existence check, encryption, and saving) is encapsulated in a single class (RegisterService), avoiding repetition in the controller or other components.

- **Use of annotations:** You use Lombok’s @Data and JPA and Swagger annotations (@Column, @Schema) to avoid repeating common code such as getters, setters, and documentation, keeping the model clean.

- **Reusable configurations:** You define the PasswordEncoder as a @Bean in PasswordEncoderConfig, allowing it to be reused across the application without duplicating its instance or logic.

---

## ✅ Unit Test

### Case 1: The user already exists

- Simulate that there is already a user registered with that email.
- Verify that the service throws an exception and does not save anything.

### Case 2: The user is new

- Simulate that there is no user with that email.
- Verify that the service:
    - Encrypts the password
    - Saves the user correctly.

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
docker build -t username_docker/register-service:lastest .
```
### 3. Run the container:

```bash
docker run --env-file .env -p 8081:8081 username_docker/register-service:lastest
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

## 🔍 How to Test the `/auth/register` Endpoint in Swagger

### 1. Run the application.

### 2. Open your browser and go to:

```bash
http://localhost:8081/swagger-ui.html
```

### 3. Locate the POST /auth/register endpoint.

### 4. Click on `Try it out`, then fill in the request body with a valid JSON, for example:

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
  "password": "admin",
  "shippingAddress": "123 Main St, Quito"
}
```

### 5. Click `Execute` to test the endpoint.

### 6. Check the Server response section for a 200 OK or error message.

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara
