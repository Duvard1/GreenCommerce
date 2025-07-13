# 🌐 API Gateway

This service acts as an **API Gateway** for the **GreenCommerce** e-commerce platform, built using **NGINX**. Its purpose is to centralize all public routes exposed by microservices, simplifying routing, security, and maintenance.

---

## 📌 Features

- ✅ Centralized access to all microservices (users, authentication, products, etc.)
- ✅ Fully configurable via `nginx.conf`
- ✅ Exposes a single public IP for the entire backend
- ✅ Ready for production deployment via Docker

---

## 🗂️ Project Structure

```
└── 📁Gateway
    ├── Dockerfile
    ├── nginx.conf
    └── README.md
```

---

## ⚙️ Configuration

The `nginx.conf` file defines the routing and reverse proxy rules to each microservice. Make sure to update the IP addresses and ports according to your environment.

**Example route configuration:**

```
location /auth/register {
    proxy_pass http://44.193.255.85:8081/auth/register;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

---

## 🐳 Docker Deployment

1. 🔨 Build the image

```bash
docker build -t duvard/greencommerce-gateway .
```

2. 🚀 Run the container

```bash
docker run -d -p 80:80 duvard/greencommerce-gateway
```

3. 🧪 Testing

You can test your microservices through the gateway using Postman or curl:

```bash
curl http://<PUBLIC_IP>/auth/login
```

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara
