# 🧠 Backend

This folder contains the complete backend stack for the **GreenCommerce** distributed e-commerce platform. It follows a **domain-driven microservices architecture**, with each service deployed independently and communicating through a centralized **NGINX-based API Gateway**.

---

## ⚙️ Overview

The backend is divided into two key components:

1. **📁 Domains** – Business logic grouped by bounded contexts (e.g., Authentication, Users, Products).
2. **📁 Gateway** – Central API Gateway that proxies all external requests to the appropriate microservices.

All services are containerized with Docker and deployed to AWS EC2 instances using CI/CD workflows via GitHub Actions.

---

## 🧱 Architecture Highlights

- 🔌 RESTful microservices by domain
- 🧭 NGINX-based API Gateway for routing and decoupling
- 🐬 MySQL and S3 integration per service needs
- 🐳 Dockerized services with build and deploy workflows
- 🚀 GitHub Actions for CI/CD (build → push → deploy via SSH)
- 🔐 Secrets injected via `.env` or GitHub Secrets
- 📦 Terraform for provisioning (see `/Infra`)

---

## 📂 Folder Structure
```
└── 📁Backend
    └── 📁Domains
        └── 📁Authentication
            └── 📁Login
            └── 📁Register
            ├── greencommerce_users_db.sql
        └── 📁Products
            └── 📁CreateProduct
            └── 📁UploadImage
        └── 📁Users
            └── 📁DeleteUser
            └── 📁ListUser
            └── 📁UpdateUser
    └── 📁Gateway
        ├── Dockerfile
        └── nginx.conf
```

---

## 🧪 Testing Strategy

Each microservice typically includes:

- ✅ Unit tests (when applicable)
- 🧪 Functional tests (e.g., using Supertest or Pytest)
- 🔁 CI workflows that run tests on each pull request

---

## 📦 Deployment Strategy

- CI/CD: GitHub Actions trigger builds, pushes, and deploys on branch updates
- Docker images are hosted on Docker Hub under `duvard/*`
- Deployed via SSH to AWS EC2 instances
- Environment variables managed via `.env` or Secrets

---

## 📌 API Gateway (NGINX)

The API Gateway centralizes all public-facing endpoints. Example:

```
location /auth/login {
    proxy_pass http://44.193.255.85:8082/auth/login;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

All routes are defined in Gateway/nginx.conf.

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara