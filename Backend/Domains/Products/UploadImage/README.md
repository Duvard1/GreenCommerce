# 📄 UploadImage Microservice

This microservice is part of the **GreenCommerce** ecosystem, a distributed e-commerce platform for selling lightweight construction materials. The purpose of `UploadImage` is to handle image uploads by storing them in an **Amazon S3 bucket** and returning the corresponding public URL. The URL is later used by other microservices such as `CreateProduct` to associate the image with a product.

---

## ⚙️ Functionality

The `UploadImage` microservice exposes a RESTful endpoint:

POST /product/upload

- Receives an image file via `multipart/form-data`.
- Uploads it to an Amazon S3 bucket.
- Returns the image URL in the response.
- Can optionally store the URL in a MySQL database (commented or disabled if not needed).
- This service **does not require a frontend** and is designed to be consumed by other services or UIs.

---

### 🚀 Technologies Used

- 🟨 Node.js + TypeScript
- ☁️ AWS S3 (AWS SDK v2)
- 🐳 Docker
- 🌐 REST (Express)
- 📦 dotenv
- 🧪 Multer (file parser)

---

## 🛠️ Software Architecture

This microservice implements a **layered architecture** and applies the **KISS principle**:

- Code is organized into layers:
  - **Routes** – Expose endpoints (`/product/upload`)
  - **Controller** – Validates the input and handles responses
  - **Service** – Uploads image to S3 and returns URL
  - **Config** – S3 and database configurations
- Follows the principle of single responsibility, simple interfaces, and separation of concerns.

---

## 📂 Folder Structure

```
└── 📁UploadImage
    └── 📁app
        └── 📁config
            ├── db.ts
            ├── s3.ts
        └── 📁controllers
            ├── uploadController.ts
        └── 📁routes
            ├── uploadRoute.ts
        └── 📁services
            ├── uploadService.ts
    ├── .dockerignore
    ├── .env
    ├── .gitignore
    ├── app.ts
    ├── Dockerfile
    ├── info.txt
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

---

## 💋​ Design pattern - KISS (Keep It Simple, Stupid)

The `UploadImage` microservice applies the KISS principle by keeping its logic clear, straightforward, and free from unnecessary complexity. Each component has a single, well-defined responsibility:
- The route handles the image upload via a `POST` request.
- The controller validates the input and delegates the task.
- The service uploads the image to S3 and returns the URL.
No unnecessary abstractions are introduced, nor are features anticipated before they are needed. This makes the code easy to read, maintain, and scale—only when truly necessary.

---

## 🧑‍🏫 Environment Variables

A `.env` file is used to configure the connection to AWS and S3:

```bash

PORT=3008

AWS_ACCESS_KEY_ID=Tu Access Key de sesión temporal
AWS_SECRET_ACCESS_KEY=Tu Secret Access Key
AWS_SESSION_TOKEN=Token temporal completo (copiar sin saltos de línea)
AWS_REGION=us-east-1
S3_BUCKET_NAME=greencommerce-product-images

DB_HOST = ...
DB_PORT = 3306
DB_NAME = greencommerce_users_db
DB_USER = ...
DB_PASSWORD = ...
JWT_SECRET = ...

```

---

## 🔁 Endpoint Specification

POST /product/upload

- Body type: multipart/form-data
- Field: image (file)

#### Example request:

```bash
curl -X POST http://localhost:3008/product/upload \
  -F "image=@/ruta/a/imagen.png"
```

#### Example response:

```json
{
  "message": "Image uploaded successfully",
  "url": "https://greencommerce-product-images.s3.amazonaws.com/products/uuid-nombre.png"
}

```

---

## 🐳 Docker Deployment

#### 🧾 Prerequisites

- Docker installed
- A valid .env file with S3 and RDS credentials

1. 🛠️ Build the Docker image

```bash
docker build -t duvard/upload-image-service:lastest .
```

2. 🚀 Run the container

```bash
docker run -p 3008:3008 --env-file .env duvard/upload-image-service:lastest
```

3. 🛑 Stop the container

```bash
docker stop upload-image-service
```

4. ❌ Delete the container

```bash
docker rm upload-image-service
```

5. 🧹 Remove the image

```bash
docker rmi duvard/upload-image-service:lastest
```

---

## 📘 Swagger API Documentation

This microservice includes interactive documentation powered by Swagger UI.

#### 🔍 How to Access Swagger Docs

Once the service is running (via Docker or locally), open your browser and navigate to:

```bash
http://localhost:3008/docs
```

If deployed on AWS EC2:
```bash
http://<EC2_PUBLIC_IP>:3008/docs
```

#### 🧪 How to Test

1. Click on the POST /product/upload endpoint.
2. Choose "Try it out".
3. Use the file selector to upload an image (e.g., .png, .jpg).
4. Click "Execute".
5. You’ll receive a JSON response with the public S3 URL of the uploaded image.

#### ✅ Expected Response

```json
{
  "url": "https://greencommerce-product-images.s3.amazonaws.com/products/uuid-filename.jpg"
}
```

---

## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara