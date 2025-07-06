# 🌱 GreenCommerce

GreenCommerce is a distributed e-commerce platform designed to promote and sell sustainable products made from recycled materials. The platform is built with scalability, resilience, and eco-conscious performance in mind, leveraging modern technologies like JWT-based authentication, a product catalog, and a shopping cart. The system is cloud-native, with containerized microservices deployed using Docker and an API Gateway to ensure seamless integration and scalability.

---

## 🚀 Technologies and Tools

- 🧱 Backend: Microservices architecture with Spring Boot (Java) for Authentication and Flask (Python) for Users management
- 🖥️ Frontend: In node js with next.js as a framework.
- 🔐 Authentication: JWT-based authentication for secure user login and registration
- 🗄️ Databases:
    - 📊 AWS RDS (MySQL): Used for storing user data and product information
    - 🖼️ Amazon S3: Used for image uploads (user profile images, product images, etc.)
- 🐳 Docker: Containerization and orchestration for microservices
- ☁️ AWS: Cloud deployment with integration to various AWS services (RDS, S3)
- ⚙️ CI/CD: GitHub Actions for continuous integration and deployment
- 🛡️ Security: JWT (JSON Web Token) for secure authentication
- 🧪 Testing: Unit and integration tests to ensure the reliability and stability of services

---

## Folder Structure

```
└── 📁GreenCommerce
    └── 📁.github
        └── 📁workflows
            ├── authentication-login-deploy.yml
            ├── authentication-register-deploy.yml
            ├── users-listuser-deploy.yml
    └── 📁Backend
        └── 📁Domains
            └── 📁Authentication
                └── 📁Login
                └── 📁Register
                ├── greencommerce_users_db.sql
            └── 📁Users
                └── 📁ListUser
    └── 📁Frontend
        └── 📁green-commerce
    └── 📁Infraestructure    
```

---
| Microservice |                                        Description                                        |  Programming Language | Software Architecture | Design Pattern |
|:------------:|:-----------------------------------------------------------------------------------------:|:---------------------:|:---------------------:|----------------|
|     Login    |      Enables user authentication by verifying credentials and generating JWT tokens.      | Java 17 (Spring Boot) |  Layered Architecture | 💋 KISS         |
|   Register   | Handles user registration in the MySQL database with validations and password encryption. | Java 17 (Spring Boot) |  Layered Architecture | 🔥 DRY          |
|   ListUser   |                  Returns the authenticated user's data using a JWT token.                 | Python 3.11 (FastAPI) |          REST         | 💋 KISS         |

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara