# 🧠 Backend Services

This folder contains all backend microservices for **Green Commerce**, organized by domain using a microservices architecture.

---

## 🧱 Architecture

- 🔌 REST-based microservices
- 🧭 Organized by business domain (authentication, users, etc.)
- 🐬 MySQL (per service needs)
- 🐳 Docker 
- 🚀 CI/CD with GitHub Actions + Docker Hub + AWS EC2

---

## 📁 Project Structure

```
└── 📁Backend
    └── 📁Domains
        └── 📁Authentication
            └── 📁Login
            └── 📁Register
            ├── greencommerce_users_db.sql
        └── 📁Users
            └── 📁ListUser
```

---

## 🛠️ Technologies by Domain

|   **Domain**   | **Language** | **Framework** |   **DB**   |
|:--------------:|:------------:|:-------------:|:----------:|
| Authentication |     Java     |  Spring Boot  |    MySQL   |
|      Users     |    Python    |    FastAPI    |    MySQL   |
|    Products    |  Typescript  |    Node.js    | MySQL & S3 |
---

## 🧪 Testing

Each microservice contains:

- ✅ Unit tests (where applicable)
- 🧪 Functional tests using Supertest or equivalent
- 🔁 GitHub Actions runs tests on each PR

---

## 📦 Deployment
All microservices are deployed to AWS EC2 using:

- Docker + GitHub Actions
- .env secrets handled via SSH or GitHub Secrets
- Terraform for provisioning (in /infra)

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara